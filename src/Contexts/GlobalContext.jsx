import { useEffect } from "react";
import { createContext, useState } from "react";
import Cookies from "js-cookie";

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
    try {
      setLoading(true)
      const response = await fetch(`https://tarkhine-test1.liara.run/store/categoriesfull/`);
      const data = await response.json();
      if (Array.isArray(data) && data.length >= 4) {
        if (data[1].title === "Appetizer") {
          setAppetizerProducts(data[1].product_models[0].products)
          setNonIranianAppetizer(data[1].product_models[1].products)
          setLoading(false)
        }
      } else {
        setIsAlert('error');
        setAlertMsg("محصولی یافت نشد");
      }
    } catch (err) {
      setIsAlert('error');
      setAlertMsg('مشکلی در دریافت اطلاعات از سرور رخ داده است');
    }
  }

  const dessertHandler = async () => {
    setIsMainCourse(false)
    setIsAppetizer(false)
    setIsDessert(true)
    setIsDrink(false)

    try {
      setLoading(true)
      const response = await fetch(`https://tarkhine-test1.liara.run/store/categoriesfull/`);
      const data = await response.json();
      if (Array.isArray(data) && data.length >= 4) {
        if (data[2].title === "Dessert") {
          setIranianDessert(data[2].product_models[0].products)
          setNonIranianDessert(data[2].product_models[1].products)
          setLoading(false)
        }
      } else {
        setIsAlert('error');
        setAlertMsg("محصولی یافت نشد");
      }
    } catch (err) {
      setIsAlert('error');
      setAlertMsg('مشکلی در دریافت اطلاعات از سرور رخ داده است');
    }
  }

  const drinkHandler = async () => {
    setIsMainCourse(false)
    setIsAppetizer(false)
    setIsDessert(false)
    setIsDrink(true)

    try {
      setLoading(true)
      const response = await fetch(`https://tarkhine-test1.liara.run/store/categoriesfull/`);
      const data = await response.json();
      if (Array.isArray(data) && data.length >= 4) {
        if (data[3].title === "Drink") {
          setIranianDrink(data[3].product_models[0].products)
          setNonIraniandrink(data[3].product_models[1].products)
          setLoading(false)
        }
      } else {
        setIsAlert('error');
        setAlertMsg("محصولی یافت نشد");
      }
    } catch (err) {
      setIsAlert('error');
      setAlertMsg('مشکلی در دریافت اطلاعات از سرور رخ داده است');
    }
  }

  const toPersianDigits = (num) => num.toLocaleString("fa-IR");

  const logoutHandler = () => {
    Cookies.remove("accessToken");
    Cookies.remove("refreshToken");
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
