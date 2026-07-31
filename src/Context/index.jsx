import { createContext, useEffect, useState } from "react";
import { productsOfHome } from "../dataBases/productsOfHome";
import { products } from "../dataBases/products";

const olaxPageContext = createContext();

const OlaxPageProvider = ({children}) => {

    //Products Home
    const [dataProductsHome, setDataProductsHome] = useState([]);
    //product of product
    const [dataProducts, setDataProducts] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setDataProductsHome(productsOfHome);
            setDataProducts(products);
        }, 500)
    },[])


    return (
        <olaxPageContext.Provider
            value={{
                dataProductsHome,
                setDataProductsHome,
                dataProducts,
                setDataProducts,
            }}
        >
            {children}
        </olaxPageContext.Provider>
    )
}

export {olaxPageContext, OlaxPageProvider};