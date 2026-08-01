import { useMediaQuery } from "react-responsive";
import { BodyHome } from "../../Components/BodyHome";
import { Layout } from "../../Components/Layout";
import { BestSellers } from "../../Components/BestSellers";
import { ComingSoonProducts } from "../../Components/ComingSoonProducts";
import { HowToBuyContent } from "../HowToStock";
import { SuppliersContent } from "../SlupplierList";
import { ContactUsContent } from "../ContactUsPage";
import { UsPageContent } from "../UsPage";

const Home = () => {
    const isMobile = useMediaQuery({ maxWidth: 1023 });

    return (
        <Layout>
            <BodyHome/>
            {isMobile && (
                <div className="flex flex-col gap-y-12 w-full">
                    <HowToBuyContent/>
                    <SuppliersContent/>
                    <BestSellers/>
                    <ComingSoonProducts/>
                    <ContactUsContent/>
                    <UsPageContent/>
                </div>
            )}
        </Layout>
    )
};

export {Home};