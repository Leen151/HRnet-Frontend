import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import DatePicker from 'react-datepicker'
import Select from 'react-select'
import { departments, states } from '../../assets/constants'
import { addEmployee } from '../../store/employeeSlice'
import 'react-datepicker/dist/react-datepicker.css'
import "./form.scss"

export const Form = () => {
  const [selectedBirthDate, setSelectedBirthDate] = useState(null)
  const [selectedStartDate, setSelectedStartDate] = useState(null)
  const [selectedDepartment, setSelectedDepartment] = useState(null)
  const [selectedState, setSelectedState] = useState(null)
  const dispatch = useDispatch()

  const isFormValid = (form) => {
    return (
      form.firstName.value.trim() !== "" &&
      form.lastName.value.trim() !== "" &&
      selectedBirthDate !== null &&
      selectedStartDate !== null &&
      form.street.value.trim() !== "" &&
      form.city.value.trim() !== "" &&
      selectedState !== null &&
      form.zipCode.value.trim() !== "" &&
      selectedDepartment !== null
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!isFormValid(e.target)) {
      alert("Please complete all fields of the form")
      return
    }

    const form = e.target
    const employeeData = {
      "First Name": form.firstName.value,
      "Last Name": form.lastName.value,
      "Date of Birth": selectedBirthDate.toISOString().split('T')[0], //enregistre les dates en format ISO aaaa-mm-dd (pour permettre le tri)
      "Start Date": selectedStartDate.toISOString().split('T')[0],
      "Street": form.street.value,
      "City": form.city.value,
      "State": selectedState?.label,
      "Zip Code": form.zipCode.value,
      "Department": selectedDepartment?.label
    }

    console.log(employeeData)
    dispatch(addEmployee(employeeData)) //on dispatch l'employee

    // Réinitialisation du formulaire
    e.target.reset()
    setSelectedBirthDate(null)
    setSelectedStartDate(null)
    setSelectedDepartment(null)
    setSelectedState(null)
  }

  return (
    <>
      <form onSubmit={handleSubmit} id="create-employee">
        <p className="required-fields-message">All fields are required</p>
        <div className='name'>
          <div>
            <label htmlFor="firstName">First Name</label>
            <input 
              type="text" 
              id="firstName" 
              name="firstName"
              required
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <input 
              type="text" 
              id="lastName" 
              name="lastName"
              required
            />
          </div>
        </div>

        <label htmlFor="birthDate">Date of Birth</label>
        <DatePicker
          id='birthDate'
          selected={selectedBirthDate}
          onChange={setSelectedBirthDate}
          dateFormat="MMM d, yyyy"
          required
        />

        <label htmlFor="startDate">Start Date</label>
        <DatePicker
          id='startDate'
          selected={selectedStartDate}
          onChange={setSelectedStartDate}
          dateFormat="MMM d, yyyy"
          required
        />

        <fieldset className="address">
          <legend>Address</legend>

          <label htmlFor="street">Street</label>
          <input 
            id="street" 
            name="street"
            type="text" 
            required
          />

          <label htmlFor="city">City</label>
          <input 
            id="city" 
            name="city"
            type="text" 
            required
          />

          <label htmlFor="state">State</label>
          <Select
            id="state"
            options={states}
            value={selectedState}
            onChange={setSelectedState}
            placeholder="Select a State"
            classNamePrefix="custom-select"
            required
          />

          <label htmlFor="zipCode">Zip Code</label>
          <input 
            id="zipCode" 
            name="zipCode"
            type="number" 
            required
          />
        </fieldset>

        <label htmlFor="department">Department</label>
        <Select
          id="department"
          options={departments}
          value={selectedDepartment}
          onChange={setSelectedDepartment}
          placeholder="Select a Department"
          classNamePrefix="custom-select"
          required
        />

        <button 
          type="submit" 
          className="save-form"
        >
          Save
        </button>
      </form>
    </>
  )
}
