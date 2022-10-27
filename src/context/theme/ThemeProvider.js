import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';

export const themeContext = createContext();
const ThemeProvider = ({children}) => {
    const [isChecked, setIsChecked] = useState(true);


    const themeInfo = {isChecked, setIsChecked};
    return (
        <themeContext.Provider value={themeInfo}>
            {children}
        </themeContext.Provider>
    );
};

export default ThemeProvider;