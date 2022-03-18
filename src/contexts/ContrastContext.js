import React, { useCallback, useContext, useState } from "react";

const ContrastContext = React.createContext();

export const useContrastMode = () => useContext(ContrastContext);

export const ContrastProvider = ({ children }) => {
  const [isHighContrastMode, setHighContrastMode] = useState(false);

  const changeContrastMode = useCallback(() => {
    setHighContrastMode((prev) => !prev);
  }, []);

  return (
    <ContrastContext.Provider
      value={{ isHighContrastMode, changeContrastMode }}
    >
      {children}
    </ContrastContext.Provider>
  );
};
