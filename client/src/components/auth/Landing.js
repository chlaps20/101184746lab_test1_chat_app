import React,{useEffect} from 'react';
import {Button, Container,Form,Row,Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {useHistory} from 'react-router'

function Landing() {

    const history = useHistory()
    useEffect(() => {
        const userInfo = JSON.parse(localStorage.getItem("userInfo"))

        if(!userInfo){
            history.push('dashboard')
        }
      }, [history])

  return ( 
    <Container className="align-items-center d-flex" style={{height:'100vh',display:'flex',justifyContent:'center'}}>   
     <Form className="form-box" style={{marginTop:100}}>
        <Form.Group className="text-center">
            <h1>Roman's Chat App</h1>
            
            <Link className="nav-link" to={"/sign-in"}>
            <Button style={{width:"25vw",margin:10}}>
                Login
             </Button>
            </Link>
         
            <Link className="nav-link" to={"/sign-up"}>
            <Button style={{width:"25vw",margin:10}}>
                Create Account
             </Button>
            </Link>
            
         
        </Form.Group>
    </Form>
 </Container>
 
)}


export default Landing;
