import { Layout } from "../../Components/Layout";
import { BestSellers } from "../../Components/BestSellers";
import { ComingSoonProducts } from "../../Components/ComingSoonProducts";
// import { ProductHomeVariable } from "../../Components/ProductHomeVariable";

const ProductsPage = () => {
    return (
        <Layout>
            <BestSellers/>
            <ComingSoonProducts/>
            {/* <ProductHomeVariable/> */}
        </Layout>
    )
}

export {ProductsPage};