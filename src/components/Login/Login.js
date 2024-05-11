import React, { useState } from 'react';
import { FaLock, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const validationSchema = Yup.object().shape({
    email: Yup.string().required('Email is required').email('Invalid email format'),
    password: Yup.string()
      .required('Password is required')
      .min(8, 'Password must be at least 8 characters')
      .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one symbol')
      .matches(/[0-9]/, 'Password must contain at least one number')
      .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
      .matches(/[a-z]/, 'Password must contain at least one lowercase letter'),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await validationSchema.validate(formData, { abortEarly: false });
      console.log('Form Submitted', formData);
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

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1>Login</h1>
      <div className="input-box">
        <label>
          <FaUser className="icon" /> Email:{' '}
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
      <div className="input-box">
        <label>
          <FaLock className="icon" /> Password:{' '}
        </label>
        <br />
        <input
          type="password"
          name="password"
          value={formData.password}
          placeholder="Enter your password"
          onChange={handleChange}
        />
        {errors.password && <div className="error">{errors.password}</div>}
      </div>

      {/* Remember me check-box */}
      <div className="form-options">
        <label className="checkbox">
          <input type="checkbox" name="remember" /> Remember Me
        </label>
        <a href="#" className="forgot-password">
         <Link to="/ForgetPassword"> Forgot Password? </Link>
        </a>
      </div>

      <button type="submit" className="button">
        Login
      </button>
      <div className="already-have-account">
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </div>
    </form>
  );
};

export default Login;

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import * as Yup from 'yup';
// import './Login.css';
// import { FaUser, FaLock } from 'react-icons/fa';
// import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
// import { jwtDecode } from "jwt-decode";

// const Login = () => {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const [errors, setErrors] = useState({});

//   const validationSchema = Yup.object({
//     email: Yup.string()
//       .required("Email is Required")
//       .email("Invalid email format"),
//     password: Yup.string()
//       .required("Password is required")
//       .min(8, "Password must be at least 8 characters")
//       .matches(
//         /[!@#$%^&*(),.?":{}|<>]/,
//         "Password must contain at least one symbol"
//       )
//       .matches(/[0-9]/, "Password must contain at least one number")
//       .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
//       .matches(/[a-z]/, "Password must contain at least one lowercase letter"),
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       await validationSchema.validate(formData, {abortEarly: false});
//       console.log("Form Submitted", formData);
//     } catch (error) {
//       const newErrors = {};

//       error.inner.forEach((err) => {
//         newErrors[err.path] = err.message;
//       });

//       setErrors(newErrors);
//     }
//   };

//   const handleChange = (e) => {
//     const {name, value} = e.target;

//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   return (
//     <GoogleOAuthProvider clientId="
//     942340641071-nrq6r30ri68ch9rrs699k9lb1fu3ds4p.apps.googleusercontent.com">
//       <div>
//         <form className="form" onSubmit={handleSubmit}>
//           <h1>Login</h1>
//           <div className='input-box'>
//             <label><FaUser className='icon'/> Email: </label><br/>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               placeholder="Enter your email"
//               onChange={handleChange}
//             />
//             {errors.email && <div className="error">{errors.email}</div>}
//           </div>
//           <div className='input-box'>
//             <label><FaLock className='icon'/> Password:  </label><br/>
//             <input
//               type="password"
//               name="password"
//               value={formData.password}
//               placeholder="Enter your password"
//               onChange={handleChange}
//             />
//             {errors.password && <div className="error">{errors.password}</div>}
//           </div>

//           {/* Remember me check-box */}
//           <div className="form-options" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//             <label className="checkbox">
//               <input type="checkbox" name="remember" /> Remember Me
//             </label>
//             <a href="#" className="forgot-password">Forgot Password?</a>
//           </div>

//           <button type='submit' className='button'>Login</button>
  
//           <GoogleLogin
  
//             onSuccess={credentialResponse => {
//               const credentialResponseDecode = jwtDecode(credentialResponse.credential);
//               console.log(credentialResponseDecode);
//             }}
//             onError={() => {
//               console.log('Login Failed');
//             }}

//            />

//           <div className="already-have-account">
//             Don't have an account? <Link to="/signup">Sign Up</Link>
//           </div>
//         </form>
//       </div>
//     </GoogleOAuthProvider>
//   );
// };

// export default Login;

