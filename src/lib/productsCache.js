// Cache de la lista de productos en localStorage, para no consultar Supabase en cada
// pagina, pestaña o visita. El admin la limpia al guardar o eliminar un producto.
// Los demas visitantes ven los cambios cuando vence el TTL.
const CACHE_KEY = "olax_products_v2";
const CACHE_TTL_MS = 30 * 60 * 1000;

const read = () => {
    try {
        const raw = localStorage.getItem(CACHE_KEY);
        return raw ? JSON.parse(raw) : null;
    } catch {
        return null;
    }
};

// Devuelve la lista solo si aun esta vigente.
export const readProductsCache = () => {
    const entry = read();
    return entry && Date.now() - entry.time < CACHE_TTL_MS ? entry.data : null;
};

// Devuelve la ultima lista guardada aunque haya vencido (si Supabase no responde).
export const readStaleProductsCache = () => read()?.data ?? null;

export const writeProductsCache = (data) => {
    try {
        localStorage.setItem(CACHE_KEY, JSON.stringify({ time: Date.now(), data }));
    } catch { /* sin cache, no pasa nada */ }
};

export const clearProductsCache = () => {
    try {
        localStorage.removeItem(CACHE_KEY);
        sessionStorage.removeItem("olax_products_v1"); // clave de la version anterior
    } catch { /* nada que limpiar */ }
};
