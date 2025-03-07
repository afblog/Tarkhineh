import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {

    const [text, setText] = useState("");

    const toPersianDigits = (num) => num.toLocaleString("fa-IR");

    const areaHandler = (e) => {
        const areaValue = e.target.value
        if (areaValue.length < 201) {
            setText(areaValue)
        }
    }

    return (
        <footer className='rtl w-full sm:py-8'>
            <div className='container flex items-center justify-center md:justify-between'>
                <div className='flex h-[254px] items-center gap-x-20 sm:gap-x-32'>
                    <div className='flex h-full flex-col justify-center items-start gap-y-4'>
                        <h3 className='text-white text-sm sm:text-xl font-EstedadMedium sm:font-EstedadBold'>دسترسی آسان</h3>
                        <Link to='#' className='text-Gray-3 font-EstedadRegular text-xs sm:text-base sm:font-EstedadMedium hover:text-Primary'>پرسش‌های متداول</Link>
                        <Link to='#' className='text-Gray-3 font-EstedadRegular text-xs sm:text-base sm:font-EstedadMedium hover:text-Primary'>قوانین ترخینه</Link>
                        <Link to='#' className='text-Gray-3 font-EstedadRegular text-xs sm:text-base sm:font-EstedadMedium hover:text-Primary'>حریم خصوصی</Link>
                        <div className='flex items-center gap-x-4'>
                            <a href="#">
                                <svg className='w-5 sm:w-6 h-5 sm:h-6 text-Gray-3 hover:text-Primary' viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21.3008 3.37348C21.067 3.38374 20.8394 3.4488 20.6342 3.53098C20.4311 3.61261 19.2617 4.11173 17.5348 4.85005C15.808 5.58836 13.5632 6.54981 11.338 7.50317C6.88753 9.4099 2.51421 11.286 2.51421 11.286L2.54609 11.2738C2.54609 11.2738 2.28214 11.362 2.01452 11.5485C1.88072 11.6417 1.73677 11.7621 1.6189 11.9375C1.50103 12.113 1.41486 12.3617 1.44734 12.6247C1.5614 13.5486 2.5189 13.8107 2.5189 13.8107L2.52265 13.8125L6.79577 15.275C6.90472 15.6385 8.09183 19.6006 8.35296 20.4397C8.49718 20.9036 8.63216 21.1712 8.77296 21.3538C8.84342 21.4451 8.91726 21.5158 8.9989 21.5675C9.03134 21.5881 9.06545 21.6035 9.09921 21.6172H9.10109C9.10523 21.6191 9.10914 21.6192 9.11327 21.621L9.10202 21.6182C9.10987 21.6213 9.11761 21.6267 9.12546 21.6294C9.1407 21.6348 9.15003 21.6346 9.16952 21.6388C9.65891 21.8097 10.0639 21.4925 10.0639 21.4925L10.0808 21.4794L12.7058 19.0447L16.9658 22.3663L17.0192 22.3907C17.7649 22.7217 18.4392 22.537 18.8126 22.2332C19.1861 21.9293 19.333 21.5375 19.333 21.5375L19.3489 21.4963L22.4792 5.18098C22.5593 4.81597 22.5707 4.50046 22.4951 4.21536C22.4196 3.93025 22.2361 3.68241 22.0058 3.54504C21.7755 3.40768 21.5346 3.36323 21.3008 3.37348ZM21.3261 4.34942C21.421 4.34502 21.4914 4.35588 21.5136 4.36911C21.5358 4.38234 21.5457 4.3806 21.567 4.46098C21.5883 4.54137 21.5999 4.71068 21.5417 4.97567L21.5398 4.9813L18.4273 21.2019C18.42 21.2183 18.3551 21.3683 18.207 21.4888C18.056 21.6117 17.8879 21.7077 17.442 21.5207L12.7836 17.8879L12.6523 17.7847L12.6495 17.7875L11.2564 16.7422L19.0855 7.5313C19.1456 7.4607 19.184 7.37419 19.1961 7.28223C19.2081 7.19026 19.1932 7.09678 19.1533 7.01309C19.1133 6.92939 19.05 6.85906 18.9709 6.8106C18.8918 6.76215 18.8004 6.73764 18.7076 6.74005C18.617 6.7424 18.529 6.77035 18.4536 6.82067L7.12484 14.3732L2.84515 12.9079C2.84515 12.9079 2.42018 12.6714 2.39984 12.5066C2.39871 12.4975 2.39369 12.5057 2.41577 12.4729C2.43786 12.44 2.49337 12.3845 2.56296 12.336C2.70215 12.239 2.86109 12.1804 2.86109 12.1804L2.87702 12.1747L2.89296 12.1682C2.89296 12.1682 7.26651 10.292 11.7167 8.38536C13.9418 7.43204 16.1862 6.4713 17.9126 5.73317C19.6386 4.99523 20.8858 4.46406 20.9914 4.42161C21.1116 4.37347 21.2311 4.35382 21.3261 4.34942ZM16.1342 9.52067L10.197 16.506L10.1942 16.5088C10.1849 16.52 10.1762 16.5315 10.168 16.5435C10.1585 16.5565 10.1498 16.5699 10.1417 16.5838C10.1084 16.6404 10.087 16.7033 10.0789 16.7685C10.0789 16.7697 10.0789 16.771 10.0789 16.7722L9.30546 20.2504C9.2926 20.2128 9.2836 20.199 9.26984 20.1547V20.1538C9.02418 19.3645 7.90417 15.6278 7.74921 15.111L16.1342 9.52067ZM10.8673 17.6507L11.9342 18.4513L10.3667 19.9044L10.8673 17.6507Z" fill="currentColor" />
                                </svg>
                            </a>
                            <a href="#">
                                <svg className='w-5 sm:w-6 h-5 sm:h-6 text-Gray-3 hover:text-Primary' viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.68043 1.93994C4.24002 1.93994 1.44043 4.73953 1.44043 8.17994V16.8199C1.44043 20.2603 4.24002 23.0599 7.68043 23.0599H16.3204C19.7608 23.0599 22.5604 20.2603 22.5604 16.8199V8.17994C22.5604 4.73953 19.7608 1.93994 16.3204 1.93994H7.68043ZM7.68043 2.89994H16.3204C19.2419 2.89994 21.6004 5.25843 21.6004 8.17994V16.8199C21.6004 19.7415 19.2419 22.0999 16.3204 22.0999H7.68043C4.75892 22.0999 2.40043 19.7415 2.40043 16.8199V8.17994C2.40043 5.25843 4.75892 2.89994 7.68043 2.89994ZM17.7604 5.77994C17.5058 5.77994 17.2616 5.88108 17.0816 6.06112C16.9016 6.24115 16.8004 6.48533 16.8004 6.73994C16.8004 6.99455 16.9016 7.23873 17.0816 7.41876C17.2616 7.5988 17.5058 7.69994 17.7604 7.69994C18.015 7.69994 18.2592 7.5988 18.4393 7.41876C18.6193 7.23873 18.7204 6.99455 18.7204 6.73994C18.7204 6.48533 18.6193 6.24115 18.4393 6.06112C18.2592 5.88108 18.015 5.77994 17.7604 5.77994ZM12.0004 7.21994C9.09005 7.21994 6.72043 9.58956 6.72043 12.4999C6.72043 15.4103 9.09005 17.7799 12.0004 17.7799C14.9108 17.7799 17.2804 15.4103 17.2804 12.4999C17.2804 9.58956 14.9108 7.21994 12.0004 7.21994ZM12.0004 8.17994C14.392 8.17994 16.3204 10.1084 16.3204 12.4999C16.3204 14.8915 14.392 16.8199 12.0004 16.8199C9.60887 16.8199 7.68043 14.8915 7.68043 12.4999C7.68043 10.1084 9.60887 8.17994 12.0004 8.17994Z" fill="currentColor" />
                                </svg>
                            </a>
                            <a href="#">
                                <svg className='w-5 sm:w-6 h-5 sm:h-6 text-Gray-3 hover:text-Primary' viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_4642_12015)">
                                        <path d="M16.425 3.125C13.5543 3.125 11.22 5.45937 11.22 8.33C11.22 8.5025 11.2631 8.67125 11.28 8.84C7.73059 8.50063 4.59184 6.79063 2.45996 4.175C2.36059 4.04937 2.20684 3.98187 2.04559 3.99313C1.88621 4.00437 1.74371 4.09625 1.66496 4.235C1.21684 5.00563 0.959962 5.8925 0.959962 6.845C0.959962 7.99813 1.37246 9.05375 2.00996 9.92C1.88621 9.86562 1.75121 9.83563 1.63496 9.77C1.48684 9.69125 1.30871 9.695 1.16434 9.78125C1.01996 9.8675 0.931837 10.0231 0.929962 10.19V10.25C0.929962 12.0181 1.84496 13.5538 3.19496 14.495C3.17996 14.4931 3.16496 14.4987 3.14996 14.495C2.98496 14.4669 2.81809 14.525 2.70746 14.6506C2.59684 14.7762 2.56121 14.9506 2.60996 15.11C3.14621 16.7769 4.51496 18.05 6.20996 18.515C4.85996 19.3175 3.29434 19.79 1.60496 19.79C1.23934 19.79 0.888712 19.7712 0.539962 19.73C0.314962 19.7 0.0993369 19.8312 0.0243371 20.045C-0.052538 20.2587 0.0318371 20.4969 0.224962 20.615C2.39059 22.0044 4.96121 22.82 7.72496 22.82C12.2043 22.82 15.7181 20.9487 18.075 18.275C20.4318 15.6012 21.66 12.1287 21.66 8.885C21.66 8.74813 21.6487 8.615 21.645 8.48C22.5243 7.80687 23.31 7.0175 23.925 6.095C24.0468 5.91687 24.0337 5.67875 23.8931 5.51375C23.7543 5.34875 23.52 5.29813 23.325 5.39C23.0775 5.50063 22.7887 5.51187 22.53 5.6C22.8712 5.14437 23.1637 4.65313 23.34 4.1C23.4 3.91063 23.3343 3.7025 23.1787 3.57875C23.0231 3.45687 22.8056 3.44187 22.635 3.545C21.8156 4.03063 20.9081 4.37187 19.95 4.58C19.02 3.71 17.7956 3.125 16.425 3.125ZM16.425 4.085C17.6493 4.085 18.7556 4.60813 19.53 5.435C19.6462 5.555 19.8168 5.60563 19.98 5.57C20.6062 5.44625 21.2006 5.26437 21.78 5.03C21.4462 5.48 21.0337 5.86437 20.55 6.155C20.3306 6.26187 20.2275 6.515 20.3081 6.74563C20.3868 6.97437 20.6268 7.1075 20.865 7.055C21.345 6.99687 21.7725 6.80187 22.23 6.68C21.8193 7.12437 21.3693 7.52563 20.88 7.88C20.7468 7.9775 20.6737 8.135 20.685 8.3C20.6925 8.495 20.7 8.68813 20.7 8.885C20.7 11.885 19.5487 15.1419 17.355 17.63C15.1612 20.1181 11.94 21.86 7.72496 21.86C5.81059 21.86 4.00309 21.4363 2.36996 20.69C4.39496 20.5344 6.26246 19.8181 7.76996 18.635C7.92746 18.5094 7.98934 18.2994 7.92559 18.1081C7.86184 17.9169 7.68559 17.7856 7.48496 17.78C5.90246 17.7519 4.57684 16.8313 3.86996 15.53C3.89621 15.53 3.91871 15.53 3.94496 15.53C4.41934 15.53 4.88809 15.47 5.32496 15.35C5.53496 15.2881 5.67934 15.0931 5.67184 14.8737C5.66434 14.6544 5.50871 14.4669 5.29496 14.42C3.58684 14.075 2.30621 12.6838 2.00996 10.955C2.49371 11.1219 2.98871 11.2531 3.52496 11.27C3.74434 11.2831 3.94309 11.1462 4.01059 10.9381C4.07809 10.73 3.99559 10.5013 3.80996 10.385C2.66996 9.62187 1.91996 8.3225 1.91996 6.845C1.91996 6.2975 2.06246 5.795 2.24996 5.315C4.64996 7.94937 8.00996 9.69875 11.805 9.89C11.955 9.8975 12.1012 9.83562 12.1987 9.72125C12.2962 9.605 12.3337 9.45125 12.3 9.305C12.2268 8.99375 12.18 8.66375 12.18 8.33C12.18 5.97875 14.0737 4.085 16.425 4.085Z" fill="currentColor" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_4642_12015">
                                            <rect width="24" height="24" fill="white" transform="translate(0 0.5)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className='flex h-full flex-col justify-center items-start gap-y-4'>
                        <h3 className='text-white text-sm sm:text-xl font-EstedadMedium sm:font-EstedadBold'>شعبه‌های ترخینه</h3>
                        <Link to='/branch' className='text-Gray-3 font-EstedadRegular text-xs sm:text-base sm:font-EstedadMedium hover:text-Primary'>شعبه اکباتان</Link>
                        <Link to='/branch' className='text-Gray-3 font-EstedadRegular text-xs sm:text-base sm:font-EstedadMedium hover:text-Primary'>شعبه چالوس</Link>
                        <Link to='/branch' className='text-Gray-3 font-EstedadRegular text-xs sm:text-base sm:font-EstedadMedium hover:text-Primary'>شعبه اقدسیه</Link>
                        <Link to='/branch' className='text-Gray-3 font-EstedadRegular text-xs sm:text-base sm:font-EstedadMedium hover:text-Primary'>شعبه ونک</Link>
                    </div>
                </div>
                <Link to='/'>
                    <img className='hidden md:block xl:hidden w-80' src="/Img/svg/site-logo-withe.svg" alt="Site Logo" />
                </Link>
                <form action="#" className='hidden xl:block text-white'>
                    <div className='flex items-end justify-between gap-x-7'>
                        <div className='flex flex-col gap-y-3'>
                            <h4 className='font-EstedadExtraBold text-start text-xl mb-1'>پیام به ترخینه </h4>
                            <input type="text" className='w-[276px] h-10 border border-solid px-2 border-Gray-7 focus:border-Primary outline-none placeholder:text-Gray-1 placeholder:text-sm placeholder:font-EstedadLight rounded-sm' placeholder='نام و نام خانوادگی' />
                            <input type="text" className='w-[276px] h-10 border border-solid px-2 border-Gray-7 focus:border-Primary outline-none placeholder:text-Gray-1 placeholder:text-sm placeholder:font-EstedadLight rounded-sm' placeholder='شماره تماس' />
                            <input type="text" className='w-[276px] h-10 border border-solid px-2 border-Gray-7 focus:border-Primary outline-none placeholder:text-Gray-1 placeholder:text-sm placeholder:font-EstedadLight rounded-sm' placeholder='آدرس ایمیل (اختیاری)' />
                        </div>
                        <textarea onChange={areaHandler} maxLength={200} className='textarea w-72 h-36 p-4 border border-solid border-Gray-7 focus:border-Primary outline-none placeholder:text-Gray-1 placeholder:text-sm placeholder:font-EstedadLight rounded-sm' placeholder='پیام شما'  ></textarea>
                    </div>
                    <p className='text-Gray-4 text-end text-xs font-EstedadRegular mt-1'>{toPersianDigits(text.length)}/{toPersianDigits(200)}</p>
                    <div className='flex justify-end mt-2'>
                        <button type='submit' className='w-[183px] py-2 text-center cursor-pointer font-EstedadMedium text-sm border border-solid border-Gray-7 rounded-sm hover:bg-Shade-3 hover:border-Shade-3 transition-all'>ارسال پیام</button>
                    </div>
                </form>
            </div>
        </footer>
    )
}
