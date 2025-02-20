import React from 'react'
import Header from '../components/Header'
import Slider from '../components/Slider'
import BranchBox from '../components/BranchBox'
import Footer from '../components/Footer'
import { Link, useNavigate } from 'react-router-dom'
import { useState, useContext } from 'react'
import SiteLoader from '../components/SiteLoader'
import { useEffect } from 'react'
import { GlobalContext } from '../Contexts/GlobalContext'

export default function Home() {

  const { mainCourseHandler, appetizerHandler, dessertHandler, drinkHandler, } = useContext(GlobalContext)

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const navigate = useNavigate()

  const [searchInputValue, setSearchInputValue] = useState("")

  const searchBoxHandler = () => {
    sessionStorage.setItem('search-value', searchInputValue)
    navigate('/searchbar')
  }

  const handleKeyDown = (event) => {
    event.preventDefault();
    if (event.key === "Enter") {
      sessionStorage.setItem('search-value', searchInputValue)
      navigate('/searchbar')
    }
  }

  return (
    <>
      {
        isLoading ? (
          <SiteLoader />
        ) : (
          <>
            <Header />
            <Slider />
            <main className='rtl mb-12'>
              {/* Menu Section */}
              <section className='container mt-6 sm:mt-12'>
                <form action="#" className='flex sm:hidden items-center justify-between py-2 px-4 mb-6 mt-4 border border-solid border-Gray-4 rounded-sm'>
                  <input onKeyDown={handleKeyDown} onChange={(e) => setSearchInputValue(e.target.value)} value={searchInputValue} className='w-full h-full outline-none bg-transparent placeholder:text-Gray-8 placeholder:text-xs placeholder:font-EstedadRegular' type="text" placeholder='جستجو' />
                  <svg onClick={searchBoxHandler} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.66634 14.5C3.89967 14.5 0.833008 11.4333 0.833008 7.66665C0.833008 3.89998 3.89967 0.833313 7.66634 0.833313C11.433 0.833313 14.4997 3.89998 14.4997 7.66665C14.4997 11.4333 11.433 14.5 7.66634 14.5ZM7.66634 1.83331C4.44634 1.83331 1.83301 4.45331 1.83301 7.66665C1.83301 10.88 4.44634 13.5 7.66634 13.5C10.8863 13.5 13.4997 10.88 13.4997 7.66665C13.4997 4.45331 10.8863 1.83331 7.66634 1.83331Z" fill="#353535" />
                    <path d="M14.6666 15.1667C14.54 15.1667 14.4133 15.12 14.3133 15.02L12.98 13.6867C12.7866 13.4934 12.7866 13.1734 12.98 12.98C13.1733 12.7867 13.4933 12.7867 13.6866 12.98L15.02 14.3134C15.2133 14.5067 15.2133 14.8267 15.02 15.02C14.92 15.12 14.7933 15.1667 14.6666 15.1667Z" fill="#353535" />
                  </svg>
                </form>
                <h3 className='font-EstedadBold text-base md:text-2xl text-Gray-8 text-center mb-22 sm:mb-44'>منوی رستوران</h3>
                <div className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-30 sm:gap-y-56 gap-x-6'>
                  <div className='relative flex justify-center w-[152px] sm:w-[267px] h-20 sm:h-[160px] bg-Primary rounded-lg shadow-xl justify-self-center'>
                    <img className='w-30 h-30 sm:w-auto sm:h-auto absolute -top-16 sm:-top-36' src="/Img/svg/menu-img-4.svg" alt="" />
                    <Link to="/menu" onClick={mainCourseHandler} className='absolute -bottom-5 right-0 left-0 mx-auto flex items-center justify-center text-xs sm:text-xl text-Gray-8 font-EstedadMedium w-24 h-8 sm:w-[155px] sm:h-12 bg-Gray-2 rounded-sm shadow-md'>غذای اصلی</Link>
                  </div>
                  <div className='relative flex justify-center w-[152px] sm:w-[267px] h-20 sm:h-[160px] bg-Primary rounded-lg shadow-xl justify-self-center'>
                    <img className='w-30 h-30 sm:w-auto sm:h-auto absolute -top-16 sm:-top-36' src="/Img/svg/menu-img-3.svg" alt="" />
                    <Link to="/menu" onClick={appetizerHandler} className='absolute -bottom-5 right-0 left-0 mx-auto flex items-center justify-center text-xs sm:text-xl text-Gray-8 font-EstedadMedium w-24 h-8 sm:w-[155px] sm:h-12 bg-Gray-2 rounded-sm shadow-md'>پیش غذا</Link>
                  </div>
                  <div className='relative flex justify-center w-[152px] sm:w-[267px] h-20 sm:h-[160px] bg-Primary rounded-lg shadow-xl justify-self-center'>
                    <img className='w-30 h-30 sm:w-auto sm:h-auto absolute -top-16 sm:-top-36' src="/Img/svg/menu-img-2.svg" alt="" />
                    <Link to="/menu" onClick={dessertHandler} className='absolute -bottom-5 right-0 left-0 mx-auto flex items-center justify-center text-xs sm:text-xl text-Gray-8 font-EstedadMedium w-24 h-8 sm:w-[155px] sm:h-12 bg-Gray-2 rounded-sm shadow-md'>دسر</Link>
                  </div>
                  <div className='relative flex justify-center w-[152px] sm:w-[267px] h-20 sm:h-[160px] bg-Primary rounded-lg shadow-xl justify-self-center'>
                    <img className='w-30 h-30 sm:w-auto sm:h-auto absolute -top-16 sm:-top-48' src="/Img/svg/menu-img-1.svg" alt="" />
                    <Link to="/menu" onClick={drinkHandler} className='absolute -bottom-5 right-0 left-0 mx-auto flex items-center justify-center text-xs sm:text-xl text-Gray-8 font-EstedadMedium w-24 h-8 sm:w-[155px] sm:h-12 bg-Gray-2 rounded-sm shadow-md'>نوشیدنی</Link>
                  </div>
                </div>
              </section>
              {/* About Section */}
              <section className='about w-full mt-20 py-4 sm:py-12'>
                <div className='container flex flex-col gap-y-6 lg:flex-row lg:gap-y-0 lg:items-center h-full'>
                  <div className='flex flex-col text-white w-full lg:w-1/2'>
                    <h3 className='font-EstedadMedium sm:font-EstedadBold text-base sm:text-2xl text-start mb-2 sm:mb-6'>رستوران‌های زنجیره‌ای ترخینه</h3>
                    <p className='font-EstedadLight text-justify text-base sm:text-xl/9 mb-4'>مهمان‌نوازی یکی از مهم‌ترین مشخصه‌های ایرانیان است و باعث افتخار ماست که بیش از 20 سال است خدمت‌گزار مردم شریف ایران هستیم. ما در رستوران‌های زنجیره‌ای ترخینه همواره تلاش کردیم که در محیطی اصیل بر پایه معماری و طراحی مدرن در کنار طبیعتی دلنواز، غذایی سالم و درخور شان شما عزیزان ارائه دهیم.</p>
                    <div className='flex justify-end'>
                      <Link to="/about-us" className='flex items-center gap-x-1 sm:gap-x-2 py-2 px-2 sm:px-7 border border-solid border-white hover:bg-Shade-3 hover:border-Shade-3 transition-all rounded-sm'>
                        <span className='font-EstedadLight text-xs sm:text-base'>اطلاعات بیشتر</span>
                        <svg className='w-4 sm:w-6 h-4 sm:h-6' viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M15.5003 20.67C15.3103 20.67 15.1203 20.6 14.9703 20.45L8.45027 13.93C7.39027 12.87 7.39027 11.13 8.45027 10.07L14.9703 3.55002C15.2603 3.26002 15.7403 3.26002 16.0303 3.55002C16.3203 3.84002 16.3203 4.32002 16.0303 4.61002L9.51027 11.13C9.03027 11.61 9.03027 12.39 9.51027 12.87L16.0303 19.39C16.3203 19.68 16.3203 20.16 16.0303 20.45C15.8803 20.59 15.6903 20.67 15.5003 20.67Z" fill="white" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                  <div className='w-full lg:w-1/2 flex justify-center lg:justify-end lg:pt-4'>
                    <div className='grid grid-cols-2 md:grid-cols-4 gap-y-4 sm:gap-y-0 lg:grid-cols-2 sm:min-w-[392px] text-white text-xs sm:text-base font-EstedadRegular'>
                      <div className='h-[50px] sm:w-[184px] sm:h-[136px] flex flex-col items-center justify-self-center sm:justify-self-auto sm:justify-end lg:justify-normal gap-y-1 sm:gap-y-4'>
                        <svg className='w-6 sm:w-12 h-6 sm:h-12' viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M24 25.5C17.66 25.5 12.5 20.34 12.5 14C12.5 7.66 17.66 2.5 24 2.5C30.34 2.5 35.5 7.66 35.5 14C35.5 20.34 30.34 25.5 24 25.5ZM24 5.5C19.32 5.5 15.5 9.32 15.5 14C15.5 18.68 19.32 22.5 24 22.5C28.68 22.5 32.5 18.68 32.5 14C32.5 9.32 28.68 5.5 24 5.5Z" fill="white" />
                          <path d="M41.1803 45.5C40.3603 45.5 39.6803 44.82 39.6803 44C39.6803 37.1 32.6403 31.5 24.0003 31.5C15.3603 31.5 8.32031 37.1 8.32031 44C8.32031 44.82 7.64031 45.5 6.82031 45.5C6.00031 45.5 5.32031 44.82 5.32031 44C5.32031 35.46 13.7003 28.5 24.0003 28.5C34.3003 28.5 42.6803 35.46 42.6803 44C42.6803 44.82 42.0003 45.5 41.1803 45.5Z" fill="white" />
                        </svg>
                        <span className=''>پرسنلی مجرب و حرفه‌ای</span>
                      </div>
                      <div className='w-[136px] h-[50px] sm:w-[184px] sm:h-[136px] flex flex-col items-center justify-self-center sm:justify-self-auto sm:justify-end lg:justify-normal gap-y-1 sm:gap-y-4'>
                        <svg className='w-6 sm:w-12 h-6 sm:h-12' viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M44 45.5H10C5.86 45.5 2.5 42.14 2.5 38V4C2.5 3.18 3.18 2.5 4 2.5C4.82 2.5 5.5 3.18 5.5 4V38C5.5 40.48 7.52 42.5 10 42.5H44C44.82 42.5 45.5 43.18 45.5 44C45.5 44.82 44.82 45.5 44 45.5Z" fill="white" />
                          <path d="M9.99964 35.5C9.65964 35.5 9.29964 35.38 9.01964 35.14C8.39964 34.6 8.31964 33.66 8.85964 33.02L18.0396 22.3C19.0396 21.14 20.4796 20.44 21.9996 20.38C23.5196 20.34 25.0196 20.9 26.0996 21.98L27.9996 23.88C28.4996 24.38 29.1396 24.62 29.8596 24.62C30.5596 24.6 31.1996 24.28 31.6596 23.74L40.8396 13.02C41.3796 12.4 42.3196 12.32 42.9596 12.86C43.5796 13.4 43.6596 14.34 43.1196 14.98L33.9396 25.7C32.9396 26.86 31.4996 27.56 29.9796 27.62C28.4396 27.66 26.9596 27.1 25.8796 26.02L23.9996 24.12C23.4996 23.62 22.8396 23.36 22.1396 23.38C21.4396 23.4 20.7996 23.72 20.3396 24.26L11.1596 34.98C10.8396 35.32 10.4196 35.5 9.99964 35.5Z" fill="white" />
                        </svg>
                        <span className=''>کیفیت بالای غذاها</span>
                      </div>
                      <div className='w-[136px] h-[50px] sm:w-[184px] sm:h-[136px] flex flex-col items-center justify-self-center sm:justify-self-auto sm:justify-end lg:justify-normal gap-y-1 sm:gap-y-4'>
                        <svg className='w-6 sm:w-12 h-6 sm:h-12' viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M35.1997 45.12H12.7997C9.15966 45.12 5.83966 42.3199 5.23966 38.7199L2.57969 22.8C2.15969 20.32 3.3597 17.14 5.3397 15.56L19.1997 4.45988C21.8797 2.29988 26.0997 2.3199 28.7997 4.4799L42.6596 15.56C44.6196 17.14 45.8197 20.32 45.4197 22.8L42.7597 38.7199C42.1597 42.2599 38.7797 45.12 35.1997 45.12ZM23.9797 5.8798C22.9197 5.8798 21.8597 6.19999 21.0797 6.81999L7.21964 17.9198C6.07964 18.8398 5.29965 20.88 5.53965 22.32L8.19968 38.2399C8.55968 40.3399 10.6597 42.12 12.7997 42.12H35.1997C37.3397 42.12 39.4397 40.3399 39.7997 38.2199L42.4597 22.3C42.6997 20.86 41.8997 18.7998 40.7797 17.8998L26.9197 6.81999C26.1197 6.19999 25.0597 5.8798 23.9797 5.8798Z" fill="white" />
                          <path d="M28.2401 30.2599C27.8601 30.2599 27.5001 30.12 27.2001 29.84C25.2601 27.98 22.7401 27.98 20.7801 29.84C20.1801 30.42 19.2401 30.3999 18.6601 29.7999C18.0801 29.1999 18.1001 28.2598 18.7001 27.6798C21.8001 24.6998 26.1401 24.6998 29.2601 27.6798C29.8601 28.2598 29.8801 29.1999 29.3001 29.7999C29.0401 30.0999 28.6401 30.2599 28.2401 30.2599Z" fill="white" />
                          <path d="M32.4797 26.0201C32.0997 26.0201 31.7198 25.8802 31.4398 25.6002C30.4998 24.6802 29.4398 23.94 28.3198 23.4C25.5198 22.06 22.4598 22.06 19.6798 23.4C18.5598 23.94 17.5198 24.6802 16.5598 25.6002C15.9798 26.1802 15.0198 26.1801 14.4398 25.5801C13.8598 24.9801 13.8798 24.04 14.4598 23.46C15.6398 22.3 16.9598 21.38 18.3798 20.7C21.9998 18.96 25.9997 18.96 29.5997 20.7C31.0197 21.38 32.3398 22.3 33.5198 23.46C34.1198 24.04 34.1197 24.9801 33.5397 25.5801C33.2597 25.8601 32.8797 26.0201 32.4797 26.0201Z" fill="white" />
                          <path d="M24.0001 35C23.4801 35 22.9801 34.8 22.5801 34.42C21.8001 33.64 21.8001 32.3801 22.5801 31.6001C23.3601 30.8201 24.6401 30.8201 25.4201 31.6001C26.2001 32.3801 26.2001 33.64 25.4201 34.42C25.0201 34.8 24.5201 35 24.0001 35Z" fill="white" />
                        </svg>
                        <span className=''>محیطی دلنشین و آرام</span>
                      </div>
                      <div className='w-[136px] h-[50px] sm:w-[184px] sm:h-[136px] flex flex-col items-center justify-self-center sm:justify-self-auto sm:justify-end lg:justify-normal gap-y-1 sm:gap-y-4'>
                        <svg className='w-6 sm:w-12 h-6 sm:h-12' viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M32.7599 45.5H6.47985C4.57985 45.5 2.81986 44.6201 1.67986 43.0801C0.519863 41.5201 0.179881 39.56 0.759881 37.7L9.17986 10.6399C9.93986 8.11989 12.2599 6.3999 14.8999 6.3999H39.4999C41.9199 6.3999 44.0999 7.84008 45.0199 10.0801C45.5199 11.2401 45.6199 12.5601 45.3199 13.8601L38.5799 40.9199C37.9399 43.6199 35.5399 45.5 32.7599 45.5ZM14.9199 9.41992C13.6199 9.41992 12.4399 10.28 12.0599 11.54L3.63989 38.6001C3.35989 39.5401 3.51987 40.5201 4.11987 41.3201C4.67987 42.0801 5.55987 42.52 6.49987 42.52H32.7799C34.1599 42.52 35.3599 41.58 35.6799 40.24L42.4199 13.1599C42.5799 12.4999 42.5399 11.84 42.2799 11.26C41.7999 10.12 40.7399 9.3999 39.5199 9.3999H14.9199V9.41992Z" fill="white" />
                          <path d="M41.56 45.4999H32C31.18 45.4999 30.5 44.8199 30.5 43.9999C30.5 43.1799 31.18 42.4999 32 42.4999H41.56C42.38 42.4999 43.14 42.16 43.7 41.56C44.26 40.96 44.54 40.16 44.48 39.34L42.5 12.1C42.44 11.28 43.06 10.5599 43.88 10.4999C44.7 10.4599 45.42 11.0598 45.48 11.8798L47.46 39.1201C47.58 40.7601 47 42.4 45.88 43.6C44.78 44.82 43.2 45.4999 41.56 45.4999Z" fill="white" />
                          <path d="M19.3595 14.2599C19.2395 14.2599 19.1195 14.2399 18.9995 14.2199C18.1995 14.0199 17.6996 13.2198 17.8996 12.3998L19.9795 3.75992C20.1795 2.95992 20.9795 2.45982 21.7995 2.65982C22.5995 2.85982 23.0996 3.65989 22.8996 4.47989L20.8196 13.12C20.6596 13.8 20.0395 14.2599 19.3595 14.2599Z" fill="white" />
                          <path d="M32.7599 14.28C32.6599 14.28 32.5399 14.2799 32.4399 14.2399C31.6399 14.0599 31.1199 13.2599 31.2799 12.4599L33.1598 3.77997C33.3398 2.95997 34.1399 2.46006 34.9399 2.62006C35.7399 2.78006 36.2598 3.59985 36.0998 4.39985L34.2198 13.08C34.0798 13.8 33.4599 14.28 32.7599 14.28Z" fill="white" />
                          <path d="M31.4004 25.5H15.4004C14.5804 25.5 13.9004 24.82 13.9004 24C13.9004 23.18 14.5804 22.5 15.4004 22.5H31.4004C32.2204 22.5 32.9004 23.18 32.9004 24C32.9004 24.82 32.2204 25.5 31.4004 25.5Z" fill="white" />
                          <path d="M29.4004 33.5H13.4004C12.5804 33.5 11.9004 32.82 11.9004 32C11.9004 31.18 12.5804 30.5 13.4004 30.5H29.4004C30.2204 30.5 30.9004 31.18 30.9004 32C30.9004 32.82 30.2204 33.5 29.4004 33.5Z" fill="white" />
                        </svg>
                        <span className=''>منوی متنوع</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* Branch Section */}
              <section className='container mt-6 md:mt-12 text-center'>
                <h3 className='text-base md:text-2xl font-EstedadExtraBold text-Gray-8 mb-3 md:mb-6'>ترخینه گردی</h3>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-3 md:gap-x-0 md:gap-y-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                  <BranchBox src="/Img/png/branch-img-2.jpeg" title="شعبه اکباتان" description="شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم" />
                  <BranchBox src="/Img/png/branch-img-4.jpeg" title="شعبه چالوس" description="چالوس، خیابان ۱۷ شهریور، بعد کوچه کوروش، جنب داروخانه دکتر میلانی" />
                  <BranchBox src="/Img/png/branch-img-1.jpeg" title="شعبه اقدسیه" description="خیابان اقدسیه ، نرسیده به میدان خیام، پلاک ۸" />
                  <BranchBox src="/Img/png/branch-img-3.png" title="شعبه ونک" description="میدان ونک، خیابان فردوسی، نبش کوچه نیلوفر، پلاک ۲۶" />
                </div>
              </section>
            </main>
            <Footer />
          </>
        )
      }
    </>
  )
}
