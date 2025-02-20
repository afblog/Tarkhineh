import Header from '../components/Header'
import Slider from '../components/Slider'
import Alert from '../components/Alert'
import MenuPageBox from '../components/MenuPageBox'
import TitleMenuBox from '../components/TitleMenuBox'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState, useContext } from 'react'
import Footer from '../components/Footer'
import { GlobalContext } from '../Contexts/GlobalContext'

export default function Menu() {

  const {
    isMainCourse,
    isAppetizer,
    isDessert,
    isDrink,
    isAlert,
    alertMsg,
    setAlertMsg,
    setIsAlert,
    loading,
    setLoading,
    iranianDrink,
    nonIranianDrink,
    iranianDessert,
    nonIranianDessert,
    iranianAppetizer,
    nonIranianAppetizer,
    mainCourseHandler,
    appetizerHandler,
    dessertHandler,
    drinkHandler,
  } = useContext(GlobalContext)

  const navigate = useNavigate()

  const [iranianCuisine, setIranianCuisine] = useState([])
  const [nonIranianFoods, setNonIranianFoods] = useState([])
  const [pizzas, setPizzas] = useState([])
  const [sandwiches, setSandwiches] = useState([])

  const [searchInputValue, setSearchInputValue] = useState("")

  async function mainCourseItems() {
    try {
      setLoading(true)
      const response = await fetch(`https://tarkhine-test1.liara.run/store/categoriesfull/`);
      const data = await response.json();
      if (Array.isArray(data) && data.length >= 4) {
        if (data[0].title === 'main course') {
          setIranianCuisine(data[0].product_models[0].products)
          setNonIranianFoods(data[0].product_models[1].products)
          setPizzas(data[0].product_models[2].products)
          setSandwiches(data[0].product_models[3].products)
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

  useEffect(() => {
    mainCourseItems()
  }, [])

  const searchBoxHandler = () => {
    sessionStorage.setItem('search-value', searchInputValue)
    navigate('/searchbar')
  }

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      sessionStorage.setItem('search-value', searchInputValue)
      navigate('/searchbar')
    }
  }

  const closeAlert = () => setIsAlert(null)

  return (
    <>
      {
        isAlert === 'error' && (<Alert message={alertMsg} type='error' onClose={closeAlert} />)
      }
      {
        isAlert === 'success' && (<Alert message={alertMsg} type='success' onClose={closeAlert} />)
      }
      <Header />
      <Slider />
      <main className='rtl'>
        <div className='w-full bg-Gray-3 h-10 md:h-16'>
          <div className='container h-full'>
            <div className='h-full flex items-center gap-x-4 md:gap-x-8 font-EstedadRegular text-sm md:text-xl text-Gray-7'>
              <button onClick={mainCourseHandler} className={`h-full cursor-pointer transition-all ${isMainCourse ? 'active_menu-item' : ''}`}>غذای اصلی</button>
              <button onClick={appetizerHandler} className={`h-full cursor-pointer transition-all ${isAppetizer ? 'active_menu-item' : ''}`}>پیش غذا</button>
              <button onClick={dessertHandler} className={`h-full cursor-pointer transition-all ${isDessert ? 'active_menu-item' : ''}`}>دسر</button>
              <button onClick={drinkHandler} className={`h-full cursor-pointer transition-all ${isDrink ? 'active_menu-item' : ''}`}>نوشیدنی</button>
            </div>
          </div>
        </div>
        <div className='container'>
          <form action="#" className='flex sm:hidden items-center justify-between py-2 px-4 mb-6 mt-4 border border-solid border-Gray-4 rounded-sm'>
            <input onKeyDown={handleKeyDown} onChange={(e) => setSearchInputValue(e.target.value)} value={searchInputValue} className='w-full h-full outline-none bg-transparent placeholder:text-Gray-8 placeholder:text-xs placeholder:font-EstedadRegular' type="text" placeholder='جستجو' />
            <svg onClick={searchBoxHandler} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.66634 14.5C3.89967 14.5 0.833008 11.4333 0.833008 7.66665C0.833008 3.89998 3.89967 0.833313 7.66634 0.833313C11.433 0.833313 14.4997 3.89998 14.4997 7.66665C14.4997 11.4333 11.433 14.5 7.66634 14.5ZM7.66634 1.83331C4.44634 1.83331 1.83301 4.45331 1.83301 7.66665C1.83301 10.88 4.44634 13.5 7.66634 13.5C10.8863 13.5 13.4997 10.88 13.4997 7.66665C13.4997 4.45331 10.8863 1.83331 7.66634 1.83331Z" fill="#353535" />
              <path d="M14.6666 15.1667C14.54 15.1667 14.4133 15.12 14.3133 15.02L12.98 13.6867C12.7866 13.4934 12.7866 13.1734 12.98 12.98C13.1733 12.7867 13.4933 12.7867 13.6866 12.98L15.02 14.3134C15.2133 14.5067 15.2133 14.8267 15.02 15.02C14.92 15.12 14.7933 15.1667 14.6666 15.1667Z" fill="#353535" />
            </svg>
          </form>
        </div>
        <div className='container mb-6 md:mb-12'>
          {/* MainCourse */}
          {
            isMainCourse && (
              <>
                {/* iranianCuisine */}
                <div className='mt-4 md:mt-10'>
                  <TitleMenuBox title="غذاهای ایرانی">
                    <Link to="/shoppingcart" className='flex items-center gap-x-1 md:gap-x-2 group font-EstedadRegular md:font-EstedadMedium text-base text-Primary border border-solid border-Primary hover:bg-Primary hover:text-white py-1.5 px-2 md:px-9 rounded-sm transition-all'>
                      <svg className='w-4 md:w-6 h-4 md:h-6 text-Primary group-hover:text-white' viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.69 17.75H8.03999C7.04999 17.75 6.09999 17.33 5.42999 16.6C4.75999 15.87 4.42 14.89 4.5 13.9L5.33 3.94C5.36 3.63 5.24999 3.33001 5.03999 3.10001C4.82999 2.87001 4.54 2.75 4.23 2.75H2.5C2.09 2.75 1.75 2.41 1.75 2C1.75 1.59 2.09 1.25 2.5 1.25H4.24001C4.97001 1.25 5.65999 1.56 6.14999 2.09C6.41999 2.39 6.62 2.74 6.73 3.13H19.22C20.23 3.13 21.16 3.53 21.84 4.25C22.51 4.98 22.85 5.93 22.77 6.94L22.23 14.44C22.12 16.27 20.52 17.75 18.69 17.75ZM6.78 4.62L6 14.02C5.95 14.6 6.14 15.15 6.53 15.58C6.92 16.01 7.45999 16.24 8.03999 16.24H18.69C19.73 16.24 20.67 15.36 20.75 14.32L21.29 6.82001C21.33 6.23001 21.14 5.67001 20.75 5.26001C20.36 4.84001 19.82 4.60999 19.23 4.60999H6.78V4.62Z" fill="currentColor" />
                        <path d="M16.75 22.75C15.65 22.75 14.75 21.85 14.75 20.75C14.75 19.65 15.65 18.75 16.75 18.75C17.85 18.75 18.75 19.65 18.75 20.75C18.75 21.85 17.85 22.75 16.75 22.75ZM16.75 20.25C16.47 20.25 16.25 20.47 16.25 20.75C16.25 21.03 16.47 21.25 16.75 21.25C17.03 21.25 17.25 21.03 17.25 20.75C17.25 20.47 17.03 20.25 16.75 20.25Z" fill="currentColor" />
                        <path d="M8.75 22.75C7.65 22.75 6.75 21.85 6.75 20.75C6.75 19.65 7.65 18.75 8.75 18.75C9.85 18.75 10.75 19.65 10.75 20.75C10.75 21.85 9.85 22.75 8.75 22.75ZM8.75 20.25C8.47 20.25 8.25 20.47 8.25 20.75C8.25 21.03 8.47 21.25 8.75 21.25C9.03 21.25 9.25 21.03 9.25 20.75C9.25 20.47 9.03 20.25 8.75 20.25Z" fill="currentColor" />
                        <path d="M21.5 8.75H9.5C9.09 8.75 8.75 8.41 8.75 8C8.75 7.59 9.09 7.25 9.5 7.25H21.5C21.91 7.25 22.25 7.59 22.25 8C22.25 8.41 21.91 8.75 21.5 8.75Z" fill="currentColor" />
                      </svg>
                      تکمیل خرید
                    </Link>
                  </TitleMenuBox>
                  <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-6 mt-6'>
                    {
                      iranianCuisine.length > 0 ? (
                        iranianCuisine.map((item) => (
                          <div key={item.id}>
                            <MenuPageBox title={item.title} product={item} src={item.imagemain} price={item.price} description={item.description} discount={item.discount} loading={loading} />
                          </div>
                        ))
                      ) : (
                        <>
                          <MenuPageBox loading="false" />
                          <MenuPageBox loading="false" />
                          <MenuPageBox loading="false" />
                          <MenuPageBox loading="false" />
                        </>
                      )
                    }
                  </div>
                </div>
                {/* nonIranianFoods */}
                <div className='mt-10'>
                  <TitleMenuBox title="غذاهای غیر ایرانی" />
                  <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-6 mt-6'>
                    {
                      nonIranianFoods.length > 0 ? (
                        nonIranianFoods.map((item) => (
                          <div key={item.id}>
                            <MenuPageBox title={item.title} product={item} src={item.imagemain} price={item.price} description={item.description} discount={item.discount} loading={loading} />
                          </div>
                        ))
                      ) : (
                        <>
                          <MenuPageBox loading="false" />
                          <MenuPageBox loading="false" />
                          <MenuPageBox loading="false" />
                          <MenuPageBox loading="false" />
                        </>
                      )
                    }
                  </div>
                </div>
                {/* pizzas */}
                <div className='mt-10'>
                  <TitleMenuBox title="پیتزاها" />
                  <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-6 mt-6'>
                    {
                      pizzas.length > 0 ? (
                        pizzas.map((item) => (
                          <div key={item.id}>
                            <MenuPageBox title={item.title} product={item} src={item.imagemain} price={item.price} description={item.description} discount={item.discount} loading={loading} />
                          </div>
                        ))
                      ) : (
                        <>
                          <MenuPageBox loading="false" />
                          <MenuPageBox loading="false" />
                          <MenuPageBox loading="false" />
                          <MenuPageBox loading="false" />
                        </>
                      )
                    }
                  </div>
                </div>
                {/* sandwiches */}
                <div className='mt-10'>
                  <TitleMenuBox title="ساندویچ‌ها" />
                  <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-6 mt-6'>
                    {
                      sandwiches.length > 0 ? (
                        sandwiches.map((item) => (
                          <div key={item.id}>
                            <MenuPageBox title={item.title} product={item} src={item.imagemain} price={item.price} description={item.description} discount={item.discount} loading={loading} />
                          </div>
                        ))
                      ) : (
                        <>
                          <MenuPageBox loading="false" />
                          <MenuPageBox loading="false" />
                          <MenuPageBox loading="false" />
                          <MenuPageBox loading="false" />
                        </>
                      )
                    }
                  </div>
                </div>
              </>
            )
          }

          {/* Appetizer */}
          {
            isAppetizer && (
              <>
                <div className='mt-4 md:mt-10'>
                  <TitleMenuBox title="پیش غذاهای ایرانی">
                    <Link to="/shoppingcart" className='flex items-center gap-x-1 md:gap-x-2 group font-EstedadRegular md:font-EstedadMedium text-base text-Primary border border-solid border-Primary hover:bg-Primary hover:text-white py-1.5 px-2 md:px-9 rounded-sm transition-all'>
                      <svg className='w-4 md:w-6 h-4 md:h-6 text-Primary group-hover:text-white' viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.69 17.75H8.03999C7.04999 17.75 6.09999 17.33 5.42999 16.6C4.75999 15.87 4.42 14.89 4.5 13.9L5.33 3.94C5.36 3.63 5.24999 3.33001 5.03999 3.10001C4.82999 2.87001 4.54 2.75 4.23 2.75H2.5C2.09 2.75 1.75 2.41 1.75 2C1.75 1.59 2.09 1.25 2.5 1.25H4.24001C4.97001 1.25 5.65999 1.56 6.14999 2.09C6.41999 2.39 6.62 2.74 6.73 3.13H19.22C20.23 3.13 21.16 3.53 21.84 4.25C22.51 4.98 22.85 5.93 22.77 6.94L22.23 14.44C22.12 16.27 20.52 17.75 18.69 17.75ZM6.78 4.62L6 14.02C5.95 14.6 6.14 15.15 6.53 15.58C6.92 16.01 7.45999 16.24 8.03999 16.24H18.69C19.73 16.24 20.67 15.36 20.75 14.32L21.29 6.82001C21.33 6.23001 21.14 5.67001 20.75 5.26001C20.36 4.84001 19.82 4.60999 19.23 4.60999H6.78V4.62Z" fill="currentColor" />
                        <path d="M16.75 22.75C15.65 22.75 14.75 21.85 14.75 20.75C14.75 19.65 15.65 18.75 16.75 18.75C17.85 18.75 18.75 19.65 18.75 20.75C18.75 21.85 17.85 22.75 16.75 22.75ZM16.75 20.25C16.47 20.25 16.25 20.47 16.25 20.75C16.25 21.03 16.47 21.25 16.75 21.25C17.03 21.25 17.25 21.03 17.25 20.75C17.25 20.47 17.03 20.25 16.75 20.25Z" fill="currentColor" />
                        <path d="M8.75 22.75C7.65 22.75 6.75 21.85 6.75 20.75C6.75 19.65 7.65 18.75 8.75 18.75C9.85 18.75 10.75 19.65 10.75 20.75C10.75 21.85 9.85 22.75 8.75 22.75ZM8.75 20.25C8.47 20.25 8.25 20.47 8.25 20.75C8.25 21.03 8.47 21.25 8.75 21.25C9.03 21.25 9.25 21.03 9.25 20.75C9.25 20.47 9.03 20.25 8.75 20.25Z" fill="currentColor" />
                        <path d="M21.5 8.75H9.5C9.09 8.75 8.75 8.41 8.75 8C8.75 7.59 9.09 7.25 9.5 7.25H21.5C21.91 7.25 22.25 7.59 22.25 8C22.25 8.41 21.91 8.75 21.5 8.75Z" fill="currentColor" />
                      </svg>
                      تکمیل خرید
                    </Link>
                  </TitleMenuBox>
                  <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-6 mt-6'>
                    {
                      iranianAppetizer.length > 0 ? (
                        iranianAppetizer.map((item) => (
                          <div key={item.id}>
                            <MenuPageBox title={item.title} product={item} src={item.imagemain} price={item.price} description={item.description} discount={item.discount} loading={loading} />
                          </div>
                        ))
                      ) : (
                        <>
                          <MenuPageBox loading="false" />
                          <MenuPageBox loading="false" />
                        </>
                      )
                    }
                  </div>
                </div>
                <div className='mt-4 md:mt-10'>
                  <TitleMenuBox title="پیش غذاهای غیر ایرانی"></TitleMenuBox>
                  <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-6 mt-6'>
                    {
                      nonIranianAppetizer.length > 0 ? (
                        nonIranianAppetizer.map((item) => (
                          <div key={item.id}>
                            <MenuPageBox title={item.title} product={item} src={item.imagemain} price={item.price} description={item.description} discount={item.discount} loading={loading} />
                          </div>
                        ))
                      ) : (
                        <>
                          <MenuPageBox loading="false" />
                          <MenuPageBox loading="false" />
                        </>
                      )
                    }
                  </div>
                </div>

              </>
            )
          }

          {/* isDessert */}
          {
            isDessert && (
              <>
                <div className='mt-4 md:mt-10'>
                  <TitleMenuBox title="دسرهای ایرانی">
                    <Link to="/shoppingcart" className='flex items-center gap-x-1 md:gap-x-2 group font-EstedadRegular md:font-EstedadMedium text-base text-Primary border border-solid border-Primary hover:bg-Primary hover:text-white py-1.5 px-2 md:px-9 rounded-sm transition-all'>
                      <svg className='w-4 md:w-6 h-4 md:h-6 text-Primary group-hover:text-white' viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.69 17.75H8.03999C7.04999 17.75 6.09999 17.33 5.42999 16.6C4.75999 15.87 4.42 14.89 4.5 13.9L5.33 3.94C5.36 3.63 5.24999 3.33001 5.03999 3.10001C4.82999 2.87001 4.54 2.75 4.23 2.75H2.5C2.09 2.75 1.75 2.41 1.75 2C1.75 1.59 2.09 1.25 2.5 1.25H4.24001C4.97001 1.25 5.65999 1.56 6.14999 2.09C6.41999 2.39 6.62 2.74 6.73 3.13H19.22C20.23 3.13 21.16 3.53 21.84 4.25C22.51 4.98 22.85 5.93 22.77 6.94L22.23 14.44C22.12 16.27 20.52 17.75 18.69 17.75ZM6.78 4.62L6 14.02C5.95 14.6 6.14 15.15 6.53 15.58C6.92 16.01 7.45999 16.24 8.03999 16.24H18.69C19.73 16.24 20.67 15.36 20.75 14.32L21.29 6.82001C21.33 6.23001 21.14 5.67001 20.75 5.26001C20.36 4.84001 19.82 4.60999 19.23 4.60999H6.78V4.62Z" fill="currentColor" />
                        <path d="M16.75 22.75C15.65 22.75 14.75 21.85 14.75 20.75C14.75 19.65 15.65 18.75 16.75 18.75C17.85 18.75 18.75 19.65 18.75 20.75C18.75 21.85 17.85 22.75 16.75 22.75ZM16.75 20.25C16.47 20.25 16.25 20.47 16.25 20.75C16.25 21.03 16.47 21.25 16.75 21.25C17.03 21.25 17.25 21.03 17.25 20.75C17.25 20.47 17.03 20.25 16.75 20.25Z" fill="currentColor" />
                        <path d="M8.75 22.75C7.65 22.75 6.75 21.85 6.75 20.75C6.75 19.65 7.65 18.75 8.75 18.75C9.85 18.75 10.75 19.65 10.75 20.75C10.75 21.85 9.85 22.75 8.75 22.75ZM8.75 20.25C8.47 20.25 8.25 20.47 8.25 20.75C8.25 21.03 8.47 21.25 8.75 21.25C9.03 21.25 9.25 21.03 9.25 20.75C9.25 20.47 9.03 20.25 8.75 20.25Z" fill="currentColor" />
                        <path d="M21.5 8.75H9.5C9.09 8.75 8.75 8.41 8.75 8C8.75 7.59 9.09 7.25 9.5 7.25H21.5C21.91 7.25 22.25 7.59 22.25 8C22.25 8.41 21.91 8.75 21.5 8.75Z" fill="currentColor" />
                      </svg>
                      تکمیل خرید
                    </Link>
                  </TitleMenuBox>
                  <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-6 mt-6'>
                    {
                      iranianDessert.length > 0 ? (
                        iranianDessert.map((item) => (
                          <div key={item.id}>
                            <MenuPageBox title={item.title} product={item} src={item.imagemain} price={item.price} description={item.description} discount={item.discount} loading={loading} />
                          </div>
                        ))
                      ) : (
                        <>
                          <MenuPageBox loading="false" />
                          <MenuPageBox loading="false" />
                          <MenuPageBox loading="false" />
                          <MenuPageBox loading="false" />
                        </>
                      )
                    }
                  </div>
                </div>
                <div className='mt-4 md:mt-10'>
                  <TitleMenuBox title="دسرهای غیر ایرانی"></TitleMenuBox>
                  <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-6 mt-6'>
                    {
                      nonIranianDessert.length > 0 ? (
                        nonIranianDessert.map((item) => (
                          <div key={item.id}>
                            <MenuPageBox title={item.title} product={item} src={item.imagemain} price={item.price} description={item.description} discount={item.discount} loading={loading} />
                          </div>
                        ))
                      ) : (
                        <>
                          <MenuPageBox loading="false" />
                          <MenuPageBox loading="false" />
                          <MenuPageBox loading="false" />
                          <MenuPageBox loading="false" />
                        </>
                      )
                    }
                  </div>
                </div>
              </>
            )
          }

          {/* isDrink */}
          {
            isDrink && (
              <>
                <div className='mt-4 md:mt-10'>
                  <TitleMenuBox title="نوشیدنی های ایرانی">
                    <Link to="/shoppingcart" className='flex items-center gap-x-1 md:gap-x-2 group font-EstedadRegular md:font-EstedadMedium text-base text-Primary border border-solid border-Primary hover:bg-Primary hover:text-white py-1.5 px-2 md:px-9 rounded-sm transition-all'>
                      <svg className='w-4 md:w-6 h-4 md:h-6 text-Primary group-hover:text-white' viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.69 17.75H8.03999C7.04999 17.75 6.09999 17.33 5.42999 16.6C4.75999 15.87 4.42 14.89 4.5 13.9L5.33 3.94C5.36 3.63 5.24999 3.33001 5.03999 3.10001C4.82999 2.87001 4.54 2.75 4.23 2.75H2.5C2.09 2.75 1.75 2.41 1.75 2C1.75 1.59 2.09 1.25 2.5 1.25H4.24001C4.97001 1.25 5.65999 1.56 6.14999 2.09C6.41999 2.39 6.62 2.74 6.73 3.13H19.22C20.23 3.13 21.16 3.53 21.84 4.25C22.51 4.98 22.85 5.93 22.77 6.94L22.23 14.44C22.12 16.27 20.52 17.75 18.69 17.75ZM6.78 4.62L6 14.02C5.95 14.6 6.14 15.15 6.53 15.58C6.92 16.01 7.45999 16.24 8.03999 16.24H18.69C19.73 16.24 20.67 15.36 20.75 14.32L21.29 6.82001C21.33 6.23001 21.14 5.67001 20.75 5.26001C20.36 4.84001 19.82 4.60999 19.23 4.60999H6.78V4.62Z" fill="currentColor" />
                        <path d="M16.75 22.75C15.65 22.75 14.75 21.85 14.75 20.75C14.75 19.65 15.65 18.75 16.75 18.75C17.85 18.75 18.75 19.65 18.75 20.75C18.75 21.85 17.85 22.75 16.75 22.75ZM16.75 20.25C16.47 20.25 16.25 20.47 16.25 20.75C16.25 21.03 16.47 21.25 16.75 21.25C17.03 21.25 17.25 21.03 17.25 20.75C17.25 20.47 17.03 20.25 16.75 20.25Z" fill="currentColor" />
                        <path d="M8.75 22.75C7.65 22.75 6.75 21.85 6.75 20.75C6.75 19.65 7.65 18.75 8.75 18.75C9.85 18.75 10.75 19.65 10.75 20.75C10.75 21.85 9.85 22.75 8.75 22.75ZM8.75 20.25C8.47 20.25 8.25 20.47 8.25 20.75C8.25 21.03 8.47 21.25 8.75 21.25C9.03 21.25 9.25 21.03 9.25 20.75C9.25 20.47 9.03 20.25 8.75 20.25Z" fill="currentColor" />
                        <path d="M21.5 8.75H9.5C9.09 8.75 8.75 8.41 8.75 8C8.75 7.59 9.09 7.25 9.5 7.25H21.5C21.91 7.25 22.25 7.59 22.25 8C22.25 8.41 21.91 8.75 21.5 8.75Z" fill="currentColor" />
                      </svg>
                      تکمیل خرید
                    </Link>
                  </TitleMenuBox>
                  <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-6 mt-6'>
                    {
                      iranianDrink.length > 0 ? (
                        iranianDrink.map((item) => (
                          <div key={item.id}>
                            <MenuPageBox title={item.title} product={item} src={item.imagemain} price={item.price} description={item.description} discount={item.discount} loading={loading} />
                          </div>
                        ))
                      ) : (
                        <>
                          <MenuPageBox loading="false" />
                          <MenuPageBox loading="false" />
                          <MenuPageBox loading="false" />
                          <MenuPageBox loading="false" />
                        </>
                      )
                    }
                  </div>
                </div>
                <div className='mt-4 md:mt-10'>
                  <TitleMenuBox title="نوشیدنی های غیر ایرانی"></TitleMenuBox>
                  <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-6 mt-6'>
                    {
                      nonIranianDrink.length > 0 ? (
                        nonIranianDrink.map((item) => (
                          <div key={item.id}>
                            <MenuPageBox title={item.title} product={item} src={item.imagemain} price={item.price} description={item.description} discount={item.discount} loading={loading} />
                          </div>
                        ))
                      ) : (
                        <>
                          <MenuPageBox loading="false" />
                          <MenuPageBox loading="false" />
                          <MenuPageBox loading="false" />
                          <MenuPageBox loading="false" />
                        </>
                      )
                    }
                  </div>
                </div>
              </>
            )
          }
        </div>
      </main>
      <Footer />
    </>
  )
}

