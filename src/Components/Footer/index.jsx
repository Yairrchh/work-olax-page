import "./index.css"
import olaxLogo from "/icon-footer/olax-logo-bn.png"
import iconEmail from "/icon-footer/email-icon.svg"
import iconllamada from "/icon-footer/icon-llamada.svg"
import iconMap from "/icon-footer/map-icon.svg"
import iconInstagram from "/icon-footer/instagram.svg"



const Footer = () => {
    return (
        <footer className="flex flex-col items-center justify-center gap-y-3 py-6 md:py-8 px-4">
            <div className="h-10 md:h-12">
                <img className="h-full w-auto object-contain" src={olaxLogo} loading="lazy"/>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 md:gap-x-10 font-bold">
                <a href="https://www.google.com/maps/place/8422+NW+66th+St,+Miami,+FL+33166,+EE.+UU./@25.8332953,-80.3376824,17z/data=!3m1!4b1!4m6!3m5!1s0x88d9bbc6579f5f1b:0x5aed62e370179f3b!8m2!3d25.8332905!4d-80.3351075!16s%2Fg%2F11j0tb0pbm?hl=es&entry=ttu" target="_blank" rel="noopener noreferrer">
                    <div className="flex items-center">
                        <figure className="w-6 h-6 mx-2">
                            <img className="w-full h-full" src={iconMap} loading="lazy"/>
                        </figure>
                        <span className="text-white text-xs md:text-sm">8422 NW 66 St Miami, 33166</span>
                    </div>
                </a>
                <div className="flex items-center">
                    <figure className="w-6 h-6 mx-2">
                        <img className="w-full h-full" src={iconllamada} loading="lazy"/>
                    </figure>
                    <span className="text-white text-xs md:text-sm">+1(786) 8194377</span>
                </div>
                <a href="mailto:olaxsolutionsmp@gmail.com"  target="_blank" rel="noopener noreferrer">
                    <div className="flex items-center">
                        <figure className="w-6 h-6 mx-2">
                            <img className="w-full h-full" src={iconEmail} loading="lazy"/>
                        </figure>
                        <span className="text-white text-xs md:text-sm">info@olaxglobal.com</span>
                    </div>
                </a>
                <a href="https://www.instagram.com/olaxlatam?igsh=MWZ4Y2Fsd2l3b2JwNA==" target="_blank" rel="noopener noreferrer">
                    <div className="flex items-center">
                        <figure className="w-6 h-6 mx-2">
                            <img className="w-full h-full" src={iconInstagram} loading="lazy"/>
                        </figure>
                        <span className="text-white text-xs md:text-sm">@olaxlatam</span>
                    </div>
                </a>
            </div>
            <div>
                <a href="https://classy-crepe-8f2013.netlify.app/" target="_blank" rel="noopener noreferrer">
                <p className="text-white text-center text-[10px] md:text-xs">© 2023 olaxglobal • All Rights Reserved, Elaborado por Yair chira</p>
                </a>
            </div>
        </footer>
    )
};

export {Footer};