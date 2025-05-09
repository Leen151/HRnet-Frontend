import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  employees: [],
  error: null
}

export const employeeSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      try {
        state.employees.push(action.payload)
        state.error = null
      } catch (error) {
        state.error = "An error occurred while registering the employee"
      }
    },
    clearError: (state) => {
      state.error = null
    }
  }
})

export const { addEmployee, clearError } = employeeSlice.actions
export default employeeSlice.reducer