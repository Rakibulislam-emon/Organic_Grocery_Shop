import BestSellingProductsCard from "./BestSellingProductsCard";

export default function BestSellingProducts() {
    return (
        <main className="max-w-screen-2xl mx-auto  mb-10">
          <div className="flex justify-between mb-16">
                <h1 className="text-4xl font-bold">
                    Best Selling Products
                </h1>
                <button className="border px-4 py-2 text-white bg-[#6bb252] hover:bg-[#ffc107] rounded-lg font-semibold">
                    View All
                </button>
          </div>
          <div>
            <BestSellingProductsCard/>
          </div>
        </main>
    )
}
