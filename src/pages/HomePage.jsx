import React from 'react'
import { Link } from 'react-router-dom'
import { Form } from '../components/form/Form'

export const HomePage = () => {
  return (
    <main>      
      <Link to="/employees">View Current Employees</Link>
      <Form/>
    </main>
  )
}
