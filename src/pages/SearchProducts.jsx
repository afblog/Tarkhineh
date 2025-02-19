import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Alert from '../components/Alert'
import SearchBox from '../components/SearchBox'
import GridLoader from 'react-spinners/GridLoader'
import { GlobalContext } from '../Contexts/GlobalContext'
import { useContext } from 'react'

export default function SearchProducts() {
    const { isAlert, alertMsg, setIsAlert, setAlertMsg, addToCart} = useContext(GlobalContext)

    const [isLoader, setIsLoader] = useState(false)

    const [products, setProducts] = useState([])

    const [searchInputValue, setSearchInputValue] = useState(() => sessionStorage.getItem('search-value') || "")

    async function fetcher() {
        if (!searchInputValue.trim()) return;

        try {
            setIsLoader(true)
            const response = await fetch(`https://tarkhine-test1.liara.run/store/products/?search=${searchInputValue}`)

            const data = await response.json()
            setProducts(data)

            if (sessionStorage.getItem("search-value")) {
                sessionStorage.removeItem('search-value')
            }

            setIsLoader(false)

        } catch (error) {
            if (error.message === 'Failed to fetch') {
                setIsLoader(false)
                setIsAlert('error')
                setAlertMsg('مشکلی در ارتباط با سرور رخ داده است')
            }
        }

    }

    useEffect(() => {
        fetcher()
    }, [])

    const searchBoxHandler = () => {
        fetcher()
    }

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            fetcher()
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
            <section className='flex flex-col items-center justify-center rtl w-full my-12'>
                <>
                    {
                        products.length === 0 ? (
                            <span className='text-lg sm:text-xl font-EstedadRegular text-Gray-8 mb-5'> موردی با این مشخصات پیدا نکردیم!</span>
                        ) : (
                            <span className='font-EstedadMedium sm:font-EstedadBold text-xl sm:text-2xl text-Gray-8 mb-5'>
                                نتایج جستجو برای: <span className='text-Primary'>{searchInputValue}</span>
                            </span>
                        )
                    }
                    <form action="#" className='flex items-center w-72 md:w-[409px] h-10 px-4 mb-14 border border-solid border-Gray-4 rounded-lg'>
                        <input onKeyDown={handleKeyDown} onChange={(e) => setSearchInputValue(e.target.value)} value={searchInputValue} type="text" className='w-full h-full bg-transparent outline-none placeholder:font-EstedadRegular' placeholder='جستجو' />
                        <svg onClick={searchBoxHandler} className='mr-3 cursor-pointer' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.5 21.75C5.85 21.75 1.25 17.15 1.25 11.5C1.25 5.85 5.85 1.25 11.5 1.25C17.15 1.25 21.75 5.85 21.75 11.5C21.75 17.15 17.15 21.75 11.5 21.75ZM11.5 2.75C6.67 2.75 2.75 6.68 2.75 11.5C2.75 16.32 6.67 20.25 11.5 20.25C16.33 20.25 20.25 16.32 20.25 11.5C20.25 6.68 16.33 2.75 11.5 2.75Z" fill="#353535" />
                            <path d="M22.0004 22.7499C21.8104 22.7499 21.6204 22.6799 21.4704 22.5299L19.4704 20.5299C19.1804 20.2399 19.1804 19.7599 19.4704 19.4699C19.7604 19.1799 20.2404 19.1799 20.5304 19.4699L22.5304 21.4699C22.8204 21.7599 22.8204 22.2399 22.5304 22.5299C22.3804 22.6799 22.1904 22.7499 22.0004 22.7499Z" fill="#353535" />
                        </svg>
                    </form>
                    {

                        isLoader ? (
                            <div className='min-h-56 flex items-center justify-center'>
                                <GridLoader color='#417f56' />
                            </div>
                        ) : (
                            products.length === 0 ? (
                                <img className='sm:w-80 w-72 h-72 sm:h-80 md:w-auto md:h-auto' src="/Img/svg/searchbar-img.svg" alt="Search Not Found" />
                            ) : (
                                <>
                                    <div className='min-h-56 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6'>
                                        {
                                            products.map((product) => (
                                                <div key={product.id}>
                                                    <SearchBox addToCart={addToCart} product={product} title={product.title} price={product.price} src={product.imagemain} description={product.description} discount={product.discount} />
                                                </div>
                                            ))
                                        }
                                    </div>
                                </>
                            )
                        )
                    }
                </>
            </section>
            <Footer />
        </>
    )
}
