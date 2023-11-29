import {useEffect, useState} from "react";
import { products } from "../../dataBases/products";
import { NavLink } from "react-router-dom";

const ProductHomeVariable = () => {

    // product show home variable
    const  [productShowVariable, setProductShowVariable] = useState(products[0]);
    const [index, setIndex] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setProductShowVariable(products[index]);
            setIndex((prevIndex) => (prevIndex + 1) % products.length)
        }, 3000)
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
            <img className="object-cover" src={productShowVariable.images[0]}/>
        </div>
</div>
    )

}

export {ProductHomeVariable};