import { FC, useState } from "react";
import { Button, Form, FormControl} from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";

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
          <div style={{display: 'flex', width: '100%'}}>
            <FormControl placeholder="Escriba su mensaje..." onChange={(e) =>{setMessage(e.target.value)}} value={message} style={{width: '100%'}} />
            <Button variant='info' type='submit' disabled={!message} style={{width: '100px'}}>Enviar</Button>
          </div>
      </InputGroup>
  </Form>;
};
