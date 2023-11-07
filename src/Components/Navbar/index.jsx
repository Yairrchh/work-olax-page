import { NavLink } from "react-router-dom"
import iconOlax from "../../assets/icon/olaxlogo.png"
import iconCall from "../../assets/icon/icon-llamada.png"

const Navbar = () => {

    const activeStyle = 'text-red-600 hover:ease-in-out duration-300'
    return (
        <nav className="text-lg flex justify-between items-center mx-28 mt-8">
            <div className="w-32 h-32">
                <img src={iconOlax}/>
            </div>
            <ul className="flex items-center gap-24 font-bold px-10">
                <li className="">
                    <NavLink
                    to = "/"
                    className={({ isActive}) => isActive ? activeStyle : undefined}>
                        Principal
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to = "/us-page"
                    className={({ isActive}) => isActive ? activeStyle : undefined}>
                        Nosotros
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to = "/products"
                    className={({ isActive}) => isActive ? activeStyle : undefined}>
                        Productos
                    </NavLink>
                </li>
                <li className="text-white rounded-2xl bg-red-600 px-7 py-2 mr-2 flex justify-between items-center">
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