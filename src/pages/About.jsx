import Header from '../components/Header'
import HeaderPages from '../components/HeaderPages'
import Footer from '../components/Footer'

export default function About() {
  return (
    <>
      <Header />
      <HeaderPages title="درباره ترخینه بیشتر بدانید!" bgimg="bg-[url(/Img/png/about-header.jpeg)]" />
      <main>
        <div className='container rtl my-4 md:my-12'>
          <div className='hidden md:block'>
            <h4 className='text-2xl font-EstedadBold text-Gray-8 text-start mb-6'>درباره‌ما</h4>
            <div className='flex items-center gap-x-6'>
              <div className='w-1/2 xl:text-xl/9 text-justify font-EstedadRegular text-Gray-7'>
                <p>
                  رستوران‌های زنجیره‌ای ترخینه در سال ۱۳۶۸ افتتاح گردیده‌اند و در طی این سال‌ها همواره با ارائه غذاهای باکیفیت و سرویس سریع و به موقع در تلاش برای جلب رضایت مشتریان خود بوده‌اند. در طی این سال‌ها اولیت جلب رضایت مشتریان بوده است. دراین خصوص ترخینه همیشه در تلاش بوده تا در طی این زمان‌ها کیفیت غذاهای خودرا در بهترین حالت نگه داشته و حتی با نوسانات قیمت‌های مواد اولیه در بازار قیمت خود را ثابت نگه داشته است. ترخینه شعبات خود را افتتاح کرده که بسیار شیک و مدرن می‌باشند و برای برگزاری جشن‌های کوچک و بزرگ شما مشتریان عزیز توانایی پذیرایی با کیفیت بالا را دارند. سالن پذیرایی شعبات در دو طبقه مجزا به همراه راه پله مدرن و آسانسور برای افراد کم‌توان و سالخورده آماده ارائه سرویس به شما عزیزان می‌باشند.
                </p>
                <p>چشم انداز: در آینده‌ای نزدیک تالار پذیرایی شعبات راه اندازی شده و آماده برگزاری جشن‌ها و مراسم‌های بزرگ شما خواهند بود . به امید آن روز که همه ایرانیان سالم و سلامت باشند.</p>
              </div>
              <img className='w-1/2 h-[420px] xl:h-[492px] rounded-md' src="/Img/png/about-page-img2.jpeg" alt="" />
            </div>
          </div>
          <div className='block md:hidden'>
            <h4 className='font-EstedadBold text-Gray-8 text-start mb-1'>درباره‌ما</h4>
            <div className='flex items-center gap-x-5 justify-between sm:justify-center'>
              <p className='text-sm font-EstedadRegular text-justify'>رستوران‌های زنجیره‌ای ترخینه در سال ۱۳۶۸ افتتاح گردیده‌اند و در طی این سال‌ها همواره با ارائه غذاهای باکیفیت و سرویس سریع و به موقع در تلاش برای جلب رضایت مشتریان خود بوده‌اند. در طی این سال‌ها اولویت جلب رضایت مشتریان بوده است. </p>
              <img className='min-w-[152px] 3:h-40 sm:h-[120px] rounded-md' src="./public/Img/png/about-page-img2.jpeg" alt="" />
            </div>
            <div className='text-sm font-EstedadRegular text-justify mt-2'>
              <p>دراین خصوص ترخینه همیشه در تلاش بوده تا در طی این زمان‌ها کیفیت غذاهای خود را در بهترین حالت نگه داشته و حتی با نوسانات قیمت‌های مواد اولیه در بازار قیمت خود را ثابت نگه داشته است. ترخینه شعبات خودرا افتتاح کرده که بسیار شیک و مدرن می‌باشند و برای برگزاری جشن‌های کوچک و بزرگ شما مشتریان عزیز توانایی پذیرایی با کیفیت بالا را دارند. سالن پذیرایی شعبات در دو طبقه مجزا به همراه راه پله مدرن و آسانسور برای افراد کم‌توان و سالخورده آماده ارائه سرویس به شما عزیزان می‌باشند.</p>
              <p>چشم انداز: در آینده ای نزدیک تالار پذیرایی شعبات راه اندازی شده و آماده برگزاری جشن‌ها و مراسم‌های بزرگ شما خواهند بود . به امید آن روز که همه ایرانیان سالم و سلامت باشند.</p>
            </div>
          </div>
        </div>
        <div className='rtl w-full py-8 bg-Gray-3'>
          <div className='container flex items-center justify-between gap-x-2 md:gap-x-0'>
            <div className='flex flex-col items-center gap-y-4'>
              <svg className='w-4 sm:w-5 md:w-12 h-4 sm:h-5 md:h-12' viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 25.5C17.66 25.5 12.5 20.34 12.5 14C12.5 7.66 17.66 2.5 24 2.5C30.34 2.5 35.5 7.66 35.5 14C35.5 20.34 30.34 25.5 24 25.5ZM24 5.5C19.32 5.5 15.5 9.32 15.5 14C15.5 18.68 19.32 22.5 24 22.5C28.68 22.5 32.5 18.68 32.5 14C32.5 9.32 28.68 5.5 24 5.5Z" fill="#353535" />
                <path d="M41.1803 45.5C40.3603 45.5 39.6803 44.82 39.6803 44C39.6803 37.1 32.6403 31.5 24.0003 31.5C15.3603 31.5 8.32031 37.1 8.32031 44C8.32031 44.82 7.64031 45.5 6.82031 45.5C6.00031 45.5 5.32031 44.82 5.32031 44C5.32031 35.46 13.7003 28.5 24.0003 28.5C34.3003 28.5 42.6803 35.46 42.6803 44C42.6803 44.82 42.0003 45.5 41.1803 45.5Z" fill="#353535" />
              </svg>
              <span className=' font-EstedadRegular text-xs md:text-lg text-Gray-7'>پرسنلی مجرب و حرفه‌ای</span>
            </div>

            <div className='bg-Gray-4 w-px h-[103px] hidden md:block mx-10 xl:mx-0'></div>

            <div className='flex flex-col items-center gap-y-4'>
              <svg className='w-4 sm:w-5 md:w-12 h-4 sm:h-5 md:h-12' viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M44 45.5H10C5.86 45.5 2.5 42.14 2.5 38V4C2.5 3.18 3.18 2.5 4 2.5C4.82 2.5 5.5 3.18 5.5 4V38C5.5 40.48 7.52 42.5 10 42.5H44C44.82 42.5 45.5 43.18 45.5 44C45.5 44.82 44.82 45.5 44 45.5Z" fill="#353535" />
                <path d="M9.99964 35.5C9.65964 35.5 9.29964 35.38 9.01964 35.14C8.39964 34.6 8.31964 33.66 8.85964 33.02L18.0396 22.3C19.0396 21.14 20.4796 20.44 21.9996 20.38C23.5196 20.34 25.0196 20.9 26.0996 21.98L27.9996 23.88C28.4996 24.38 29.1396 24.62 29.8596 24.62C30.5596 24.6 31.1996 24.28 31.6596 23.74L40.8396 13.02C41.3796 12.4 42.3196 12.32 42.9596 12.86C43.5796 13.4 43.6596 14.34 43.1196 14.98L33.9396 25.7C32.9396 26.86 31.4996 27.56 29.9796 27.62C28.4396 27.66 26.9596 27.1 25.8796 26.02L23.9996 24.12C23.4996 23.62 22.8396 23.36 22.1396 23.38C21.4396 23.4 20.7996 23.72 20.3396 24.26L11.1596 34.98C10.8396 35.32 10.4196 35.5 9.99964 35.5Z" fill="#353535" />
              </svg>
              <span className=' font-EstedadRegular text-xs md:text-lg text-Gray-7'>کیفیت بالای غذاها</span>
            </div>

            <div className='bg-Gray-4 w-px h-[103px] hidden md:block mx-10 xl:mx-0'></div>

            <div className='flex flex-col items-center gap-y-4'>
              <svg className='w-4 sm:w-5 md:w-12 h-4 sm:h-5 md:h-12' viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M35.1997 45.12H12.7997C9.15966 45.12 5.83966 42.3199 5.23966 38.7199L2.57969 22.8C2.15969 20.32 3.3597 17.14 5.3397 15.56L19.1997 4.45988C21.8797 2.29988 26.0997 2.3199 28.7997 4.4799L42.6596 15.56C44.6196 17.14 45.8197 20.32 45.4197 22.8L42.7597 38.7199C42.1597 42.2599 38.7797 45.12 35.1997 45.12ZM23.9797 5.8798C22.9197 5.8798 21.8597 6.19999 21.0797 6.81999L7.21964 17.9198C6.07964 18.8398 5.29965 20.88 5.53965 22.32L8.19968 38.2399C8.55968 40.3399 10.6597 42.12 12.7997 42.12H35.1997C37.3397 42.12 39.4397 40.3399 39.7997 38.2199L42.4597 22.3C42.6997 20.86 41.8997 18.7998 40.7797 17.8998L26.9197 6.81999C26.1197 6.19999 25.0597 5.8798 23.9797 5.8798Z" fill="#353535" />
                <path d="M28.2411 30.2599C27.8611 30.2599 27.5011 30.12 27.2011 29.84C25.2611 27.98 22.7411 27.98 20.7811 29.84C20.1811 30.42 19.241 30.3999 18.661 29.7999C18.081 29.1999 18.1011 28.2598 18.7011 27.6798C21.8011 24.6998 26.1411 24.6998 29.2611 27.6798C29.8611 28.2598 29.8811 29.1999 29.3011 29.7999C29.0411 30.0999 28.6411 30.2599 28.2411 30.2599Z" fill="#353535" />
                <path d="M32.4807 26.0201C32.1007 26.0201 31.7207 25.8802 31.4407 25.6002C30.5007 24.6802 29.4408 23.94 28.3208 23.4C25.5208 22.06 22.4607 22.06 19.6807 23.4C18.5607 23.94 17.5207 24.6802 16.5607 25.6002C15.9807 26.1802 15.0207 26.1801 14.4407 25.5801C13.8607 24.9801 13.8808 24.04 14.4608 23.46C15.6408 22.3 16.9607 21.38 18.3807 20.7C22.0007 18.96 26.0007 18.96 29.6007 20.7C31.0207 21.38 32.3408 22.3 33.5208 23.46C34.1208 24.04 34.1207 24.9801 33.5407 25.5801C33.2607 25.8601 32.8807 26.0201 32.4807 26.0201Z" fill="#353535" />
                <path d="M24.0011 35C23.4811 35 22.9811 34.8 22.5811 34.42C21.8011 33.64 21.8011 32.3801 22.5811 31.6001C23.3611 30.8201 24.6411 30.8201 25.4211 31.6001C26.2011 32.3801 26.2011 33.64 25.4211 34.42C25.0211 34.8 24.5211 35 24.0011 35Z" fill="#353535" />
              </svg>
              <span className=' font-EstedadRegular text-xs md:text-lg text-Gray-7'>پرسنلی مجرب و حرفه‌ای</span>
            </div>

            <div className='bg-Gray-4 w-px h-[103px] hidden md:block mx-10 xl:mx-0'></div>

            <div className='flex flex-col items-center gap-y-4'>
              <svg className='w-4 sm:w-5 md:w-12 h-4 sm:h-5 md:h-12' viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M32.7599 45.5H6.47985C4.57985 45.5 2.81986 44.6201 1.67986 43.0801C0.519863 41.5201 0.179881 39.56 0.759881 37.7L9.17986 10.6399C9.93986 8.11989 12.2599 6.3999 14.8999 6.3999H39.4999C41.9199 6.3999 44.0999 7.84008 45.0199 10.0801C45.5199 11.2401 45.6199 12.5601 45.3199 13.8601L38.5799 40.9199C37.9399 43.6199 35.5399 45.5 32.7599 45.5ZM14.9199 9.41992C13.6199 9.41992 12.4399 10.28 12.0599 11.54L3.63989 38.6001C3.35989 39.5401 3.51987 40.5201 4.11987 41.3201C4.67987 42.0801 5.55987 42.52 6.49987 42.52H32.7799C34.1599 42.52 35.3599 41.58 35.6799 40.24L42.4199 13.1599C42.5799 12.4999 42.5399 11.84 42.2799 11.26C41.7999 10.12 40.7399 9.3999 39.5199 9.3999H14.9199V9.41992Z" fill="#353535" />
                <path d="M41.56 45.4999H32C31.18 45.4999 30.5 44.8199 30.5 43.9999C30.5 43.1799 31.18 42.4999 32 42.4999H41.56C42.38 42.4999 43.14 42.16 43.7 41.56C44.26 40.96 44.54 40.16 44.48 39.34L42.5 12.1C42.44 11.28 43.06 10.5599 43.88 10.4999C44.7 10.4599 45.42 11.0598 45.48 11.8798L47.46 39.1201C47.58 40.7601 47 42.4 45.88 43.6C44.78 44.82 43.2 45.4999 41.56 45.4999Z" fill="#353535" />
                <path d="M19.3595 14.2599C19.2395 14.2599 19.1195 14.2399 18.9995 14.2199C18.1995 14.0199 17.6996 13.2198 17.8996 12.3998L19.9795 3.75992C20.1795 2.95992 20.9795 2.45982 21.7995 2.65982C22.5995 2.85982 23.0996 3.65989 22.8996 4.47989L20.8196 13.12C20.6596 13.8 20.0395 14.2599 19.3595 14.2599Z" fill="#353535" />
                <path d="M32.7589 14.28C32.6589 14.28 32.5389 14.2799 32.4389 14.2399C31.6389 14.0599 31.1189 13.2599 31.2789 12.4599L33.1589 3.77997C33.3389 2.95997 34.1389 2.46006 34.9389 2.62006C35.7389 2.78006 36.2589 3.59985 36.0989 4.39985L34.2189 13.08C34.0789 13.8 33.4589 14.28 32.7589 14.28Z" fill="#353535" />
                <path d="M31.4004 25.5H15.4004C14.5804 25.5 13.9004 24.82 13.9004 24C13.9004 23.18 14.5804 22.5 15.4004 22.5H31.4004C32.2204 22.5 32.9004 23.18 32.9004 24C32.9004 24.82 32.2204 25.5 31.4004 25.5Z" fill="#353535" />
                <path d="M29.4004 33.5H13.4004C12.5804 33.5 11.9004 32.82 11.9004 32C11.9004 31.18 12.5804 30.5 13.4004 30.5H29.4004C30.2204 30.5 30.9004 31.18 30.9004 32C30.9004 32.82 30.2204 33.5 29.4004 33.5Z" fill="#353535" />
              </svg>
              <span className=' font-EstedadRegular text-xs md:text-lg text-Gray-7'>پرسنلی مجرب و حرفه‌ای</span>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
