import React, { useContext } from 'react'
import { themecontext } from '../context/themecontext'

const Button = () => {
    const {themeupdate} =useContext(themecontext)
  return (
    <div>
    <button onClick={themeupdate} style={{marginTop:"50px"}}>Change theme</button>
    </div>
  )
}

export default Button
