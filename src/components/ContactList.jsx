import React from 'react'
import ContactCard from './ContactCard';
import { Link } from 'react-router-dom';

export default function ContactList({contacts, deleteContact}) {
  

  return (
    <div className="flex flex-col items-center justify-center mb-12">
      <div className="my-2 mx-4 flex items-center justify-center">
        <Link to="/add">
          <button className="bg-blue-600 py-1.5 px-3 text-white rounded-lg font-bold">
            Add New Contact
          </button>
        </Link>
      </div>
      <div>
        <h2 className="text-2xl font-bold">Contact List</h2>
      </div>
      <div className="container w-1/2 mt-4">
        {contacts.map((contact) => {
          return <ContactCard key={contact.id} contact={contact} deleteContact={deleteContact} />;
        })}
      </div>
    </div>
  );
}
