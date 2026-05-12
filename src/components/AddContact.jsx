import React, { useState } from 'react'
import { useNavigate  } from 'react-router-dom';

export default function AddContact(props) {

const [name, setname] = useState("");
const [email, setemail] = useState("");

const navigate = useNavigate();


const handleSubmit = (e) => {
    e.preventDefault();
    // Add contact logic here
    const newContact = {
        name,
        email
    };
    props.addContact(newContact);
    setname("");
    setemail("");
    navigate("/");
}

  return (
    <div className='flex flex-col items-center'>
        <h2 className='text-2xl font-bold'>Add Contact</h2>
        <div className='container w-1/2 mt-4'>
            <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
                <input type="text" placeholder='Name' className='border-2 border-gray-300 rounded-md p-2' value={name} onChange={(e) => setname(e.target.value)} required/>
                <input type="email" placeholder='Email' className='border-2 border-gray-300 rounded-md p-2' value={email} onChange={(e) => setemail(e.target.value)} required/>
                <button type="submit" className='bg-green-600 py-1.5 px-3 text-white rounded-lg font-bold w-max'>Add Contact</button>
            </form>
        </div>
    </div>
  )
}
