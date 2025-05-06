import React from 'react'
import { Table } from '../components/table/Table'
import { Link } from 'react-router-dom'

export const EmployeesPage = () => {
  return (
    <main id="employee-list">
      <Link to="/">Home</Link>
      <h2>Current Employees</h2>
      
      <Table />
    </main>
  )
}
