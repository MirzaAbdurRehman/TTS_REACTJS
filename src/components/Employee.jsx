import React from 'react'

const Employee = ({ data: { name, age, location } }) => {
  return (
    <>
      <h3>{name}</h3>
      <p>Age: {age}</p>
      <p>Location: {location}</p>
    </>
  )
}

export default Employee
