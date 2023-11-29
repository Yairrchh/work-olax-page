import { useContext } from "react";
import { olaxPageContext } from "../../Context";
import { useState } from "react";
import './index.css'

const ProductDetail = () => {

    const context = useContext(olaxPageContext);

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % context.productShow.images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? context.productShow.images.length - 1 : prevIndex - 1
        );
    };

    return (
        <aside className={`${context.productDetailOpen ? 'block' : 'hidden'} product-detail bg-gray-200 flex
        items-center justify-center fixed z-50 rounded-lg`}>
                <div className="cursor-pointer absolute right-0 top-0 m-3 transition-transform transform-gpu hover:scale-110 hover:bg-red-600 ease-out duration-300"
                onClick={() => {context.closeProductDetail(); setCurrentImageIndex(0)}}>
                    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.6585 4.92888C18.049 4.53836 18.6822 4.53835 19.0727 4.92888C19.4632 5.3194 19.4632 5.95257 19.0727 6.34309L13.4158 12L19.0727 17.6568C19.4632 18.0473 19.4632 18.6805 19.0727 19.071C18.6822 19.4615 18.049 19.4615 17.6585 19.071L12.0016 13.4142L6.34481 19.071C6.3387 19.0771 6.33254 19.0831 6.32632 19.089C5.93455 19.4614 5.31501 19.4554 4.93059 19.071C4.6377 18.7781 4.56447 18.3487 4.71092 17.9876C4.75973 17.8672 4.83296 17.7544 4.93059 17.6568L10.5874 12L4.93059 6.34314C4.54006 5.95262 4.54006 5.31945 4.93059 4.92893C5.32111 4.5384 5.95428 4.5384 6.3448 4.92893L12.0016 10.5857L17.6585 4.92888Z" fill="black"/>
                    </svg>
                </div>
                <div className="div-contain-img flex items-center justify-center mx-3">
                    <div className="cursor-pointer transition-transform transform-gpu hover:scale-110 ease-out duration-300" onClick={prevImage}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
                        </svg>
                    </div>
                        <div className="img-contain">
                            <img className="runded-lg object-cover"
                            src={context.productShow.images? context.productShow.images[currentImageIndex]: ''}
                            alt={context.productShow.name}
                            />
                        </div>
                    <div className="cursor-pointer transition-transform transform-gpu hover:scale-110 ease-out duration-300" onClick={nextImage}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                    </svg>
                    </div>
                </div>
                <div className="div-container-detail flex flex-col items-center justify-center w-96">
                    <div className="flex flex-col items-center justify-center ">
                        <div className="div-detail flex items-center mt-3 mb-8 px-3 py-1 bg-gradient-to-r from-red-500 via-red-300 to-red-500 rounded-lg">
                            <h2 className="font-medium text-2xl rounded-2xl">Detalles del Equipo</h2>
                        </div>
                        <h1 className="text-xl font-medium">{context.productShow.name}</h1>
                        <ul>
                            {
                                context.productShow.description?.map((data, index) => (
                                    <li className="ul-list font-medium" key={index}>{data.name}: <span className="font-light"> {data.property} </span></li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
        </aside>
    )
}

export {ProductDetail};