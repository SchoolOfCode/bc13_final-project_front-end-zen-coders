// Description: This component will render the explore page that contains relivent informaiton about our app

// Import statements
import React from 'react';


// About page
export default function about() {
  return (
    <div className='flex flex-col p-6'>
      <div className='' >
        <h1 className="text-7xl font-bold">About us</h1>
        <p className="mt-2 font-roboto text-xl w-3/4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.</p>
      </div>
      <div className='grid md:grid-cols-6 gap-6 mt-6 sm:grid-cols-1'>
        <div>
          <img src='/profileImages/kiane.jpeg' alt='Kiane' className='rounded-full'/>
         <div className='flex flex-col text-center'> 
          <a>LinkedIn</a>
          <a>GitHub</a>
          <a>Portfolio</a></div>
        </div>
        <div>
          <img src='/profileImages/kiane.jpeg' alt='Kiane' className='rounded-full'/>
         <div className='flex flex-col text-center'> 
          <a>LinkedIn</a>
          <a>GitHub</a>
          <a>Portfolio</a></div>
        </div><div>
          <img src='/profileImages/kiane.jpeg' alt='Kiane' className='rounded-full'/>
         <div className='flex flex-col text-center'> 
          <a>LinkedIn</a>
          <a>GitHub</a>
          <a>Portfolio</a></div>
        </div><div>
          <img src='/profileImages/kiane.jpeg' alt='Kiane' className='rounded-full'/>
         <div className='flex flex-col text-center'> 
          <a>LinkedIn</a>
          <a>GitHub</a>
          <a>Portfolio</a></div>
        </div><div>
          <img src='/profileImages/kiane.jpeg' alt='Kiane' className='rounded-full'/>
         <div className='flex flex-col text-center'> 
          <a>LinkedIn</a>
          <a>GitHub</a>
          <a>Portfolio</a></div>
        </div><div>
          <img src='/profileImages/kiane.jpeg' alt='Kiane' className='rounded-full'/>
         <div className='flex flex-col text-center'> 
          <a>LinkedIn</a>
          <a>GitHub</a>
          <a>Portfolio</a></div>
        </div>
      </div>
      <div></div>

    </div>
  );
}
