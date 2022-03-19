import React, { useCallback, useContext, useState } from "react";

const ContrastContext = React.createContext();

export const useContrastMode = () => useContext(ContrastContext);

export const ContrastProvider = ({ children }) => {
  const [isHighContrastMode, setHighContrastMode] = useState(
    () => localStorage.getItem("contrastMode") === "true"
  );

  const changeContrastMode = useCallback(() => {
    setHighContrastMode((prev) => {
      localStorage.setItem("contrastMode", !prev);
      return !prev;
    });
  }, []);

  return (
    <ContrastContext.Provider
      value={{ isHighContrastMode, changeContrastMode }}
    >
      {children}
    </ContrastContext.Provider>
  );
};
