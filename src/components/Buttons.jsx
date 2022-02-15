
import React from 'react'
import { Link } from 'react-router-dom'
export default function Button () {
  return (
   <button type="button" className="btn btn-light btn-transparent">
     <Link to='/about'> Começar </Link> 
     </button>
  )
}
