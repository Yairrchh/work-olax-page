import {useEffect, useState} from "react";
import { products } from "../../dataBases/products";
import { NavLink } from "react-router-dom";

const ProductHomeVariable = () => {

    // product show home variable
    const  [productShowVariable, setProductShowVariable] = useState(products[2]);
    const [index, setIndex] = useState(3);
    //array for preload to images
    const [preloadedImages, setPreloadedImages] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            setProductShowVariable(products[index]);
            setIndex((prevIndex) => (prevIndex + 1) % products.length)
        }, 4000);
        //Preloading images to
        const images = products.map(product => {
            const img = new Image();
            img.src = product.images[0];
            return img;
        });

        setPreloadedImages(images);

        return () => clearInterval(interval);
    }, [index]);

    return (
        <div className="div-first flex flex-wrap gap-x-10 items-center justify-center rounded-xl">
        <div className="div-container-variable flex flex-col items-center text-center">
            <h1 className="h1-olex text-white border-1">{productShowVariable.name}</h1>
            <div className="div-button">
                <NavLink to='/products'>
                <button className="button-view-more bg-indigo-600 py-3 p-5 rounded-2xl text-white text-xl
                transition-transform transform-gpu hover:scale-110 ease-out duration-300">Ver mas</button>
                </NavLink>
            </div>
        </div>
        <div className="div-first-img">
            {
                preloadedImages.length > 0 && ((
                    <img className="object-cover" src={productShowVariable.images[0]}/>
                ))
            }
        </div>
    </div>
    )

}

export {ProductHomeVariable};