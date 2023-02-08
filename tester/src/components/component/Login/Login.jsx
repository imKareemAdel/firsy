import axios from 'axios';
import jwtDecode from 'jwt-decode';
//import Joi from 'joi';
import React from 'react'
import { useState } from 'react'
export default function Login() {


  

 /*let[errorList,setErrorList]=useState([]);*/
 let[error,setError]=useState('');
 let [user,setUser]=useState({
  username:'',password:''});
  function getUser(e){
    let myUser={...user};
    myUser[e.target.name]=e.target.value;
    setUser(myUser);
    console.log(myUser);
  }
  async function formSubmit(e){
    e.preventDefault();
    const response= await axios.post("http://localhost:8000/auth/jwt/create", user);
    localStorage.setItem('userToken',response.data.refresh)
    localStorage.setItem('userToken',response.data.access)
    console.log(response.headers)
   /*let validationResponse =  validateRegisterForm();
   if(validationResponse.error){
   /* setErrorList(validationResponse.error.details);
   }
   else{ */
    
   
   
   /*const response= await axios.post("http://localhost:8000/auth/users/", user);*/
  
  /* if(data.message ==="success"){
       
   }
else{
     setError(data.message);
}
console.log(response.data);
}*/
/*function validateRegisterForm(){
  const schema = Joi.object({
    email:joi.string().email({tlds:{allow:['com','net','org']}}).required
    password:Joi.string().pattern(new RegExp('^[A-Z][a-z]{2,8}$')),
   

  
});
  return schema.validate(user ,{abortEarly:false});*/
}




  return (
    <div>
        <div className='w-75 mx-auto py-4'>
        <h1>log in</h1>
        
        </div>
      <form onSubmit={formSubmit}>

        {error&& <div className="alert alert-danger"> </div>}
        {/* {errorList.map((error,index)=> index===1? 
        <div className="alert alert-danger p-2">password invalid: password must be at least 8 characters </div>:
        <div className="alert alert-danger p-2">{error.message}</div> 
        )}*/}
      
      <div className='my-2'>
         <label htmlFor='username'>username</label>
         <input  autoFocus onChange={getUser} type='text' className='form-control' name='username'/>
        </div>  
        <div className='my-2'>
         <label htmlFor='password'>password</label>
         <input onChange={getUser} type='password' className='form-control' name='password'/>
        </div>  
        <button    type='submit' className='mt-3 btn btn-info'>logIn
          </button>
      </form>
      </div>
  )
}
