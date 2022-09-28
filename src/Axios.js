import axios from "axios";
import './Axios.css'

import React from "react";
import { useState , useEffect } from "react";





const Axios=()=>{

    const [data, setData] = useState ([])
useEffect(() => {
  axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
    setData(res.data);
    console.log(res.data);
  });
},
  [])
  return(
<div className="div">
{""}
{data.map((e)=> (<div className="list">name is : {e.name}  </div> ))}
  
  
</div>


  );
}


export default Axios