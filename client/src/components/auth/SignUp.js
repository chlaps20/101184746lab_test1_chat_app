import axios from 'axios';
import React,{useState} from 'react';
import {Button, Container,Form} from 'react-bootstrap'
import {Link,useHistory} from 'react-router-dom'

function SignUp() {

    const [userName,setUsername] = useState("")
    const [firstName,setFirstName] = useState("")
    const [lastName,setLastName] = useState("")
    const [password,setPassword] = useState("")
    const [confirmPassword,setConfirmPassword] = useState("")
    const history = useHistory();

    const submitHandler = async() => {
        if (password !== confirmPassword){
          alert("Passwords do not match");
        }

        try{
          const config = {
            headers : {
              "Content-type":'application/json',
            }
          }

          const data = await axios.post("/api/user",{userName,firstName,lastName,password},config)
          localStorage.setItem("userInfo",JSON.stringify(data));
          history.push('/sign-in')

        }catch(error) {
          alert("Error Registering user")
        }
    }

  return ( 
    
    <Container className="align-items-center d-flex" style={{height:'100vh',display:'flex',justifyContent:'center'}}>      
       <Form >
            <h1 style={{textAlign:'center'}}>Register User</h1>
           <Form.Group>
               <Form.Label>Username</Form.Label>
               <Form.Control type="text" value={userName} onChange={(e)=> setUsername(e.target.value)} required style={{width:"25vw"}}/>
               <Form.Label>First Name</Form.Label>
               <Form.Control type="text" value={firstName} onChange={(e)=> setFirstName(e.target.value)}  required style={{width:"25vw"}}/>
               <Form.Label>Last Name</Form.Label>
               <Form.Control type="text" value={lastName} onChange={(e)=> setLastName(e.target.value)}  required style={{width:"25vw"}}/>
               <Form.Label>Password</Form.Label>
               <Form.Control type={"password"} value={password} onChange={(e)=> setPassword(e.target.value)}  required style={{width:"25vw"}}/>
               <Form.Label> Confirm Password</Form.Label>
               <Form.Control type={"password"} value={confirmPassword} onChange={(e)=> setConfirmPassword(e.target.value)}  required style={{width:"25vw"}}/>

           <div style={{display:'flex',justifyContent:'center'}}>
                 
            <Link className="nav-link" to={"/sign-in"}>
            <Button variant="success" style={{width:"25vw"}} onClick={submitHandler}>
                Sign Up
             </Button>
            </Link>

            </div>
           </Form.Group>
       </Form>
    </Container>
)}

export default SignUp;
