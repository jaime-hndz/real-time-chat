import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Lobby } from './components/Lobby';
import {HubConnection, HubConnectionBuilder, LogLevel} from '@microsoft/signalr';
import { useState } from 'react';
import { Chat } from './components/Chat';
import {MessageType} from '../src/interfaces/MessageType'


function App() {

  const [connection, setConnection] = useState<HubConnection>();
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [users, setUsers] = useState([]);

  const joinRoom = async(user:string, room:string)=>{
  
    try{
      const connection = new HubConnectionBuilder()
      .withUrl("https://localhost:44322/chat")
      .configureLogging(LogLevel.Information)
      .build();

      connection.on("UsersInRoom", (users) => {
        setUsers(users);
      });

      connection.on("RecieveMessage", (user, message) =>{
        setMessages(messages => [...messages, {user, message}])
      })

      connection.onclose(e =>{
        setConnection(undefined);
        setMessages([]);
        setUsers([]);
      })

      await connection.start();
      await connection.invoke("JoinRoom", {user, room});
      setConnection(connection)

    } catch(e){
      console.log(e)
    }
  }

  const closeConnection = async () =>{
    try {
      await connection?.stop();
    } catch (error) {
      console.log(error);
    }
  }

  const sendMessage =async (message:string) => {
    try {
      await connection?.invoke("SendMessage", message);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="app">
      <h2>Jaime Chat</h2>
      <hr />
      {!connection
       ? <Lobby joinRoom={joinRoom} />
       : <Chat Messages={messages} SendMessage={sendMessage} CloseConnection={closeConnection} Users={users} />}
    </div>
  );
}

export default App;
