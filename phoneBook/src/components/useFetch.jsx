import React from "react";
import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [datas, setDatas] = useState(null)
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

useEffect(() => {
  setTimeout(() => {
  fetch(url)
      .then(res => {
        if(!res.ok){
          throw Error('Gagal to fetch data..!');
        }
        return res.json();
      })
      .then(data => {
        setDatas(data)
        setLoading(false);
        setErr(null)
      })
      .catch(err => {
        setLoading(false);
        setErr(err.message)
      })
    }, 250)  
  }, [url]);  

  return { loading, err, datas };
}

export default useFetch;