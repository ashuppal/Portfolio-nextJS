import React from 'react'

const AboutMeTabs = ({active, selectTab, children}) => {

  const buttonClass = active 
  ? "text-white border-b border-lime-500"
  :"text-[#ADB7BE]";

  return (
    <button onClick={selectTab}>
   <p classname= {`mr-3 font-semibold hover:text-white ${buttonClass}`}>
    {children}
   </p> 
    </button>
  )
}

export default AboutMeTabs
