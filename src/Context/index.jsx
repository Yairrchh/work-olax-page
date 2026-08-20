import { createContext, useEffect, useState } from "react";
import { productsOfHome } from "../dataBases/productsOfHome";
import { supabase } from "../lib/supabaseClient";

const olaxPageContext = createContext();

const mapSupabaseProduct = (producto) => ({
    id: producto.id,
    name: producto.nombre,
    category: producto.categoria,
    images: producto.imagenes ?? [],
    description: producto.caracteristicas
        ? [{ name: "Características", property: producto.caracteristicas }]
        : [],
    bestSeller: producto.estado === "disponible",
    comingSoon: producto.estado === "proximamente",
});

const OlaxPageProvider = ({children}) => {

    //Products Home
    const [dataProductsHome, setDataProductsHome] = useState([]);
    //product of product
    const [dataProducts, setDataProducts] = useState([]);
    const [loadingProducts, setLoadingProducts] = useState(true);

    useEffect(() => {
        setDataProductsHome(productsOfHome);

        const fetchProducts = async () => {
            const { data, error } = await supabase
                .from("productos")
                .select("*")
                .order("created_at", { ascending: true });

            if (!error && data) {
                setDataProducts(data.map(mapSupabaseProduct));
            }
            setLoadingProducts(false);
        };

        fetchProducts();
    },[])


    return (
        <olaxPageContext.Provider
            value={{
                dataProductsHome,
                setDataProductsHome,
                dataProducts,
                setDataProducts,
                loadingProducts,
            }}
        >
            {children}
        </olaxPageContext.Provider>
    )
}

export {olaxPageContext, OlaxPageProvider};