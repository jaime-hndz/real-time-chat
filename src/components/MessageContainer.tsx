import { FC } from "react"
import { MessageType } from "../interfaces/MessageType"



interface Props {
    Messages : MessageType[]
}

export const MessageContainer:FC<Props> = ({Messages}) => {
    return (
        <div className="massage-container">
            {Messages.map((m,index)=>{
                return(
                    <div key={index} className="user-message">
                        <div className="message bg-primary">{m.message}</div>
                        <div className="from-user">{m.user}</div>
                    </div>
                )
            })}
        </div>
    )
}
