// Tematica navideña temporal: se enciende y se apaga sola por fecha.
// Para quitarla antes de tiempo basta con poner CHRISTMAS_ENABLED en false.
//
// Vista previa (sin importar la fecha):
//   ?navidad=1  fuerza la tematica encendida
//   ?navidad=0  fuerza la tematica apagada
const CHRISTMAS_ENABLED = true;

// Del 20 de noviembre al 6 de enero (ambos incluidos).
const START = { month: 10, day: 20 }; // los meses van de 0 a 11
const END = { month: 0, day: 6 };

const isInSeason = (date) => {
    const month = date.getMonth();
    const day = date.getDate();
    if (month === 11) return true;
    if (month === START.month) return day >= START.day;
    if (month === END.month) return day <= END.day;
    return false;
};

// Se calcula una sola vez al cargar la pagina: asi el parametro ?navidad se mantiene
// mientras se navega entre secciones, aunque la URL deje de llevarlo.
const computeSeason = () => {
    if (!CHRISTMAS_ENABLED) return false;
    try {
        const forced = new URLSearchParams(window.location.search).get("navidad");
        if (forced === "1") return true;
        if (forced === "0") return false;
    } catch { /* sin window o sin URL: se usa la fecha */ }
    return isInSeason(new Date());
};

const IS_CHRISTMAS_SEASON = computeSeason();

export { IS_CHRISTMAS_SEASON };
