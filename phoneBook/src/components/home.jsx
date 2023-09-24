import React, { useEffect, useState } from "react";
import DataList from "./dataList";
import useFetch from "./useFetch";


const Home = () => {  
  const { loading, err, datas } = useFetch('http://localhost:4000/datas')

  return ( 
    <div className="home">
    {loading && <div>Loading...</div>}
    {err && <div>{ err }</div>}
    {datas &&< DataList datas={datas} title="All Contacts"/>}  
    </div>
   );
}
 
export default Home;