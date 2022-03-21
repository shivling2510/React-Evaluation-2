import React,{useEffect, useState } from 'react';

const EmployForm =()=>{
    // console.log('kkkk', handleData)
//  "name": "shiv",
// "department": "xyz",
// "gender": "male",
// "role": "abc",
// "salary": 1000
    const[name, setName]=useState("");
    const[department, setDepartment]=useState("");
    const[gender, setGender ]=useState("");
    const[ role, setRole ]=useState("");
    const[ salary, setSalary ]=useState("");
    // const
    const baseUrl=`http://localhost:3002`;
    // const postData =(val)=>{
    //     const sendData= JSON.stringify(val)
    // fetch(`${baseUrl}`,{
    //     method:"POST",
    //     body:sendData,
    //     header:{
    //         "content-type": "application/json"
    //     }
    // }).then((res)=>{
    //     console.log('ppppppppp', res)
    // })
    // }
    const handleSubmit =()=>{
        
        let payLoad={
            name:name,
            department:department,
            gender:gender,
            role:role,
            salary:salary,
            id: Math.random()
        }
        let  payLoad2=JSON.stringify(payLoad)
        fetch(`${baseUrl}/employee`,{
            method:"POST",
            body: payLoad2,
            headers: {
                "content-type": "application/json"
            }
        } ).then((res)=>{
            console.log('post res', res)
        });
        console.log('payload', payLoad)
        // handleData(payLoad)
        // getDataEmploy()
        
    }
    return(
        <div className='App'>
       <div>
       <div>Name :
            <input type='text' value={name} onChange={(e)=>{setName(e.target.value)}} />
       </div>
       <div> department :
            <input type='text' value={department} onChange={(e)=>{setDepartment(e.target.value)}} />
       </div>
       <div>gender :
            <input type='text' value={gender} onChange={(e)=>{setGender(e.target.value)}} />
       </div>
       <div>Role :
            <input type='text' value={role} onChange={(e)=>{setRole(e.target.value)}} />
       </div>
       <div>Salary :
            <input type='text' value={salary} onChange={(e)=>{setSalary(e.target.value)}} />
       </div>
       <button  onClick={handleSubmit} >submit</button>
       </div>
        </div>
    )

}
export default EmployForm;