import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import './style/register.css';
export function Registration() {
    const Navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState("");
    const [loginData, setLoginData] = useState({
        customerName:'',
        email: '',
        contact:'',
        password: ''
    });

    //const history = useHistory();

    function handleInput(event) {
        const { name, value } = event.target;
        setLoginData(prevData => ({
            ...prevData,
            [name]: value
        }));
    } 

    function validateForm() {
        if (!loginData.customerName || !loginData.email || !loginData.contact || !loginData.password) {
            setErrorMessage("All fields are required");
            return false;
        }

        // Validate email format
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(loginData.email)) {
            setErrorMessage("Invalid email address");
            return false;
        }

        // Validate contact number (you can add more specific validation if needed)
        if (isNaN(loginData.contact) || loginData.contact.length !== 10) {
            setErrorMessage("Invalid contact number");
            return false;
        }

        return true;
    }

    function register(event) {
        event.preventDefault();
        if (validateForm()) {
            axios.post('http://localhost:9090/customer', loginData)
                .then(response => {
                    console.log(response);
                    console.log(response.data);   
                    Navigate('/');
                })
                .catch(error => {
                    console.error('Error registering user:', error);
                    setErrorMessage("Error registering user. Please try again later.");
                });
        }
    }

    return (
        <div style={{height: '85vh'}}>
            <div className="form-container">
    <form onSubmit={register} className="custom-form">
        <div className="form-group">
            <label>Name:</label>
            <input type="text" name="customerName" className="form-control" onChange={handleInput} />
        </div>
        <div className="form-group">
            <label>Email Address:</label>
            <input type="email" name="email" className="form-control" onChange={handleInput} />
        </div>
        <div className="form-group">
            <label>Contact:</label>
            <input type="text" name="contact" className="form-control" onChange={handleInput} />
        </div>
        <div className="form-group">
            <label>Password:</label>
            <input type="password" name="password" className="form-control" onChange={handleInput} />
        </div>
        <button type="submit" className="btn btn-primary">Register</button>
        {errorMessage && <div className="text-danger">{errorMessage}</div>}
    </form>
</div>
        </div>
    )
}
