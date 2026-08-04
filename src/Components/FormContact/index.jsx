import emailjs from '@emailjs/browser'
import { useState } from 'react';

const FormContact = () => {

    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        user_message: '',
    });
    const [status, setStatus] = useState('idle'); // idle | sending | sent | error

    const handleChange = (event) => {
        const {name, value} = event.target
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const sendEmail = (event) => {
        event.preventDefault();
        setStatus('sending');

        emailjs.sendForm('service_3pj95uf','template_7lpeo26',event.target,'IP5muH4nyV5hWdmWu')
        .then(() => {
            setStatus('sent');
            setFormData({
                user_name: '',
                user_email: '',
                user_message: '',
            })
        })
        .catch(error => {
            console.log(error)
            setStatus('error');
        })
    }

    return (
        <form
            className="relative bg-white w-11/12 max-w-sm p-6 md:p-9 rounded-3xl shadow-xl shadow-black/10 border border-black/5 mt-4 md:mt-16 overflow-hidden"
            onSubmit={sendEmail}
        >
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-red-700 via-red-600 to-red-500" />

            <div className="flex flex-col items-center text-center mb-6 md:mb-8">
                <figure className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-red-600/10 mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.6" stroke="currentColor" className="w-6 h-6 md:w-7 md:h-7 text-red-600">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                </figure>
                <h1 className="text-black text-2xl md:text-3xl font-bold">Envíanos un mensaje</h1>
                <p className="text-neutral-500 text-xs md:text-sm mt-1">Te respondemos en menos de 24 horas.</p>
            </div>

            <div className="grid gap-4 md:gap-5">
                <div className="relative">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.6" stroke="currentColor" className="w-5 h-5 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                    <input
                        className="w-full text-sm text-black outline-none pl-11 pr-4 py-3 rounded-xl bg-neutral-100 border border-transparent focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-500/20 transition-all duration-200"
                        type="text" placeholder="Nombre completo"
                        name="user_name" value={formData.user_name} onChange={handleChange} required />
                </div>
                <div className="relative">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.6" stroke="currentColor" className="w-5 h-5 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                    <input
                        className="w-full text-sm text-black outline-none pl-11 pr-4 py-3 rounded-xl bg-neutral-100 border border-transparent focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-500/20 transition-all duration-200"
                        placeholder="Correo electrónico" type="email"
                        name="user_email" value={formData.user_email} onChange={handleChange} required />
                </div>
                <div className="relative">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.6" stroke="currentColor" className="w-5 h-5 text-neutral-400 absolute left-3.5 top-3.5 pointer-events-none">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                    </svg>
                    <textarea
                        className="w-full text-sm text-black outline-none pl-11 pr-4 py-3 rounded-xl bg-neutral-100 border border-transparent focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-500/20 transition-all duration-200 resize-none"
                        name="user_message" placeholder="Cuéntanos en qué podemos ayudarte" cols="30" rows="4"
                        value={formData.user_message} onChange={handleChange} required
                    ></textarea>
                </div>
            </div>

            <button
                className="group w-full flex items-center justify-center gap-2 text-white rounded-xl mt-6 md:mt-8 bg-red-600 px-6 py-3 font-semibold text-sm hover:bg-red-700 active:scale-[0.98] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                type="submit" disabled={status === 'sending'}
            >
                {status === 'sending' ? 'Enviando...' : 'Enviar mensaje'}
                {status !== 'sending' && (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                    </svg>
                )}
            </button>

            {status === 'sent' && (
                <p className="text-green-600 text-xs md:text-sm text-center mt-4">¡Mensaje enviado con éxito! Gracias por escribirnos.</p>
            )}
            {status === 'error' && (
                <p className="text-red-600 text-xs md:text-sm text-center mt-4">Ocurrió un error al enviar. Intenta de nuevo.</p>
            )}
        </form>
    )
    }

export {FormContact}
