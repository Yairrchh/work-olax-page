import { FormContact } from "../../Components/FormContact";
import { Layout } from "../../Components/Layout";
import { Maps } from "../../Components/Maps";
import './index.css'
import iconEmail from "/icon-footer/email-icon.svg"
import iconllamada from "/icon-footer/icon-llamada.svg"
import iconMap from "/icon-footer/map-icon.svg"

const ContactUsContent = () => {
    return (
        <>
            <div className="div-contacto w-[calc(100%-24px)] h-3/4 flex flex-col gap-y-4 md:gap-y-12 items-center justify-center rounded-2xl">
                <div>
                    <h1 className="text-white text-4xl sm:text-6xl md:text-7xl lg:text-9xl mt-6 md:mt-12 lg:mt-20 font-extralight">Contáctanos</h1>
                </div>
                <div className="flex items-center justify-center">
                    <p className="text-white text-sm md:text-xl w-11/12 md:w-8/12 mt-2 mb-6 md:mt-10 md:mb-20 text-center font-light">Embrace Better Life. Innovando el mercado tecnológico. Productos 100% garantizados. Cuenta con OLAX en cualquier lugar y en todo momento.</p>
                </div>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-3 mt-6 md:mt-16">
                <div className="div-contain flex flex-row items-center justify-center gap-3 md:flex-col md:gap-3 w-fit max-w-[92%] px-5 sm:w-72 sm:px-0 h-auto py-2.5 md:h-40 md:py-0 rounded-2xl bg-red-700
                                transition-transform transform-gpu hover:scale-110 ease-out duration-300">
                    <figure className="flex items-center rounded-lg justify-center w-8 h-8 md:w-12 md:h-12 bg-red-700 hover:bg-gray-600 flex-shrink-0">
                        <img className="w-5 h-5 md:w-8 md:h-8" src={iconllamada} alt="Icono de llamada" loading="lazy"/>
                    </figure>
                    <div>
                        <p className="text-white text-sm md:text-2xl font-light"> +1(786) 8194377</p>
                    </div>
                </div>
                <div className="div-contain flex flex-row items-center justify-center gap-3 md:flex-col md:gap-3 w-fit max-w-[92%] px-5 sm:w-72 sm:px-0 h-auto py-2.5 md:h-40 md:py-0 rounded-2xl bg-red-700
                                transition-transform transform-gpu hover:scale-110 ease-out duration-300">
                    <a href="mailto:olaxsolutionsmp@gmail.com" target="_blank" rel="noopener noreferrer">
                        <figure className="flex items-center rounded-lg justify-center w-8 h-8 md:w-12 md:h-12 bg-red-700 hover:bg-gray-600 flex-shrink-0">
                            <img className="w-5 h-5 md:w-8 md:h-8" src={iconEmail} alt="Icono de correo" loading="lazy"/>
                        </figure>
                    </a>
                    <div>
                        <p className="text-white text-sm md:text-2xl font-light">info@olaxglobal.com</p>
                    </div>
                </div>
                <div className="div-contain flex flex-row items-center justify-center gap-3 md:flex-col md:gap-3 w-fit max-w-[92%] px-5 sm:w-72 sm:px-0 h-auto py-2.5 md:h-40 md:py-0 rounded-2xl bg-red-700
                                transition-transform transform-gpu hover:scale-110 ease-out duration-300">
                    <a href="https://www.google.com/maps/place/8422+NW+66th+St,+Miami,+FL+33166,+EE.+UU./@25.8332953,-80.3376824,17z/data=!3m1!4b1!4m6!3m5!1s0x88d9bbc6579f5f1b:0x5aed62e370179f3b!8m2!3d25.8332905!4d-80.3351075!16s%2Fg%2F11j0tb0pbm?hl=es&entry=ttu" target="_blank" rel="noopener noreferrer">
                        <figure className="flex items-center rounded-lg justify-center w-8 h-8 md:w-12 md:h-12 bg-red-700 hover:bg-gray-600 flex-shrink-0">
                            <img className="w-5 h-5 md:w-8 md:h-8" src={iconMap} alt="Icono de mapa" loading="lazy"/>
                        </figure>
                    </a>
                    <div>
                        <p className="text-white text-sm md:text-2xl font-light text-left md:text-center">8422 NW 66 St Miami, 33166</p>
                    </div>
                </div>
            </div>
            <div className="div-contact-map flex flex-col lg:flex-row items-center justify-center gap-x-8 xl:gap-x-40 gap-y-4 md:gap-y-8 mt-2 md:mt-0">
                <FormContact/>
                <div>
                    <div className="flex flex-col items-center mb-5">
                        <h1 className="text-2xl font-medium">Horarios</h1>
                        <div className="flex items-center justify-center mt-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p className="text-lg font-light ml-2">Lun-Vie: 9:00 AM - 6:00 PM</p>
                        </div>
                        <div className="flex items-center justify-center mt-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p className="text-lg font-light ml-2">Sábado: 10:00 AM - 3:00 PM</p>
                        </div>
                    </div>
                    <div>
                        <Maps/>
                    </div>
                </div>
            </div>
        </>
    )
}

const ContactUsPage = () => {
    return (
        <Layout>
            <ContactUsContent/>
        </Layout>
    )
}

export { ContactUsPage, ContactUsContent };