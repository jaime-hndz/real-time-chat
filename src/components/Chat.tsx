import { FC } from "react"
import { MessageType } from "../interfaces/MessageType"
import { MessageContainer } from "./MessageContainer"
import { SendMessageForm } from "./SendMessageForm"

interface Props {
    Messages: MessageType[]
    SendMessage: (message : string) => void;
    CloseConnection: () => void;
}

export const Chat:FC<Props> = ({Messages, SendMessage,CloseConnection}) => {
    return (
        <>
          <div className="leave-room">

          </div>
          <div className="chat">
            <MessageContainer Messages={Messages} />
            <SendMessageForm  SendMessage={SendMessage} />
          </div>  
        </>
    )
}
