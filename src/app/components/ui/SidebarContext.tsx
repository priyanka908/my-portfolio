"use client";
import { createContext, useContext, useState } from "react";

type SidebarContextType = {
  isSidebarHovered: boolean;
  setIsSidebarHovered: (value: boolean) => void;
};

const SidebarContext = createContext<SidebarContextType>({
  isSidebarHovered: false,
  setIsSidebarHovered: () => {},
});

export const SidebarProvider = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarHovered, setIsSidebarHovered] = useState(false);

  return (
    <SidebarContext.Provider value={{ isSidebarHovered, setIsSidebarHovered }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebarContext = () => useContext(SidebarContext);
