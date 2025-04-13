import { createContext, useContext, useState } from "react"
import { useUI } from "./UIContext"

const AuthContext = createContext()
export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(true)
  const { setIsAlert, setAlertMsg } = useUI()

  const logoutHandler = () => {
    setIsLogin(false)
    setIsAlert("success")
    setAlertMsg("از حساب خود خارج شدید")
  }

  return (
    <AuthContext.Provider value={{ isLogin, setIsLogin, logoutHandler }}>
      {children}
    </AuthContext.Provider>
  )
}