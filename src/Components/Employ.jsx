
// import React from 'react';
import axios from 'axios'
// import axios from 'axios';
import React,{useEffect, useState } from 'react';
import EmployForm from './EmployForm'
import ShowEmploList from './ShowEmploList';
const Form =()=>{
const[data, setData]=useState([]);
const baseUrl=`http://localhost:3002`

useEffect(()=>{
    getDataEmploy()
},[])
const getDataEmploy = ()=>{
fetch(`${baseUrl}/employee`)
.then((res)=>res.json())
.then((res)=>{
    setData(res);
    console.log('gettttttttt', res)
})
}


    return (
        <div>
            <button onClick={getDataEmploy}>check</button>
            <h1>main form </h1>
            <EmployForm />
            < ShowEmploList data={data}/>
            {/* {
                data.map((item)=>{
                    return(
                        <ShowEmploList {...item}/>
                    )
                })
            } */}
        </div>
    )
}
export default Form;