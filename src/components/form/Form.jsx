import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DatePicker from 'react-datepicker'
import Select from 'react-select'
import { departments, states } from '../../assets/constants'
import { addEmployee, clearError } from '../../store/employeeSlice'
import Modal from '../../lib/Modal/Modal'
import { useNavigate } from 'react-router-dom'
import 'react-datepicker/dist/react-datepicker.css'
import "./form.scss"

export const Form = () => {
  const [selectedBirthDate, setSelectedBirthDate] = useState(null)
  const [selectedStartDate, setSelectedStartDate] = useState(null)
  const [selectedDepartment, setSelectedDepartment] = useState(null)
  const [selectedState, setSelectedState] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const error = useSelector((state) => state.employees.error)

  // Fct validation du formulaire 
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

  // Fct de submit
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

    dispatch(addEmployee(employeeData)) //on dispatch l'employee
    if (!error) {
      setIsModalOpen(true) //on ouvre la modale
    }
  }

  // Fct de reset du formulaire
  const resetForm = () => {
    document.getElementById('create-employee').reset()
    setSelectedBirthDate(null)
    setSelectedStartDate(null)
    setSelectedDepartment(null)
    setSelectedState(null)
    dispatch(clearError()) //si on clean le formulaire, on clean aussi l'erreur 
  }

  // Fct fermeture modale
  const handleCloseModal = () => {
    setIsModalOpen(false)
    resetForm()
  }

  // Fct redirection (btn modale 2)
  const handleViewEmployees = () => {
    setIsModalOpen(false)
    navigate('/employees')
  }

  // Fct btn modale 1
  const handleStayOnForm = () => {
    setIsModalOpen(false)
    resetForm()
  }

  return (
    <>
      <form onSubmit={handleSubmit} id="create-employee">
        {error && (
          <div className="error-message">
            {error}
          </div>
        )}
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
          showMonthDropdown
          showYearDropdown
          dropdownMode="select"
          required
        />

        <label htmlFor="startDate">Start Date</label>
        <DatePicker
          id='startDate'
          selected={selectedStartDate}
          onChange={setSelectedStartDate}
          dateFormat="MMM d, yyyy"
          showMonthDropdown
          showYearDropdown
          dropdownMode="select"
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

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title="Employee Created!"
        message="Employee has been successfully created."
        primaryButton={{
          text: "View Employees",
          onClick: handleViewEmployees
        }}
        secondaryButton={{
          text: "Create Another",
          onClick: handleStayOnForm
        }}
      />
    </>
  )
}
