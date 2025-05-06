import React from 'react'
import { Link } from 'react-router-dom'
import { Form } from '../components/form/Form'

export const HomePage = () => {
  return (
    <main id='create-employees'>
      <Link to="/employees">View Current Employees</Link>

      <div className="container">
        <h2>Create Employee</h2>
        <Form/>
      </div>
    </main>
  )
}
