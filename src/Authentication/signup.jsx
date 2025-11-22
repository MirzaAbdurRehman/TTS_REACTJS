import React, { useState } from 'react';
import axios from 'axios';
import './Signup.css';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Optional: set a base URL for axios requests (adjust if your backend base differs)
  // axios.defaults.baseURL = process.env.REACT_APP_API_BASE || ''; 
  // If server is at same host + port proxy or relative path, leave blank or set '/api'

  const saveTokenAndSetHeader = (token) => {
    if (!token) return;
    localStorage.setItem('token', token);
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  };

  // If your app loads and you want axios to use existing token:
  // const tokenOnLoad = localStorage.getItem('token');
  // if (tokenOnLoad) axios.defaults.headers.common['Authorization'] = `Bearer ${tokenOnLoad}`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (password !== confirmPassword) {
      setError("Passwords don't match");
      return;
    }

    if (!email || !password) {
      setError('Email and password are required');
      return;
    }

    setLoading(true);
    try {
      // Adjust path if API base differs; this assumes your server mounts routes under /api
      const response = await axios.post('http://localhost:5001/api/userAuth/signup', {
        email,
        password,
      }, {
        headers: { 'Content-Type': 'application/json' },
      });

      const data = response.data;
      if (data?.token) {
        saveTokenAndSetHeader(data.token);
      }

      setSuccess(data?.message || 'Signup successful');
      setLoading(false);

      // Redirect to dashboard
      setTimeout(() => {
        window.location.href = '/dashboard';
      }, 1500);
    } catch (err) {
      setLoading(false);
      // axios error handling
      if (err.response) {
        // Server responded with a status outside 2xx
        setError(err.response.data?.message || `Error: ${err.response.status}`);
      } else if (err.request) {
        // Request was made but no response
        setError('No response from server. Check backend.');
      } else {
        // Some other error
        setError('Signup failed. Try again.');
      }
    }
  };

  return (
    <div className="auth-container">
      <br />
      <div className="form-container">
        <h2>Signup</h2>

        {error && <div className="error" style={{ color: 'red', marginBottom: 10 }}>{error}</div>}
        {success && <div className="success" style={{ color: 'green', marginBottom: 10 }}>{success}</div>}

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={loading}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            disabled={loading}
          />

          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            disabled={loading}
          />

          <button type="submit" disabled={loading}>
            {loading ? 'Signing up...' : 'Signup'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;