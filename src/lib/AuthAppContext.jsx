import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthAppContext = createContext(null);

export function AuthAppProvider({ children }) {

  const [user, setUser] = useState(null);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [loading, setLoading] = useState(true);


  // Browser refresh / reopen হলেও login রাখবে
  useEffect(() => {

    const savedUser = localStorage.getItem('user');

    if (savedUser) {

      setUser(JSON.parse(savedUser));

      setIsLoggedIn(true);

    }

    setLoading(false);

  }, []);


  // Login
  const onLogin = (userData) => {

    setUser(userData);

    setIsLoggedIn(true);

    localStorage.setItem('user', JSON.stringify(userData));

  };


  // Logout
  const onLogout = () => {

    setUser(null);

    setIsLoggedIn(false);

    localStorage.removeItem('user');

  };



  return (

    <AuthAppContext.Provider
      value={{
        user,
        isLoggedIn,
        loading,
        onLogin,
        onLogout
      }}
    >

      {children}

    </AuthAppContext.Provider>

  );
}

export function useAuthApp() {
  return useContext(AuthAppContext);
}