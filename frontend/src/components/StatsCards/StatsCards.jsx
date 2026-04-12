
const StatsCards = () => {
    const stats = [
        "TOTAL PRODUCTS",
        "ACTIVE",
        "LOW STOCK",
        "OUT OF STOCK",
        "TOTAL SKUS",
    ];

    return (
        <div className="grid grid-cols-5 gap-4 mb-6">
            {stats.map((item) => (
                <div key={item} className="bg-white p-4 rounded-lg">
                    <p className="text-xs text-gray-400">{item}</p>
                    <h2 className="text-lg font-semibold">0</h2>
                </div>
            ))}
        </div>
    );
}


export default StatsCards;