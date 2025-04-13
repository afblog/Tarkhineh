import { createContext, useContext, useState } from "react"

const UIContext = createContext()
export const useUI = () => useContext(UIContext)

export const UIProvider = ({ children }) => {
  const [isAlert, setIsAlert] = useState(null)
  const [alertMsg, setAlertMsg] = useState("")
  const [loading, setLoading] = useState(true)

  return (
    <UIContext.Provider value={{
      isAlert,
      setIsAlert,
      alertMsg,
      setAlertMsg,
      loading,
      setLoading
    }}>
      {children}
    </UIContext.Provider>
  )
}