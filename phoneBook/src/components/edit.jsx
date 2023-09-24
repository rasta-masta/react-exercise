import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';


const Edit = () => {
  const { id } = useParams();
 
  const [datas, setDatas] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    note: '',
  })
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [email, setEmail] = useState('')
  const [note, setNote] = useState('');


  useEffect(() => {
    fetch('http://localhost:4000/datas/' + id)
    .then(res => {
      return res.json()
    })
    .then(res => {
      setDatas(res)
     })  
  },[])   
      
  const Updater = (e) => {
    const history = useNavigate();
    e.preventDefault();
    fetch('http://localhost:4000/datas/' + id, {
      methode: "PUT",
      headers : {"Content-Type" : "application/json"},
      body: JSON.stringify(datas)
    }
    .then(res => {
      alert('data updated');
      history('/')
    })
  )
  }
 
  return (  
    <div className="add-container">
       <h2>Edit Data</h2>
      <div className="add-contact">
        
        <form onSubmit={Updater}> 
          <label>First Name</label>
          <input type="text" required
           value={datas.firstName}
           onChange={(e => setFirstName(e.target.value))}          
          /> 

          <label>Last Name</label>
          <input type="text" required
            value={datas.lastName}
            
          />

          <label>Phone-Number</label>
          <input type="text" required 
           value={datas.phoneNumber}
           />
          
          <label>Email</label>
          <input type="text"
          value={datas.email}
          
          />       

          <label>Keterangan</label>
          <textarea name="email" id="email" cols="30" rows="5"
          value={datas.note}
          ></textarea>

          <button className='update'>Update</button>
         
        
        </form>
      </div>
      </div>
  );
}
 
export default Edit;