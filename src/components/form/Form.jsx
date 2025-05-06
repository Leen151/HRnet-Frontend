import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import Select from 'react-select';
import { departments, states } from '../../assets/constants'
import 'react-datepicker/dist/react-datepicker.css'
import "./form.scss"

export const Form = () => {
  const [selectedBirthDate, setSelectedBirthDate] = useState(null);
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [selectedState, setSelectedState] = useState(null);

  return (
    <>
      <form action="#" id="create-employee">
        <div className='name'>
          <div>
            <label for="first-name">First Name</label>
            <input type="text" id="first-name" />
          </div>
          <div>
            <label for="last-name">Last Name</label>
            <input type="text" id="last-name" />
          </div>
        </div>

        <label htmlFor="date-of-birth">Date of Birth</label>
        <DatePicker
          id='date-of-birth'
          selected={selectedBirthDate}
          onChange={date => setSelectedBirthDate(date.toISOString().split("T")[0])} // retourne la date au format iso
          dateFormat="MMM d, yyyy"
        />

        <label htmlFor="start-date">Start Date</label>
        <DatePicker
          id='start-date'
          selected={selectedStartDate}
          onChange={date => setSelectedStartDate(date.toISOString().split("T")[0])}
          dateFormat="MMM d, yyyy"
        />

        <fieldset class="address">
          <legend>Address</legend>

          <label for="street">Street</label>
          <input id="street" type="text" />

          <label for="city">City</label>
          <input id="city" type="text" />

          <label htmlFor="state">State</label>
          <Select
          id="state"
          options={states}
          value={selectedState}
          onChange={setSelectedState}
          placeholder="Select a State"
          classNamePrefix="custom-select"
          />

          <label for="zip-code">Zip Code</label>
          <input id="zip-code" type="number" />
        </fieldset>

        <label htmlFor="department">Department</label>
        <Select
          id="department"
          options={departments}
          value={selectedDepartment}
          onChange={setSelectedDepartment}
          placeholder="Select a Department"
          classNamePrefix="custom-select"
        />
      </form>

      <button className="save-form" onclick="saveEmployee()">Save</button>
    </>
  )
}
