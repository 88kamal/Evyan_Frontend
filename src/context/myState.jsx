import { useState } from 'react';
import MyContext from './myContext';

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
    return (
        <MyContext.Provider value={{
            alert, showAlert,
        }}>
            {props.children}
        </MyContext.Provider>
    )
}

export default MyState