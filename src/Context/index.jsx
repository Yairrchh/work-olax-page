import { createContext, useEffect, useState } from "react";
import { productsOfHome } from "../dataBases/productsOfHome";
import { localProducts } from "../dataBases/localProducts";
import { supabase } from "../lib/supabaseClient";
import { readProductsCache, readStaleProductsCache, writeProductsCache } from "../lib/productsCache";

// Los productos se leen de Supabase. Poner en true para forzar la copia local
// (src/dataBases/localProducts.js), por ejemplo si el proyecto se vuelve a restringir por cuota.
const USE_LOCAL_PRODUCTS = false;

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

        if (USE_LOCAL_PRODUCTS) {
            setDataProducts(localProducts.map(mapSupabaseProduct));
            setLoadingProducts(false);
            return;
        }

        const cached = readProductsCache();
        if (cached) {
            setDataProducts(cached.map(mapSupabaseProduct));
            setLoadingProducts(false);
            return;
        }

        const fetchProducts = async () => {
            const { data, error } = await supabase
                .from("productos")
                .select("id,nombre,categoria,caracteristicas,imagenes,estado")
                .order("created_at", { ascending: true });

            if (!error && data) {
                writeProductsCache(data);
                setDataProducts(data.map(mapSupabaseProduct));
            } else {
                // Supabase no responde (p. ej. cuota agotada): ultima lista guardada o, si no hay, la copia local.
                setDataProducts((readStaleProductsCache() ?? localProducts).map(mapSupabaseProduct));
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