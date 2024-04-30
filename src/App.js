import { Route, Routes } from 'react-router-dom';
import Login from './containers/Login';
import UserLayouts from './routes/UserLayouts';
import UserDashboard from './containers/UserDashboard/UserDashboard';

function App() {
  const role = 'user';
  const userFlow = [
    { path: '/', element: 'UserDashboard' },
    { path: '/applied', element: 'UserDashboard' },
    { path: '/bookings', element: 'bookings' }
  ];
  const ownerFlow = [
    { path: '/', element: 'OwnerDashboard' },
    { path: '/posts', element: 'bookings' }
  ];

  if (!role) {
    return <Login />;
  } else {
    return (
      <Routes>
        <Route path="/login" element={<Login />} />
        {role === 'user' &&
          userFlow.map((item, index) => (
            <Route
              key={index}
              path={item.path}
              element={
                <UserLayouts>
                  <UserDashboard />
                </UserLayouts>
              }
            />
          ))}
        {role === 'owner' &&
          ownerFlow.map((item, index) => (
            <Route
              key={index}
              path={item.path}
              element={
                <UserLayouts>
                  <UserDashboard />
                </UserLayouts>
              }
            />
          ))}
      </Routes>
    );
  }
}

export default App;
