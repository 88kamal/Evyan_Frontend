/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import MyContext from './myContext';
import authService from '../service/authService';

function MyState(props) {  
  const [alert, setAlert] = useState({
    show: false,
    message: '',
    type: 'success',
    duration: 2000,
  });

  // Function to trigger an alert
  const showAlert = (message, type = 'success', duration = 2000) => {
    setAlert({ show: true, message, type, duration });

    // Automatically hide the alert after the specified duration
    setTimeout(() => {
      setAlert({ ...alert, show: false });
    }, duration);
  };

  const [user, setUser] = useState(null);

  useEffect(() => {
    // Initialize auth state on app load
    const currentUser = authService.getCurrentUser();
    setUser(currentUser);
  }, []);

  const updateAuthState = () => {
    const currentUser = authService.getCurrentUser();
    setUser(currentUser);
  };
  return (
    <MyContext.Provider value={{
      alert, showAlert,user, updateAuthState
    }}>
      {props.children}
    </MyContext.Provider>
  )
}

export default MyState