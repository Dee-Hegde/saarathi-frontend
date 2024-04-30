import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Headers/Navbar';

const UserLayouts = (props) => {
  const navigate = useNavigate();
  const role = "user";

  if (!role) {
    navigate('/login');
    return;
  }
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>{props.children}</div>
    </div>
  );
};

export default UserLayouts;
