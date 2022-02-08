import React,{useRef} from 'react';
import {Button, Container,Form,Row,Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function Landing() {

    const idRef = useRef()

  return ( 
    
    <Form className="form-box" style={{marginTop:100}}>
        <Form.Group className="text-center">
            <h1>Roman's Chat App</h1>
            
            <Link className="nav-link" to={"/sign-in"}>
            <Button style={{width:"50vw",margin:10}}>
                Login
             </Button>
            </Link>
         
            <Link className="nav-link" to={"/sign-up"}>
            <Button style={{width:"50vw",margin:10}}>
                Create Account
             </Button>
            </Link>
            
         
        </Form.Group>
    </Form>
 
)}


export default Landing;
