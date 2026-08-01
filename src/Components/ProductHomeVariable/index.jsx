import { useEffect, useState } from "react";
import { products } from "../../dataBases/products";
import { NavLink } from "react-router-dom";
import "./index.css";

const ProductHomeVariable = () => {
    const [productShowVariable, setProductShowVariable] = useState(products[2]);
    const [, setIndex] = useState(3);
    const [preloadedImages, setPreloadedImages] = useState([]);
    const [isVisible, setIsVisible] = useState(true); // controla el fade

    useEffect(() => {
        const interval = setInterval(() => {
            // 1. Empieza a desvanecer la imagen actual
            setIsVisible(false);

            // 2. Cuando termina el fade-out, cambia la imagen y vuelve a mostrarla
            setTimeout(() => {
                setIndex((prevIndex) => {
                    setProductShowVariable(products[prevIndex]);
                    return (prevIndex + 1) % products.length;
                });
                setIsVisible(true);
            }, 300); // debe coincidir con la duración de la transición CSS
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const images = products.map(product => {
            const img = new Image();
            img.src = product.images[0];
            return img;
        });

        setPreloadedImages(images);
    }, []);

    return (
        <div className="div-first flex flex-wrap gap-x-10 items-center justify-center rounded-xl">
            <div className="div-container-variable flex flex-col items-center justify-center text-center min-h-[180px] gap-4">
    <h1 className={`h1-olex text-white border-1 text-2xl sm:text-3xl md:text-4xl font-bold leading-tight line-clamp-2 break-words max-w-[500px] transition-opacity duration-300 ease-in-out ${isVisible ? "opacity-100" : "opacity-0"}`}>
        {productShowVariable.name}
    </h1>
    <div className={`div-button transition-opacity duration-300 ease-in-out ${isVisible ? "opacity-100" : "opacity-0"}`}>
        <NavLink to='/products'>
            <button className="button-view-more bg-indigo-600 py-3 p-5 rounded-2xl text-white text-xl
            transition-transform transform-gpu hover:scale-110 ease-out duration-300">
                Ver más
            </button>
        </NavLink>
    </div>
</div>

            <div className="div-first-img w-[220px] h-[220px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] flex items-center justify-center overflow-hidden">
                {
                    preloadedImages.length > 0 && (
                        <img
                            className={`object-cover w-full h-full transition-opacity duration-300 ease-in-out ${isVisible ? "opacity-100" : "opacity-0"}`}
                            src={productShowVariable.images[0]}
                        />
                    )
                }
            </div>
        </div>
    );
};

export { ProductHomeVariable };