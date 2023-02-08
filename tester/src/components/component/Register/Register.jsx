import axios from 'axios';
import Joi from 'joi';
import React from 'react'
import { useState } from 'react'

export default function Register() {



  
  // let[errorList,setErrorList]=useState([]);
  // let[error,setError]=useState('');
  // let[loading,setLoading]=useState(false);

  let [user,setUser]=useState({
     username:'',first_name:'',last_name:'',email:'',password:'',profile_type:'STD'
  });
  function getUser(e){
    let myUser={...user};
    myUser[e.target.name]=e.target.value;
    setUser(myUser);
    console.log(myUser);
  }
async function formSubmit(e){
    e.preventDefault();
  const response= await axios.post("http://localhost:8000/auth/users/", user);
    console.log(response)
    //history.push({
      //pathname:  "/home",
      //state: {
        //response:  
       //} 
     //})
    // window.location.href="/login"
   //let validationResponse =  validateRegisterForm();
   //if(validationResponse.error){
   //setErrorList(validationResponse.error.details);
   //}
   
//    if(response.status === 400){
//      setError(response.status);
//       console.log(error);  
//    }
// else{
  //   setError(response.status);
//}
//console.log(response.data);
}

function validateRegisterForm(){
  const schema = Joi.object({
    first_name: Joi.string().min(3).max(10).required(),
    last_name: Joi.string().min(3).max(10).required(),
    username: Joi.string().min(3).max(30).required(), 
    password:Joi.string().pattern(new RegExp('^[A-Z][a-z]{2,8}$')).required(),
    email:Joi.string().required().email({ tlds: { allow: false } }),
    profile_type:Joi.required(),
  
  
  });

  return schema.validate(user ,{abortEarly:false});
}

  return (
    
    <div className="container">
  <div className="row">
    <div className="col-sm">
      
    <form onSubmit={formSubmit}>

{/* {error&& <div className="alert alert-danger"> </div>}
 {errorList.map((error,index)=> index===4? 
 <div className="alert alert-danger p-2">password invalid: password must be at least 8 characters </div>:
<div className="alert alert-danger p-2">{error}</div> 
 )}*/}
  <div className='my-2'>
   <label htmlFor='username'>username</label>
   <input autoFocus onChange={getUser} type='text' className='form-control' name='username'/>
  </div>
  <div className='my-2'>
   <label htmlFor='first_name'>first_name</label>
   <input onChange={getUser} type='text' className='form-control' name='first_name'/>
  </div>      
  <div className='my-2'>
   <label htmlFor='last_name'>last_name</label>
   <input onChange={getUser} type='text' className='form-control' name='last_name'/>
  </div>  
  
  <div className='my-2'>
   <label htmlFor='email'>email</label>
   <input onChange={getUser} type='email' className='form-control' name='email'/>
  </div>  
  <div className='my-2'>
   <label htmlFor='password'>password</label>
   <input onChange={getUser} type='password' className='form-control' name='password'/>
  </div>  
  {/*<div>
  <input onChange={getUser} htmlFor='profile-type' type="radio"  name="STD" /> STD
  <input onChange={getUser} htmlFor='profile-type' type="radio"  name="PRF" /> PRF
</div>*/}
   
  <button type='submit' className='mt-3 btn btn-info'>submit
    </button>
</form>
    </div>
    <div className="col-sm">
    </div>
  </div>
</div>
  )
}
