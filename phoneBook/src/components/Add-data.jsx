import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddData = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [email, setEmail] = useState('')
  const [note, setNote] = useState('');
  const history = useNavigate();

  const forSubmit = (e) => {
    e.preventDefault();
    const datas = {firstName, lastName, phoneNumber, email, note}
    fetch('http://localhost:4000/datas', {
      method : "POST",
      headers : {"Content-Type" : "application/json"},
      body: JSON.stringify(datas)
    }).then(() => {
      alert("Contact added")
      history('/');
    })
  }
 
  return (  
    <div className="add-container">
       <h2>Add New data</h2>
      <div className="add-contact">
        
        <form onSubmit={forSubmit}>
          <label>First Name</label>
          <input type="text" required
           value={ firstName } 
           onChange={(e) => setFirstName(e.target.value)}
          /> 

          <label>Last Name</label>
          <input type="text" required
           value={ lastName }
           onChange={(e) => setLastName(e.target.value)}
          />

          <label>Phone-Number</label>
          <input type="text" required 
            value={ phoneNumber }
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          
          <label>Email</label>
          <input type="text"
            value={ email } 
            onChange={(e) => setEmail(e.target.value)}  
          />       

          <label>Keterangan</label>
          <textarea name="email" id="email" cols="30" rows="5"
            value={ note }
            onChange={(e) => setNote(e.target.value)}
          ></textarea>

          <button>Submit</button>
         
        
        </form>
      </div>
      </div>
  );
}
 
export default AddData;