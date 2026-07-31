import { useContext } from "react";
import { olaxPageContext } from "../../Context";
import { ProductShowcase } from "../ProductShowcase";

const BestSellers = () => {
    const context = useContext(olaxPageContext);
    const bestSellerProducts = context.dataProducts?.filter((product) => product.bestSeller) ?? [];

    return (
        <ProductShowcase
            eyebrow="Más vendidos"
            title="Los equipos que más rotan en tienda, elegidos por nuestros distribuidores."
            products={bestSellerProducts}
            variant="bestSeller"
        />
    );
};

export { BestSellers };
