import React from 'react'

const Header = () => {
  return (
   <div className="flex justify-between items-center p-6 bg-white text-black">
     <div className="  flex flex-row gap-8 text-sm font-medium">
        <a > Home</a>
         <a> About Us</a>
          <a > Case study</a>
          </div>
       <div className="text-sm font-medium">
    <a>Get Started →</a>
  </div>
    
   </div>
  )
}

export default Header