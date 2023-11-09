import "./index.css"
import olaxLogo from "/icon-footer/olax-logo-bn.png"
import iconEmail from "/icon-footer/email-icon.svg"
import iconllamada from "/icon-footer/icon-llamada.svg"
import iconMap from "/icon-footer/map-icon.svg"
import iconInstagram from "/icon-footer/instagram.svg"



const Footer = () => {
    return (
        <footer className="flex flex-col items-center justify-center gap-y-10">
            <div className="w-40 h-44 mt-2">
                <img className="w-full h-full" src={olaxLogo}/>
            </div>
            <div className="flex flex-wrap gap-10 font-bold">
                <div className="flex items-center">
                    <figure className="w-10 h-10 mx-3">
                        <img src={iconMap}/>
                    </figure>
                    <span className="text-white">8422 NW 66 St Miami, 33166</span>
                </div>
                <div className="flex items-center">
                    <figure className="w-10 h-10 mx-3">
                        <img src={iconllamada}/>
                    </figure>
                    <span className="text-white">(786) 5565239</span>
                </div>
                <div className="flex items-center">
                    <figure className="w-10 h-10 mx-3">
                        <img src={iconEmail}/>
                    </figure>
                    <span className="text-white">info@olaxglobal.com</span>
                </div>
                <div className="flex items-center">
                    <figure className="w-10 h-10 mx-3">
                        <img src={iconInstagram}/>
                    </figure>
                    <span className="text-white">8422 NW 66 St Miami, 33166</span>
                </div>
            </div>
            <div>
                <p className="text-white">© 2023 olaxglobal • All Rights Reserved, Elaborado por Yair chira</p>
            </div>
        </footer>
    )
};

export {Footer};