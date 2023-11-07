const ProductsListHome = ({data}) => {
    return (
    <div className="flex flex-col justify-center rounded-xl items-center py-10 px-8" style={{ backgroundImage: `url(${data.background})`, backgroundSize: 'cover'}}>
        <h1 className="text-2xl font-extrabold text-center text-white">{data.name}</h1>
        <img className="w-80 h-80" src={data.image} />
        <button className="text-white font-bold bg-red-600 px-10 py-3 rounded-2xl
                            hover:bg-red-400 hover:text-black hover:ease-in-out duration-300">Ver mas</button>
    </div>
    )
}

export {ProductsListHome};