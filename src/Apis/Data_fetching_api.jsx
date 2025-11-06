import React, { useState, useEffect } from 'react';
import './DataFetching.css'; // Import CSS for styling

const DataFetchingApi = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => console.log("Error fetching data: ", error));
  }, []);

  if (loading) {
    return <div className="loading">Loading data...</div>;
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

export default DataFetchingApi;
