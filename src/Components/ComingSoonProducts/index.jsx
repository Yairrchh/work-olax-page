import { useContext } from "react";
import { olaxPageContext } from "../../Context";
import { ProductShowcase } from "../ProductShowcase";

const ComingSoonProducts = () => {
    const context = useContext(olaxPageContext);
    const comingSoonProducts = context.dataProducts?.filter((product) => product.comingSoon) ?? [];

    return (
        <ProductShowcase
            eyebrow="Próximamente"
            title="Nuevo inventario en camino: resérvalo antes que llegue a bodega."
            products={comingSoonProducts}
            variant="comingSoon"
        />
    );
};

export { ComingSoonProducts };
