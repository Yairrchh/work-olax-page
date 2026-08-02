const ConfirmDialog = ({ title, message, isLoading, onConfirm, onCancel }) => {
    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
            <div className="bg-white rounded-2xl shadow-lg w-full max-w-sm p-6 flex flex-col gap-4">
                <h2 className="text-lg font-bold text-gray-800">{title}</h2>
                <p className="text-sm text-gray-500">{message}</p>
                <div className="flex gap-3 mt-2">
                    <button
                        type="button"
                        onClick={onCancel}
                        className="flex-1 rounded-xl border border-gray-300 py-2.5 font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                        Cancelar
                    </button>
                    <button
                        type="button"
                        onClick={onConfirm}
                        disabled={isLoading}
                        className="flex-1 text-white rounded-xl bg-red-600 py-2.5 font-semibold shadow-md hover:bg-red-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                        {isLoading ? "Eliminando..." : "Eliminar"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export { ConfirmDialog };
