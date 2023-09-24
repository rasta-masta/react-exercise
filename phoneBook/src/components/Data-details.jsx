import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { Link } from "react-router-dom";

const DataDetails = () => {
  const { id } = useParams();
  const { loading, err, datas } = useFetch(' http://localhost:4000/datas/' + id);
  const history = useNavigate();

  const forDel = () => {
    fetch('http://localhost:4000/datas/' + datas.id, {
      method: "DELETE"
    }).then(() => {
      alert('Contact deleted')
      history('/');
    })
  }

  return (  
    <div className="data-details">
    { loading && <div>Loading...</div> }      
    { err && <div>{ err } </div>}
    { datas && (
        <div className="container-data">
          <img src="../public/portrait.jpg" alt="portrait" />  
          <h3>{ [datas.firstName,' ',datas.lastName]}</h3>
       
          <p>{ datas.phoneNumber }</p>
          <p>{ datas.email }</p>
          <p>{ datas.note }</p> 
            <div className="del-edit">
              <button><Link to={`/edit/${datas.id}`}>Edit</Link></button>
              <button onClick={forDel}>Delete</button>
            </div>
          </div>
        
    )} 
    </div>
  );
}
 
export default DataDetails;