import { useMediaQuery } from "react-responsive";
import { BodyHome } from "../../Components/BodyHome";
import { Layout } from "../../Components/Layout";
import { BestSellers } from "../../Components/BestSellers";
import { ComingSoonProducts } from "../../Components/ComingSoonProducts";
import { HowToBuyContent } from "../HowToStock";
import { SuppliersContent } from "../SlupplierList";
import { UsPageContent } from "../UsPage";

const Home = () => {
    const isMobile = useMediaQuery({ maxWidth: 1023 });

    return (
        <Layout>
            <BodyHome/>
            {isMobile && (
                <>
                    <BestSellers/>
                    <ComingSoonProducts/>
                    <HowToBuyContent/>
                    <SuppliersContent/>
                    <UsPageContent/>
                </>
            )}
        </Layout>
    )
};

export {Home};