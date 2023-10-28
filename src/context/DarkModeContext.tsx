import { createContext, useContext, useEffect, useLayoutEffect, useState } from 'react';


type Props = {
    children: React.ReactNode;
}

type DarkModeT = {
  isDarkMode: boolean, setDarkMode: (isDarkMode: boolean) => any
}

const DarkModeContext: any = createContext({});


function DarkModeProvider({ children }: Props) {

    const [isDarkMode, setIsDarkMode] = useState(false);
  
    // Verifica si el sistema operativo está en modo oscuro
    const isDarkModeSO = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
  
    const isDarkModeLocalStorage = JSON.parse(
      localStorage.getItem("darkMode") || "null"
    );
  
    useLayoutEffect(() => {
      setDarkMode(
        isDarkModeLocalStorage == null ? isDarkModeSO : isDarkModeLocalStorage
      );
      setDarkMode
    }, [isDarkModeLocalStorage, isDarkModeSO]);
  
    const setDarkMode = (isDark: any) => {
      setIsDarkMode(isDark);
      localStorage.setItem("darkMode", JSON.stringify(isDark));
      isDark
        ? document.body.classList.add("dark")
        : document.body.classList.remove("dark");
    };

    return (
      <DarkModeContext.Provider value={{ isDarkMode, setDarkMode }}>
        {children}
      </DarkModeContext.Provider>
    );
} 

const useDarkMode = (): DarkModeT => {
    return useContext(DarkModeContext);
  }

export {DarkModeContext, DarkModeProvider, useDarkMode};