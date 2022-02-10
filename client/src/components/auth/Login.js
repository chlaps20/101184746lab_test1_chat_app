import axios from 'axios';
import React,{useState} from 'react';
import {Button, Container,Form} from 'react-bootstrap'
import {Link,useHistory} from 'react-router-dom'

function Login() {

    const [userName,setUserName] = useState("")
    const [password,setPassword] = useState("")
    const history = useHistory();
  

    const submitHandler = async() => {

      try{
        const config = {
          headers : {
            "Content-type":'application/json',
          }
        }

        const data = await axios.post("/api/user/login",{userName,password},config)
        localStorage.setItem("userInfo",JSON.stringify(data));
        history.push('/dashboard')

      }catch(error) {
        alert("Error Logging in user")
      }
  }

  return ( 
    
    <Container className="align-items-center d-flex" style={{height:'100vh',display:'flex',justifyContent:'center'}}>      
       <Form >
            <h1 style={{textAlign:'center'}}>Login to Chat App</h1>
           <Form.Group >
               <Form.Label>Username</Form.Label>
               <Form.Control type="text" value={userName} onChange={(e)=> setUserName(e.target.value)} required style={{width:"25vw"}}/>
              
               <Form.Label>Password</Form.Label>
               <Form.Control type={"password"} value={password} onChange={(e)=> setPassword(e.target.value)}  required style={{width:"25vw"}}/>
               
           <div style={{display: 'flex',flexDirection: 'column',alignItems: 'center',marginTop:10}}>
            <Button variant="success" style={{width:"23vw"}} onClick={submitHandler}>
                Login
             </Button>
            <Link className="nav-link" to={"/sign-up"}>
            <Button  style={{width:"23vw"}}>
                Register 
             </Button>
            </Link>

            </div>
           </Form.Group>
       </Form>
    </Container>
)}

export default Login;
