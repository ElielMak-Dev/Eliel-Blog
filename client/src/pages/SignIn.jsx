import React from 'react';
import { Link } from 'react-router-dom';

export default function SignIn() {
  return (
    <div className='min-h-screen mt-20'>
      <div className=''>
        {/* Left Side */}
        <div className=''>
          <Link to='/' className='font-bold dark:text-white text-4xl'>
            <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
              Eliel's
            </span>
            Blog
          </Link>
        </div>
        {/* Right Side */}
        <div className=''></div>
      </div>
    </div>
  );
}
