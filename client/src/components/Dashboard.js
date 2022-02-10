import React,{useEffect,useState} from 'react';
import {Button, Container,Form} from 'react-bootstrap'
import { Link } from "react-router-dom";
import axios from 'axios';
import '../styles/Dashboard.css'
import { ChatState } from '../Context/ChatProvider';
import ChatBox from './ChatBox';

function Dashboard() {

  const [loggedUser,setLoggedUser] = useState()

  const {user,selectedChat,setSelectedChat,chats,setChats} = ChatState()
    const accessChat = async (userId) => {
      try {
        
        const config = {
          headers : {
            "Content-type":"application/json",
            Authorization: `Bearer ${user.token}`,
          },
        }

        const {data} = await axios.post('/api/chat',{userId},config);

        if (!chats.find((c)=>c._id === data.id)) setChats([data,...chats])

        setSelectedChat(data)

      } catch (error) {
        
      }
    }

    const fetchChats = async () => {
      // console.log(user._id);
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        };
  
        const { data } = await axios.get("/api/chat", config);
        setChats(data);
      } catch (error) {
       
      }
    };
  
    useEffect(() => {
      setLoggedUser(JSON.parse(localStorage.getItem("userInfo")));
      fetchChats();
      // eslint-disable-next-line
    }, []);

  return ( 
   <Container className=" d-flex " style={{display:'flex',justifyContent:'center',flexWrap:'wrap'}}>   
    
    <div className="dash">
      <h1 style={{textAlign: 'center'}}>Romans Chat App</h1>
      <div style={{display:'flex'}}>

      <div className='chats'>
        <h2 style={{textDecoration:'underline',textAlign:'center'}}>All Chats</h2>
        
      </div>
      <ChatBox />
        </div>
        
        <div className="footer">
        <Link className="nav-link" to={"/sign-in"}>
            <Button style={{width:"23vw"}}>
                Log Out 
             </Button>
            </Link>
    </div>
    </div>
    
    </Container>
)}


export default Dashboard;
