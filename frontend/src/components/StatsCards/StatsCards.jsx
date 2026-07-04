const StatsCards = ({ products = [] }) => {
    const calculateStats = () => {
        const totalProducts = products.length;
        const activeProducts = products.filter(p => p.status === "active").length;
        const lowStockProducts = products.filter(
            p => p.stock <= 10 && p.stock > 0
        ).length;
        const outOfStockProducts = products.filter(
            p => p.stock === 0
        ).length;
        const totalSKUs = products.filter(p => p.sku).length;

        return {
            totalProducts,
            activeProducts,
            lowStockProducts,
            outOfStockProducts,
            totalSKUs,
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
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-4 my-6">
            {statsData.map((item) => (
                <div
                    key={item.label}
                    className="bg-white rounded-lg p-4 min-h-[105px] flex flex-col justify-between shadow-sm"
                >
                    <h2 className="text-2xl md:text-3xl font-semibold text-[#6B7280]">
                        {item.value}
                    </h2>

                    <p className="text-sm md:text-base font-medium text-[#4B0082] uppercase">
                        {item.label}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default StatsCards;