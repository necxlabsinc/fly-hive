import React, { useState } from 'react';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';

export default function Reset() {
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token') || '';

  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('/api/reset', { token, password });
      setMessage('Password reset successful!');
    } catch (error) {
      setMessage('Failed to reset password.');
    }
  };

  return (
    <form onSubmit={handleReset}>
      <h2>Reset Password</h2>
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="New Password" required />
      <button type="submit">Reset Password</button>
      {message && <p>{message}</p>}
    </form>
  );
}

