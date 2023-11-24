import { NavLink } from "react-router-dom"
import iconOlax from "../../assets/icon/olaxlogo.png"
import iconCall from "../../assets/icon/icon-llamada.png"
import { useState } from "react"
import {useMediaQuery} from "react-responsive"

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const isTableOrMobile = useMediaQuery({maxWidth: 767})

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const activeStyle = 'underline underline-offset-8 '

    return (
        <nav className={`${isTableOrMobile ? '' : "flex items-center gap-32 font-bold px-10 mt-2"}`}>
            <div className={`${isTableOrMobile ? 'flex justify-center gap-20 items-center mt-2' : 'hidden'}`}>
                <button className={`${isTableOrMobile ? 'm-1' : 'hidden'}`} onClick={toggleMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                    </svg>
                </button>
                <NavLink to="/">
                    <div className="w-24 h-24">
                        <img className="w-full h-full" src={iconOlax}/>
                    </div>
                    </NavLink>
            </div>
                <NavLink to="/">
                    <div className={`${isTableOrMobile ? 'hidden': "w-32 h-32 ml-28"}`}>
                        <img src={iconOlax}/>
                    </div>
                </NavLink>
            <ul className={`${isTableOrMobile ? `${isMenuOpen ? 'flex' : 'hidden'} mt-3 flex-col items-center gap-3 ` : 'flex items-center gap-20 font-bold px-10' }`}>
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