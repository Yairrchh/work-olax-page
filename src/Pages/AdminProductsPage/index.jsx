import { Layout } from "../../Components/Layout";
import { useAuth } from "../../Context/AuthContext";

const AdminProductsPage = () => {
    const { session, signOut } = useAuth();

    return (
        <Layout>
            <div className="w-full max-w-3xl px-4 mt-6">
                <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col gap-4">
                    <div className="flex items-center justify-between">
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
                    <p className="text-sm text-gray-500">
                        Acá va a vivir el CRUD de productos.
                    </p>
                </div>
            </div>
        </Layout>
    );
};

export { AdminProductsPage };
