import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import profilePic from '../../assets/shobhitImage.jpg';
import {
  increment,
  incrementAsync,
  selectCount,
} from './homeSlice';

export default function About() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
 
  return(
    <div className="w-[1440px] h-[500px]">
      <div className="w-[80%] min-h-screen mx-auto grid grid-cols-2 bg-red-600">
      <div className=" bg-blue-200 flex items-center justify-center">hi</div>
      <div className=" bg-green-200">
      <img className="mx-auto h-40 w-40 mt-11 rounded-full"
             src={profilePic}
             alt="Your Name"
          />
      </div>
      </div>
       
    </div>
  );
}
  
//   return (
//     <div>
//       <div>
//       <div className="flex flex-col items-center justify-center min-h-screen py-8 px-4 bg-red-100 sm:px-6 lg:px-8">
//       <div className="max-w-md w-full space-y-8">
//         <div className="text-center">
//           <img
//             className="mx-auto h-32 w-32 rounded-full"
//             src={profilePic}
//             alt="Your Name"
//           />
//           <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
//             Your Name
//           </h2>
//           <p className="mt-2 text-center text-sm text-gray-600">
//             A short description about you. This can be a couple of sentences that describe your background, interests, or professional experience.
//           </p>
//           <div className="mt-6">
//             <a
//               href="link-to-your-work"
//               className="text-indigo-600 hover:text-indigo-500 text-sm font-medium"
//             >
//               Check my work
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//       </div>
//     </div>
//   );
// }
