import React from 'react'

const Navbar = () => {
  return (
    
      <nav className="flex justify-around py-2 text-white bg-slate-900">
        <div className="logo">
            <span className='text-xl font-bold mx-9'>iTask</span>
        </div>
        <ul className="flex gap-9 mx-9">
            <li className='transition-all cursor-pointer hover:font-bold'>Home</li>
            <li className='transition-all cursor-pointer hover:font-bold'>Your Task</li>
            
        </ul>
      </nav>
  
  )
}

export default Navbar

