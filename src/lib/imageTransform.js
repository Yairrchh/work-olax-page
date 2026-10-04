// Convierte una URL pública de Supabase Storage en una URL de la API de
// transformación de imágenes (redimensiona + convierte a WebP al vuelo),
// para no descargar la imagen original a tamaño completo cuando solo se
// va a mostrar en miniatura.
//
// IMPORTANTE: la transformación de imágenes de Supabase es una función de pago
// (plan Pro). En este proyecto responde 403 "FeatureNotEnabled" y, con la URL
// transformada, las imágenes no se ven. Mientras el plan no la incluya se
// devuelve la URL original. Para reactivarla, poner TRANSFORMS_ENABLED en true.
//
// Nota de la API: si solo recibe "width", NO escala la altura proporcionalmente
// (deja el alto original y deforma la imagen). Por eso siempre se manda "height"
// junto con "resize=contain", que ajusta la imagen dentro de esa caja cuadrada
// respetando su proporción real.
const TRANSFORMS_ENABLED = false;

const getOptimizedImageUrl = (url, { width = 400, quality = 70 } = {}) => {
    if (!TRANSFORMS_ENABLED) return url;
    if (!url || typeof url !== "string" || !url.includes("/storage/v1/object/public/")) {
        return url;
    }

    const transformedUrl = url.replace(
        "/storage/v1/object/public/",
        "/storage/v1/render/image/public/"
    );

    const separator = transformedUrl.includes("?") ? "&" : "?";
    return `${transformedUrl}${separator}width=${width}&height=${width}&resize=contain&quality=${quality}&format=webp`;
};

export { getOptimizedImageUrl };
