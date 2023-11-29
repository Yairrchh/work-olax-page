import { createContext, useEffect, useState } from "react";
import { productsOfHome } from "../dataBases/productsOfHome";
import { products } from "../dataBases/products";

const olaxPageContext = createContext();

const OlaxPageProvider = ({children}) => {

    //Products Home
    const [dataProductsHome, setDataProductsHome] = useState([]);
    //product of product
    const [dataProducts, setDataProducts] = useState([]);

    //Is open product detail
    const [productDetailOpen, setProductDetailopen] = useState(false);
    //open and close productDetailopen
    const openProductDetail = () => setProductDetailopen(true);
    const closeProductDetail = () => setProductDetailopen(false);
    //Product show
    const [productShow, setProductShow] = useState({});



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
                productDetailOpen,
                setProductDetailopen,
                openProductDetail,
                closeProductDetail,
                productShow,
                setProductShow,
            }}
        >
            {children}
        </olaxPageContext.Provider>
    )
}

export {olaxPageContext, OlaxPageProvider};