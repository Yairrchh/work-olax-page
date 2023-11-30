import { olaxPageContext } from "../../Context";
import { useContext } from "react";
import { CardProductsList } from "./CardProductsList";
import './index.css'

const CardProducts = () => {

    const context = useContext(olaxPageContext)

    const listProducts = context.dataProducts;

    //Filter to category
    const filterProductsCategory = (products, category) => {
        return products?.filter(item => item.category.toLowerCase().includes(category.toLowerCase()))
    }

    const filteredProductsTablets = filterProductsCategory(listProducts, 'tablets');
    const filteredProductsRouters = filterProductsCategory(listProducts, 'routers')

    return(
        <div className="div-container rounded-lg mt-5 flex justify-center items-center flex-col">
            <section>
                <h1 className="flex items-center text-4xl justify-center text-white mt-3">Tablets</h1>
                <div className="flex flex-wrap mt-5 justify-center items-center gap-9">
                    {
                        filteredProductsTablets.map((data, id) => (
                            <CardProductsList
                            data={data}
                            key={id}
                            />
                        ))
                    }
                </div>
            </section>
            <section className="mt-10 mb-10">
                <h1 className="flex items-center text-4xl justify-center text-white">Routers y mas</h1>
                <div className="flex flex-wrap mt-7 justify-center items-center gap-9">
                    {
                        filteredProductsRouters.map((data, id) => (
                            <CardProductsList
                            data={data}
                            key={id}
                            />
                        ))
                    }
                </div>
            </section>
        </div>
    )

}

export {CardProducts};