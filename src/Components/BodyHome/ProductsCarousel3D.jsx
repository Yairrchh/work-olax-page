import { useContext, useEffect, useState } from "react";
import { olaxPageContext } from "../../Context";
import "./ProductsCarousel3D.css";

const ProductsCarousel3D = () => {
    const context = useContext(olaxPageContext);
    const [center, setCenter] = useState(0);

    const carouselProducts = (context?.dataProducts ?? [])
        .filter((product) => product.images?.[0])
        .map((product) => ({ id: product.id, name: product.name, image: product.images[0] }));

    const n = carouselProducts.length;

    useEffect(() => {
        if (n === 0) return;
        const interval = setInterval(() => {
            setCenter((prev) => (prev + 1) % n);
        }, 2200);
        return () => clearInterval(interval);
    }, [n]);

    if (n === 0) return null;

    return (
        <section className="carousel3d-wrap">
            <div className="carousel3d-stage">
                {carouselProducts.map((product, i) => {
                    let offset = i - center;
                    if (offset > n / 2) offset -= n;
                    if (offset < -n / 2) offset += n;

                    const abs = Math.abs(offset);
                    // % relativo al propio ancho de la tarjeta: el espaciado escala
                    // automáticamente al crecer/achicar las tarjetas por CSS (media queries).
                    const x = offset * 88;
                    const scale = abs === 0 ? 1 : abs === 1 ? 0.72 : 0.5;
                    const rotY = offset * -22;
                    const z = -abs * 90;
                    const opacity = abs > 2 ? 0 : abs === 0 ? 1 : abs === 1 ? 0.75 : 0.4;
                    const zIndex = 100 - abs;

                    return (
                        <div
                            key={product.id}
                            className="carousel3d-card"
                            style={{
                                transform: `translate(-50%,-50%) translateX(${x}%) translateZ(${z}px) rotateY(${rotY}deg) scale(${scale})`,
                                opacity,
                                zIndex,
                                filter:
                                    abs === 0
                                        ? "drop-shadow(0 18px 22px rgba(224,33,39,0.28))"
                                        : "drop-shadow(0 10px 14px rgba(0,0,0,0.15))",
                            }}
                        >
                            <img src={product.image} alt={product.name} loading="lazy" />
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export { ProductsCarousel3D };
