import { FC } from "react"
import { Button } from "react-bootstrap"
import { MessageType } from "../interfaces/MessageType"
import { ConnectedUsers } from "./ConnectedUsers"
import { MessageContainer } from "./MessageContainer"
import { SendMessageForm } from "./SendMessageForm"

interface Props {
    Messages: MessageType[]
    SendMessage: (message : string) => void;
    CloseConnection: () => void;
    Users: string[]
}

export const Chat:FC<Props> = ({Messages, SendMessage,CloseConnection, Users}) => {
    return (
        <>
          <div className="leave-room">
            <Button variant="danger" onClick={() => CloseConnection()}>Salir de la sala</Button>
          </div>
          <ConnectedUsers Users={Users} />
          <div className="chat">
            <MessageContainer Messages={Messages} />
            <SendMessageForm  SendMessage={SendMessage} />
          </div>  
        </>
    )
}
