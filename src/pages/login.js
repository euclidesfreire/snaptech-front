import React, { useState } from 'react';

export default function Login() {
    const [form, setForm] = useState({ email: '' });
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        window.location.href = '/';
      } else {
        const data = await res.json();
        alert(data.message);
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <button type="submit">Login</button>
      </form>
    );
  }
  