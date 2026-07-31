import { Layout } from "../../Components/Layout";
import { BestSellers } from "../../Components/BestSellers";
import { ComingSoonProducts } from "../../Components/ComingSoonProducts";

const ProductsPage = () => {
    return (
        <Layout>
            <BestSellers/>
            <ComingSoonProducts/>
        </Layout>
    )
}

export {ProductsPage};