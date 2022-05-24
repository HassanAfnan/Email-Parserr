import React, { useState, useEffect, createContext } from "react"

export const UserContext = createContext()

export const UserProvider = props => {
  
  const [token, setToken] = useState("")
  const [userData, setUserData] = useState({})

  return (
    <UserContext.Provider value={{ token, setToken }}>
      {props.children}
    </UserContext.Provider>
  )
}