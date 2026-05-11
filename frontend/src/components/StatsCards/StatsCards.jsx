const StatsCards = ({ products = [] }) => {
    const calculateStats = () => {
        const totalProducts = products.length;
        const activeProducts = products.filter(p => p.status === 'active').length;
        const lowStockProducts = products.filter(p => p.stock <= 10 && p.stock > 0).length;
        const outOfStockProducts = products.filter(p => p.stock === 0).length;
        const totalSKUs = products.filter(p => p.sku).length;

        return {
            totalProducts,
            activeProducts,
            lowStockProducts,
            outOfStockProducts,
            totalSKUs
        };
    };

    const stats = calculateStats();
    const statsData = [
        { label: "TOTAL PRODUCTS", value: stats.totalProducts },
        { label: "ACTIVE", value: stats.activeProducts },
        { label: "LOW STOCK", value: stats.lowStockProducts },
        { label: "OUT OF STOCK", value: stats.outOfStockProducts },
        { label: "TOTAL SKUS", value: stats.totalSKUs },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 my-4">
            {statsData.map((item) => (
                <div key={item.label} className=" flex flex-col gap-[21px] h-[105px] bg-white rounded-lg p-4">
                    <h2 className="font-Inter font-normal text-2xl text-[#6B7280] leading-5 tracking-[-0.15px]">{item.value}</h2>
                    <p className="font-Inter font-normal text-base text-[#4B0082] leading-8 tracking-[0.07px]">{item.label}</p>
                </div>
            ))}
        </div>
    );
}


export default StatsCards;