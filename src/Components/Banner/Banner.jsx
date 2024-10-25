import BannerImg from '../../assets/banner/banner-1.jpg';
import rotate from '../../assets/icons/icons8-update-left-rotation-50.png';
import { LuLeaf } from "react-icons/lu";
import { LiaTruckSolid } from "react-icons/lia";

export default function Banner() {
    return (
        <section
            className="lg:h-[710px] h-[1210px]  overflow-hidden"
            style={{
                backgroundImage: `url(${BannerImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundBlendMode: 'screen',
            }}
        >
            <section className="lg:left-36 px-4 sm:px-6 h-full grid items-center relative">
                {/* Heading Section */}
                <div className="absolute left-0 right-0 top-60 transform -translate-y-1/2 text-center lg:top-60 lg:text-left">
                    {/* Text for Small Screens */}
                    <div className="block sm:hidden">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl tracking-tight font-extrabold text-gray-800 ">
                            <span className='text-[#6bb252]'>Organic</span> <span className='text-[#212529] font-semibold'>Foods at your</span> <span className='text-[#212529]'>Doorsteps</span>
                        </h1>
                        <p className="mt-3 text-base sm:text-lg text-gray-500">Dignissim massa diam elementum.</p>
                    </div>

                    {/* Text for Larger Screens */}
                    <div className="hidden sm:block">
                        <h1 className="text-4xl tracking-tight font-extrabold text-gray-800 sm:text-5xl md:text-6xl">
                            <span className="block xl:inline text-[#6bb252]">Organic</span>
                            <span className="block text-[#212529] xl:inline font-medium">Foods at your<br /></span>
                            <span className='text-[#212529]'>Doorsteps</span>
                        </h1>
                        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                            Dignissim massa diam elementum.
                        </p>
                    </div>

                    {/* Buttons */}
                    <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                        <div className="rounded-md">
                            <a href="#"
                                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base sm:text-lg font-medium rounded-full text-white bg-[#6bb252] hover:bg-[#f7a422] md:py-4 md:px-10">
                                START SHOPPING
                            </a>
                        </div>
                        <div className="mt-3 sm:mt-0 sm:ml-3">
                            <a href="#"
                                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base sm:text-lg font-medium rounded-full text-white bg-[#212529] hover:bg-[#424649] md:py-4 md:px-10">
                                JOIN NOW
                            </a>
                        </div>
                    </div>
                </div>

                {/* Info Section */}
                <div className='lg:mt-44 mt-40 mb-60  lg:mb-0  md:mb-40 text-center lg:text-4xl flex flex-col lg:flex-row lg:gap-x-10 gap-y-6 justify-center w-full lg:justify-start items-center text-4xl font-bold   '>
                    <div className='flex'>
                        <span className='font-bold mr-4'>14k+</span>
                        <p>Product <br />Varieties</p>
                    </div>
                    <div className='flex'>
                        <span className='font-bold'>50k+</span>
                        <p>Happy <br /> Customers</p>
                    </div>
                    <div className='flex'>
                        <span className='font-bold'>10+</span>
                        <p>Store <br /> Locations</p>
                    </div>
                </div>

                {/* Highlights Section */}
                <div className='absolute bottom-0 w-full md:flex justify-center items-center'>
                    <div className='flex flex-col lg:flex-row justify-around h-auto lg:h-40 lg:mr-[320px]'>
                        {/* Highlight 1 */}
                        <div className='flex gap-x-8 items-center p-4 bg-[#6bb252] text-white flex-1'>
                            <img src={rotate} alt='rotate' className='h-20 w-20' />
                            <p className='lg:text-3xl text-xl'>
                                Fresh from farm <br />
                                Experience the taste of organic produce straight from local farms.
                            </p>
                        </div>
                        {/* Highlight 2 */}
                        <div className='flex gap-x-8 items-center p-4 bg-[#364127] text-white flex-1'>
                            <LuLeaf size={70} className='text-white' />
                            <p className='lg:text-3xl text-xl'>
                                Nutrient-rich greens <br />
                                Discover the benefits of farm-fresh vegetables for your health.
                            </p>
                        </div>
                        {/* Highlight 3 */}
                        <div className='flex gap-x-8 items-center p-4 bg-[#f95f09] text-white flex-1'>
                            <LiaTruckSolid size={70} className='text-white' />
                            <p className='lg:text-3xl text-xl'>
                                Delivered to your door <br />
                                Enjoy hassle-free delivery of fresh produce right to your doorstep.
                            </p>
                        </div>
                    </div>
                </div>


            </section>
        </section>
    );
}
