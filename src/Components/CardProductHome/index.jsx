import cohete from '/icon-home/cohete.svg'
import sd from '/icon-home/sd.svg'
import camera from '/icon-home/camera.svg'
import './index.css'


const CardProductHome = ({data}) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-60 ">
            <div className='div-modal w-1/3 h-3/4 rounded-2xl' style={{ backgroundImage: `url(${data.background})`, backgroundSize: 'cover'}}>
                <div className='flex flex-wrap items-center justify-center'>
                    <figure className='img-product w-2/4 max-h-86'>
                        <img className='w-full h-full' src={data.imageProduct}/>
                    </figure>
                    <div className='div-t-p'>
                        <h1 className='text-white text-2xl font-semibold mb-2 '>{data.name}</h1>
                        <p className='text-white w-56'>{data.description}</p>
                    </div>
                </div>
                <div className='div-icon flex flex-wrap items-center justify-center gap-16 text-white'>
                    <div>
                        <figure className='w-20'>
                            <img className='w-14 h-14' src={cohete}/>
                        </figure>
                        <span>{data.ram}</span>
                        <span>Ram</span>
                    </div>
                    <div>
                        <figure className='w-20 min-w-0'>
                            <img className='w-14 h-14' src={camera}/>
                        </figure>
                        <span>{data.camera}</span>
                        <span>Ram</span>
                    </div>
                    <div>
                        <figure className='w-20'>
                            <img className='w-14 h-14' src={sd}/>
                        </figure>
                        <span>{data.rom}</span>
                        <span>Ram</span>
                    </div>
                </div>
            </div>
        </div>
    )
};

export {CardProductHome};