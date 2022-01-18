import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Lobby } from './components/Lobby';
import {HubConnection, HubConnectionBuilder, LogLevel} from '@microsoft/signalr';
import { useState } from 'react';


function App() {

  const [connection, setConnection] = useState<HubConnection>();
  const [messages, setMessages] = useState([{}])

  const joinRoom = async(user:string, room:string)=>{
  
    try{
      const connection = new HubConnectionBuilder()
      .withUrl("https://localhost:44322/chat")
      .configureLogging(LogLevel.Information)
      .build();

      connection.on("RecieveMessage", (user, message) =>{
        setMessages(messages => [...messages, {user, message}])
      })

      await connection.start();
      await connection.invoke("JoinRoom", {user, room});
      setConnection(connection)

    } catch(e){
      console.log(e)
    }
  }

  return (
    <div className="app">
      <h2>MyChat</h2>
      <hr />
      <Lobby joinRoom={joinRoom} />
    </div>
  );
}

export default App;
