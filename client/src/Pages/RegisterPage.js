import React, { useState } from 'react';

const RegisterPage = () => {
  // Use useState to hold the form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  // Destructure the values from formData for easy access
  const { name, email, password } = formData;

  // This function updates the state on every keystroke
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // This function will handle the form submission
  const onSubmit = (e) => {
    e.preventDefault(); // Prevents the browser from refreshing
    console.log('Register submit', formData);
    // We will connect this to our API on Day 10
  };

  return (
    <div>
      <h1>Register</h1>
      <p>Create your account</p>
      <form onSubmit={onSubmit}>
        <div>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={onChange}
            required
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={onChange}
            required
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={onChange}
            minLength="6"
            required
          />
        </div>
        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default RegisterPage;