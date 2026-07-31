import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { olaxPageContext } from "../../Context";
import { Layout } from "../../Components/Layout";
import iconOlax from "../../assets/icon/olaxlogo.png";
import "./index.css";

const ChevronIcon = ({ direction }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d={direction === "left" ? "M15.75 19.5L8.25 12l7.5-7.5" : "M8.25 4.5l7.5 7.5-7.5 7.5"} />
    </svg>
);

const BadgeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.745 3.745 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.745 3.745 0 013.296-1.043A3.745 3.745 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
    </svg>
);

const HeadsetIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12a8.25 8.25 0 1116.5 0v4.5a2.25 2.25 0 01-2.25 2.25h-.75a1.5 1.5 0 01-1.5-1.5V15a1.5 1.5 0 011.5-1.5h2.25M3.75 12v4.5A2.25 2.25 0 006 18.75h.75a1.5 1.5 0 001.5-1.5V15a1.5 1.5 0 00-1.5-1.5H4.5" />
    </svg>
);

const TruckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75h11.25v9h-11.25a.75.75 0 01-.75-.75V7.5a.75.75 0 01.75-.75z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5h3.6a1 1 0 01.8.4l2.1 2.8a1 1 0 01.2.6v1.7a.75.75 0 01-.75.75H13.5" />
        <circle cx="6" cy="18" r="1.75" />
        <circle cx="17.25" cy="18" r="1.75" />
    </svg>
);

const trustPoints = [
    { icon: BadgeIcon, label: "Distribuidor autorizado" },
    { icon: HeadsetIcon, label: "Atención personalizada" },
    { icon: TruckIcon, label: "Envío a todo el país" },
];

const ProductDetailPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const context = useContext(olaxPageContext);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const product = context.dataProducts?.find((item) => String(item.id) === id);

    useEffect(() => {
        setCurrentImageIndex(0);
    }, [id]);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % product.images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? product.images.length - 1 : prevIndex - 1));
    };

    if (!context.dataProducts?.length) {
        return (
            <Layout>
                <p className="text-gray-500 mt-16">Cargando producto...</p>
            </Layout>
        );
    }

    if (!product) {
        return (
            <Layout>
                <div className="flex flex-col items-center gap-4 mt-16">
                    <p className="text-gray-500">No encontramos este producto.</p>
                    <button onClick={() => navigate("/products")} className="text-red-600 font-semibold underline cursor-pointer">
                        Volver al catálogo
                    </button>
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            <div className="w-11/12 max-w-5xl mt-6">
                <button onClick={() => navigate(-1)} className="flex items-center gap-1 text-sm font-semibold text-gray-500 hover:text-red-600 cursor-pointer transition-colors">
                    <ChevronIcon direction="left" />
                    Volver
                </button>

                <div className="detail-card bg-white border border-gray-100 rounded-3xl shadow-sm mt-4 p-6 sm:p-10 flex flex-col lg:flex-row gap-10">
                    <div className="flex-1">
                        <div className="detail-main-image relative rounded-2xl bg-gray-50 flex items-center justify-center overflow-hidden">
                            {product.images.length > 1 && (
                                <button onClick={prevImage} className="nav-arrow left" aria-label="Imagen anterior">
                                    <ChevronIcon direction="left" />
                                </button>
                            )}
                            <img
                                className="max-w-full max-h-full object-contain"
                                src={product.images[currentImageIndex]}
                                alt={product.name}
                            />
                            {product.images.length > 1 && (
                                <button onClick={nextImage} className="nav-arrow right" aria-label="Siguiente imagen">
                                    <ChevronIcon direction="right" />
                                </button>
                            )}
                        </div>

                        {product.images.length > 1 && (
                            <div className="flex items-center gap-3 mt-4">
                                {product.images.map((image, index) => (
                                    <button
                                        key={image}
                                        onClick={() => setCurrentImageIndex(index)}
                                        className={`thumb ${index === currentImageIndex ? "thumb-active" : ""}`}
                                    >
                                        <img className="w-full h-full object-contain" src={image} alt={`${product.name} ${index + 1}`} loading="lazy" />
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="flex-1 flex flex-col">
                        <div className="flex items-center gap-2 mb-2">
                            <img src={iconOlax} alt="Olax" className="w-5 h-5 object-contain" />
                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-red-600">Catálogo Olax</span>
                        </div>
                        <h1 className="text-3xl font-extrabold text-black">{product.name}</h1>
                        <span className="category-pill mt-3">{product.category}</span>

                        <hr className="my-6 border-gray-100" />

                        <h2 className="text-sm font-bold uppercase tracking-wide text-gray-500 mb-3">Características</h2>
                        <p className="text-sm text-gray-600 leading-relaxed mb-8">
                            {product.description?.map((spec) => `${spec.name}: ${spec.property}`).join(". ")}
                        </p>

                        <div className="trust-panel bg-slate-500 rounded-2xl px-6 py-5 mt-auto mb-6">
                            <p className="text-xs text-center font-semibold uppercase tracking-wide text-red-500 mb-4">Por qué comprar con nosotros</p>
                            <div className="grid grid-cols-3 gap-3">
                                {trustPoints.map(({ icon: Icon, label }) => (
                                    <div key={label} className="flex flex-col items-center text-center gap-2">
                                        <Icon />
                                        <span className="text-xs text-white font-medium leading-tight">{label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <button
                                onClick={() => navigate(-1)}
                                className="border border-gray-300 text-gray-700 font-semibold rounded-xl px-6 py-3 hover:border-red-600 hover:text-red-600 transition-colors cursor-pointer"
                            >
                                Volver atrás
                            </button>
                            <button
                                onClick={() => navigate("/contact")}
                                className="bg-red-600 text-white font-semibold rounded-xl px-8 py-3 hover:bg-red-700 transition-transform transform-gpu hover:scale-105 ease-out duration-300 cursor-pointer"
                            >
                                Cotizar producto
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export { ProductDetailPage };
