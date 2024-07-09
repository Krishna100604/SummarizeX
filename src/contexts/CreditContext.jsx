// CreditContext.js
import React, { createContext, useState, useEffect } from 'react';

const CreditContext = createContext();

export const CreditProvider = ({ children }) => {
  const [credits, setCredits] = useState(15);

  useEffect(() => {
    const storedCredits = JSON.parse(localStorage.getItem('credits'));
    if (storedCredits !== null) {
      setCredits(storedCredits);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('credits', JSON.stringify(credits));
  }, [credits]);

  const decrementCredits = () => {
    setCredits((prevCredits) => (prevCredits > 0 ? prevCredits - 1 : 0));
  };

  return (
    <CreditContext.Provider value={{ credits, decrementCredits }}>
      {children}
    </CreditContext.Provider>
  );
};

export default CreditContext;
