import React from 'react'

export default function ContactCard({contact}) {
    
  return (
    <>
     <div className='border-2 border-gray-300 rounded-md p-4 mb-4'> 
        <div className='font-bold '>{contact.name}</div>
        <div className='text-sm'>{contact.email}</div>
     </div>
    </>
  )
}