import { useEffect } from "react";
import { createContext, useState } from "react";

export const GlobalContext = createContext();

export function GlobalContextProvider({ children }) {

  const [isAlert, setIsAlert] = useState(null)
  const [alertMsg, setAlertMsg] = useState('')

  const [isLogin, setIsLogin] = useState(true)

  const [loading, setLoading] = useState(true);

  const [isMainCourse, setIsMainCourse] = useState(true);
  const [isAppetizer, setIsAppetizer] = useState(false)
  const [isDessert, setIsDessert] = useState(false)
  const [isDrink, setIsDrink] = useState(false)

  // 	Appetizer
  const [iranianAppetizer, setAppetizerProducts] = useState([])
  const [nonIranianAppetizer, setNonIranianAppetizer] = useState([])

  // Dessert
  const [iranianDessert, setIranianDessert] = useState([])
  const [nonIranianDessert, setNonIranianDessert] = useState([])

  // Drink
  const [iranianDrink, setIranianDrink] = useState([])
  const [nonIranianDrink, setNonIraniandrink] = useState([])

  // Dashboard
  const [isUserProfil, setIsUserProfil] = useState(true)
  const [isUserOrder, setIsUserOrder] = useState(false)
  const [isUserInterests, setIsUserInterests] = useState(false)
  const [isUserAddress, setIsUserAddress] = useState(false)

  const userProfilHandler = async () => {
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

  // Shopping Cart
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart')
    return savedCart ? JSON.parse(savedCart) : []
  })

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id)
      if (existingItem) {
        return prevCart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      } else {
        return [...prevCart, { ...product, quantity: 1 }]
      }
    })
  }

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter((item) => item.id !== productId))
  }

  const updateQuantity = (productId, amount) => {
    setCart(prevCart => prevCart.map(item =>
      item.id === productId ? { ...item, quantity: item.quantity + amount } : item
    ).filter(item => item.quantity > 0));
  }

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)


  const mainCourseHandler = () => {
    setIsMainCourse(true);
    setIsAppetizer(false);
    setIsDessert(false);
    setIsDrink(false);
  };

  const appetizerHandler = async () => {
    setIsMainCourse(false)
    setIsAppetizer(true)
    setIsDessert(false)
    setIsDrink(false)
  }

  const dessertHandler = async () => {
    setIsMainCourse(false)
    setIsAppetizer(false)
    setIsDessert(true)
    setIsDrink(false)
  }

  const drinkHandler = async () => {
    setIsMainCourse(false)
    setIsAppetizer(false)
    setIsDessert(false)
    setIsDrink(true)
  }

  const toPersianDigits = (num) => num.toLocaleString("fa-IR");

  const logoutHandler = () => {
    setIsLogin(false)
    setIsAlert('success')
    setAlertMsg('از حساب خود خارج شدید')
  }

  return (
    <GlobalContext.Provider value={{
      isMainCourse,
      isAppetizer,
      isDessert,
      isDrink,
      isAlert,
      alertMsg,
      setIsAlert,
      setAlertMsg,
      loading,
      setLoading,
      iranianDrink,
      isLogin,
      cart,
      setCart,
      addToCart,
      removeFromCart,
      updateQuantity,
      totalPrice,
      setIsLogin,
      nonIranianDrink,
      iranianDessert,
      nonIranianDessert,
      iranianAppetizer,
      nonIranianAppetizer,
      mainCourseHandler,
      appetizerHandler,
      dessertHandler,
      drinkHandler,
      toPersianDigits,
      isUserProfil,
      isUserOrder,
      isUserInterests,
      isUserAddress,
      userProfilHandler,
      userOrderHandler,
      userInterestsHandler,
      userAddressHandler,
      logoutHandler
    }}>
      {children}
    </GlobalContext.Provider>
  );
}
