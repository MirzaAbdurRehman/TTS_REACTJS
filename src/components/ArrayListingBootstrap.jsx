

import React from 'react'
import { Table  } from "react-bootstrap";

const ArrayListingBootstrap = () => {
const employeeInfo =[
   
  {id: 1, name: "Ali", age: 28, designation: "Developer"},
  {id: 2, name: "Jane", age: 32, designation: "Manager"},
  {id: 3, name: "Maryam", age: 25, designation: "Designer"},
  {id: 4, name: "Doe", age: 25, designation: "HR"},
  {id: 5, name: "Sara", age: 29, designation: "QA Engineer"},
  {id: 6, name: "Ahmed", age: 34, designation: "Team Lead"},
  {id: 7, name: "Omar", age: 27, designation: "Frontend Developer"},
  {id: 8, name: "Zainab", age: 30, designation: "Backend Developer"},
  {id: 9, name: "Usman", age: 26, designation: "Data Analyst"},
  {id: 10, name: "Ayesha", age: 31, designation: "Project Manager"},
  {id: 11, name: "Hassan", age: 24, designation: "Intern"},
  {id: 12, name: "Fatima", age: 33, designation: "UI/UX Designer"},
  {id: 13, name: "Bilal", age: 29, designation: "DevOps Engineer"},
  {id: 14, name: "Sana", age: 28, designation: "Product Owner"},
  {id: 15, name: "Maryam", age: 21, designation: "CSR"},
  {id: 16, name: "Maryam", age: 23, designation: "CS"},
];
  return (
  <>
  <h2>Array Of Listing</h2>

  <Table variant='dark' striped bordered hover>
    <thead>
      <tr>
        <th>ID</th>         
        <th>Name</th>
        <th>Age</th>
        <th>Designation</th>        
        </tr>
    </thead>
    <tbody>
      {
       employeeInfo.map((emp, i) => {
    return (

        emp.name === "Maryam" ? (       
        <tr key={emp.id}>
            <td>{emp.id}</td>
            <td>{emp.name}</td>
            <td>{emp.age}</td>
            <td>{emp.designation}</td>
        </tr>
    ): null
);
})
      }
    </tbody>

  </Table>
  </>
  )
}

export default ArrayListingBootstrap;

