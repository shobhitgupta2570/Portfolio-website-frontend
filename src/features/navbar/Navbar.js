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
 
  
  return (
    <div className="h-[100%] w-[100%]">
    <div className="w-[100%] bg-black-400 h-[50px] flex items-center justify-end pr-[5%] bg-green-500">
      
      <div className=" flex items-end">
      <GiHamburgerMenu size="30" />
      </div>
    </div>
    <div className="flex justify-end h-[60px] w-[60%] bg-blue-200">
    <div className="  h-[60%] w-[40%] bg-red-400 "></div>
    </div>
    </div>
  );
}
