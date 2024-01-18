import React, { createContext, useState } from "react";
export const CustomDataContext = createContext();

const CustomDataProvider = ({ children }) => {

  const [isCustomDark, setIsCustomDark] = useState(true);
  const [customClick, setCustomClick] = useState("customHome");
  const [customScore, setCustomScore] = useState(0);
  const [customLogo, setCustomLogo] = useState(true);

  return (
    <CustomDataContext.Provider value={{ isCustomDark, setIsCustomDark, customClick, setCustomClick, customScore, setCustomScore, customLogo, setCustomLogo }}>
      {children}
    </CustomDataContext.Provider>
  );
};

export default CustomDataProvider;
