import { FC, useState } from "react";
import { Button, Form, FormControl, InputGroup } from "react-bootstrap";

interface Props{
    SendMessage: (message:string) => void
}

export const SendMessageForm:FC<Props> = ({SendMessage}) => {
  const [message, setMessage] = useState('');

  return <Form
        onSubmit={(e) =>{
            e.preventDefault();
            SendMessage(message);
            setMessage("");

        }}>
      <InputGroup>
        <FormControl placeholder="message..." onChange={(e) =>{setMessage(e.target.value)}} value={message} />
        <Button variant='primary' type='submit' disabled={!message}>Enviar</Button>
      </InputGroup>
  </Form>;
};
