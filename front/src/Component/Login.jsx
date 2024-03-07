import { useState } from "react";
import axios from "axios";
import { Navigate, redirect, useHistory, useNavigate } from "react-router-dom";
import { NavigationBar } from "./NavigationBar";
import { Container } from "react-bootstrap";
import './style/login.css';
export function Login() {
    
    const navigate = useNavigate();
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    })

    function handleInput(event) {
        setLoginData(prevData => {
            return {
                ...prevData,
                [event.target.name] : event.target.value
            }
        })        
    }

    function login(event) {
        event.preventDefault();
        if(loginData.email == "kunal@gmail.com" && loginData.password=="Kunal@123"){
            navigate("/adminpage");
        }
        else{
            axios.post('http://localhost:9090/customer/login', loginData).then((response => {                           
                    sessionStorage.setItem('customerId', response.data.customerId);
                    sessionStorage.setItem('name', response.data.name);
                    navigate("/homepage");              
            }))
        }
    }

    return (
        <>
        
        <Container style={{ height: '85vh' }}>
        <div>
        <div className="login-form-container">
    <form onSubmit={login} className="login-form">
        <div className="form-group">
            <label>Email Address</label>
            <input type="email" name="email" className="form-control" onChange={handleInput} />
        </div>
        <div className="form-group">
            <label>Password</label>
            <input type="password" name="password" className="form-control" onChange={handleInput} />
        </div>
        <button className="btn btn-primary">Login</button>
    </form>
</div>

        </div>

        </Container>
        </>
    )
}
