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
    <div className="h-[100%] w-[100%] ">
    <div className="w-[100%] bg-black-400 h-[50px] flex items-center justify-end pr-[5%] bg-green-500">
      
      <div onClick={(e)=>{setMenu(!menu)}}  className=" flex items-end">
      <GiHamburgerMenu size="30" />
      </div>
    </div>
    {/* {menu? */}
      <div className="ml-[61%] h-[150px] w-[150px] px-[10%] flex-row items-center justify-center bg-gray-100 md:ml-[98%]">
      <div><button className="text-xl">Experience</button></div>
      <div><button className="text-xl">Projects</button></div>
      <div><button className="text-xl">About</button></div>
      <div><button className="text-xl">Contact Us</button></div>
    </div>
    {/* // : ""} */}
    </div>
  );
}
