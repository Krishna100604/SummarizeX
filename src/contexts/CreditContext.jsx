import React, { createContext, useState, useEffect } from 'react';
import { useClerk } from '@clerk/clerk-react';

const CreditContext = createContext();

export const CreditProvider = ({ children }) => {
  const { user } = useClerk();
  const userId = user ? user.id : ''; // Get user ID if user is defined

  const [credits, setCredits] = useState(() => {
    const storedCredits = JSON.parse(localStorage.getItem(`credits_${userId}`));
    return storedCredits !== null ? storedCredits : 15; // Default to 15 credits if none found
  });

  useEffect(() => {
    const storedCredits = JSON.parse(localStorage.getItem(`credits_${userId}`));
    if (storedCredits !== null) {
      setCredits(storedCredits);
    } else {
      localStorage.setItem(`credits_${userId}`, JSON.stringify(credits));
    }
  }, [credits, userId]);

  const updateCredits = (newCredits) => {
    setCredits(newCredits);
    localStorage.setItem(`credits_${userId}`, JSON.stringify(newCredits));
  };

  const incrementCredits = (amount) => {
    setCredits(prevCredits => prevCredits + amount);
    localStorage.setItem(`credits_${userId}`, JSON.stringify(credits + amount));
  };

  return (
    <CreditContext.Provider value={{ credits, updateCredits, incrementCredits }}>
      {children}
    </CreditContext.Provider>
  );
};

export default CreditContext;
