import { CardProducts } from "../../Components/CardProducts";
import { Layout } from "../../Components/Layout";
import { ProductDetail } from "../../Components/ProductDetail";

const ProductsPage = () => {
    return (
        <Layout>
            <input
            type="text"
            placeholder="Buscar un producto, modelo y mas"
            className=" text-center rounded-lg border border-black p-2 w-80 mb-4"
            ></input>
            <CardProducts/>
            <ProductDetail/>
        </Layout>
    )
}

export {ProductsPage};