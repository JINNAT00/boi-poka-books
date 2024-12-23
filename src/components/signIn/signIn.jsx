import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';


function SignIn() {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.email && formData.password) {
      localStorage.setItem('userData', JSON.stringify(formData));
      alert('Sign In successful!');
      setFormData({ email: '', password: '' });
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '300px'}}>
        <h2 className='text-3xl'>Sign In</h2>
        <input
          type="email"
          name="email"
          placeholder="email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit" className=' border-2 bg-gray-200 text-gray-500'>Sign In</button>
      </form>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SignIn />
  </React.StrictMode>
  );

export default SignIn;