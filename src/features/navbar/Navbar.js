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
    <div className="h-[100%] w-[100%] flex-column">
    <div className="w-[100%] bg-black-400 h-[50px] flex items-center justify-end pr-[5%] bg-green-500">
      
      <div onClick={(e)=>{setMenu(!menu)}}  className=" flex items-end">
      <GiHamburgerMenu size="30" />
      </div>
    </div>
    {menu?
      <div className="ml-[60%] h-[150px] w-[40%]  bg-blue-200">
      <button className="text-xl mx-auto">Projects</button>
      <button className="">About</button>

    </div>: ""}
    </div>
  );
}
