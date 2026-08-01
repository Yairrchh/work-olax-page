import { NavLink } from "react-router-dom"
import iconOlax from "../../assets/icon/olaxlogo.png"
import { useState, useRef, useEffect, useCallback } from "react"
import { useMediaQuery } from "react-responsive"

const WHATSAPP_BTN_STORAGE_KEY = "olax_whatsapp_btn_position_v3";
const WHATSAPP_BTN_SIZE = 52;
const WHATSAPP_BTN_MARGIN = 8;
const BOTTOM_NAV_HEIGHT = 64;

const bottomNavLinks = [
    { to: "/", label: "Inicio" },
    { to: "/products", label: "Productos" },
    { to: "/how-to-buy", label: "Cómo surtir" },
    { to: "/suppliers-list", label: "Proveedores" },
    { to: "/us-page", label: "Nosotros" },
];

const Navbar = () => {
    const isTableOrMobile = useMediaQuery({ maxWidth: 1023 });
    const [whatsappPosition, setWhatsappPosition] = useState(null);
    const dragInfo = useRef({ dragging: false, moved: false, offsetX: 0, offsetY: 0 });

    const clampPosition = useCallback((x, y) => {
        const bottomReserved = isTableOrMobile ? BOTTOM_NAV_HEIGHT + WHATSAPP_BTN_MARGIN : WHATSAPP_BTN_MARGIN;
        const maxX = window.innerWidth - WHATSAPP_BTN_SIZE - WHATSAPP_BTN_MARGIN;
        const maxY = window.innerHeight - WHATSAPP_BTN_SIZE - bottomReserved;
        return {
            x: Math.min(Math.max(x, WHATSAPP_BTN_MARGIN), Math.max(maxX, WHATSAPP_BTN_MARGIN)),
            y: Math.min(Math.max(y, WHATSAPP_BTN_MARGIN), Math.max(maxY, WHATSAPP_BTN_MARGIN)),
        };
    }, [isTableOrMobile]);

    useEffect(() => {
        const saved = localStorage.getItem(WHATSAPP_BTN_STORAGE_KEY);
        if (saved) {
            try {
                const { x, y } = JSON.parse(saved);
                setWhatsappPosition(clampPosition(x, y));
                return;
            } catch (error) {
                // ignore corrupted saved position and fall back to default
            }
        }
        setWhatsappPosition(clampPosition(window.innerWidth - WHATSAPP_BTN_SIZE - 20, window.innerHeight - WHATSAPP_BTN_SIZE - 150));
    }, [clampPosition]);

    const handlePointerDown = (event) => {
        dragInfo.current.dragging = true;
        dragInfo.current.moved = false;
        const rect = event.currentTarget.getBoundingClientRect();
        dragInfo.current.offsetX = event.clientX - rect.left;
        dragInfo.current.offsetY = event.clientY - rect.top;
        event.currentTarget.setPointerCapture(event.pointerId);
    };

    const handlePointerMove = (event) => {
        if (!dragInfo.current.dragging) return;
        dragInfo.current.moved = true;
        const x = event.clientX - dragInfo.current.offsetX;
        const y = event.clientY - dragInfo.current.offsetY;
        setWhatsappPosition(clampPosition(x, y));
    };

    const handlePointerUp = () => {
        if (!dragInfo.current.dragging) return;
        dragInfo.current.dragging = false;
        if (dragInfo.current.moved) {
            setWhatsappPosition((pos) => {
                if (pos) localStorage.setItem(WHATSAPP_BTN_STORAGE_KEY, JSON.stringify(pos));
                return pos;
            });
        }
    };

    const handleWhatsappClick = (event) => {
        if (dragInfo.current.moved) {
            event.preventDefault();
            dragInfo.current.moved = false;
        }
    };

    const activeStyle = 'underline underline-offset-8 decoration-red-600';

    const WhatsappIcon = ({ className }) => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.29-1.39a9.9 9.9 0 0 0 4.75 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2zm5.79 14.05c-.24.68-1.4 1.3-1.93 1.38-.5.08-1.14.11-1.83-.11-.42-.13-.97-.31-1.66-.61-2.93-1.27-4.85-4.22-5-4.42-.15-.2-1.19-1.58-1.19-3.01 0-1.43.75-2.13 1.02-2.42.27-.29.58-.36.78-.36.19 0 .39 0 .56.01.18.01.42-.07.65.5.24.58.82 2.01.89 2.15.07.15.12.32.02.52-.1.2-.15.32-.3.49-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.29.75 1.24 1.62 2.01 1.11.99 2.05 1.3 2.34 1.44.29.15.46.13.63-.08.17-.2.72-.84.91-1.13.19-.29.39-.24.65-.15.27.1 1.7.8 1.99.95.29.15.49.22.56.34.07.13.07.75-.17 1.43z"/>
        </svg>
    );

    return (
        <nav className="w-full bg-gradient-to-br from-white via-[#f2efec] to-[#e4dfdf] shadow-sm sticky top-0 z-50 rounded-b-2xl overflow-hidden relative">
            <span className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-red-600/0 via-red-600/50 to-red-600/0"></span>
            {/* Header Móvil */}
            {isTableOrMobile ? (
                <div className="flex justify-center items-center px-6 py-3">
                    <NavLink to="/">
                        <img className="w-16 h-16 object-contain" src={iconOlax} alt="Logo Olax" />
                    </NavLink>
                </div>
            ) : (
                /* Menú Desktop - Distribución en 3 bloques independientes */
                <div className="flex items-center justify-between px-4 lg:px-8 xl:px-12 py-3">

                    {/* 1. LOGO A LA IZQUIERDA */}
                    <NavLink to="/" className="block">
                        <img className="w-24 h-20 object-contain" src={iconOlax} alt="Logo Olax" />
                    </NavLink>

                    {/* 2. RUTAS AL CENTRO (AQUÍ MANEJAS LA SEPARACIÓN CON GAP) */}
                    <ul className="flex flex-row items-center justify-center gap-6 xl:gap-12 font-semibold text-sm xl:text-base">
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
                    <div className="block">
                        <a href="https://wa.link/nqo33g" target="_blank" rel="noopener noreferrer" className="text-white rounded-xl bg-[#25D366] px-5 py-2.5 flex items-center justify-center gap-2 shadow-md hover:bg-[#1fb659] transition-transform transform-gpu hover:scale-105 ease-out duration-300">
                            <WhatsappIcon className="w-4 h-4" />
                            <span>Contacto / Cotización</span>
                        </a>
                    </div>
                </div>
            )}

            {/* Botón flotante de WhatsApp - solo mobile/tablet, arrastrable */}
            {isTableOrMobile && whatsappPosition && (
                <a
                    href="https://wa.link/nqo33g"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Contáctanos por WhatsApp"
                    onPointerDown={handlePointerDown}
                    onPointerMove={handlePointerMove}
                    onPointerUp={handlePointerUp}
                    onClick={handleWhatsappClick}
                    style={{ left: `${whatsappPosition.x}px`, top: `${whatsappPosition.y}px`, touchAction: "none" }}
                    className="fixed z-50 bg-[#25D366] text-white p-3.5 rounded-full shadow-lg flex items-center justify-center hover:bg-[#1fb659] transition-transform transform-gpu hover:scale-110 ease-out duration-300 cursor-grab active:cursor-grabbing"
                >
                    <WhatsappIcon className="w-7 h-7" />
                </a>
            )}

            {/* Barra de navegación inferior fija - solo mobile/tablet */}
            {isTableOrMobile && (
                <ul
                    className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-5 bg-gradient-to-tr from-white via-[#f2efec] to-[#e4dfdf] border-t border-red-600/30 shadow-[0_-2px_8px_rgba(0,0,0,0.06)]"
                    style={{ height: `${BOTTOM_NAV_HEIGHT}px` }}
                >
                    {bottomNavLinks.map(({ to, label }) => (
                        <li key={to} className="flex">
                            <NavLink
                                to={to}
                                className={({ isActive }) =>
                                    `flex-1 flex items-center justify-center text-center px-1 text-[11px] leading-tight font-semibold ${isActive ? 'text-red-600' : 'text-gray-700'}`
                                }
                            >
                                {label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
};

export { Navbar };