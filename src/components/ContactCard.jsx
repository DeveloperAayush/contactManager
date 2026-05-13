import React from 'react'
import { Link } from 'react-router-dom';

export default function ContactCard({deleteContact, contact}) {

    const handleDelete = (e) => {
        e.preventDefault();
        deleteContact(contact.id);
    }
    
  return (
    <>
      <div className="flex justify-around items-center gap-5 border-2 border-gray-300 rounded-md p-4 mb-4">
        <div>
          <div className="font-bold ">{contact.name}</div>
          <div className="text-sm">{contact.email}</div>
        </div>
        <div className="flex gap-2 ml-auto">
          <button
            className="bg-red-500 px-2 py-1 rounded-lg text-white"
            onClick={handleDelete}
          >
            Delete
          </button>
          <Link to={`/edit/${contact.id}`}>
            <button className="bg-blue-500 w-14 px-2 py-1 rounded-lg text-white">
              Edit
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}