import { FormContact } from "../../Components/FormContact";
import { Layout } from "../../Components/Layout";
import { Maps } from "../../Components/Maps";
import './index.css'
import iconEmail from "/icon-footer/email-icon.svg"
import iconllamada from "/icon-footer/icon-llamada.svg"
import iconMap from "/icon-footer/map-icon.svg"

const ContactUsPage = () => {
    return (
        <Layout>
            <div className="div-contacto W-full h-3/4 flex flex-col gap-y-12 items-center justify-center rounded-2xl mx-3">
                <div>
                    <h1 className="text-white text-9xl mt-20 font-extralight">Contactanos</h1>
                </div>
                <div className="flex items-center justify-center">
                    <p className="text-white text-xl w-8/12 mt-10 mb-20 text-center font-light">Embrace Better Life. Innovando el mercado tecnologico. Productos 100% garantizados. Cuenta con OLAX en cualquier lugar y en todo momento.</p>
                </div>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-3 mt-16">
                <div className="div-contain flex flex-col items-center justify-center gap-3 w-72 h-40 rounded-2xl bg-red-700
                                transition-transform transform-gpu hover:scale-110 ease-out duration-300">
                    <figure className=" flex items-center rounded-lg justify-center w-12 h-12 bg-red-700 hover:bg-gray-600">
                        <img className="w-8 h-8" src={iconllamada}/>
                    </figure>
                    <div>
                        <p className="text-white text-2xl font-light">(786) 8194377</p>
                    </div>
                </div>
                <div className="div-contain flex flex-col items-center justify-center gap-3 w-72 h-40 rounded-2xl bg-red-700
                                transition-transform transform-gpu hover:scale-110 ease-out duration-300">
                    <a href="mailto:olaxsolutionsmp@gmail.com"  target="_blank" rel="noopener noreferrer">
                        <figure className=" flex items-center rounded-lg justify-center w-12 h-12 bg-red-700 hover:bg-gray-600">
                            <img className="w-8 h-8" src={iconEmail}/>
                        </figure>
                    </a>
                    <div>
                        <p className="text-white text-2xl font-light">info@olaxglobal.com</p>
                    </div>
                </div>
                <div className="div-contain flex flex-col items-center justify-center gap-3 w-72 h-40 rounded-2xl bg-red-700
                                transition-transform transform-gpu hover:scale-110 ease-out duration-300">
                    <a href="https://www.google.com/maps/place/8422+NW+66th+St,+Miami,+FL+33166,+EE.+UU./@25.8332953,-80.3376824,17z/data=!3m1!4b1!4m6!3m5!1s0x88d9bbc6579f5f1b:0x5aed62e370179f3b!8m2!3d25.8332905!4d-80.3351075!16s%2Fg%2F11j0tb0pbm?hl=es&entry=ttu" target="_blank" rel="noopener noreferrer">
                        <figure className=" flex items-center rounded-lg justify-center w-12 h-12 bg-red-700 hover:bg-gray-600">
                            <img className="w-8 h-8" src={iconMap}/>
                        </figure>
                    </a>
                    <div>
                        <p className="text-white text-2xl font-light text-center">8422 NW 66 St Miami, 33166</p>
                    </div>
                </div>
            </div>
            <div className="div-contact-map flex items-center justify-center gap-x-40 gap-y-5">
                <FormContact/>
                <div>
                    <div className="flex flex-col items-center mb-5">
                        <h1 className="text-2xl font-medium">Horarios</h1>
                        <div className="flex items-center justify-center mt-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p className="text-lg font-light ml-2">Lun-Vi: 9:00 AM - 6:00 PM</p>
                        </div>
                        <div className="flex items-center justify-center mt-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p className="text-lg font-light ml-2"> Sabado: 10:00 AM - 3:00 PM</p>
                        </div>
                    </div>
                    <div>
                        <Maps/>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export {ContactUsPage};