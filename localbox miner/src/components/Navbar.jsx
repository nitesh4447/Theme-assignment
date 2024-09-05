import React, { useContext } from 'react'
import { themecontext } from '../context/themecontext'

const Navbar = () => {
    const {theme}=useContext(themecontext )
  return (
    <div>
      
      <h1>THEME CHANGE PROJECT</h1>
      <h3>theme is {theme}</h3>
    </div>
  )
}

export default Navbar
