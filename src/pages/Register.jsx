import React,{useContext, useState} from "react";
import {Container , Row , Col , Form , FormGroup , Button} from 'reactstrap';
import {Link} from 'react-router-dom';
import '../styles/login.css';
import registerImg from "../assets/images/login2.png"
import userIcon from "../assets/images/user.png"
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/authContext";
const Register = () => {

    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [pass,setPass]=useState('')
    const {signup} =useContext(AuthContext)
    const navigate=useNavigate()
    const handleSubmit=async(e)=>{
        e.preventDefault()
        try{
            const res=await signup(email,pass)
            console.log(res);
            navigate('/')
        }catch(err){
            console.log(err.message);
        }
    }
    return (
        <section>
            <Container>
                <Row>
                    <Col lg='8' className="m-auto">
                        <div className="login_container d-flex align-items-between">
                            <div className="login_img">
                                <img src={registerImg} alt="" />
                            </div>
                            <div className="login_form">
                                <div className="user">
                                    <img src={userIcon} alt="" />
                                </div>
                                <h2>Register</h2>

                                <Form onSubmit={handleSubmit}>
                                <FormGroup>
                                        <input type="text" placeholder="Username"
                                        required id="username" value={name} onChange={(e)=>setName(e.target.value)} />
                                    </FormGroup>
                                    <FormGroup>
                                        <input type="email" placeholder="Email"
                                        required id="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                                    </FormGroup>
                                    <FormGroup>
                                        <input type="password" placeholder="Password"
                                        required id="password" value={pass} onChange={(e)=>setPass(e.target.value)} />
                                    </FormGroup>
                                    <Button className="btn secondary__btn auth_btn" 
                                    type="submit">
                                        Create Account
                                    </Button>
                                </Form>
                                <p>
                                    Already have an account?
                                    <Link to='/login'>Login</Link>
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
    
export default Register;