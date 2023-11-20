import { useState } from "react";
import { ModalHomeView } from "../ModalHomeView";
import { CardProductHome } from "../CardProductHome";

const ProductsListHome = ({data}) => {

    const [openModalHome, setOpenModalHome] = useState(false);

    const onOpenModal = () => {
        setOpenModalHome(!openModalHome)
    };

    return (
    <div className="flex flex-col justify-center rounded-xl items-center py-10 px-5 transition-transform transform-gpu hover:scale-110 ease-out duration-300" style={{ backgroundImage: `url(${data.background})`, backgroundSize: 'cover'}}>
        <h1 className="text-2xl font-extrabold text-center text-white">{data.name}</h1>
        <img className="max-w-80 max-h-80" src={data.images} />
        <button className="text-white font-bold bg-red-600 px-10 py-3 rounded-2xl
                            hover:bg-red-400 hover:text-black hover:ease-in-out duration-300"
                            onClick={() => onOpenModal()}>Ver mas</button>
        {
            openModalHome && (
                <ModalHomeView onOpenModal={onOpenModal} >
                    <CardProductHome
                    openModalHome={openModalHome}
                    data={data}
                    />
                </ModalHomeView>
            )
        }
    </div>
    )
}

export {ProductsListHome};