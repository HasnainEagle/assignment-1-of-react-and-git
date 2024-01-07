import React from 'react'
import  { useState, useEffect, useRef } from 'react';
import 'tailwindcss/tailwind.css';

const UserForm = () => {
 const [name, setName] = useState('');
 const [email, setEmail] = useState('');
 const [message, setMessage] = useState('');
 const nameRef = useRef();
 const emailRef = useRef();
 const messageRef = useRef();

 useEffect(() => {
    nameRef.current.focus();
 }, []);

 const handleSubmit = (e) => {
    e.preventDefault();
    alert(`User details submitted:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
    setName('');
    setEmail('');
    setMessage('');
    nameRef.current.focus();
  };
  

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto mt-10 bg-white rounded-md p-6 shadow-md" >
      <h2 className="text-xl font-bold mb-6"  style={{ 'color':'white'}} >USER FORM</h2>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 mb-1" style={{ "padding": "10px",'color':'white'}}>Name</label>
        <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} ref={nameRef} className="w-full border-2 border-gray-300 rounded-md p-2" required />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 mb-1" style={{ "padding": "10px", "color":"white" }}>Email</label>
        <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} ref={emailRef} className="w-full border-2 border-gray-300 rounded-md p-2" required />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-gray-700 mb-1" style={{ "padding": "10px" ,'color':'white'}}>Message</label>
        <textarea id="message" rows="4" value={message} onChange={(e) => setMessage(e.target.value)} ref={messageRef} className="w-full border-2 border-gray-300 rounded-md p-2" required></textarea>
      </div>
     <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700" style={{ "padding": "10px","borderRadius":"7px","margin":"10px"}}>SUBMIT</button>
      </form>
 );
};


export default UserForm