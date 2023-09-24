import React from "react";
import { Link } from "react-router-dom";

const DataList = ({datas, title}) => {
  
  return (  
    <div className="preview-title">
      <h2>{ title }</h2>
      <div className="data-list">
         {datas.map(data => (
          <div className="data-preview" key={data.id}>      
            
            <Link to={`/contact/${data.id}`}>
              <h3>{ [data.firstName,' ',data.lastName]}</h3>
              <p>{ data.phoneNumber }</p>
              <p>{ data.email }</p>
              <p>{ data.note }</p>  
              </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
 
export default DataList;