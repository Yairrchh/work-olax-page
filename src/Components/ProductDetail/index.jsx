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
        <aside className={`${context.productDetailOpen ? 'block' : 'hidden'} product-detail bg-white flex flex-col
        items-center fixed z-50 right-0 rounded-lg `}>
            <div className="div-detail flex justify-between items-center mt-3 mb-8">
                <h2 className="font-medium text-2xl rounded-2xl">Detalles</h2>
                <div className="cursor-pointer absolute right-0 mr-3" onClick={() => {context.closeProductDetail(); setCurrentImageIndex(0)}}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.6585 4.92888C18.049 4.53836 18.6822 4.53835 19.0727 4.92888C19.4632 5.3194 19.4632 5.95257 19.0727 6.34309L13.4158 12L19.0727 17.6568C19.4632 18.0473 19.4632 18.6805 19.0727 19.071C18.6822 19.4615 18.049 19.4615 17.6585 19.071L12.0016 13.4142L6.34481 19.071C6.3387 19.0771 6.33254 19.0831 6.32632 19.089C5.93455 19.4614 5.31501 19.4554 4.93059 19.071C4.6377 18.7781 4.56447 18.3487 4.71092 17.9876C4.75973 17.8672 4.83296 17.7544 4.93059 17.6568L10.5874 12L4.93059 6.34314C4.54006 5.95262 4.54006 5.31945 4.93059 4.92893C5.32111 4.5384 5.95428 4.5384 6.3448 4.92893L12.0016 10.5857L17.6585 4.92888Z" fill="black"/>
                    </svg>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center">
                <div className="div-contain-img flex items-center justify-center w-70 h-60 mb-6">
                    <div className="cursor-pointer m-2" onClick={prevImage}>
                        <svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.4162 13L12.0021 14.5859C12.3926 14.9764 12.3926 15.6096 12.0021 16.0001C11.6115 16.3906 10.9784 16.3906 10.5879 16.0001L7.29485 12.7071C6.90432 12.3166 6.90432 11.6834 7.29485 11.2929L10.5876 8.00011C10.9781 7.60959 11.6113 7.60959 12.0018 8.00011C12.3924 8.39064 12.3924 9.0238 12.0018 9.41433L10.4162 11H16.002C16.5542 11 17.002 11.4477 17.002 12C17.002 12.5523 16.5542 13 16.002 13H10.4162Z" fill="black"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.00195 12.0001C2.00195 6.47721 6.47911 2.00006 12.002 2.00006C17.5248 2.00006 22.002 6.47721 22.002 12.0001C22.002 17.5229 17.5248 22.0001 12.002 22.0001C6.47911 22.0001 2.00195 17.5229 2.00195 12.0001ZM12.002 20.0001C7.58368 20.0001 4.00195 16.4183 4.00195 12.0001C4.00195 7.58178 7.58368 4.00006 12.002 4.00006C16.4202 4.00006 20.002 7.58178 20.002 12.0001C20.002 16.4183 16.4202 20.0001 12.002 20.0001Z" fill="black"/>
                        </svg>
                    </div>
                        <div className="img-contain w-70 h-70">
                            <img className="w-full h-full rounded-lg object-cover"
                            src={context.productShow.images? context.productShow.images[currentImageIndex]: ''}
                            alt={context.productShow.name}
                            />
                        </div>
                    <div className="cursor-pointer m-2" onClick={nextImage}>
                        <svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.5877 11.0001L12.0018 9.41422C11.6113 9.0237 11.6113 8.39053 12.0018 8.00001C12.3924 7.60948 13.0255 7.60948 13.416 8.00001L16.7091 11.293C17.0996 11.6835 17.0996 12.3167 16.7091 12.7072L13.4163 16C13.0258 16.3905 12.3926 16.3905 12.0021 16C11.6115 15.6095 11.6115 14.9763 12.0021 14.5858L13.5877 13.0001L8.00195 13.0001C7.44967 13.0001 7.00195 12.5524 7.00195 12.0001C7.00195 11.4478 7.44967 11.0001 8.00195 11.0001H13.5877Z" fill="black"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M22.002 12.0001C22.002 17.5229 17.5248 22.0001 12.002 22.0001C6.47911 22.0001 2.00195 17.5229 2.00195 12.0001C2.00195 6.47721 6.47911 2.00006 12.002 2.00006C17.5248 2.00006 22.002 6.47721 22.002 12.0001ZM12.002 4.00006C16.4202 4.00006 20.002 7.58178 20.002 12.0001C20.002 16.4183 16.4202 20.0001 12.002 20.0001C7.58368 20.0001 4.00195 16.4183 4.00195 12.0001C4.00195 7.58178 7.58368 4.00006 12.002 4.00006Z" fill="black"/>
                        </svg>
                    </div>
                </div>
                <h1 className="text-xl font-medium">{context.productShow.name}</h1>
                <p className="font-light text-base px-6">{context.productShow.description}</p>
            </div>
        </aside>
    )
}

export {ProductDetail};