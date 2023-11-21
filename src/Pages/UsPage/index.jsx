import { Layout } from "../../Components/Layout";
import imguspage from "/img-background/img-uspage.webp"
import './index.css'

const UsPage = () => {
    return (
        <Layout>
            <div className="div-nosotro W-full h-3/4 flex flex-col gap-y-12 items-center justify-center rounded-2xl m-4">
                <div>
                    <h1 className="text-effect mt-14 font-bold">Nosotros</h1>
                </div>
                <div className="flex items-center justify-center">
                    <p className="text-p text-white text-xl w-8/12 mb-20 text-center font-light">En Olax sabemos que la tecnología es una parte fundamental de nuestras vidas, Desde la forma en que trabajamos y estudiamos, hasta la manera en que nos conectamos con los demás, la tecnología es la clave para avanzar en nuestra sociedad cada vez más digital.</p>
                </div>
            </div>
            <div className="flex flex-wrap items-center justify-center mt-10">
                <div className="flex flex-col items-center gap-10">
                    <div className="flex flex-col items-center justify-center m-5">
                        <figure className="w-16 h-12 flex items-center justify-center bg-red-700 rounded-lg">
                        <svg width="44" height="44" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_27_265)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7 10.5C9.07107 10.5 10.75 8.82107 10.75 6.75C10.75 4.67893 9.07107 3 7 3C4.92893 3 3.25 4.67893 3.25 6.75C3.25 8.82107 4.92893 10.5 7 10.5ZM7 8.5C7.9665 8.5 8.75 7.7165 8.75 6.75C8.75 5.7835 7.9665 5 7 5C6.0335 5 5.25 5.7835 5.25 6.75C5.25 7.7165 6.0335 8.5 7 8.5Z" fill="white"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M20.75 6.75C20.75 8.82107 19.0711 10.5 17 10.5C14.9289 10.5 13.25 8.82107 13.25 6.75C13.25 4.67893 14.9289 3 17 3C19.0711 3 20.75 4.67893 20.75 6.75ZM18.75 6.75C18.75 7.7165 17.9665 8.5 17 8.5C16.0335 8.5 15.25 7.7165 15.25 6.75C15.25 5.7835 16.0335 5 17 5C17.9665 5 18.75 5.7835 18.75 6.75Z" fill="white"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.4587 14.1763C15.9532 14.061 16.4691 14 17 14C18.9818 14 20.7624 14.8517 22 16.2153V18H16C16 18.7286 15.8052 19.4117 15.4649 20H22C23.1046 20 24 19.1046 24 18V16.1668C24 15.7334 23.8649 15.3068 23.5791 14.9811C21.9754 13.1536 19.6224 12 17 12C15.9266 12 14.8983 12.1933 13.948 12.547C14.3532 12.8904 14.7324 13.2632 15.0823 13.6619C15.2263 13.826 15.3513 13.9984 15.4587 14.1763ZM21.9998 16.1618C21.9998 16.1618 21.9998 16.1621 21.9999 16.1624L21.9998 16.162L21.9998 16.1618Z" fill="white"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 20C13.1046 20 14 19.1046 14 18V16.1668C14 15.7334 13.8649 15.3068 13.5791 14.9811C13.1123 14.4492 12.582 13.9743 12 13.5684C10.5827 12.5798 8.85906 12 7 12C4.37758 12 2.02461 13.1536 0.420908 14.9811C0.135096 15.3068 0 15.7334 0 16.1668V18C0 19.1046 0.895431 20 2 20H12ZM7 14C8.98184 14 10.7624 14.8517 12 16.2153V18H2V16.2153C3.23758 14.8517 5.01817 14 7 14ZM11.9999 16.1624C11.9998 16.162 11.9998 16.1617 11.9998 16.1617C11.9998 16.1617 11.9998 16.1619 11.9999 16.1624ZM2.0002 16.1617C2.0002 16.1617 2.00017 16.1619 2.00014 16.1624L2.0002 16.1617ZM2.0002 16.1618C2.00019 16.1619 2.00017 16.1621 2.00014 16.1624L2.0002 16.1618Z" fill="white"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_27_265">
                            <rect width="24" height="24" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>
                        </figure>
                        <p className="font-semibold text-2xl text-center">Personal Capacitado y profecional</p>
                    </div>
                    <div className="flex flex-col items-center justify-center m-5">
                        <figure className="w-16 h-12 flex items-center justify-center bg-red-700 rounded-lg">
                            <svg width="44" height="44" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.774 4.38807L15 8H20C21.6569 8 23 9.34315 23 11V14.0557C23 14.6767 22.8554 15.2892 22.5777 15.8446L20.8292 19.3416C20.321 20.358 19.2822 21 18.1459 21H4C2.89543 21 2 20.1046 2 19V11C2 9.89543 2.89543 9 4 9H7L11.4514 1.87769C11.7927 1.33169 12.3911 1 13.035 1C14.8184 1 16.1476 2.64432 15.774 4.38807ZM7 11H4L4 19H7V11ZM19.0403 18.4472C18.8709 18.786 18.5247 19 18.1459 19H9V9.57359L13.1065 3.00312C13.58 3.04459 13.9202 3.4939 13.8184 3.96901L13.0444 7.58094C12.9178 8.17152 13.065 8.78766 13.4447 9.25736C13.8244 9.72705 14.396 10 15 10H20C20.5523 10 21 10.4477 21 11V14.0557C21 14.3662 20.9277 14.6724 20.7889 14.9502L19.0403 18.4472Z" fill="white"/>
                            </svg>
                        </figure>
                        <p className="font-semibold text-2xl">Respeto y confianza</p>
                    </div>
                </div>
                <div className="w-96">
                    <figure>
                        <img src={imguspage} />
                    </figure>
                </div>
                <div className="flex flex-col items-center gap-10">
                    <div className="flex flex-col items-center justify-center m-5">
                        <figure className="w-16 h-12 flex items-center justify-center bg-red-700 rounded-lg">
                        <svg width="44" height="44" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.7878 11.8383C15.8536 12.2387 14.7677 11.8747 14.2635 10.9923L11.9999 7.03116L9.73643 10.9923C9.23218 11.8747 8.14628 12.2387 7.2121 11.8383L3.5247 10.258L4.71578 18L19.2841 18L20.4752 10.258L16.7878 11.8383ZM22.1718 7.35495C22.5325 7.20035 22.9226 7.50264 22.8629 7.89055L21.2608 18.3041C21.1107 19.2798 20.2712 20 19.2841 20H4.71578C3.72864 20 2.88914 19.2798 2.73904 18.3041L1.13695 7.89055C1.07727 7.50264 1.46735 7.20035 1.82809 7.35495L7.99994 10L11.5658 3.75974C11.7578 3.42384 12.2421 3.42384 12.4341 3.75974L15.9999 10L22.1718 7.35495Z" fill="white"/>
                        </svg>
                        </figure>
                        <p className="font-semibold text-2xl text-center">La mejor calidad y mejores precios</p>
                    </div>
                    <div className="flex flex-col items-center justify-center m-5">
                        <figure className="w-16 h-12 flex items-center justify-center bg-red-700 rounded-lg">
                            <svg width="44" height="44" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M21.0047 21.342C21.6329 20.8043 21.9962 20.02 22 19.1931V16.1795C22 15.3021 21.4281 14.5272 20.5898 14.2685L17.1131 13.1956C16.4856 13.002 15.8031 13.1287 15.2869 13.5346L13.8995 14.6258C13.0354 14.0205 12.2118 13.3319 11.4399 12.5601C10.6681 11.7882 9.97951 10.9646 9.37419 10.1005L10.4654 8.71309C10.8713 8.19694 10.998 7.5144 10.8044 6.88693L9.73153 3.41025C9.47281 2.57186 8.69786 2 7.82046 2H4.8069C3.98001 2.00381 3.19565 2.3671 2.65797 2.99532C2.21357 3.51456 1.96206 4.17697 2.00467 4.85909C2.27326 9.15824 4.04992 13.3803 7.33479 16.6652C10.6197 19.9501 14.8418 21.7267 19.1409 21.9953C19.823 22.0379 20.4854 21.7864 21.0047 21.342ZM7.80217 8.86404C7.257 9.55719 7.23015 10.5256 7.73607 11.2479C8.40782 12.2069 9.17126 13.1198 10.0257 13.9743C10.8802 14.8287 11.7931 15.5922 12.7521 16.2639C13.4744 16.7698 14.4428 16.743 15.136 16.1978L16.5233 15.1067L20 16.1795V19.1872C19.9979 19.4317 19.8901 19.6635 19.7042 19.8226C19.5325 19.9695 19.3695 20.0057 19.2656 19.9992C15.434 19.7598 11.6762 18.1782 8.749 15.251C5.82181 12.3238 4.24016 8.56596 4.00078 4.73438C3.99429 4.63048 4.03046 4.46752 4.17743 4.2958C4.33653 4.10991 4.5683 4.00206 4.81287 4H7.82046L8.89334 7.47667L7.80217 8.86404Z" fill="white"/>
                            </svg>
                        </figure>
                        <p className="font-semibold text-2xl">Help Desk 24/7</p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export {UsPage};