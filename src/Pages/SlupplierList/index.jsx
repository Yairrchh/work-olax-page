import { Layout } from '../../Components/Layout'

const suppliersData = [
  { name: 'Mi Distributors', contact: ['Whatsapp: +1 (754) 236-9859'] },
  { name: 'Techland', contact: ['Whatsapp: +1 (786) 683-2702', 'Llamadas: +1 (305) 614-4478'] },
  { name: 'CORBAL', contact: ['Whatsapp: +1 (407) 289-6091'] },
  { name: 'Ena Wireless', contact: ['Whatsapp: +1 (786) 307-1638'] },
]

const SuppliersContent = () => {
  return (
      /* Fondo off-white mate / suave que no encandila */
      <section className="w-full bg-[#e8e8e8] text-neutral-800 pt-3 pb-8 md:py-16 px-6 md:px-16 md:min-h-[85vh]">
        <div className="max-w-5xl mx-auto">
          
          {/* Tag de sección */}
          <span className="text-red-600 font-bold text-xs md:text-sm tracking-widest uppercase block mb-2">
            Red de Distribución
          </span>

          {/* Título */}
          <h1 className="text-3xl md:text-5xl font-bold text-neutral-900 mb-6">
            Listado de proveedores
          </h1>

          {/* Descripción */}
          <p className="text-neutral-600 text-sm md:text-base leading-relaxed max-w-3xl mb-10">
            En OLAX trabajamos a través de una sólida red de grandes proveedores autorizados para llegar a cada rincón del país. Esta sección te conecta directamente con el distribuidor oficial más cercano para que tu tienda pueda abastecerse fácilmente.
          </p>

          {/* Card / Tabla en un gris claro descansado */}
          <div className="bg-[#dcdcdc] rounded-2xl border border-neutral-300 overflow-hidden shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#cfcfcf] border-b border-neutral-300 text-neutral-600 text-xs font-semibold tracking-wider uppercase">
                  <th className="py-4 px-6">Proveedor Autorizado</th>
                  <th className="py-4 px-6">Contacto</th>
                  <th className="py-4 px-6 w-12"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-300 text-sm">
                {suppliersData.map((item, index) => (
                  <tr key={index} className="hover:bg-[#d4d4d4] transition-colors">
                    <td className="py-4 px-6 font-semibold text-neutral-800">{item.name}</td>
                    <td className="py-4 px-6 text-neutral-600">
                      {item.contact.map((line, i) => (
                        <div key={i}>{line}</div>
                      ))}
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-5 h-5 text-neutral-400"
                          aria-label="WhatsApp"
                        >
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.148.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                          <path d="M12.05 0C5.495 0 .102 5.371.1 11.973c0 2.11.552 4.17 1.6 5.986L0 24l6.24-1.638a11.9 11.9 0 0 0 5.808 1.482h.005c6.554 0 11.947-5.371 11.949-11.972a11.9 11.9 0 0 0-3.503-8.489A11.9 11.9 0 0 0 12.05 0zm0 21.905h-.004a9.9 9.9 0 0 1-5.05-1.384l-.362-.215-3.744.983.998-3.65-.236-.375a9.9 9.9 0 0 1-1.518-5.29c.002-5.484 4.468-9.947 9.92-9.947a9.87 9.87 0 0 1 7.02 2.913 9.87 9.87 0 0 1 2.907 6.988c-.002 5.484-4.47 9.977-9.93 9.977z" />
                        </svg>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </section>
  )
}

const SuppliersPage = () => {
  return (
    <Layout>
      <SuppliersContent/>
    </Layout>
  )
}

export { SuppliersPage, SuppliersContent }