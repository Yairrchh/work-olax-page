import { useContext, useEffect, useMemo, useState } from "react";
import { olaxPageContext } from "../../Context";
import { getOptimizedImageUrl } from "../../lib/imageTransform";
import "./ProductsCarousel3D.css";

// Posiciones fijas (5 tarjetas, centro en el índice 2) usadas para el skeleton,
// con la misma fórmula de transform que el carrusel real para que no haya salto visual.
const SKELETON_OFFSETS = [-2, -1, 0, 1, 2];

const ProductsCarousel3D = () => {
    const context = useContext(olaxPageContext);
    const [center, setCenter] = useState(0);

    // Se recalcula solo cuando cambia el catálogo, no en cada giro del carrusel.
    // Las imágenes se piden redimensionadas y en WebP: pesan una fracción del original.
    const carouselProducts = useMemo(
        () =>
            (context?.dataProducts ?? [])
                .filter((product) => product.images?.[0])
                .map((product) => ({
                    id: product.id,
                    name: product.name,
                    image: getOptimizedImageUrl(product.images[0], { width: 400 }),
                })),
        [context?.dataProducts]
    );

    const n = carouselProducts.length;
    const loading = context?.loadingProducts ?? false;

    useEffect(() => {
        if (n === 0) return;
        const interval = setInterval(() => {
            setCenter((prev) => (prev + 1) % n);
        }, 1500);
        return () => clearInterval(interval);
    }, [n]);

    if (loading) {
        return (
            <section className="carousel3d-wrap">
                <div className="carousel3d-stage">
                    {SKELETON_OFFSETS.map((offset) => {
                        const abs = Math.abs(offset);
                        const x = offset * 88;
                        const scale = abs === 0 ? 1.2 : abs === 1 ? 0.72 : 0.5;
                        const rotY = offset * -22;
                        const z = -abs * 90;
                        const opacity = abs === 0 ? 1 : abs === 1 ? 0.75 : 0.4;

                        return (
                            <div
                                key={offset}
                                className="carousel3d-card carousel3d-card--skeleton"
                                style={{
                                    transform: `translate(-50%,-50%) translateX(${x}%) translateZ(${z}px) rotateY(${rotY}deg) scale(${scale})`,
                                    opacity,
                                }}
                            />
                        );
                    })}
                </div>
            </section>
        );
    }

    if (n === 0) return null;

    return (
        <section className="carousel3d-wrap">
            <div className="carousel3d-stage carousel3d-stage--in">
                {carouselProducts.map((product, i) => {
                    let offset = i - center;
                    if (offset > n / 2) offset -= n;
                    if (offset < -n / 2) offset += n;

                    const abs = Math.abs(offset);
                    // % relativo al propio ancho de la tarjeta: el espaciado escala
                    // automáticamente al crecer/achicar las tarjetas por CSS (media queries).
                    const x = offset * 88;
                    const scale = abs === 0 ? 1.2 : abs === 1 ? 0.72 : 0.5;
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
                            <img src={product.image} alt={product.name} />
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export { ProductsCarousel3D };
