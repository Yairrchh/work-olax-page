import { olaxPageContext } from "../../Context";
import { useContext } from "react";


const CardProductsList = ({data}) => {

    const context = useContext(olaxPageContext);

    const showProduct = (data) => {
        context.openProductDetail();
        context.setProductShow(data);
    }

    return (
    <div className="bg-white cursor-pointer boder border-blue-300 flex flex-col items-center
        w-64 h-128 rounded-lg transition-transform transform-gpu hover:scale-110 ease-out duration-300">
        <figure className="relative mt-7 w-54 h-44 shadow-md shadow-slate-300 rounded-lg">
            <img className="w-full h-full object-cover flex items-center rounded-lg" src={data.images[0]} alt={data.name}/>
        </figure>
        <div className="flex flex-col px-2 items-center mt-1">
            <span className="text-base font-semibold mt-3">{data.name}</span>
        </div>
        <div className="flex flex-col px-2 items-center mb-3">
                <button onClick={() => showProduct(data)} className="text-base text-white font-normal rounded-lg bg-red-600 px-5
                py-1 mt-5 hover:bg-red-300 hover:text-black hover:ease-in-out duration-300"
                name={data.name}>Ver Mas
                </button>
        </div>
    </div>
    )
}

export {CardProductsList};