import { FC } from "react"
import { MessageType } from "../interfaces/MessageType"
import { MessageContainer } from "./MessageContainer"

interface Props {
    Messages: MessageType[]
}

export const Chat:FC<Props> = ({Messages}) => {
    return (
        <>
          <div className="chat">
            <MessageContainer Messages={Messages} />
          </div>  
        </>
    )
}
