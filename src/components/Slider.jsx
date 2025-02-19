import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useRef } from "react";

const Slider = () => {

    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <div className="relative w-full">

            <svg ref={prevRef} className="hidden md:block w-8 h-8 absolute left-0 z-10 text-white hover:text-Gray-8 ml-6 transition-all top-1/2 -translate-y-1/2" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 27.56C19.7467 27.56 19.4934 27.4667 19.2934 27.2667L10.6 18.5734C9.18671 17.16 9.18671 14.84 10.6 13.4267L19.2934 4.73336C19.68 4.34669 20.32 4.34669 20.7067 4.73336C21.0934 5.12003 21.0934 5.76003 20.7067 6.14669L12.0134 14.84C11.3734 15.48 11.3734 16.52 12.0134 17.16L20.7067 25.8534C21.0934 26.24 21.0934 26.88 20.7067 27.2667C20.5067 27.4534 20.2534 27.56 20 27.56Z" fill="currentColor" />
            </svg>
            <svg ref={nextRef} className="hidden md:block w-8 h-8 absolute right-0 z-10 text-white hover:text-Gray-8 mr-6 transition-all top-1/2 -translate-y-1/2" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.8805 27.56C11.6271 27.56 11.3738 27.4667 11.1738 27.2667C10.7871 26.88 10.7871 26.24 11.1738 25.8534L19.8671 17.16C20.5071 16.52 20.5071 15.48 19.8671 14.84L11.1738 6.14669C10.7871 5.76003 10.7871 5.12003 11.1738 4.73336C11.5605 4.34669 12.2005 4.34669 12.5871 4.73336L21.2805 13.4267C21.9605 14.1067 22.3471 15.0267 22.3471 16C22.3471 16.9734 21.9738 17.8934 21.2805 18.5734L12.5871 27.2667C12.3871 27.4534 12.1338 27.56 11.8805 27.56Z" fill="currentColor" />
            </svg>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                loop={true}
                onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                }}
            >
                <SwiperSlide>
                    <div className="slide_1 flex items-center justify-center h-[176px] md:h-[336px] text-white">
                        <h2 className="text-base md:text-4xl font-EstedadBold animate-fade-in">تجربه غذای سالم و گیاهی به سبک ترخینه</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide_2 flex items-center justify-center h-[176px] md:h-[336px] text-white">
                        <h2 className="text-base md:text-4xl font-EstedadBold animate-fade-in">! طعم بی‌نظیر طبیعت</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide_3 flex items-center justify-center h-[176px] md:h-[336px] text-white">
                        <h2 className="text-base md:text-4xl font-EstedadBold animate-fade-in">! لذت غذای سالم و گیاهی را با ترخینه تجربه کنید</h2>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div >
    );
};

export default Slider;