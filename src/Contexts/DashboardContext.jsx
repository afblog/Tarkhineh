import { createContext, useContext, useState } from "react"

const DashboardContext = createContext()
export const useDashboard = () => useContext(DashboardContext)

export const DashboardProvider = ({ children }) => {
  const [isUserProfil, setIsUserProfil] = useState(true)
  const [isUserOrder, setIsUserOrder] = useState(false)
  const [isUserInterests, setIsUserInterests] = useState(false)
  const [isUserAddress, setIsUserAddress] = useState(false)

  const userProfilHandler = () => {
    setIsUserProfil(true)
    setIsUserOrder(false)
    setIsUserInterests(false)
    setIsUserAddress(false)
  }

  const userOrderHandler = () => {
    setIsUserProfil(false)
    setIsUserOrder(true)
    setIsUserInterests(false)
    setIsUserAddress(false)
  }

  const userInterestsHandler = () => {
    setIsUserProfil(false)
    setIsUserOrder(false)
    setIsUserInterests(true)
    setIsUserAddress(false)
  }

  const userAddressHandler = () => {
    setIsUserProfil(false)
    setIsUserOrder(false)
    setIsUserInterests(false)
    setIsUserAddress(true)
  }

  return (
    <DashboardContext.Provider value={{
      isUserProfil,
      isUserOrder,
      isUserInterests,
      isUserAddress,
      userProfilHandler,
      userOrderHandler,
      userInterestsHandler,
      userAddressHandler
    }}>
      {children}
    </DashboardContext.Provider>
  )
}