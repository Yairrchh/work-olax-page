import { olaxPageContext } from "../../Context";
import { useContext } from "react";
import { ProductsListHome } from "./ProductsListHome";
import "./index.css"
import olexKids from "/products/tablet-olax-kids.png"


const BodyHome = () => {

    const context = useContext(olaxPageContext)

    return (
        <>
        <div className="div-body flex items-center justify-between rounded-xl ml-3">
            <div className="w-2/4 flex flex-col items-center">
                <h1 className="h1-olex text-white border-1">OLEX</h1>
                <h2 className="h2-kids -mt-8">KIDS</h2>
                <div>
                    <span className="bg-indigo-600 py-3 p-5 rounded-2xl text-white text-xl">Ver mas</span>
                    <a></a>
                </div>
            </div>
            <div className="flex justify-center mt-4">
                <img className="olex-tablet" src={olexKids}/>
            </div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-10 mt-10">
        {
            context.dataProductsHome.map((data, index) => (
                <ProductsListHome
                data={data}
                key={`productList${index}`}
                />
            ))
        }
        </div>
        </>
    )
};

export {BodyHome};