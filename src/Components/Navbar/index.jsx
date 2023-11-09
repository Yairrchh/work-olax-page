import { NavLink } from "react-router-dom"
import iconOlax from "../../assets/icon/olaxlogo.png"
import iconCall from "../../assets/icon/icon-llamada.png"

const Navbar = () => {

    const activeStyle = 'underline underline-offset-8 '
    return (
        <nav className="text-lg flex justify-between items-center mx-28 mt-8">
            <div className="w-32 h-32">
                <img src={iconOlax}/>
            </div>
            <ul className="flex items-center gap-20 font-bold px-10">
                <li className="hover:text-red-600 transition-transform transform-gpu hover:scale-110 ease-out duration-300">
                    <NavLink
                    to = "/"
                    className={({ isActive}) => isActive ? activeStyle : undefined}>
                        Principal
                    </NavLink>
                </li>
                <li className="hover:text-red-600 transition-transform transform-gpu hover:scale-110 ease-out duration-300">
                    <NavLink
                    to = "/us-page"
                    className={({ isActive}) => isActive ? activeStyle : undefined}>
                        Nosotros
                    </NavLink>
                </li>
                <li className="hover:text-red-600 transition-transform transform-gpu hover:scale-110 ease-out duration-300">
                    <NavLink
                    to = "/products"
                    className={({ isActive}) => isActive ? activeStyle : undefined}>
                        Productos
                    </NavLink>
                </li>
                <li className="text-white rounded-2xl bg-red-600 px-7 py-2 mr-2 flex justify-between items-center
                                transition-transform transform-gpu hover:scale-110 ease-out duration-300">
                    <img className="w-5 h-5 mr-2" src={iconCall}/>
                    <NavLink
                    to = "/contact"
                    >
                        Contactenos
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export {Navbar}