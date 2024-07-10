import React, { createContext, useState, useEffect } from 'react';

const CreditContext = createContext();

export const CreditProvider = ({ children }) => {
  const [credits, setCredits] = useState(() => {
    const storedCredits = JSON.parse(localStorage.getItem('credits'));
    return storedCredits !== null ? storedCredits : 15; // Default value if no stored credits
  });

  useEffect(() => {
    localStorage.setItem('credits', JSON.stringify(credits));
  }, [credits]);

  const updateCredits = (newCredits) => {
    setCredits(newCredits);
  };

  return (
    <CreditContext.Provider value={{ credits, updateCredits }}>
      {children}
    </CreditContext.Provider>
  );
};

export default CreditContext;
