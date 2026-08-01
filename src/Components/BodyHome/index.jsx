import "./index.css"
import imgBajoPrecio from "/icon-home/bajo-precio.svg"
import imgCalendario from "/icon-home/calendario-icon.svg"
import imgPulgar from "/icon-home/pulgar.svg"
import imgCliente from "/icon-home/servicio-al-cliente.svg"
import iconCheck from "/icon-home/icon-check.svg"
import iconSegurity from "/icon-home/icon-segurity.svg"
import iconPrecio from "/icon-home/icon-precio.svg"
import imgPersona from "/img-background/pngegg1.png"
import { ProductHomeVariable } from "../ProductHomeVariable";

const BodyHome = () => {


    return (
        <>
            <ProductHomeVariable/>

            <div className=" div-text flex flex-wrap items-center gap-5 justify-center mt-16">
                <div className="div-h1-ex">
                    <h1 className="text-black text-5xl font-bold">Impulsa el crecimiento<br/> de tu tienda con Olax</h1>
                </div>
                <div className="div-p font-light text-lg">
                    <p className="px-5">Surte tu negocio con los productos de mayor demanda. <br className="hidden md:inline"/> Te ofrecemos un catálogo completo de tecnología mayorista<br className="hidden md:inline"/> con inventario garantizado, con los mejores márgenes de ganancia<br className="hidden md:inline"/> y atención personalizada para potenciar las ventas de tu comercio.</p>
                </div>
            </div>
            <div className="div-features-row flex items-center mt-16 justify-center md:justify-between">
                <figure className="div-image-person hidden md:block w-5/12">
                        <img className="w-full h-full" src={imgPersona} loading="lazy"/>
                </figure>
                <div className="div-two grid grid-cols-2 gap-x-4 gap-y-6 w-full md:flex md:flex-col md:w-auto md:items-center md:justify-center md:gap-y-12">
                    <div className="flex flex-col items-center text-center md:flex-row md:items-center md:justify-center">
                        <div className="div-text-center min-h-[92px] md:min-h-0 md:w-72 md:h-26 md:mx-3">
                            <h1 className="font-bold text-sm md:text-2xl">Atención al cliente</h1>
                            <p className="text-xs mt-1 md:text-base md:mt-0">Reunimos a las personas adecuadas para darte el más rápido y mejor servicio.</p>
                        </div>
                        <figure className="figure-container-icon bg-red-600 w-10 h-10 rounded-xl p-2 mt-2 md:w-20 md:h-16 md:rounded-2xl md:mt-0">
                            <img className="w-full h-full" src={imgCliente} loading="lazy"/>
                        </figure>
                    </div>
                    <div className="flex flex-col items-center text-center md:flex-row md:items-center md:justify-center">
                        <div className="div-text-center min-h-[92px] md:min-h-0 md:w-72 md:h-26 md:mx-3">
                            <h1 className="font-bold text-sm md:text-2xl">Calidad</h1>
                            <p className="text-xs mt-1 md:text-base md:mt-0">Equipos elaborados con tecnología de punta y los mejores materiales.</p>
                        </div>
                        <figure className="figure-container-icon bg-red-600 w-10 h-10 rounded-xl p-2 mt-2 md:w-20 md:h-16 md:rounded-2xl md:mt-0">
                            <img className="w-full h-full" src={imgPulgar} loading="lazy"/>
                        </figure>
                    </div>
                    <div className="flex flex-col items-center text-center md:flex-row md:items-center md:justify-center">
                        <div className="div-text-center min-h-[92px] md:min-h-0 md:w-72 md:h-26 md:mx-3">
                            <h1 className="font-bold text-sm md:text-2xl">Buenos precios</h1>
                            <p className="text-xs mt-1 md:text-base md:mt-0">Los más accesibles y mejores precios que puedes encontrar en el mercado.</p>
                        </div>
                        <figure className="figure-container-icon bg-red-600 w-10 h-10 rounded-xl p-2 mt-2 md:w-20 md:h-16 md:rounded-2xl md:mt-0">
                            <img className="w-full h-full" src={imgBajoPrecio} loading="lazy"/>
                        </figure>
                    </div>
                    <div className="flex flex-col items-center text-center md:flex-row md:items-center md:justify-center">
                        <div className="div-text-center min-h-[92px] md:min-h-0 md:w-72 md:h-26 md:mx-3">
                            <h1 className="font-bold text-sm md:text-2xl">Horarios flexibles</h1>
                            <p className="text-xs mt-1 md:text-base md:mt-0">Puedes contar con nuestro equipo los 365 días del año.</p>
                        </div>
                        <figure className="figure-container-icon bg-red-600 w-10 h-10 rounded-xl p-2 mt-2 md:w-20 md:h-16 md:rounded-2xl md:mt-0">
                            <img className="w-full h-full" src={imgCalendario} loading="lazy"/>
                        </figure>
                    </div>
                </div>
            </div>

            <div className="div-olax-happy flex flex-col items-center justify-center rounded-2xl m-4 mt-16 px-4 md:px-0">
                <section className="flex flex-wrap gap-3 md:gap-10 items-center justify-center md:justify-between py-8 md:py-0">
                    <div className="div-text-h2 w-full md:w-96 text-black mt-0 md:mt-10 text-2xl sm:text-3xl md:text-5xl text-center md:text-left font-bold m-0 md:m-3">
                        <h2>Con Olax te garantizamos tu felicidad</h2>
                    </div>
                    <div className="div-text-p flex items-center justify-center w-full md:w-96 mt-2 md:mt-10 text-black text-sm md:text-lg font-bold m-0 md:m-3">
                        <p className="text-center md:text-left">Embrace Better Life. Innovando el mercado tecnológico. Productos 100% garantizados. Cuenta con OLAX en cualquier lugar y en todo momento.</p>
                    </div>
                </section>
                <section className="flex items-center justify-center flex-wrap gap-3 md:gap-10 mt-2 md:mt-16 pb-6 md:pb-4">
                    <div>
                        <div className="flex items-center m-2 md:m-3">
                            <figure className="flex justify-center rounded-2xl bg-red-800 w-10 h-10 md:w-16 md:h-16 p-2">
                                <img src={iconCheck} loading="lazy"/>
                            </figure>
                            <span className="text-black mx-2 md:mx-4 text-2xl md:text-5xl font-bold">100%</span>
                        </div>
                        <span className="text-black text-lg md:text-3xl font-bold">Calidad</span>
                    </div>
                    <div>
                        <div className="flex items-center m-2 md:m-3">
                            <figure className="flex justify-center rounded-2xl bg-red-800 w-10 h-10 md:w-16 md:h-16 p-2">
                                <img src={iconPrecio} loading="lazy"/>
                            </figure>
                            <span className="text-black mx-2 md:mx-4 text-2xl md:text-5xl font-bold">100%</span>
                        </div>
                        <span className="text-black text-lg md:text-3xl font-bold">Precio</span>
                    </div>
                    <div>
                        <div className="flex items-center m-2 md:m-3">
                            <figure className="flex justify-center rounded-2xl bg-red-800 w-10 h-10 md:w-16 md:h-16 p-2">
                                <img src={iconSegurity} loading="lazy"/>
                            </figure>
                            <span className="text-black mx-2 md:mx-4 text-2xl md:text-5xl font-bold">100%</span>
                        </div>
                        <span className="text-black text-lg md:text-3xl font-bold">Seguridad</span>
                    </div>
                </section>
            </div>
        </>
    )
};

export {BodyHome};