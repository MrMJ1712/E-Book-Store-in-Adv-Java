import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export function Address(){
   const navigate =  useNavigate();
    const [id, setId] = useState();
    const [addressData, setAddressData] = useState({
        pincode:'',
        locality: '',
        area:'',
        city: '',
        state: '',
        
    })
    useEffect(() => {
        
        setId(sessionStorage.getItem("customerId"));  
        
        
        
       
        
      }, []);

   

    function handleInput(event) {
        setAddressData(prevData => {
            return {
                ...prevData,
                [event.target.name] : event.target.value
            }
        })        
    }
    async function submitAddress(event) {
        event.preventDefault();
        await axios.post(`http://localhost:9090/address/${id}`, addressData).then((response => {
        navigate('/homepage');      
        }))
    }
    return(
        <Container>
         <h1>Address Details : </h1>
            <form onSubmit={submitAddress}>
                <div className="form-group">
                    <label>Pincode : </label>
                    <input type="number" name="pincode" className="form-control" onChange={handleInput} />
                </div>
                <div className="form-group">
                    <label>Locality : </label>
                    <input type="text" name="locality" className="form-control" onChange={handleInput} />
                </div>
                <div className="form-group">
                    <label>Area : </label>
                    <input type="text" name="area" className="form-control" onChange={handleInput} />
                </div>
                <div className="form-group">
                    <label>City</label>
                    <input type="text" name="city" className="form-control" onChange={handleInput} />
                </div>
                <div className="form-group">
                    <label>State</label>
                    <input type="text" name="state" className="form-control" onChange={handleInput} />
                </div>
                
                <button className="btn btn-primary" >Add Address</button>
            </form>
        </Container>
    )
}