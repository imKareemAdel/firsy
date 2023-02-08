import axios, { Axios } from 'axios'
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

export default function Home() {
const [exams,setExams]=useState([]);


   async function getExams(){
    let token=  JSON.parse(localStorage.getItem("userToken"))

    console.log(token);
    let response= await axios.get('http://localhost:8000/exam/exams/', {
 headers: {
   Authorization: 'Bearer ' + token //the token is a variable which holds the token
 }
})
   
    
 
 
   
    
  
    
  }
  //useEffect(()=> getExams,[]);
  return (
 <>
    <button onClick={getExams} >get</button>
 </>
    
  )
}
