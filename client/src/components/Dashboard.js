import React,{useEffect,useState} from 'react';
import {Button, Container,Form} from 'react-bootstrap'
import { Link } from "react-router-dom";
import axios from 'axios';

function Dashboard() {

    const [chats,setChats] = useState([])

    const fetchChats = async () => {
      const {data} = await axios.get("/api/chat")
      setChats(data);
    }

    useEffect(() => {
      fetchChats()
    }, []);
    

  return ( 
   <Container className="align-items-center d-flex" style={{height:'100vh',display:'flex',flexDirection:'row',justifyContent:'center'}}>   
    <div>{chats.map(chat=><div key={chat._id}>{chat.chatName}</div>)}</div>
    
    </Container>
)}


export default Dashboard;
