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