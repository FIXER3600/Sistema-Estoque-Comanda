import React from 'react'
import { useNavigate } from 'react-router-dom'
export const InitialPage = () => {
  const navigate=useNavigate()
  setTimeout(() => {
    navigate('/login')
  }, 2000)
  return (
    <div>BEM-VINDO</div>
  )
}
