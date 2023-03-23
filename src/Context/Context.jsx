import { useContext } from 'react';
import { useState } from 'react';
import { createContext } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [showMoreProjects, setShowMoreProjects] = useState(false);
  const toggleMoreProjects = () => {
    setShowMoreProjects(!showMoreProjects);
  };

  return (
    <AppContext.Provider value={{ showMoreProjects, toggleMoreProjects }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
