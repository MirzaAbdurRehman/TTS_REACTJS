import React, { useState } from 'react';
import axios from 'axios';                     // ← ADD THIS
import './Signin.css';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await axios.post(
        'http://localhost:5001/api/userAuth/login', 
        { email, password },
        { 
          withCredentials: true,               // ← keeps the same behavior as your fetch (for future cookies)
          headers: { 'Content-Type': 'application/json' }
        }
      );

      // Axios puts response body in res.data
      const data = res.data;

      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));

      alert('Login successful!');
      window.location.href = '/dashboard';      // change to your route

    } catch (err) {
      // Much better error handling with Axios
      const message = 
        err.response?.data?.message || 
        err.message || 
        'Login failed. Please try again.';
      
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="form-container">
        <h2>Signin</h2>

        {error && <p style={{ color: 'red', textAlign: 'center', margin: '10px 0' }}>{error}</p>}

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
          <button type="submit" disabled={loading}>
            {loading ? 'Signing in...' : 'Signin'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signin;