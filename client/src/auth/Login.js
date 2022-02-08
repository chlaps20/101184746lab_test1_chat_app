import React,{useRef} from 'react';
import {Button, Container,Form} from 'react-bootstrap'
import { Link } from "react-router-dom";
import SignUp from './SignUp';

function Login() {

    const idRef = useRef()

  return ( 
   <Container className="align-items-center d-flex" style={{height:'100vh',display:'flex',justifyContent:'center'}}>   
   <Form >
        <h1 style={{textAlign:'center'}}>Login To Chat App</h1>
       <Form.Group>
           <Form.Label>Username</Form.Label>
           <Form.Control type="text" ref={idRef} required />
          
           <Form.Label>Password</Form.Label>
           <Form.Control type="text" ref={idRef} required />
        
           <Link className="nav-link" to={"/sign-in"}>
                <Button style={{width:"25vw",justifyContent:'center'}}>
                  Login
                </Button>
              
              </Link>
       </Form.Group>
       
   </Form>
</Container>
)}


export default Login;
