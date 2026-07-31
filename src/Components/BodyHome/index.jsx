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
                    <p className="px-5">Surte tu negocio con los productos de mayor demanda. <br/> Te ofrecemos un catálogo completo de tecnología mayorista<br/> con inventario garantizado, con los mejores márgenes de ganancia<br/> y atención personalizada para potenciar las ventas de tu comercio.</p>
                </div>
            </div>
            <div className="flex items-center mt-16 justify-between">
                <figure className="div-image-person w-5/12">
                        <img className="w-full h-full" src={imgPersona} loading="lazy"/>
                </figure>
                <div className="div-two flex flex-col items-center justify-center gap-y-12">
                    <div className="flex items-center justify-center">
                        <div className="div-text-center w-72 h-26 mx-3">
                            <h1 className="font-bold text-2xl">Atención al cliente</h1>
                            <p className="">Reunimos a las personas adecuadas para darte el más rápido y mejor servicio.</p>
                        </div>
                        <figure className="figure-container-icon bg-red-600 w-20 h-16 rounded-2xl p-2">
                            <img className="w-full h-full" src={imgCliente} loading="lazy"/>
                        </figure>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="div-text-center w-72 h-26 mx-3">
                            <h1 className="font-bold text-2xl">Calidad</h1>
                            <p>Equipos elaborados con tecnología de punta y los mejores materiales.</p>
                        </div>
                        <figure className="figure-container-icon bg-red-600 w-20 h-16 rounded-2xl p-2">
                            <img className="w-full h-full" src={imgPulgar} loading="lazy"/>
                        </figure>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="div-text-center w-72 h-26 mx-3">
                            <h1 className="font-bold text-2xl">Buenos precios</h1>
                            <p>Los más accesibles y mejores precios que puedes encontrar en el mercado.</p>
                        </div>
                        <figure className="figure-container-icon bg-red-600 w-20 h-16 rounded-2xl p-2">
                            <img className="w-full h-full" src={imgBajoPrecio} loading="lazy"/>
                        </figure>
                    </div>
                    <div className="flex  items-center justify-center">
                        <div className="div-text-center w-72 h-26 mx-3">
                            <h1 className="font-bold text-2xl">Horarios flexibles</h1>
                            <p>Puedes contar con nuestro equipo los 365 días del año.</p>
                        </div>
                        <figure className="figure-container-icon bg-red-600 w-20 h-16 rounded-2xl p-2">
                            <img className="w-full h-full" src={imgCalendario} loading="lazy"/>
                        </figure>
                    </div>
                </div>
            </div>

            <div className="div-olax-happy flex flex-col items-center justify-center rounded-2xl m-4 mt-16">
                <section className="flex flex-wrap gap-10 items-center justify-between ">
                    <div className="div-text-h2 w-96 text-black mt-10 text-5xl font-bold m-3">
                        <h2>Con Olax te garantizamos tu felicidad</h2>
                    </div>
                    <div className="div-text-p flex items-center justify-center w-96 mt-10 text-black text-lg font-bold m-3">
                        <p>Embrace Better Life. Innovando el mercado tecnológico. Productos 100% garantizados. Cuenta con OLAX en cualquier lugar y en todo momento.</p>
                    </div>
                </section>
                <section className="flex items-center justify-center flex-wrap gap-10 mt-16 pb-4">
                    <div>
                        <div className="flex items-center m-3">
                            <figure className="flex justify-center rounded-2xl bg-red-800 w-16 h-16 px-2">
                                <img src={iconCheck} loading="lazy"/>
                            </figure>
                            <span className=" text-black mx-4 text-5xl font-bold">100%</span>
                        </div>
                        <span className="text-black text-3xl font-bold">Calidad</span>
                    </div>
                    <div>
                        <div className="flex items-center m-3">
                            <figure className="flex justify-center rounded-2xl bg-red-800 w-16 h-16 px-2">
                                <img src={iconPrecio} loading="lazy"/>
                            </figure>
                            <span className=" text-black mx-4 text-5xl font-bold">100%</span>
                        </div>
                        <span className="text-black text-3xl font-bold">Precio</span>
                    </div>
                    <div>
                        <div className="flex items-center m-3">
                            <figure className="flex justify-center rounded-2xl bg-red-800 w-16 h-16 px-2">
                                <img src={iconSegurity} loading="lazy"/>
                            </figure>
                            <span className=" text-black mx-4 text-5xl font-bold">100%</span>
                        </div>
                        <span className="text-black text-3xl font-bold">Seguridad</span>
                    </div>
                </section>
            </div>
        </>
    )
};

export {BodyHome};