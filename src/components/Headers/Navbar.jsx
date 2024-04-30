import React, { useEffect, useState } from 'react';
import { UserOutlined, SunOutlined, MoonOutlined } from '@ant-design/icons';
import './navbar.scss';

import logo from '../../assets/commonIcons/logo.png';
import contrast from '../../assets/specialIcons/theme-modes.svg';
import { Link, useNavigate } from 'react-router-dom';
import { Avatar, Popover, Switch } from 'antd';
import CustomButtons from '../CComponents/CustomInput/CustomButtons';

const Navbar = () => {
  const naviagate = useNavigate();
  const role = 'user';
  const [theme, setTheme] = useState(true);

  const handleTheme = (e) => {
    setTheme(e);
    
  };

  const content = (
    <div className='user-details-links'>
      <a
        className='options-container'
        href='/'>
        <UserOutlined />
        <span>Profile</span>
      </a>
      <div className='options-container'>
        {theme ? <SunOutlined /> : <MoonOutlined />}
        <span>Theme</span>
        <Switch
          onChange={handleTheme}
          size='small'
          checked={theme}
        />
      </div>
      <CustomButtons variant='primary'>logout</CustomButtons>
    </div>
  );

  useEffect(() => {
    const role = 'user';
    if (!role) {
      naviagate('/login');
      return;
    }
  }, [naviagate]);
  return (
    <div className='navbar-container'>
      <div className='logo-container'>
        <Link to='/'>
          <img
            src={logo}
            alt='sarathi-logo'
          />
        </Link>
      </div>
      <div className='link-container'>
        {role === 'user' ? (
          <ul className='link-wrapper'>
            <li>
              <Link to={'/'}>Home</Link>
            </li>
            <li>
              <Link to={'/bookings'}>Applied</Link>
            </li>
            <li>
              <Link to={'/bookings'}>Bookings</Link>
            </li>
          </ul>
        ) : (
          <ul className='link-wrapper'>
            <li>
              <Link to={'/'}>Home</Link>
            </li>
            <li>
              <Link to={'/bookings'}>Applied</Link>
            </li>
            <li>
              <Link to={'/bookings'}>Bookings</Link>
            </li>
          </ul>
        )}
      </div>
      <div>
        <Popover
          placement='bottom'
          trigger='click'
          content={content}>
          <Avatar
            shape='square'
            size='large'
            icon={<UserOutlined />}
          />
        </Popover>
      </div>
    </div>
  );
};

export default Navbar;
