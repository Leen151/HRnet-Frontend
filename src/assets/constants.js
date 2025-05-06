export const departments = [
  { value: "sales", label: "Sales" },
  { value: "marketing", label: "Marketing" },
  { value: "engineering", label: "Engineering" },
  { value: "human-resources", label: "Human Resources" },
  { value: "legal", label: "Legal" }
]

export const states = [
  { value: "AL", label: "Alabama" },
  { value: "AK", label: "Alaska" },
  { value: "AS", label: "American Samoa" },
  { value: "AZ", label: "Arizona" },
  { value: "AR", label: "Arkansas" },
  { value: "CA", label: "California" },
  { value: "CO", label: "Colorado" },
  { value: "CT", label: "Connecticut" },
  { value: "DE", label: "Delaware" },
  { value: "DC", label: "District Of Columbia" },
  { value: "FM", label: "Federated States Of Micronesia" },
  { value: "FL", label: "Florida" },
  { value: "GA", label: "Georgia" },
  { value: "GU", label: "Guam" },
  { value: "HI", label: "Hawaii" },
  { value: "ID", label: "Idaho" },
  { value: "IL", label: "Illinois" },
  { value: "IN", label: "Indiana" },
  { value: "IA", label: "Iowa" },
  { value: "KS", label: "Kansas" },
  { value: "KY", label: "Kentucky" },
  { value: "LA", label: "Louisiana" },
  { value: "ME", label: "Maine" },
  { value: "MH", label: "Marshall Islands" },
  { value: "MD", label: "Maryland" },
  { value: "MA", label: "Massachusetts" },
  { value: "MI", label: "Michigan" },
  { value: "MN", label: "Minnesota" },
  { value: "MS", label: "Mississippi" },
  { value: "MO", label: "Missouri" },
  { value: "MT", label: "Montana" },
  { value: "NE", label: "Nebraska" },
  { value: "NV", label: "Nevada" },
  { value: "NH", label: "New Hampshire" },
  { value: "NJ", label: "New Jersey" },
  { value: "NM", label: "New Mexico" },
  { value: "NY", label: "New York" },
  { value: "NC", label: "North Carolina" },
  { value: "ND", label: "North Dakota" },
  { value: "MP", label: "Northern Mariana Islands" },
  { value: "OH", label: "Ohio" },
  { value: "OK", label: "Oklahoma" },
  { value: "OR", label: "Oregon" },
  { value: "PW", label: "Palau" },
  { value: "PA", label: "Pennsylvania" },
  { value: "PR", label: "Puerto Rico" },
  { value: "RI", label: "Rhode Island" },
  { value: "SC", label: "South Carolina" },
  { value: "SD", label: "South Dakota" },
  { value: "TN", label: "Tennessee" },
  { value: "TX", label: "Texas" },
  { value: "UT", label: "Utah" },
  { value: "VT", label: "Vermont" },
  { value: "VI", label: "Virgin Islands" },
  { value: "VA", label: "Virginia" },
  { value: "WA", label: "Washington" },
  { value: "WV", label: "West Virginia" },
  { value: "WI", label: "Wisconsin" },
  { value: "WY", label: "Wyoming" }
]


const getStateAbbreviation = (fullName) => {
  const match = states.find(s => s.label === fullName);
  return match ? match.value : fullName;
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return isNaN(date) ? dateString : date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
};

export const columns = [
  {
    name: "First Name",
    selector: row => row["First Name"],
    sortable: true
  },
  {
    name: "Last Name",
    selector: row => row["Last Name"],
    sortable: true
  },
  {
    name: "Date of Birth",
    selector: row => formatDate(row["Date of Birth"]),
    sortable: true,
    sortFunction: (a, b) => new Date(a["Date of Birth"]) - new Date(b["Date of Birth"]),
    width: '150px'
  },
  {
    name: "Start Date",
    selector: row => formatDate(row["Start Date"]),
    sortable: true,
    sortFunction: (a, b) => new Date(a["Start Date"]) - new Date(b["Start Date"]),
    width: '150px'
  },
  {
    name: "Department",
    selector: row => row["Department"],
    sortable: true
  },
  {
    name: "Street",
    selector: row => row["Street"],
    sortable: true
  },
  {
    name: "City",
    selector: row => row["City"],
    sortable: true
  },
  {
    name: "State",
    selector: row => getStateAbbreviation(row["State"]),
    sortable: true,
    width: '90px'
  },
  {
    name: "Zip Code",
    selector: row => row["Zip Code"],
    sortable: true,
    width: '90px'
  }
]