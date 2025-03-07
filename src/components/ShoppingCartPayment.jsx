import React from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../Contexts/GlobalContext'
import { useContext } from 'react'
import Alert from './Alert'

export default function ShoppingCartPayment() {

    const { isAlert, setIsAlert, setAlertMsg, alertMsg } = useContext(GlobalContext)

    const closeAlert = () => setIsAlert(null)

    return (
        <>
            {
                isAlert === 'warning' && (<Alert message={alertMsg} type='warning' onClose={closeAlert} />)
            }
            <div className='rtl flex flex-col items-center justify-center payment w-full h-[400px] md:h-[590px]'>
                <svg className='w-30 md:w-[256px] h-[112px] md:h-60' viewBox="0 0 256 240" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_1475_41432)">
                        <path d="M198.977 103.753C197.485 105.603 196.012 107.453 194.55 109.303V198.45C194.55 206.084 188.287 212.297 180.591 212.297H41.8863C34.1805 212.297 27.9275 206.084 27.9275 198.45V60.869C27.9275 53.2251 34.1805 47.0223 41.8863 47.0223H172.826C178.058 40.8195 182.908 35.1328 188.012 29.4461L192.371 24.5287L194.884 21.812C190.427 20.1955 185.607 19.3192 180.581 19.3192H41.8863C18.7884 19.3094 0 37.947 0 60.869V198.45C0 221.362 18.7884 240 41.8863 240H180.581C203.679 240 222.467 221.353 222.467 198.45V75.6116C215.203 83.9664 207.566 93.1196 198.977 103.753Z" fill="#417F56" />
                        <path d="M253.998 6.96229C249.963 0.21421 241.188 -2.00594 234.385 1.98643C230.576 4.22606 227.042 6.77728 223.606 9.44535C221.869 10.7697 220.269 12.2011 218.649 13.6227C217.039 15.0541 215.459 16.5245 213.898 18.0046C210.737 20.9453 207.9 24.149 204.975 27.2844L200.607 32.0071L196.356 36.8077C190.643 43.176 185.146 49.6807 179.659 56.1951L171.55 66.0494L163.648 76.0401C153.214 89.4291 143.064 102.984 133.345 116.83C128.457 123.734 123.676 130.706 118.935 137.708C117.188 140.327 115.46 142.946 113.742 145.576C110.022 142.498 106.674 139.1 103.651 135.293C97.5059 127.649 92.7156 118.301 88.7302 108.174L88.6418 107.94C85.9816 101.221 78.4721 97.5989 71.4338 99.819C64.0813 102.127 60.0076 109.917 62.334 117.21C64.2777 123.306 66.5256 129.421 69.3527 135.458C72.1798 141.486 75.5566 147.445 79.6108 153.093C83.6747 158.721 88.416 164.009 93.6089 168.692C98.8017 173.386 104.436 177.446 110.179 180.952C117.188 185.207 126.435 183.308 131.107 176.502L131.392 176.093C136.035 169.315 140.806 162.597 145.596 155.897C150.387 149.198 155.216 142.528 160.144 135.926C170 122.731 179.973 109.634 190.28 96.8588C200.597 84.0832 211.1 71.5024 222.016 59.3792L226.1 54.8221L230.262 50.3623C233.05 47.4021 235.798 44.3932 238.537 41.4135C241.266 38.4241 243.848 35.2594 246.4 32.1045C248.962 28.9496 251.426 25.6875 253.615 22.1138L253.939 21.588C256.57 17.2256 256.786 11.6266 253.998 6.96229Z" fill="#417F56" />
                    </g>
                    <defs>
                        <clipPath id="clip0_1475_41432">
                            <rect width="256" height="240" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
                <p className='font-EstedadBold text-base md:text-4xl text-Primary mt-6 md:mt-12 mb-4 md:mb-6'>سفارش شما با موفقیت ثبت شد!</p>
                <p className='text-Primary font-EstedadRegular text-sm md:text-xl'>کد رهگیری سفارش شما:  ۲۱۵۴۹۰۱۹</p>
                <div className='flex items-center gap-x-4 md:gap-x-6 text-sm md:text-base font-EstedadMedium mt-10'>
                    <Link to='/' className='text-Primary border border-solid border-Primary rounded-sm px-2 md:px-4 py-1.5 cursor-pointer'>بازگشت به صفحه اصلی</Link>
                    <button onClick={() => {
                        setIsAlert('warning')
                        setAlertMsg('این صفحه صرفا نمایشی می باشد')
                    }} className='text-white bg-Primary py-1.5 px-5 md:px-10 rounded-sm cursor-pointer'>پیگیری سفارش</button>
                </div>
            </div>
        </>

    )
}
