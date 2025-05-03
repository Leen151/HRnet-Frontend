import React, {useState} from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import "./form.scss"

export const Form = () => {
  const [selectedBirthDate, setSelectedBirthDate] = useState(null);
  const [selectedStartDate, setSelectedStartDate] = useState(null);

  return (
    <div className="container">
      <h2>Create Employee</h2>

      <form action="#" id="create-employee">
        <label for="first-name">First Name</label>
        <input type="text" id="first-name" />

        <label for="last-name">Last Name</label>
        <input type="text" id="last-name" />

        <label htmlFor="date-of-birth">Date of Birth</label>
        <DatePicker
          id='date-of-birth'
          selected={selectedBirthDate}
          onChange={date => setSelectedBirthDate(date)}
        />

        <label htmlFor="start-date">Start Date</label>
        <DatePicker
          id='start-date'
          selected={selectedStartDate}
          onChange={date => setSelectedStartDate(date)}
        />

        <fieldset class="address">
          <legend>Address</legend>

          <label for="street">Street</label>
          <input id="street" type="text" />

          <label for="city">City</label>
          <input id="city" type="text" />

          <label for="state">State</label>
          <select name="state" id="state"></select>

          <label for="zip-code">Zip Code</label>
          <input id="zip-code" type="number" />
        </fieldset>

        <label for="department">Department</label>
        <select name="department" id="department">
          <option>Sales</option>
          <option>Marketing</option>
          <option>Engineering</option>
          <option>Human Resources</option>
          <option>Legal</option>
        </select>
      </form>

      <button className="save-form" onclick="saveEmployee()">Save</button>
    </div>
  )
}
