


import React from 'react';
import './DataFetching.css';
import useFetchData from './CustomsHooks'; // import your custom hook

const FetchingApi = () => {
  const { data, loading, error } = useFetchData('https://jsonplaceholder.typicode.com/users');

  if (loading) {
    return <div className="loading">Loading data...</div>;
  }

  if (error) {
    return <div className="error">❌ Error: {error}</div>;
  }

  return (
    <div className="container">
      <h2 className="title">📊 User Data from API</h2>
      <table className="styled-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>City</th>
            <th>Latitude</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.username}</td>
              <td>{item.email}</td>
              <td>{item.address.city}</td>
              <td>{item.address.geo.lat}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FetchingApi;
