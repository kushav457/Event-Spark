import React,{useState,useContext} from "react";
import {Container , Row , Col , Form , FormGroup , Button} from 'reactstrap';
import {Link, useNavigate} from 'react-router-dom';
import '../styles/login.css';
import loginImg from "../assets/images/login2.png"
import userIcon from "../assets/images/user.png"
import { AuthContext } from "../Context/authContext";
const Login = () => {
    const [mail,setEmail ]=useState()
    const [pass,setPass]=useState()
    const {login}=useContext(AuthContext)
    const navigate=useNavigate()
    const handleSubmit=async(e)=>{
        e.preventDefault()
        try{
            const data=await login(mail,pass);
            console.log(data)
            navigate('/')
        }catch(err){
            console.log(err.message)
        }
        
    }

    return (
        <section>
            <Container>
                <Row>
                    <Col lg='8' className="m-auto">
                        <div className="login_container d-flex align-items-between">
                            <div className="login_img mt-1" >
                                <img src={loginImg} alt="" />
                            </div>
                            <div className="login_form">
                                <div className="user">
                                    <img src={userIcon} alt="" />
                                </div>
                                <h2>Login</h2>

                                <Form onSubmit={handleSubmit}>
                                    <FormGroup>
                                        <input type="email" placeholder="Email"
                                        required id="email" value={mail} onChange={(e)=>setEmail(e.target.value)} />
                                    </FormGroup>
                                    <FormGroup>
                                        <input type="password" placeholder="Password"
                                        required id="password" value={pass} onChange={(e)=>setPass(e.target.value)} />
                                    </FormGroup>
                                    <Button className="btn secondary__btn auth_btn" 
                                    type="submit">
                                        Login
                                    </Button>
                                </Form>
                                <p>
                                    Don't have an account?
                                    <Link to='/register'>Create</Link>
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
    
export default Login;