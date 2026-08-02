import { useEffect, useMemo, useState } from "react";
import { Layout } from "../../Components/Layout";
import { ProductFormModal } from "../../Components/ProductFormModal";
import { ConfirmDialog } from "../../Components/ConfirmDialog";
import { useAuth } from "../../Context/AuthContext";
import { supabase } from "../../lib/supabaseClient";

const ESTADO_LABELS = {
    disponible: "Disponible",
    proximamente: "Próximamente",
};

const getStoragePathFromUrl = (url) => {
    const marker = "/storage/v1/object/public/productos/";
    const index = url.indexOf(marker);
    if (index === -1) return null;
    return url.slice(index + marker.length);
};

const AdminProductsPage = () => {
    const { session, signOut } = useAuth();
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [productoEnEdicion, setProductoEnEdicion] = useState(null);
    const [productoAEliminar, setProductoAEliminar] = useState(null);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const fetchProductos = async () => {
            setLoading(true);
            const { data, error } = await supabase
                .from("productos")
                .select("*")
                .order("created_at", { ascending: false });

            if (error) {
                setError("No se pudieron cargar los productos");
            } else {
                setProductos(data);
            }
            setLoading(false);
        };

        fetchProductos();
    }, []);

    const filteredProductos = useMemo(() => {
        const term = searchTerm.trim().toLowerCase();
        if (!term) return productos;
        return productos.filter((producto) => producto.nombre.toLowerCase().includes(term));
    }, [productos, searchTerm]);

    const openCreateModal = () => {
        setProductoEnEdicion(null);
        setIsModalOpen(true);
    };

    const openEditModal = (producto) => {
        setProductoEnEdicion(producto);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setProductoEnEdicion(null);
    };

    const handleSaved = (producto) => {
        setProductos((prev) => {
            const exists = prev.some((p) => p.id === producto.id);
            if (exists) {
                return prev.map((p) => (p.id === producto.id ? producto : p));
            }
            return [producto, ...prev];
        });
        closeModal();
    };

    const handleDelete = async () => {
        if (!productoAEliminar) return;
        setIsDeleting(true);

        const { error: deleteError } = await supabase
            .from("productos")
            .delete()
            .eq("id", productoAEliminar.id);

        if (deleteError) {
            setError("No se pudo eliminar el producto");
            setIsDeleting(false);
            setProductoAEliminar(null);
            return;
        }

        const paths = (productoAEliminar.imagenes ?? [])
            .map(getStoragePathFromUrl)
            .filter(Boolean);

        if (paths.length > 0) {
            await supabase.storage.from("productos").remove(paths);
        }

        setProductos((prev) => prev.filter((p) => p.id !== productoAEliminar.id));
        setIsDeleting(false);
        setProductoAEliminar(null);
    };

    return (
        <Layout>
            <div className="w-full max-w-5xl px-4 mt-6 flex flex-col gap-6">
                <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800">Panel de productos</h1>
                        <p className="text-sm text-gray-500 mt-1">
                            Sesión iniciada como <span className="font-semibold">{session?.user?.email}</span>
                        </p>
                    </div>
                    <button
                        type="button"
                        onClick={signOut}
                        className="text-white rounded-xl bg-red-600 px-4 py-2 text-sm font-semibold shadow-md hover:bg-red-700 transition-colors"
                    >
                        Cerrar sesión
                    </button>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
                    <input
                        type="text"
                        placeholder="Buscar por nombre..."
                        value={searchTerm}
                        onChange={(event) => setSearchTerm(event.target.value)}
                        className="w-full sm:max-w-xs rounded-xl border border-gray-300 px-4 py-2.5 text-sm outline-none focus:border-red-600 focus:ring-2 focus:ring-red-100 transition-colors bg-white"
                    />
                    <button
                        type="button"
                        onClick={openCreateModal}
                        className="text-white rounded-xl bg-red-600 px-4 py-2.5 text-sm font-semibold shadow-md hover:bg-red-700 transition-colors whitespace-nowrap"
                    >
                        Agregar nuevo producto
                    </button>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
                    {loading && <p className="text-sm text-gray-500">Cargando productos...</p>}
                    {error && <p className="text-sm text-red-600 font-medium">{error}</p>}

                    {!loading && !error && filteredProductos.length === 0 && (
                        <p className="text-sm text-gray-500">No hay productos para mostrar.</p>
                    )}

                    {!loading && !error && filteredProductos.length > 0 && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {filteredProductos.map((producto) => (
                                <div key={producto.id} className="border border-gray-200 rounded-xl overflow-hidden flex flex-col">
                                    <div className="w-full h-36 bg-gray-100 flex items-center justify-center">
                                        {producto.imagenes?.[0] ? (
                                            <img
                                                src={producto.imagenes[0]}
                                                alt={producto.nombre}
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <span className="text-xs text-gray-400">Sin imagen</span>
                                        )}
                                    </div>
                                    <div className="p-4 flex flex-col gap-1.5">
                                        <h3 className="font-semibold text-gray-800 truncate">{producto.nombre}</h3>
                                        <div className="flex items-center gap-2 text-xs">
                                            <span className="bg-gray-100 text-gray-600 rounded-full px-2.5 py-1 font-medium">
                                                {producto.categoria}
                                            </span>
                                            <span className={`rounded-full px-2.5 py-1 font-medium ${producto.estado === "disponible" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`}>
                                                {ESTADO_LABELS[producto.estado] || producto.estado}
                                            </span>
                                        </div>
                                        <div className="flex gap-2 mt-3">
                                            <button
                                                type="button"
                                                onClick={() => openEditModal(producto)}
                                                className="flex-1 rounded-lg border border-gray-300 py-1.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
                                            >
                                                Editar
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => setProductoAEliminar(producto)}
                                                className="flex-1 rounded-lg border border-red-200 py-1.5 text-sm font-semibold text-red-600 hover:bg-red-50 transition-colors"
                                            >
                                                Eliminar
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {isModalOpen && (
                <ProductFormModal
                    producto={productoEnEdicion}
                    onClose={closeModal}
                    onSaved={handleSaved}
                />
            )}

            {productoAEliminar && (
                <ConfirmDialog
                    title="Eliminar producto"
                    message={`¿Seguro que quieres eliminar "${productoAEliminar.nombre}"? Esta acción no se puede deshacer.`}
                    isLoading={isDeleting}
                    onCancel={() => setProductoAEliminar(null)}
                    onConfirm={handleDelete}
                />
            )}
        </Layout>
    );
};

export { AdminProductsPage };
