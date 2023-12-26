import React, { createContext, useState } from 'react'
export const Theme = createContext()
function ThemeContext({ children }) {

  const [dark, setDark] = useState(false)
  // const [dark, setDark] = useState(true)
  const color = dark ? "dark:bg-gray-200 text-gray-600" : ""
  const obj = { dark, setDark, color }
  return (
    <Theme.Provider value={obj}>
      {children}
    </Theme.Provider>
  )
}

export default ThemeContext