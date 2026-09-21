// Redimensiona y recomprime una imagen en el navegador antes de subirla,
// para no mandar a Supabase Storage fotos de varios MB (ej. directo de
// celular) cuando en el sitio nunca se muestran a más de ~800px.
const compressImage = (file, { maxWidth = 1600, maxHeight = 1600, quality = 0.82 } = {}) => {
    return new Promise((resolve, reject) => {
        const img = new Image();
        const objectUrl = URL.createObjectURL(file);

        img.onload = () => {
            const scale = Math.min(1, maxWidth / img.width, maxHeight / img.height);
            const width = Math.round(img.width * scale);
            const height = Math.round(img.height * scale);

            const canvas = document.createElement("canvas");
            canvas.width = width;
            canvas.height = height;
            canvas.getContext("2d").drawImage(img, 0, 0, width, height);

            canvas.toBlob(
                (blob) => {
                    URL.revokeObjectURL(objectUrl);
                    if (!blob) {
                        reject(new Error("No se pudo comprimir la imagen"));
                        return;
                    }
                    resolve(blob);
                },
                "image/webp",
                quality
            );
        };

        img.onerror = () => {
            URL.revokeObjectURL(objectUrl);
            reject(new Error("No se pudo leer la imagen"));
        };

        img.src = objectUrl;
    });
};

export { compressImage };
