import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import img1 from '../../assets/category/asset 1.jpeg';
import img2 from '../../assets/category/asset 10.png';
import img3 from '../../assets/category/asset 11.png';
import img4 from '../../assets/category/asset 14.png';
import img5 from '../../assets/category/asset 2.jpeg';
import img6 from '../../assets/category/asset 4.jpeg';
import img7 from '../../assets/category/asset 5.jpeg';
import img8 from '../../assets/category/asset 6.jpeg';
import img9 from '../../assets/category/asset 7.jpeg';
import img10 from '../../assets/category/asset 8.jpeg';
import img11 from '../../assets/category/asset 13.png';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { useRef } from "react";

export default function Category() {
    const categoryItems = [
        { "name": "Organic Apples", "image": img1 },
        { "name": "Fresh Yellow Beans", "image": img2 },
        { "name": "Sweet Oranges", "image": img3 },
        { "name": "Fresh Salmon", "image": img4 },
        { "name": "Artisan Breads", "image": img5 },
        { "name": "Mineral Water", "image": img6 },
        { "name": "Premium Beef", "image": img7 },
        { "name": "Fresh Herbs", "image": img8 },
        { "name": "Organic Eggs", "image": img9 },
        { "name": "Creamy Pastries", "image": img10 },
        { "name": "Organic Vegetables", "image": img11 },
    ];
    

    // References for Swiper navigation
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <section className="max-w-screen-2xl mx-auto lg:h-[300px] mt-20 mb-20">
            <div className="flex justify-between lg:p-8 ">
                <h1 className="text-4xl font-bold">Category</h1>
                <div className="flex gap-x-1 items-center">
                    <button className="border px-4 py-2 text-white bg-[#6bb252] hover:bg-[#ffc107] rounded-lg font-semibold">
                        View All
                    </button>
                    {/* Custom navigation buttons */}
                    <div className="flex gap-x-2">
                        <button ref={prevRef} className="text-gray-500 hover:text-black  bg-[#eaeaea] hover:bg-[#6bb252] rounded-lg">
                            <FaAngleLeft size={40} />
                        </button>
                        <button ref={nextRef} className="text-gray-500 hover:text-black  bg-[#eaeaea] hover:bg-[#6bb252] rounded-lg">
                            <FaAngleRight size={40} />
                        </button>
                    </div>
                </div>
            </div>
            <Swiper
                // slidesPerView={8}  // Show 3 slides at a time
                spaceBetween={-100}  // Keep a reasonable negative space to bring images closer
                loop={true}  // Enable looping
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                onSwiper={(swiper) => {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                    swiper.navigation.init();
                    swiper.navigation.update();
                }}
                modules={[Pagination, Navigation]}
                breakpoints={{
                    // when window width is >= 640px
                    375: {
                        slidesPerView: 2,  // Show 1 slide on small screens (mobile)
                        spaceBetween: 20,  // Add space between slides
                    },
                    // when window width is >= 768px
                    768: {
                        slidesPerView: 4,  // Show 2 slides on tablets
                        spaceBetween: 20,
                    },
                    // when window width is >= 1024px
                    1024: {
                        slidesPerView: 4,  // Show 3 slides on desktops
                        spaceBetween: 30,
                    },
                    // when window width is >= 1280px
                    1280: {
                        slidesPerView: 8,  // Show 4 slides on larger desktops
                        spaceBetween: 40,
                    },
                }}
                className="mySwiper"
            >
                {categoryItems.map((item, idx) => (
                    <SwiperSlide key={idx} className="flex flex-col items-center mt-8">
                        <div className="flex flex-col items-center">
                            <img src={item.image} alt={item.name} className="w-40 h-40 rounded-full object-cover" />
                            <p className="text-center mt-2 text-lg font-medium">{item.name}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
