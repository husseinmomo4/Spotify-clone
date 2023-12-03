import { View, Text } from 'react-native'
import React, {createContext , useState} from 'react'

export const New = createContext () 
export const Auth =({children}) => {
const [userToken, setUserToken] = useState(null);

 const login = () => {
    setUserToken('ioioi')
 } 

 const logout =() => {
    setUserToken(null)
 }
  return (
 <New.Provider value={{login, logout, userToken}} >
    {children}
 </New.Provider>
  )
}

