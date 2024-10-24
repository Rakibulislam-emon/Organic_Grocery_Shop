import { FaRegCalendarAlt, FaTag } from 'react-icons/fa';

export default function RecentBlog() {
    const blogs = [
        {
            "date": "22 Aug 2021",
            "category": "tips & tricks",
            "title": "Top 10 casual look ideas to dress up your kids",
            "description": "Lorem ipsum dolor sit amet, consectetur adipi elit. Aliquet eleifend viverra enim tincidunt donec quam. A in arcu, hendrerit neque dolor morbi...",
            "image": "https://i.ibb.co/hZyrVyV/asset-32.jpg"
        },
        {
            "date": "22 Aug 2021",
            "category": "tips & tricks",
            "title": "Top 10 casual look ideas to dress up your kids",
            "description": "Lorem ipsum dolor sit amet, consectetur adipi elit. Aliquet eleifend viverra enim tincidunt donec quam. A in arcu, hendrerit neque dolor morbi...",
            "image": "https://i.ibb.co/BrnMTR5/asset-33.jpg"
        },
        {
            "date": "22 Aug 2021",
            "category": "tips & tricks",
            "title": "Top 10 casual look ideas to dress up your kids",
            "description": "Lorem ipsum dolor sit amet, consectetur adipi elit. Aliquet eleifend viverra enim tincidunt donec quam. A in arcu, hendrerit neque dolor morbi...",
            "image": "https://i.ibb.co/6D1QyGS/asset-34.jpg"
        }
    ];

    return (
        <div className="max-w-screen-2xl px-4 mx-auto">
            {/* Title */}
            <div className="flex justify-between lg:p-8">
                <h1 className="text-4xl font-bold">Our Recent Blog</h1>
                <div className="flex gap-x-1 items-center">
                    <button className="border px-4 py-2 text-white bg-[#6bb252] hover:bg-[#ffc107] rounded-lg font-semibold">
                        View All
                    </button>
                </div>
            </div>
            {/* Blog */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
                {blogs.map((item, index) => (
                    <div key={index} className="bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative top-0 hover:-top-2 transition-all duration-300">
                        <img src={item.image} alt={`Blog Post ${index + 1}`} className="w-full h-60 object-cover" />
                        <div className="p-6">
                           <div className='flex gap-x-3'>
                                <div className="flex items-center text-gray-400 mb-2">
                                    <FaRegCalendarAlt className="mr-1" />
                                    <span className="text-sm">{item.date}</span>
                                </div>
                                <div className="flex items-center text-gray-400 mb-2">
                                    <FaTag className="mr-1" />
                                    <span className="text-sm">{item.category}</span>
                                </div>
                           </div>
                            <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
                            <hr className="my-4" />
                            <p className="text-gray-400 text-sm">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
