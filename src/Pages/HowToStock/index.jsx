import { Layout } from "../../Components/Layout";

const steps = [
  {
    number: "01",
    subtitle: "ESCRÍBENOS",
    description: "Contáctanos por WhatsApp o mediante el formulario de cotización de nuestro sitio."
  },
  {
    number: "02",
    subtitle: "COTIZA TU PEDIDO",
    description: "Armamos una propuesta según el volumen que tu negocio necesita."
  },
  {
    number: "03",
    subtitle: "RECIBE Y SURTE TU VITRINA",
    description: "Coordinamos la entrega y tu negocio queda listo para vender OLAX."
  }
];

const HowToBuyContent = () => {
  return (
            <section className="pt-6 pb-16 px-6 max-w-7xl mx-auto">
      {/* Encabezado */}
      <div className="mb-12">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mt-2">
          ¿Cómo surtir con nosotros?
        </h2>

      </div>

      {/* Pasos en fila con Tailwind Grid / Flex */}
      <div className="flex flex-col lg:flex-row items-stretch justify-between gap-4 mb-10">
        {steps.map((step, index) => (
          <div key={step.number} className="flex-1 flex items-center gap-4">
            
            {/* Tarjeta de Paso */}
            <div className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col justify-between h-full hover:shadow-md transition-shadow">
              <div>
                <span className="text-red-600 font-bold text-sm block mb-2">{step.number}</span>
                <h3 className="text-sm font-extrabold uppercase tracking-wide text-gray-900 mb-2">
                  {step.subtitle}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>

            {/* Flecha de conexión entre tarjetas (Solo en pantallas grandes y excepto en el último paso) */}
            {index < steps.length - 1 && (
              <div className="hidden lg:flex items-center text-red-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Botón Call to Action en Bloque Completo (Estilo Diapositiva) */}
      <div className="w-full mt-12 lg:mt-0">
        <a
          href="https://wa.link/nqo33g"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full block text-center bg-red-600 text-white font-bold tracking-wider uppercase text-sm lg:text-base py-4 rounded-xl shadow-md hover:bg-red-700 transition-all transform hover:scale-[1.01]"
        >
          Quiero comprar al gran mayor y ser distribuidor autorizado
        </a>
      </div>
    </section>
  );
};

const HowToBuySection = () => {
  return (
    <Layout>
      <HowToBuyContent/>
    </Layout>
  );
};

export {HowToBuySection, HowToBuyContent};