import './App.css';
import React from 'react';
import { useForm } from 'react-hook-form';

export default function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const sub = (data,event) => 
  {
    console.log(event.target.Age.value);
    document.getElementById("Fname").value=event.target.Firstname.value;
    document.getElementById("Lname").value=event.target.Surname.value;
    document.getElementById("uname").value=event.target.Username.value;
    document.getElementById("age").value=event.target.Age.value;
     event.target.Age.value="";
      event.target.Firstname.value="";
      event.target.Surname.value="";
      event.target.Username.value="";
  }
  return (
    <div>
      <h1>Enter Details</h1>
    <form id="form" onSubmit={handleSubmit(sub)}>
      <label >First name:</label>
      <input type="text" id="firstname" className='Form-elements' placeholder="First name" {...register("Firstname", {required: true},{pattern:/A-Z/})}/>
      {errors.Firstname?.type === 'required' && "First name is required"} <br/>
      {errors.Firstname?.type==='pattern' && "Enter Valid name"}
      <label >Last name:</label>
      <input type="text" id="lastname" className='Form-elements' placeholder="Sur name" {...register("Surname", {required: true})} />
      {errors.Surname?.type === 'required' && "Last name is required"}<br/>
      <label >User name:</label>
      <input type="text" id="username" className='Form-elements' placeholder="Username" {...register("Username", {required: true})} />
      {errors.Username?.type === 'required' && "User name is required"}<br/>
      <label >Age:</label>
      <input type="number" id="Age" className='Form-elements' placeholder="Age" {...register("Age", {required: true, max: 99, min: 18})} />
      {errors.Age?.type === 'required' && "Age is required"}
      {errors.Age?.type==='max' && "Enter valid age"}
      {errors.Age?.type==='min' && "Enter valid age"}
      <br/>
      <input type="submit" className='Form-elements' />
    </form>
    <div id="Submit">
      <h1>Submitted details</h1>
      <label>First name:</label>
      <input type="text" className='Form-elements' id='Fname'/>
      <br/>
      <label>Last name:</label>
      <input type="text" className='Form-elements' id='Lname'/>
      <br/>
      <label>User name:</label>
      <input type="text" className='Form-elements' id='uname'/>
      <br/>
      <label>Age:</label>
      <input type="number" className='Form-elements' id='age'/>
    </div>
    </div>
  );
}