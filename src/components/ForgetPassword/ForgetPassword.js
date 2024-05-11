import React, { useState } from 'react';
import { FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import './ForgetPassword.css';

const ForgetPassword = () => {
  const [formData, setFormData] = useState({
    email: '',
  });

  const [errors, setErrors] = useState({});

  const validationSchema = Yup.object({
    email: Yup.string()
      .required('Email is required')
      .email('Invalid email format'),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await validationSchema.validate(formData, { abortEarly: false });
      // Send password recovery email or initiate multi-factor recovery process
      console.log('Password recovery initiated for email:', formData.email);
    } catch (error) {
      const newErrors = {};

      error.inner.forEach((err) => {
        newErrors[err.path] = err.message;
      });

      setErrors(newErrors);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1>Forgot Password</h1>

      <div className="input-box">
        <label>
          <FaEnvelope className="icon" /> Email:{' '}
        </label>
        <br />
        <input
          type="email"
          name="email"
          value={formData.email}
          placeholder="Enter your email"
          onChange={handleChange}
        />
        {errors.email && <div className="error">{errors.email}</div>}
      </div>

      <button type="submit" className="button">
        Reset Password
      </button>

      <div className="back-to-login">
        <Link to="/login">Back to Login</Link>
      </div>
    </form>
  );
};

export default ForgetPassword;