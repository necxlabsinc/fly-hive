import React, { useState } from 'react';
import axios from 'axios';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('/api/signup', { email, password });
      setMessage('Signup successful! Please login.');
    } catch (error) {
      setMessage('Signup failed.');
    }
  };

  return (
    <form onSubmit={handleSignup}>
      <h2>Sign Up</h2>
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" required />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" required />
      <button type="submit">Sign Up</button>
      {message && <p>{message}</p>}
    </form>
  );
}
