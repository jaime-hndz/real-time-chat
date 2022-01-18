import { FC, useState } from "react";
import { Button, Form } from "react-bootstrap"

interface Props{
    joinRoom (user: string, room: string):  void;
}

export const Lobby:FC<Props> = ({joinRoom}) => {
    const [user, setUser] = useState("");
    const [room, setRoom] = useState("");

    return (
        <Form className="lobby"
        onSubmit={(e:any)=> {
            e.preventDefault();
            joinRoom(user,room);
        }}>
            <Form.Group> 
                <Form.Control placeholder="name" onChange={(e:any) => setUser(e.target.value)} />
                <Form.Control placeholder="name" onChange={(e:any) => setRoom(e.target.value)} />
            </Form.Group>
            <Button variant="success" type="submit" disabled={!user || !room}>Join</Button>
        </Form>
    )
}
