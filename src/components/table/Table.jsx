import React, { useState } from "react";
import { useSelector } from "react-redux";
import DataTable from "react-data-table-component";
import { columns, customStyles } from '../../assets/constants'
import "./table.scss"

export const Table = () => {
  const employees = useSelector(state => state.employees.employees)
  const [searchText, setSearchText] = useState("")
  const [perPage, setPerPage] = useState(5)  // Nombre d'éléments par page
  const [currentPage, setCurrentPage] = useState(1) // Page actuelle

  console.log(employees)

  //filtre les données selon la recherche (toutes les données si rien n'est demandé)
  const filteredData = employees.filter(employee => 
    Object.values(employee).some(value =>
      value?.toString().toLowerCase().includes(searchText.toLowerCase())
    )
  )

  const handleSearch = (e) => {
    setSearchText(e.target.value);
    setCurrentPage(1); // Reset à la première page lors de la recherche
  }

  const handlePageChange = page => {
    setCurrentPage(page);
  }

  const handlePerRowsChange = (newPerPage, page) => {
    setPerPage(newPerPage);
    setCurrentPage(page);
  }

  return (
    <>
      <input 
        className="search-input"
        type="text" 
        placeholder="Search..."
        value={searchText}
        onChange={handleSearch}
        style={{ marginBottom: "20px", padding: "5px", width: "200px" }}
      />
      
      <DataTable
        columns={columns}
        data={filteredData}
        customStyles={customStyles}
        pagination
        paginationPerPage={perPage} //choisi avec onChangeRowsPerPage
        paginationRowsPerPageOptions={[5, 10, 15]}  // Choix du nombre de users par page
        paginationComponentOptions={{
          noRowsPerPage: false, //si true, n'affiche pas la demande de nb de user par page
          rowsPerPageText: 'Users per page:',
          rangeSeparatorText: 'of'
        }}
        onChangePage={handlePageChange}
        onChangeRowsPerPage={handlePerRowsChange}
      />
    </>
  )
}
