import { NavLink } from "react-router-dom"
import iconOlax from "../../assets/icon/olaxlogo.png"
import iconCall from "../../assets/icon/icon-llamada.png"
import { useState } from "react"
import { useMediaQuery } from "react-responsive"

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const isTableOrMobile = useMediaQuery({ maxWidth: 1023 });

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const activeStyle = 'underline underline-offset-8 decoration-red-600';

    return (
        <nav className="w-full bg-slate-100 border-b border-slate-200 shadow-sm sticky top-0 z-50 rounded-b-2xl">
            {/* Header Móvil */}
            {isTableOrMobile ? (
                <div className="flex justify-between items-center px-6 py-3">
                    <NavLink to="/">
                        <img className="w-16 h-16 object-contain" src={iconOlax} alt="Logo Olax" />
                    </NavLink>
                    <button onClick={toggleMenu} className="p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                        </svg>
                    </button>
                </div>
            ) : null}

            {/* Menú Desktop - Distribución en 3 bloques independientes */}
            <div className={`${isTableOrMobile ? (isMenuOpen ? 'flex flex-col pb-6' : 'hidden') : 'flex items-center justify-between px-4 lg:px-8 xl:px-12 py-3'}`}>
                
                {/* 1. LOGO A LA IZQUIERDA */}
                <NavLink to="/" className={isTableOrMobile ? 'hidden' : 'block'}>
                    <img className="w-24 h-20 object-contain" src={iconOlax} alt="Logo Olax" />
                </NavLink>

                {/* 2. RUTAS AL CENTRO (AQUÍ MANEJAS LA SEPARACIÓN CON GAP) */}
                <ul className={`flex ${isTableOrMobile ? 'flex-col items-center gap-4' : 'flex-row items-center justify-center gap-6 xl:gap-12 font-semibold text-sm xl:text-base'}`}>
                    <li className="hover:text-red-600 transition-transform transform-gpu hover:scale-105 ease-out duration-300">
                        <NavLink to="/" className={({ isActive }) => isActive ? activeStyle : undefined}>
                            Inicio
                        </NavLink>
                    </li>

                    <li className="hover:text-red-600 transition-transform transform-gpu hover:scale-105 ease-out duration-300">
                        <NavLink to="/products" className={({ isActive }) => `text-center inline-block ${isActive ? activeStyle : ''}`}>
                            Conoce nuestros <br /> productos
                        </NavLink>
                    </li>

                    <li className="hover:text-red-600 transition-transform transform-gpu hover:scale-105 ease-out duration-300">
                        <NavLink to="/how-to-buy" className={({ isActive }) => `text-center inline-block ${isActive ? activeStyle : ''}`}>
                            ¿Cómo surtir <br /> con nosotros?
                        </NavLink>
                    </li>

                    <li className="hover:text-red-600 transition-transform transform-gpu hover:scale-105 ease-out duration-300">
                        <NavLink to="/suppliers-list" className={({ isActive }) => `text-center inline-block ${isActive ? activeStyle : ''}`}>
                            Listado de <br /> proveedores
                        </NavLink>
                    </li>

                    <li className="hover:text-red-600 transition-transform transform-gpu hover:scale-105 ease-out duration-300">
                        <NavLink to="/us-page" className={({ isActive }) => isActive ? activeStyle : undefined}>
                            Nosotros
                        </NavLink>
                    </li>
                </ul>

                {/* 3. BOTÓN A LA DERECHA */}
                <div className={isTableOrMobile ? 'flex justify-center mt-4' : 'block'}>
                    <NavLink to="/contact" className="text-white rounded-xl bg-red-600 px-5 py-2.5 flex items-center justify-center gap-2 shadow-md hover:bg-red-700 transition-transform transform-gpu hover:scale-105 ease-out duration-300">
                        <img className="w-4 h-4" src={iconCall} alt="Icono llamada" />
                        <span>Contacto / Cotización</span>
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export { Navbar };