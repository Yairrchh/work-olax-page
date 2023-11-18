import { Footer } from "../Footer";

const Layout = ({children}) => {
    return (
        <>
            <div className=" flex flex-col items-center mb-16 mt-5">
                {children}
            </div>
            <Footer/>
        </>
    )
}

export {Layout};