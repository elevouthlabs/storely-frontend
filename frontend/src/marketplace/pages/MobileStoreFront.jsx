import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";
import heart from "../../assets/heart.svg";
import filter from "../../assets/filter.png";
import StoreHeader from "../components/StoreHead";
import StoreNavbar from "../components/StoreNavbar";

const MobileStorefront = () => {
    const navigate = useNavigate();

    const [selectedCategory, setSelectedCategory] = useState("All");
    const [activeCategory, setActiveCategory] = useState("shoes");

    const { addToCart } = useCart();


    const topCategories = ["All", "Men", "Women", "Kids"];

    const testimonials = [
        {
            id: 1,
            name: "Aisha T.",
            rating: 5,
            text: "Absolutely love my Ankara dress! The fit is perfect and the quality is amazing. Will definitely order ",
            time: "2 days ago",
        },
        {
            id: 2,
            name: "John Okafor",
            rating: 4,
            text: "Very reliable store. I love the sneakers I bought. Will definitely come back.",
            time: "1 week ago",
        },
        {
            id: 3,
            name: "Mary Johnson",
            rating: 5,
            text: "Customer service was top-notch and the clothes fit perfectly. Highly recommended!",
            time: "3 weeks ago",
        },
    ];

    const getInitials = (name) => {
        return name
            .split(" ")
            .map((n) => n[0])
            .join("")
            .toUpperCase();
    };

    const [testimonialIndex, setTestimonialIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setTestimonialIndex((prev) =>
                prev === testimonials.length - 1 ? 0 : prev + 1
            );
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    const featuredCollections = [
        {
            title: "NEW ARRIVALS",
            products: "24 products",
            bg: "from-[#12041e] to-[#321047]",
        },
        {
            title: "BEST SELLERS",
            products: "24 products",
            bg: "from-[#6815a3] to-[#9d4edd]",
        },
    ];

    const shopCategories = [
        {
            name: "Shoes",
            items: "24 items",
            image:
                "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop",
        },
        {
            name: "Clothing",
            items: "48 items",
            image:
                "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop",
        },
        {
            name: "Bags",
            items: "18 items",
            image:
                "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1200&auto=format&fit=crop",
        },
        {
            name: "Accessories",
            items: "15 items",
            image:
                "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=1200&auto=format&fit=crop",
        },
    ];

    const categories = [
        {
            id: 1,
            key: "shoes",
            name: "Shoes",
            items: 24,
            image:
                "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop",
            route: "/store/category/shoes"
        },
        {
            id: 2,
            key: "clothing",
            name: "Clothing",
            items: 48,
            image:
                "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=800&auto=format&fit=crop",
            route: "/store/category/clothing"
        },
        {
            id: 3,
            key: "accessories",
            name: "Accessories",
            items: 16,
            image:
                "https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=800&auto=format&fit=crop",
            route: "/store/category/accessories"
        },
        {
            id: 4,
            key: "bags",
            name: "Bags",
            items: 12,
            image:
                "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=800&auto=format&fit=crop",
            route: "/store/category/bags"
        }
    ];

    const products = {
        shoes: [
            {
                id: 1,
                badge: "shoes",
                name: "Classic Sneakers",
                price: 15000,
                rating: 4.8,
                image:
                    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop"
            },
            {
                id: 2,
                badge: "shoes",
                name: "Formal Shoes",
                price: 28000,
                rating: 4.8,
                image:
                    "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?q=80&w=800&auto=format&fit=crop"
            },
            {
                id: 3,
                badge: "shoes",
                name: "Sports Sneakers",
                price: 22000,
                rating: 4.7,
                image:
                    "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=800&auto=format&fit=crop"
            }
        ],

        clothing: [
            {
                id: 4,
                badge: "clothing",
                name: "Elegant Dress",
                price: 25000,
                rating: 4.9,
                image:
                    "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=800&auto=format&fit=crop"
            },
            {
                id: 5,
                badge: "clothing",
                name: "Summer T-Shirt",
                price: 5500,
                rating: 4.5,
                image:
                    "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&auto=format&fit=crop"
            },
            {
                id: 6,
                badge: "clothing",
                name: "Denim Jeans",
                price: 12000,
                rating: 4.6,
                image:
                    "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=800&auto=format&fit=crop"
            }
        ],

        accessories: [
            {
                id: 7,
                badge: "accessories",
                name: "Gold Necklace",
                price: 8500,
                rating: 4.8,
                image:
                    "https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=800&auto=format&fit=crop"
            },
            {
                id: 8,
                badge: "accessories",
                name: "Sunglasses",
                price: 6000,
                rating: 4.4,
                image:
                    "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=800&auto=format&fit=crop"
            }
        ],

        bags: [
            {
                id: 9,
                badge: "bags",
                name: "Leather Handbag",
                price: 35000,
                rating: 4.7,
                image:
                    "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=800&auto=format&fit=crop"
            }
        ]
    };

    const currentProducts = products?.[activeCategory] || [];

    const loopedProducts = [...currentProducts, ...currentProducts];

    const carouselRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            if (carouselRef.current) {
                const scrollWidth = carouselRef.current.scrollWidth;
                const clientWidth = carouselRef.current.clientWidth;

                if (
                    carouselRef.current.scrollLeft + clientWidth >=
                    scrollWidth
                ) {
                    carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
                } else {
                    carouselRef.current.scrollBy({
                        left: clientWidth / 2,
                        behavior: "smooth",
                    });
                }
            }
        }, 2500);

        return () => clearInterval(interval);
    }, []);


    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;

        for (let i = 0; i < 5; i++) {
            if (i < fullStars) {
                stars.push(
                    <span key={i} className="text-yellow-400">
                        ★
                    </span>
                );
            } else if (i === fullStars && hasHalfStar) {
                stars.push(
                    <span key={i} className="text-yellow-400">
                        ☆
                    </span>
                );
            } else {
                stars.push(
                    <span key={i} className="text-gray-300">
                        ★
                    </span>
                );
            }
        }

        return stars;
    };

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        navigate(`/store/category/${category.toLowerCase()}`);
    };


    return (
        <div className="min-h-screen bg-[#f6f6f6] max-w-md mx-auto pb-24">
            <StoreHeader />

            <div className="relative h-[206px] flex items-center justify-center overflow-hidden">

                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('/sto.png')",
                    }}
                ></div>

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/50"></div>

                {/* Content */}
                <div className="relative text-white p-6 text-center flex flex-col items-center">

                    <p className="text-white text-base font-normal leading-[22px] text-center mb-2">
                        ⭐ Trusted by 200+ customers
                    </p>

                    <h2 className="text-xl mb-4 opacity-90">
                        Luxury Fashion wears for Modern Men and Women
                    </h2>

                    <button className="bg-white text-purple-600 px-4 py-2 rounded-lg text-sm font-semibold">
                        Shop Now
                    </button>

                </div>
            </div>

            <div className="px-3">
                <div className="flex items-center justify-between mt-6 mb-4">
                    <h3 className="text-[18px] font-semibold text-[#222]">
                        Featured Collections
                    </h3>

                    <span className="text-[13px] font-semibold text-[#6a0dad]">
                        See All →
                    </span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                    {featuredCollections.map((item, index) => (
                        <div
                            key={index}
                            className={`relative overflow-hidden rounded-3xl h-[115px] bg-gradient-to-br ${item.bg} p-4 flex flex-col justify-end`}
                        >
                            <div className="absolute -top-5 -right-5 w-[70px] h-[70px] rounded-full bg-white/10"></div>

                            <p className="text-[12px] text-white font-semibold mb-1">
                                {item.title}
                            </p>

                            <h4 className="text-white text-[20px] font-bold">
                                {item.products}
                            </h4>
                        </div>
                    ))}
                </div>
            </div>

            <div className="px-3">
                <div className="flex items-center justify-between mt-6 mb-4">
                    <h3 className="text-[18px] font-semibold text-[#222]">
                        Shop by Category
                    </h3>

                    <button
                        onClick={() => navigate("/store/categories")}
                        className="text-[13px] font-semibold text-[#6a0dad]"
                    >
                        See All →
                    </button>
                </div>

                <div className="grid grid-cols-2 gap-3">
                    {shopCategories.map((item, index) => (
                        <div
                            key={index}
                            onClick={() =>
                                navigate(`/store/category/${item.name.toLowerCase()}`)
                            }
                            className="relative h-[185px] rounded-3xl overflow-hidden cursor-pointer active:scale-[0.98] transition"
                        >
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-full object-cover"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/85 to-black/10 flex flex-col justify-end p-4">
                                <h4 className="text-white text-[20px] font-bold">
                                    {item.name}
                                </h4>

                                <p className="text-white text-[13px]">
                                    {item.items}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="px-3 mt-6">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-[18px] font-semibold text-[#222]">
                        Featured Products
                    </h3>

                    <span
                        onClick={() => navigate("/store/categories")}
                        className="text-[13px] font-semibold text-[#6a0dad] cursor-pointer"
                    >
                        See All →
                    </span>
                </div>

                <div className="flex gap-2 px-3 mt-4 overflow-x-auto">
                    {Object.keys(products).map((key) => (
                        <button
                            key={key}
                            onClick={() => {
                                setActiveCategory(key);
                                setProductIndex(0); // reset carousel
                            }}
                            className={`px-3 py-1 rounded-full text-sm ${activeCategory === key
                                ? "bg-[#6D28D9] text-white"
                                : "bg-gray-200 text-gray-700"
                                }`}
                        >
                            {key}
                        </button>
                    ))}
                </div>
                <div
                    ref={carouselRef}
                    className="flex gap-3 mt-5 overflow-x-auto scroll-smooth no-scrollbar"
                >
                    {currentProducts.map((product) => (
                        <div
                            key={product.id}
                            className="w-[48%] bg-white rounded-[14px] overflow-hidden shadow-sm flex-shrink-0"
                            onClick={() =>
                                navigate(`/store/category/${product.badge}`)
                            }
                        >
                            <div className="relative">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-[140px] object-cover"
                                />
                            </div>
                            <div className="p-3">
                                <h3 className="text-[13px] font-medium text-[#111827] line-clamp-1">
                                    {product.name}
                                </h3>

                                <div className="flex items-center gap-1 mt-1">
                                    <span className="text-yellow-500 text-[12px]">
                                        ★
                                    </span>
                                    <span className="text-[11px] text-[#6B7280]">
                                        {product.rating}
                                    </span>
                                </div>

                                <div className="mt-1 flex items-center justify-between">
                                    <p className="text-sm text-gray-600">
                                        ₦{product.price.toLocaleString()}
                                    </p>

                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            addToCart(product);
                                        }}
                                        className="bg-[#6D28D9] text-white w-6 h-6 rounded-md flex items-center justify-center"
                                    >
                                        🛒
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* TESTIMONIALS */}
            <div className="px-3 mt-8">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-[18px] font-semibold text-[#222]">
                        What Customers Say
                    </h3>
                </div>

                {/* CAROUSEL */}
                <div className="overflow-hidden">
                    <div
                        className=" max-w-[280px] flex  gap-3 transition-transform duration-700 ease-in-out"
                        style={{
                            transform: `translateX(-${testimonialIndex * 100}%)`,
                        }}
                    >
                        {testimonials.map((item) => (
                            <div
                                key={item.id}
                                className="min-w-full bg-white rounded-2xl shadow-sm p-4"
                            >
                                {/* HEADER */}
                                <div className="flex items-center gap-3">
                                    {/* INITIALS */}
                                    <div className="w-10 h-10 rounded-full bg-[#6D28D9] text-white flex items-center justify-center font-bold text-sm">
                                        {getInitials(item.name)}
                                    </div>

                                    <div className="flex-1">
                                        <h4 className="text-[14px] font-semibold text-[#111]">
                                            {item.name}
                                        </h4>

                                        {/* Rating */}
                                        <div className="text-yellow-500 text-[12px]">
                                            {"★".repeat(item.rating)}
                                        </div>
                                    </div>
                                </div>
                                <p className="mt-3 text-[13px] text-gray-600 italic">
                                    “{item.text}”
                                </p>

                                <span className="text-[11px] text-gray-400">
                                    {item.time}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <StoreNavbar />
        </div>
    );
};

export default MobileStorefront;