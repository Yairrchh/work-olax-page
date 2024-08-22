import "./index.css"
import olaxLogo from "/icon-footer/olax-logo-bn.png"
import iconEmail from "/icon-footer/email-icon.svg"
import iconllamada from "/icon-footer/icon-llamada.svg"
import iconMap from "/icon-footer/map-icon.svg"
import iconInstagram from "/icon-footer/instagram.svg"



const Footer = () => {
    return (
        <footer className="flex flex-col items-center justify-center gap-y-4">
            <div className="w-36 mt-2 mb-2">
                <img className="w-full h-full" src={olaxLogo}/>
            </div>
            <div className="flex flex-wrap gap-10 font-bold">
                <a href="https://www.google.com/maps/place/8422+NW+66th+St,+Miami,+FL+33166,+EE.+UU./@25.8332953,-80.3376824,17z/data=!3m1!4b1!4m6!3m5!1s0x88d9bbc6579f5f1b:0x5aed62e370179f3b!8m2!3d25.8332905!4d-80.3351075!16s%2Fg%2F11j0tb0pbm?hl=es&entry=ttu" target="_blank" rel="noopener noreferrer">
                    <div className="flex items-center">
                        <figure className="w-10 h-10 mx-3">
                            <img src={iconMap}/>
                        </figure>
                        <span className="text-white">8422 NW 66 St Miami, 33166</span>
                    </div>
                </a>
                <div className="flex items-center">
                    <figure className="w-10 h-10 mx-3">
                        <img src={iconllamada}/>
                    </figure>
                    <span className="text-white">(786) 8194377</span>
                </div>
                <a href="mailto:olaxsolutionsmp@gmail.com"  target="_blank" rel="noopener noreferrer">
                    <div className="flex items-center">
                        <figure className="w-10 h-10 mx-3">
                            <img src={iconEmail}/>
                        </figure>
                        <span className="text-white">info@olaxglobal.com</span>
                    </div>
                </a>
                <a href="https://instagram.com/megaventasusa?igshid=OGQ5ZDc2ODk2ZA==" target="_blank" rel="noopener noreferrer">
                    <div className="flex items-center">
                        <figure className="w-10 h-10 mx-3">
                            <img src={iconInstagram}/>
                        </figure>
                        <span className="text-white">@megaventasusa</span>
                    </div>
                </a>
            </div>
            <div>
                <a href="https://classy-crepe-8f2013.netlify.app/" target="_blank" rel="noopener noreferrer">
                <p className="text-white text-center">© 2023 olaxglobal • All Rights Reserved, Elaborado por Yair chira</p>
                </a>
            </div>
        </footer>
    )
};

export {Footer};