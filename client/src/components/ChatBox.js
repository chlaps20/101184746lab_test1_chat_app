import React,{useEffect,useState} from 'react'
import { ChatState } from '../Context/ChatProvider'
import '../styles/ChatBox.css'
import {Button, Container,Form} from 'react-bootstrap'
const ENDPOINT = "http://localhost:5000"
var socket;



const submitHandler = () =>{
    
}


const ChatBox = () => {
    const [message,setMessage] = useState('')
    
  return (
    <div className="chat-box">
        <div className="field">
         <Form.Control type="text"  onChange={text=>setMessage(text)} required />
         <Button variant="success" onClick={submitHandler}>
                Send Message
         </Button>
        </div>
    </div>
  )
}

export default ChatBox