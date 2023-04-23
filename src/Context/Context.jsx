import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { CONSTANTS } from '../constants';
import { useTranslation } from 'react-i18next';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [showMoreProjects, setShowMoreProjects] = useState(false);
  const [atBottom, setAtBottom] = useState(false);
  const [theme, setTheme] = useState('light');
  const toggleMoreProjects = () => {
    setShowMoreProjects(!showMoreProjects);
  };
  const { t } = useTranslation();

  // For handling whether the user has scrolled to bottom of page - changes sidebar color
  const handleScroll = () => {
    const pageBottom =
      Math.ceil(window.innerHeight + window.scrollY) >=
      document.documentElement.scrollHeight -
        CONSTANTS.SPACE_BEFORE_PAGE_BOTTOM;
    if (pageBottom) {
      setAtBottom(true);
    } else {
      setAtBottom(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Changes the document title based on the language selected
  useEffect(() => {
    document.title = t('app-title');
  }, [t]);

  // Light/Dark theme toggler
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    window.localStorage.setItem('theme', theme);
  };
  // useEffect(() => {
  //   const userTheme = localStorage.getItem('theme');
  //   setTheme(userTheme);
  // }, [setTheme]);
  return (
    <AppContext.Provider
      value={{
        showMoreProjects,
        toggleMoreProjects,
        atBottom,
        toggleTheme,
        theme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
