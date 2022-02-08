import React,{useRef} from 'react';
import {Button, Container,Form} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function SignUp() {

    const idRef = useRef()

  return ( 
    
    <Container className="align-items-center d-flex" style={{height:'100vh'}}>   
       <Form className="w-100">
            <h1 style={{textAlign:'center'}}>Create User</h1>
           <Form.Group>
               <Form.Label>Username</Form.Label>
               <Form.Control type="text" ref={idRef} required />
               <Form.Label>First Name</Form.Label>
               <Form.Control type="text" ref={idRef} required />
               <Form.Label>Last Name</Form.Label>
               <Form.Control type="text" ref={idRef} required />
               <Form.Label>Password</Form.Label>
               <Form.Control type="text" ref={idRef} required />

           <div style={{display:'flex',justifyContent:'center'}}>
                 
            <Link className="nav-link" to={"/sign-in"}>
            <Button variant="success" style={{width:"25vw",margin:10}}>
                Create User
             </Button>
            </Link>

            <Link className="nav-link" to={"/sign-in"}>
                <Button style={{width:"25vw",margin:10}}>
                  Login
                </Button>
              
              </Link>

            </div>
           </Form.Group>

           
           
       </Form>
    </Container>
)}

export default SignUp;
