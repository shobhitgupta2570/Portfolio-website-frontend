import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  increment,
  incrementAsync,
  selectCount,
} from './homeSlice';

export default function About() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
 
  
  return (
    <div>
      <div>
        About page
      </div>
    </div>
  );
}
