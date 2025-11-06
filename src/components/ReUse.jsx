import React from 'react'
import Employee from './Employee'

const ReUse = () => {
  const userData = [
    { name: 'Alice', age: 25, location: 'New York' },
    { name: 'Bob', age: 30, location: 'San Francisco' },
    { name: 'Charlie', age: 28, location: 'Chicago' }
  ]

  return (
    <>
      <h2>Re-Usable Component Example</h2>
      {userData.map((item, index) => (
        <Employee key={index} data={item} />
      ))}
    </>
  )
}

export default ReUse
