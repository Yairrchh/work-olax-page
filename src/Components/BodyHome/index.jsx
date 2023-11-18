import { olaxPageContext } from "../../Context";
import { useContext } from "react";
import { ProductsListHome } from "./ProductsListHome";
import "./index.css"
import olexKids from "/productsHome/olaxmagicq8.webp"
import imgBajoPrecio from "/icon-home/bajo-precio.svg"
import imgCalendario from "/icon-home/calendario-icon.svg"
import imgPulgar from "/icon-home/pulgar.svg"
import imgCliente from "/icon-home/servicio-al-cliente.svg"
import iconCheck from "/icon-home/icon-check.svg"
import iconSegurity from "/icon-home/icon-segurity.svg"
import iconPrecio from "/icon-home/icon-precio.svg"
import imgPersona from "/img-background/imagen-olax-persona.png"

const BodyHome = () => {

    const context = useContext(olaxPageContext)
    //open modal to see product

    return (
        <>
        <div className="div-first flex flex-wrap gap-x-20 items-center justify-center rounded-xl">
                <div className="flex flex-col items-center">
                    <h1 className="h1-olex text-white border-1">OLAX</h1>
                    <h2 className="h2-kids -mt-8">MAGIC Q8</h2>
                    <div className="div-button">
                        <button className="button-view-more bg-indigo-600 py-3 p-5 rounded-2xl text-white text-xl
                        transition-transform transform-gpu hover:scale-110 ease-out duration-300">Ver mas</button>
                    </div>
                </div>
                <div className="div-first-img justify-center mt-4">
                    <img className="w-full h-full" src={olexKids}/>
                </div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-10 mt-16 m-3">
        {
            context.dataProductsHome.map((data, index) => (
                <ProductsListHome
                data={data}
                key={`productList${index}`}
                />
            ))
        }
        </div>
        <div className=" div-text flex flex-wrap items-center gap-5 justify-center mt-16">
            <div className="div-h1-ex">
                <h1 className="text-black text-5xl font-bold">Descubre porque la <br/> tecnología es la clave <br/> del éxito de Olax</h1>
            </div>
            <div className="div-p font-light text-lg">
                <p className="px-5">En Olax sabemos que la tecnología es una parte fundamental<br/> de nuestras vidas,
                    Desde la forma en que trabajamos y estudiamos,<br/> hasta la manera en que nos conectamos
                    con los demás, la tecnología<br/> es la clave para avanzar en nuestra sociedad cada vez más digital.</p>
            </div>
        </div>
        <div className="flex items-center justify-center mt-16">
            <div className="div-image-person w-3/4 -ml-10">
                <figure>
                    <img className="w-full h-full" src={imgPersona}/>
                </figure>
            </div>
            <div className="div-two flex flex-wrap items-center justify-center gap-10 gap-y-12 m-5">
                <div className="w-96 h-36 flex items-center justify-center">
                    <div className="div-text-center">
                        <h1 className="font-bold text-2xl">Atencion al Cliente</h1>
                        <p className="">Reunimos a las personas adecuadas para darte el mas rapido y mejor servicio.</p>
                    </div>
                    <figure className="div-container-icon bg-red-600 w-28 h-16 rounded-2xl p-2">
                        <img className="w-full h-full" src={imgCliente}/>
                    </figure>
                </div>
                <div className="w-96 h-36 flex items-center justify-center">
                    <div className="div-text-center">
                        <h1 className="font-bold text-2xl">Calidad</h1>
                        <p>Equipos elaborados con tecnologia de punta y los mejores materiales.</p>
                    </div>
                    <figure className="bg-red-600 w-28 h-16 rounded-2xl p-2">
                        <img className="w-full h-full" src={imgPulgar}/>
                    </figure>
                </div>
                <div className="w-96 h-36 flex items-center justify-center">
                    <div className="div-text-center">
                        <h1 className="font-bold text-2xl">Buenos precios</h1>
                        <p>Los mas accesibles y mejores precios que puedes encontrar en el mercado.</p>
                    </div>
                    <figure className="bg-red-600 w-28 h-16 rounded-2xl p-2">
                        <img className="w-full h-full" src={imgBajoPrecio}/>
                    </figure>
                </div>
                <div className="w-96 h-36 flex  items-center justify-center">
                    <div className="div-text-center">
                        <h1 className="font-bold text-2xl">Horarios flexibles</h1>
                        <p>Puedes contar con nuestro equipo los 365 del año.</p>
                    </div>
                    <figure className="bg-red-600 w-28 h-16 rounded-2xl p-1">
                        <img className="w-full h-full" src={imgCalendario}/>
                    </figure>
                </div>
            </div>
        </div>

        <div className="div-olax-happy flex flex-col items-center justify-center rounded-2xl m-3 mt-16">
            <section className="flex flex-wrap gap-10 items-center justify-between mx-4 sm:mx-8 md:mx-20 lg:mx-32 xl:mx-32">
                <div className=" text-white mt-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl  font-bold">
                    <h2>Con Olax te <br/> garantizamos tu <br/> felicidad</h2>
                </div>
                <div className="mt-10 text-white text-lg font-light">
                    <p>Embrace Better Life. Innovando el mercado tecnologico. Productos 100% <br/> garantizados. Cuenta con OLAX en cualquier lugar y en todo momento.</p>
                </div>
            </section>
            <section className="flex items-center justify-center flex-wrap gap-10 mt-16 pb-4">
                <div>
                    <div className="flex items-center m-3">
                        <figure className="flex justify-center rounded-2xl bg-red-800 w-16 h-16 px-2">
                            <img src={iconCheck}/>
                        </figure>
                        <span className=" text-white mx-4 text-5xl font-bold">100%</span>
                    </div>
                    <span className="text-black text-3xl font-bold">Calidad</span>
                </div>
                <div>
                    <div className="flex items-center m-3">
                        <figure className="flex justify-center rounded-2xl bg-red-800 w-16 h-16 px-2">
                            <img src={iconPrecio}/>
                        </figure>
                        <span className=" text-white mx-4 text-5xl font-bold">100%</span>
                    </div>
                    <span className="text-black text-3xl font-bold">Precio</span>
                </div>
                <div>
                    <div className="flex items-center m-3">
                        <figure className="flex justify-center rounded-2xl bg-red-800 w-16 h-16 px-2">
                            <img src={iconSegurity}/>
                        </figure>
                        <span className=" text-white mx-4 text-5xl font-bold">100%</span>
                    </div>
                    <span className="text-black text-3xl font-bold">Seguridad</span>
                </div>
            </section>
        </div>
        </>
    )
};

export {BodyHome};