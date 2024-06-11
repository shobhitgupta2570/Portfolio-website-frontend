import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  increment,
  incrementAsync,
  selectCount,
} from './navbarSlice';

export default function Navbar() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
 
  
  return (
    <div>
      <div>
        hi
      </div>
    </div>
  );
}
