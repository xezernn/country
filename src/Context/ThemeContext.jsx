import React, { createContext, useState } from 'react'
export const Theme = createContext()
function ThemeContext({ children }) {
    const [dark, setDark] = useState(true)
    const obj = {dark, setDark}
  return (
    <Theme.Provider value={obj}>
        {children}
    </Theme.Provider>
  )
}

export default ThemeContext