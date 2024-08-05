import React, { createContext, useState, useContext } from 'react';

const GuestContext = createContext();

export const GuestProvider = ({ children }) => {
  const [guests, setGuests] = useState(1);

  return (
    <GuestContext.Provider value={{ guests, setGuests }}>
      {children}
    </GuestContext.Provider>
  );
};

export const useGuests = () => useContext(GuestContext);
