import { useState } from "react";
import { useNavigate } from "react-router-dom";
import iconOlax from "../../assets/icon/olaxlogo.png";
import "./index.css";

const categories = ["Todos", "Tablets", "Routers", "Otros"];

const accents = {
    bestSeller: {
        active: "bg-red-600 text-white border-red-600",
        text: "text-red-600",
        ring: "focus:border-red-500",
    },
    comingSoon: {
        active: "bg-amber-600 text-white border-amber-600",
        text: "text-amber-600",
        ring: "focus:border-amber-500",
    },
};

const SearchIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
        <path d="M20 20L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
);

const ProductShowcase = ({ eyebrow, title, products, variant = "bestSeller" }) => {
    const navigate = useNavigate();
    const [activeCategory, setActiveCategory] = useState(categories[0]);
    const [search, setSearch] = useState("");
    const accent = accents[variant];
    const comingSoon = variant === "comingSoon";

    const filteredProducts = products.filter((product) =>
        (activeCategory === "Todos" || product.category.toLowerCase() === activeCategory.toLowerCase()) &&
        product.name.toLowerCase().includes(search.trim().toLowerCase())
    );

    const showProduct = (data) => {
        navigate(`/product/${data.id}`);
    };

    return (
        <section className={`showcase-panel showcase-panel-${variant} w-11/12 max-w-6xl mt-8 rounded-3xl px-6 py-8 sm:px-10 sm:py-12`}>
            <div className="flex flex-col items-center text-center mb-10">
                <div className="flex items-center gap-2 mb-3">
                    <img src={iconOlax} alt="Olax" className="w-5 h-5 object-contain" />
                    <span className={`text-xs font-bold uppercase tracking-[0.2em] ${accent.text}`}>Catálogo Olax</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-black">{eyebrow ?? title}</h2>
                {eyebrow && <p className="text-gray-500 text-sm mt-2 max-w-md">{title}</p>}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                <div className="flex flex-wrap items-center gap-2">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`category-tab px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide border cursor-pointer ${
                                activeCategory === category ? accent.active : "border-gray-300 text-gray-500 hover:border-gray-400"
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
                <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                        <SearchIcon />
                    </span>
                    <input
                        type="text"
                        value={search}
                        onChange={(event) => setSearch(event.target.value)}
                        placeholder="Buscar un producto, modelo y mas"
                        className={`search-input border border-gray-300 rounded-full pl-9 pr-4 py-2 text-sm w-72 focus:outline-none ${accent.ring}`}
                    />
                </div>
            </div>

            <div className="flex flex-wrap justify-center gap-5">
                {
                    filteredProducts.length > 0
                        ? filteredProducts.map((data) => (
                            <div
                                key={data.id}
                                onClick={() => showProduct(data)}
                                className={`showcase-card relative overflow-hidden cursor-pointer bg-white border border-gray-200 rounded-xl flex flex-col items-center p-4 transition-transform transform-gpu hover:-translate-y-1 ease-out duration-300 w-[calc(50%-10px)] sm:w-[calc(33.333%-14px)] lg:w-[calc(20%-16px)] ${comingSoon ? "showcase-card-dim" : ""}`}
                            >
                                {
                                    comingSoon &&
                                        <span className="ribbon bg-amber-600">Pronto</span>
                                }
                                <figure className="w-full h-28 flex items-center justify-center overflow-hidden">
                                    <img className="max-w-full max-h-full object-contain" src={data.images[0]} alt={data.name} loading="lazy" />
                                </figure>
                                <span className="text-sm text-center font-medium mt-3">{data.name}</span>
                                {
                                    comingSoon &&
                                        <span className="text-xs font-semibold text-amber-600 mt-1">Próximamente</span>
                                }
                            </div>
                        ))
                        : <p className="w-full text-center text-gray-500 py-6">No hay productos en esta categoría por ahora.</p>
                }
            </div>
        </section>
    );
};

export { ProductShowcase };
