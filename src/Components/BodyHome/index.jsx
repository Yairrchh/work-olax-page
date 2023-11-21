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
import imgPersona from "/img-background/imagen-olax-persona.webp"

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
        <div className="flex items-center mt-16">
            <figure className="div-image-person w-2/4">
                    <img className="w-full h-full" src={imgPersona}/>
            </figure>
            <div className="div-two flex flex-col items-center justify-center gap-y-12">
                <div className="flex items-center justify-center">
                    <div className="div-text-center w-72 h-26 mx-3">
                        <h1 className="font-bold text-2xl">Atencion al Cliente</h1>
                        <p className="">Reunimos a las personas adecuadas para darte el mas rapido y mejor servicio.</p>
                    </div>
                    <figure className="figure-container-icon bg-red-600 w-20 h-16 rounded-2xl p-2">
                        <img className="w-full h-full" src={imgCliente}/>
                    </figure>
                </div>
                <div className="flex items-center justify-center">
                    <div className="div-text-center w-72 h-26 mx-3">
                        <h1 className="font-bold text-2xl">Calidad</h1>
                        <p>Equipos elaborados con tecnologia de punta y los mejores materiales.</p>
                    </div>
                    <figure className="figure-container-icon bg-red-600 w-20 h-16 rounded-2xl p-2">
                        <img className="w-full h-full" src={imgPulgar}/>
                    </figure>
                </div>
                <div className="flex items-center justify-center">
                    <div className="div-text-center w-72 h-26 mx-3">
                        <h1 className="font-bold text-2xl">Buenos precios</h1>
                        <p>Los mas accesibles y mejores precios que puedes encontrar en el mercado.</p>
                    </div>
                    <figure className="figure-container-icon bg-red-600 w-20 h-16 rounded-2xl p-2">
                        <img className="w-full h-full" src={imgBajoPrecio}/>
                    </figure>
                </div>
                <div className="flex  items-center justify-center">
                    <div className="div-text-center w-72 h-26 mx-3">
                        <h1 className="font-bold text-2xl">Horarios flexibles</h1>
                        <p>Puedes contar con nuestro equipo los 365 del año.</p>
                    </div>
                    <figure className="figure-container-icon bg-red-600 w-20 h-16 rounded-2xl p-2">
                        <img className="w-full h-full" src={imgCalendario}/>
                    </figure>
                </div>
            </div>
        </div>

        <div className="div-olax-happy flex flex-col items-center justify-center rounded-2xl m-4 mt-16">
            <section className="flex flex-wrap gap-10 items-center justify-between ">
                <div className="div-text-h2 w-96 text-black mt-10 text-5xl font-bold m-3">
                    <h2>Con Olax te garantizamos tu felicidad</h2>
                </div>
                <div className="div-text-p flex items-center justify-center w-96 mt-10 text-black text-lg font-light m-3">
                    <p>Embrace Better Life. Innovando el mercado tecnologico. Productos 100% garantizados. Cuenta con OLAX en cualquier lugar y en todo momento.</p>
                </div>
            </section>
            <section className="flex items-center justify-center flex-wrap gap-10 mt-16 pb-4">
                <div>
                    <div className="flex items-center m-3">
                        <figure className="flex justify-center rounded-2xl bg-red-800 w-16 h-16 px-2">
                            <img src={iconCheck}/>
                        </figure>
                        <span className=" text-gray-600 mx-4 text-5xl font-bold">100%</span>
                    </div>
                    <span className="text-black text-3xl font-bold">Calidad</span>
                </div>
                <div>
                    <div className="flex items-center m-3">
                        <figure className="flex justify-center rounded-2xl bg-red-800 w-16 h-16 px-2">
                            <img src={iconPrecio}/>
                        </figure>
                        <span className=" text-gray-600 mx-4 text-5xl font-bold">100%</span>
                    </div>
                    <span className="text-black text-3xl font-bold">Precio</span>
                </div>
                <div>
                    <div className="flex items-center m-3">
                        <figure className="flex justify-center rounded-2xl bg-red-800 w-16 h-16 px-2">
                            <img src={iconSegurity}/>
                        </figure>
                        <span className=" text-gray-600 mx-4 text-5xl font-bold">100%</span>
                    </div>
                    <span className="text-black text-3xl font-bold">Seguridad</span>
                </div>
            </section>
        </div>
        </>
    )
};

export {BodyHome};