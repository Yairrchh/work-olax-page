import { createContext, useEffect, useState } from "react";
import { productsOfHome } from "../dataBases/productsOfHome";

const olaxPageContext = createContext();

const OlaxPageProvider = ({children}) => {

    const [dataProductsHome, setDataProductsHome] = useState([]);


    useEffect(() => {
        setTimeout(() => {
            setDataProductsHome(productsOfHome);
        }, 500)
    },[])

    return (
        <olaxPageContext.Provider
            value={{
                dataProductsHome,
                setDataProductsHome
            }}
        >
            {children}
        </olaxPageContext.Provider>
    )
}

export {olaxPageContext, OlaxPageProvider};