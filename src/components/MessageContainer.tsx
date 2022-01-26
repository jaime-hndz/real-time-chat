import { FC, useEffect, useRef } from "react"
import { MessageType } from "../interfaces/MessageType"



interface Props {
    Messages : MessageType[]
}

export const MessageContainer:FC<Props> = ({Messages}) => {

    const messageRef = useRef<any>();
    
    useEffect(() => {
        if (messageRef && messageRef.current) {
            const { scrollHeight, clientHeight} = messageRef.current;
            messageRef.current.scrollTo({
                left: 0, top: scrollHeight - clientHeight,
                behavior: 'smooth'
            })
        }

    }, [Messages])

    return (
        <div ref={messageRef} className="message-container">
            {Messages.map((m,index)=>{
                return(
                    <div key={index} className="user-message">
                        <div className="message bg-info">{m.message}</div>
                        <div className="from-user">{m.user}</div>
                    </div>
                )
            })}
        </div>
    )
}
