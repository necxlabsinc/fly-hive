import React, { useState } from 'react';
import axios from 'axios';

export default function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSignin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/signin', { email, password });
      localStorage.setItem('token', res.data.token); // Store JWT
      setMessage('Login successful!');
    } catch (error) {
      setMessage('Login failed.');
    }
  };

  return (
    <form onSubmit={handleSignin}>
      <h2>Sign In</h2>
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" required />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" required />
      <button type="submit">Sign In</button>
      {message && <p>{message}</p>}
    </form>
  );
}
