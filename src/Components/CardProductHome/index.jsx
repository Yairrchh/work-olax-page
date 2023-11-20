import cohete from '/icon-home/cohete.svg'
import sd from '/icon-home/sd.svg'
import camera from '/icon-home/camera.svg'
import './index.css'


const CardProductHome = ({data}) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-60 ">
            <div className='div-modal rounded-2xl flex items-center justify-center' style={{ backgroundImage: `url(${data.background})`, backgroundSize: 'cover'}}>
                <div className='flex flex-wrap items-center justify-center'>
                    <figure className='img-product w-2/4 max-h-86'>
                        <img className='w-full h-full' src={data.images[0]}/>
                    </figure>
                    <div className='div-t-p'>
                        <h1 className='text-white text-2xl font-semibold mb-2 '>{data.name}</h1>
                        <p className='text-white w-56'>{data.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export {CardProductHome};