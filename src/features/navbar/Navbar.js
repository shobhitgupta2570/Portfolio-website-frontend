import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
// import { useSelector, useDispatch } from 'react-redux';
// import {
//   increment,
//   incrementAsync,
//   selectCount,
// } from './navbarSlice';

export default function Navbar() {
  // const count = useSelector(selectCount);
  // const dispatch = useDispatch();
  const [menu , setMenu] = useState(false);
 
  
  return (
    <div onClick={(e)=>{setMenu(!menu)}} className="h-[100%] w-[100%]">
    <div className="w-[100%] bg-black-400 h-[50px] flex items-center justify-end pr-[5%] bg-green-500">
      
      <div onClick={(e)=>{setMenu(!menu)}}  className=" flex items-end pl-2">
      <GiHamburgerMenu size="30" />
      </div>
    </div>
    {menu?
      <div className="relative w-[100%] px-[5%]">
      <div className=" bg-gray-50 w-[140px]  lg:mr-7 flex flex-col items-center  absolute right-0 py-2">
      <div><button className="text-xl shadow-md shadow-grey">Experience</button></div>
      <div><button className="text-xl shadow-md shadow-grey">Projects</button></div>
      <div><button className="text-xl shadow-md shadow-grey">About</button></div>
      <div><button className="text-xl shadow-md shadow-grey">Contact Us</button></div>
      <div><button className="text-xl shadow-md shadow-grey">Education</button></div>
      </div>
    </div>
    : ""}
    
    </div>
  );
}
