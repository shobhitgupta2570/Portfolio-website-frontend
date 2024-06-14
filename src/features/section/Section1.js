import React, { useState } from 'react';

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
    <div className="h-[500px] w-[100%] bg-blue-200">
    <img className='h-11 w-11' src="assets\shobhitImage.jpg"/>
    
    </div>
  );
}
