import { useState } from "react";
import { supabase } from "../../lib/supabaseClient";

const CATEGORIAS = ["Routers", "Tablets", "Otros"];
const ESTADOS = [
    { value: "disponible", label: "Disponible" },
    { value: "proximamente", label: "Próximamente" },
];

const getInitialFormData = (producto) => ({
    nombre: producto?.nombre ?? "",
    categoria: producto?.categoria ?? CATEGORIAS[0],
    caracteristicas: producto?.caracteristicas ?? "",
    estado: producto?.estado ?? ESTADOS[0].value,
});

const ProductFormModal = ({ producto, onClose, onSaved }) => {
    const isEditing = Boolean(producto);
    const [formData, setFormData] = useState(() => getInitialFormData(producto));
    const [existingImages, setExistingImages] = useState(producto?.imagenes ?? []);
    const [imageFiles, setImageFiles] = useState([]);
    const [error, setError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleImagesChange = (event) => {
        const files = Array.from(event.target.files);
        setImageFiles((prev) => [...prev, ...files]);
        event.target.value = "";
    };

    const removeNewImage = (index) => {
        setImageFiles((prev) => prev.filter((_, i) => i !== index));
    };

    const removeExistingImage = (url) => {
        setExistingImages((prev) => prev.filter((imageUrl) => imageUrl !== url));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError("");

        if (!formData.nombre.trim()) {
            setError("El nombre es obligatorio");
            return;
        }

        setIsSubmitting(true);

        try {
            const newImageUrls = [];
            for (const file of imageFiles) {
                const extension = file.name.split(".").pop();
                const path = `${crypto.randomUUID()}.${extension}`;

                const { error: uploadError } = await supabase.storage
                    .from("productos")
                    .upload(path, file);

                if (uploadError) throw uploadError;

                const { data } = supabase.storage.from("productos").getPublicUrl(path);
                newImageUrls.push(data.publicUrl);
            }

            const imagenes = [...existingImages, ...newImageUrls];
            const payload = {
                nombre: formData.nombre.trim(),
                categoria: formData.categoria,
                caracteristicas: formData.caracteristicas.trim(),
                estado: formData.estado,
                imagenes,
            };

            const query = isEditing
                ? supabase.from("productos").update(payload).eq("id", producto.id)
                : supabase.from("productos").insert(payload);

            const { data: saved, error: saveError } = await query.select().single();

            if (saveError) throw saveError;

            onSaved(saved);
        } catch (err) {
            setError(err.message || "No se pudo guardar el producto");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
            <div className="bg-white rounded-2xl shadow-lg w-full max-w-lg p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-gray-800">
                        {isEditing ? "Editar producto" : "Agregar nuevo producto"}
                    </h2>
                    <button
                        type="button"
                        onClick={onClose}
                        className="text-gray-400 hover:text-red-600 transition-colors"
                        aria-label="Cerrar"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div>
                        <label htmlFor="nombre" className="block text-sm font-semibold text-gray-700 mb-1.5">
                            Nombre
                        </label>
                        <input
                            id="nombre"
                            name="nombre"
                            type="text"
                            required
                            value={formData.nombre}
                            onChange={handleChange}
                            className="w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm outline-none focus:border-red-600 focus:ring-2 focus:ring-red-100 transition-colors"
                        />
                    </div>

                    <div>
                        <label htmlFor="categoria" className="block text-sm font-semibold text-gray-700 mb-1.5">
                            Categoría
                        </label>
                        <select
                            id="categoria"
                            name="categoria"
                            value={formData.categoria}
                            onChange={handleChange}
                            className="w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm outline-none focus:border-red-600 focus:ring-2 focus:ring-red-100 transition-colors bg-white"
                        >
                            {CATEGORIAS.map((categoria) => (
                                <option key={categoria} value={categoria}>{categoria}</option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label htmlFor="caracteristicas" className="block text-sm font-semibold text-gray-700 mb-1.5">
                            Características
                        </label>
                        <textarea
                            id="caracteristicas"
                            name="caracteristicas"
                            rows={4}
                            value={formData.caracteristicas}
                            onChange={handleChange}
                            className="w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm outline-none focus:border-red-600 focus:ring-2 focus:ring-red-100 transition-colors resize-none"
                        />
                    </div>

                    <div>
                        <label htmlFor="estado" className="block text-sm font-semibold text-gray-700 mb-1.5">
                            Estado
                        </label>
                        <select
                            id="estado"
                            name="estado"
                            value={formData.estado}
                            onChange={handleChange}
                            className="w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm outline-none focus:border-red-600 focus:ring-2 focus:ring-red-100 transition-colors bg-white"
                        >
                            {ESTADOS.map((estado) => (
                                <option key={estado.value} value={estado.value}>{estado.label}</option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label htmlFor="imagenes" className="block text-sm font-semibold text-gray-700 mb-1.5">
                            Imágenes
                        </label>
                        <input
                            id="imagenes"
                            type="file"
                            accept="image/*"
                            multiple
                            onChange={handleImagesChange}
                            className="w-full text-sm text-gray-600 file:mr-4 file:rounded-xl file:border-0 file:bg-red-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-red-600 hover:file:bg-red-100"
                        />
                        {(existingImages.length > 0 || imageFiles.length > 0) && (
                            <div className="flex flex-wrap gap-3 mt-3">
                                {existingImages.map((url) => (
                                    <div key={url} className="relative w-16 h-16">
                                        <img
                                            src={url}
                                            alt="Imagen actual"
                                            className="w-16 h-16 object-cover rounded-lg border border-gray-200"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => removeExistingImage(url)}
                                            className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs leading-none"
                                            aria-label="Quitar imagen"
                                        >
                                            ×
                                        </button>
                                    </div>
                                ))}
                                {imageFiles.map((file, index) => (
                                    <div key={index} className="relative w-16 h-16">
                                        <img
                                            src={URL.createObjectURL(file)}
                                            alt={file.name}
                                            className="w-16 h-16 object-cover rounded-lg border border-gray-200"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => removeNewImage(index)}
                                            className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs leading-none"
                                            aria-label={`Quitar ${file.name}`}
                                        >
                                            ×
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {error && (
                        <p className="text-sm text-red-600 font-medium text-center">{error}</p>
                    )}

                    <div className="flex gap-3 mt-2">
                        <button
                            type="button"
                            onClick={onClose}
                            className="flex-1 rounded-xl border border-gray-300 py-2.5 font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="flex-1 text-white rounded-xl bg-red-600 py-2.5 font-semibold shadow-md hover:bg-red-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? "Guardando..." : isEditing ? "Guardar cambios" : "Guardar producto"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export { ProductFormModal };
