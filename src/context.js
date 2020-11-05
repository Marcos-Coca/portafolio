import React, { createContext, useState } from "react"

const NavbarContext = createContext()

export function NavbarProvider({ children }) {
  const [checked, setChecked] = useState(false)
  return (
    <NavbarContext.Provider value={{ checked, setChecked }}>
      {children}
    </NavbarContext.Provider>
  )
}

export default NavbarContext
