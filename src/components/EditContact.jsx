import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export default function EditContact({contacts, editContact}) {

    const id = useParams().id;
    const navigate = useNavigate();


    const contactToEdit = contacts.find(contact => contact.id === parseInt(id));
    const [name, setName] = useState(contactToEdit ? contactToEdit.name : "");
    const [email, setEmail] = useState(contactToEdit ? contactToEdit.email : "");

    //     const [name, setName] = useState( contactToEdit.name );
    // const [email, setEmail] = useState( contactToEdit.email );

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedContact = {
            id: parseInt(id),
            name: name,
            email: email
        };
        editContact(updatedContact, parseInt(id));
        navigate("/");
    }

  return (
    <div className='flex flex-col items-center'>
        <h2 className='text-2xl font-bold'>Edit Contact</h2>
        <div className='container w-1/2 mt-4'>
            <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
                <input type="text" placeholder='Name' className='border-2 border-gray-300 rounded-md p-2' value={name} onChange={(e) => setName(e.target.value)} required/>
                <input type="email" placeholder='Email' className='border-2 border-gray-300 rounded-md p-2' value={email} onChange={(e) => setEmail(e.target.value)} required/>
                <button type="submit" className='bg-green-600 py-1.5 px-3 text-white rounded-lg font-bold w-max'>Submit</button>
            </form>
        </div>
    </div>
  )
}
