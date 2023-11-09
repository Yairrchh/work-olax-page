import { Footer } from "../Footer";

const Layout = ({children}) => {
    return (
        <>
            <div className="mb-16 mt-10">
                {children}
            </div>
            <Footer/>
        </>
    )
}

export {Layout};