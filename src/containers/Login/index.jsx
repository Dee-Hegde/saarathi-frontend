import React, { useState } from 'react';
import './login.scss';
import logo from '../../assets/commonIcons/logo.png';
import loginPoster from '../../assets/authIcons/loginPoster.png';
import CustomInput from '../../components/CComponents/CustomInput/CustomInput';
import CustomButtons from '../../components/CComponents/CustomInput/CustomButtons';
import { useNavigate } from 'react-router-dom';
import { checkIsValid, regaxConstants } from '../../utils/util';

const Login = () => {
  const navigate = useNavigate();
  const [payload, setPayload] = useState({ email: '', password: '' });
  const [error, setError] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPayload({ ...payload, [name]: value });
    setError({ ...error, [name]: '' });
  };

  const handleLogin = () => {
    if (
      payload?.email &&
      payload?.password &&
      payload?.password.length > 4 &&
      checkIsValid(payload?.email, regaxConstants.emailFormat)
    ) {
      navigate('/');
    } else {
      let emailError = '';
      let passwordError = '';
      if (
        !payload?.email ||
        !checkIsValid(payload?.email, regaxConstants.emailFormat)
      ) {
        emailError = 'Please enter a valid email';
      }
      if (!payload?.password || payload?.password?.length <= 4) {
        passwordError = 'Please enter a valid password';
      }
      setError({ email: emailError, password: passwordError });
    }
  };

  return (
    <div className='login-container'>
      <div className='left-container'>
        <img
          src={loginPoster}
          alt='login poster'
        />
      </div>
      <div className='right-container'>
        <div className='logo-section'>
          <img
            className='logo'
            src={logo}
            alt=''
          />
          <p>made for travellers.</p>
        </div>
        <div className='wrapper'>
          <div className='title-section'>
            <h1>Welcome!.</h1>
          </div>
          <div className='input-containers'>
            <div className='email-container'>
              <label>Email address</label>
              <CustomInput
                value={payload.email}
                type='email'
                onChange={handleChange}
                name='email'
              />
              <span className='email-error'>{error?.email}</span>
            </div>
            <div className='email-container'>
              <label>Password</label>
              <CustomInput
                value={payload.password}
                type='password'
                onChange={handleChange}
                name='password'
                variant='password'
                placeholder=''
              />
              <span className='email-error'>{error.password}</span>
            </div>
            <div className='input-containers'>
              <CustomButtons
                onClick={handleLogin}
                variant='primary'>
                Login
              </CustomButtons>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
