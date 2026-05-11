import React from 'react'

 function Header() {
  return (
    <>
      <div className="flex justify-around items-center py-2 bg-gray-800 text-white shadow-2xlw-full">
        <div className="font-bold text-xl text-blue-400 cursor-pointer">
          Contact Manager
        </div>
      </div>
    </>
  );
}

export default Header;