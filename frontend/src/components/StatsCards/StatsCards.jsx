
const StatsCards = () => {
    const stats = [
        "TOTAL PRODUCTS",
        "ACTIVE",
        "LOW STOCK",
        "OUT OF STOCK",
        "TOTAL SKUS",
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 my-4">
            {stats.map((item) => (
                <div key={item} className=" flex flex-col gap-[21px] h-[105px] bg-white rounded-lg p-4">
                    <h2 className="font-Inter font-normal text-2xl text-[#6B7280] leading-5 tracking-[-0.15px]">0</h2>
                    <p className="font-Inter font-normal text-base text-[#4B0082] leading-8 tracking-[0.07px]">{item}</p>
                </div>
            ))}
        </div>
    );
}


export default StatsCards;