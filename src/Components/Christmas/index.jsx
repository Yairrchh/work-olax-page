import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { IS_CHRISTMAS_SEASON } from "../../lib/christmas";
import "./index.css";

// Tematica navideña temporal (ver src/lib/christmas.js para las fechas).
// Todo es CSS, SVG y un canvas: no usa imagenes, asi que no consume cuota de Supabase.

// Formas del gorrito de Santa (viewBox 0 0 64 56). Las usan el SVG del logo y el icono de la pestaña.
const HAT_BODY = "M8 40 Q12 12 44 8 Q40 24 58 38 Z";
const HAT_FUR = { x: 3, y: 36, width: 58, height: 13, radius: 6.5 };
const HAT_POMPOM = { cx: 46, cy: 8.5, r: 6.5 };

// No se muestra en el panel de administracion.
const useChristmas = () => {
    const { pathname } = useLocation();
    return IS_CHRISTMAS_SEASON && !pathname.startsWith("/admin-xk90");
};

// Nieve cayendo. Dibuja copos con forma de cristal (estrellitas de seis puntas, de tres
// diseños distintos) en un canvas a pantalla completa que no intercepta clics. Hay copos
// lejanos (mas chicos, lentos y tenues) y cercanos (mas grandes y rapidos), y todos giran
// despacio. Se pausa con la pestaña oculta y no se activa si la persona tiene
// "reducir movimiento" en su dispositivo.

// Cada diseño de cristal se dibuja una sola vez y luego solo se copia: es mucho mas barato.
const SPRITE_SIZE = 96;

const makeCrystalSprite = (variant) => {
    const sprite = document.createElement("canvas");
    sprite.width = SPRITE_SIZE;
    sprite.height = SPRITE_SIZE;
    const ctx = sprite.getContext("2d");
    const radius = 38;

    ctx.translate(SPRITE_SIZE / 2, SPRITE_SIZE / 2);
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.strokeStyle = "#ffffff";
    // Sombra azulada: da contraste sobre el fondo claro de la pagina.
    ctx.shadowColor = "rgba(70, 110, 170, 0.9)";
    ctx.shadowBlur = 5;

    // Rama que sale de un punto del brazo, a cada lado.
    const branch = (distance, length) => {
        ctx.beginPath();
        ctx.moveTo(0, -distance);
        ctx.lineTo(-length, -distance - length * 0.9);
        ctx.moveTo(0, -distance);
        ctx.lineTo(length, -distance - length * 0.9);
        ctx.stroke();
    };

    for (let arm = 0; arm < 6; arm += 1) {
        ctx.save();
        ctx.rotate((arm * Math.PI) / 3);

        ctx.lineWidth = 3.4;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(0, -radius);
        ctx.stroke();

        ctx.lineWidth = 2.4;
        if (variant === 0) {
            // Dendrita: dos pares de ramas.
            branch(radius * 0.45, 9);
            branch(radius * 0.72, 7);
        } else if (variant === 1) {
            // Punta bifurcada y una rama corta.
            branch(radius * 0.3, 6);
            branch(radius * 0.7, 10);
        } else {
            // Rombo en la punta y espinas cortas.
            branch(radius * 0.3, 8);
            ctx.beginPath();
            ctx.moveTo(0, -radius * 0.62);
            ctx.lineTo(-5, -radius * 0.82);
            ctx.lineTo(0, -radius);
            ctx.lineTo(5, -radius * 0.82);
            ctx.closePath();
            ctx.stroke();
        }
        ctx.restore();
    }

    // Hexagono en el centro de los diseños 1 y 2.
    if (variant > 0) {
        ctx.lineWidth = 2.2;
        ctx.beginPath();
        for (let i = 0; i < 6; i += 1) {
            const angle = (i * Math.PI) / 3 + Math.PI / 6;
            const x = Math.cos(angle) * 7;
            const y = Math.sin(angle) * 7;
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.stroke();
    }
    return sprite;
};

const ChristmasSnow = () => {
    const active = useChristmas();
    const canvasRef = useRef(null);

    useEffect(() => {
        if (!active) return undefined;
        if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return undefined;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        const sprites = [0, 1, 2].map(makeCrystalSprite);
        let width = 0;
        let height = 0;
        let flakes = [];
        let frameId = 0;
        let last = 0;
        let wind = 0;

        const makeFlake = (anywhere) => {
            // depth: 0.25 (lejos) a 1 (cerca)
            const depth = 0.25 + Math.random() * 0.75;
            const scale = width < 640 ? 0.78 : 1;
            return {
                x: Math.random() * width,
                y: anywhere ? Math.random() * height : -40,
                size: (16 + depth * 26) * scale,
                vy: 0.3 + depth * 1.0,
                sway: 6 + Math.random() * 16,
                phase: Math.random() * Math.PI * 2,
                vPhase: 0.004 + Math.random() * 0.01,
                angle: Math.random() * Math.PI * 2,
                spin: (Math.random() < 0.5 ? -1 : 1) * (0.004 + Math.random() * 0.012),
                alpha: 0.6 + depth * 0.4,
                sprite: sprites[Math.floor(Math.random() * sprites.length)],
            };
        };

        const resize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width * dpr;
            canvas.height = height * dpr;
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

            // Son mas grandes que antes, asi que hacen falta menos. Menos aun en pantallas chicas.
            const target = Math.round(Math.min(46, Math.max(18, width / 30)));
            while (flakes.length < target) flakes.push(makeFlake(true));
            flakes.length = Math.min(flakes.length, target);
        };

        const frame = (time) => {
            frameId = requestAnimationFrame(frame);
            const step = Math.min(2.5, (time - last) / 16.7 || 1);
            last = time;
            // Brisa lenta que empuja todos los copos un poco hacia un lado y luego al otro.
            wind = Math.sin(time / 4200) * 0.35;

            ctx.clearRect(0, 0, width, height);

            flakes.forEach((flake, index) => {
                flake.y += flake.vy * step;
                flake.x += wind * flake.vy * step;
                flake.phase += flake.vPhase * step;
                flake.angle += flake.spin * step;
                if (flake.y > height + 40) flakes[index] = makeFlake(false);
                if (flake.x < -40) flake.x = width + 40;
                else if (flake.x > width + 40) flake.x = -40;

                const x = flake.x + Math.sin(flake.phase) * flake.sway;
                ctx.globalAlpha = flake.alpha;
                ctx.save();
                ctx.translate(x, flake.y);
                ctx.rotate(flake.angle);
                ctx.drawImage(flake.sprite, -flake.size / 2, -flake.size / 2, flake.size, flake.size);
                ctx.restore();
            });
            ctx.globalAlpha = 1;
        };

        const start = () => {
            cancelAnimationFrame(frameId);
            last = performance.now();
            frameId = requestAnimationFrame(frame);
        };

        const onVisibility = () => {
            if (document.hidden) cancelAnimationFrame(frameId);
            else start();
        };

        resize();
        start();
        window.addEventListener("resize", resize);
        document.addEventListener("visibilitychange", onVisibility);

        return () => {
            cancelAnimationFrame(frameId);
            window.removeEventListener("resize", resize);
            document.removeEventListener("visibilitychange", onVisibility);
        };
    }, [active]);

    if (!active) return null;
    return <canvas ref={canvasRef} className="xmas-snow" aria-hidden="true" />;
};

const BULB_COLORS = ["#ef4444", "#22c55e", "#fbbf24", "#f8fafc", "#ef4444", "#22c55e", "#fbbf24"];

// Geometria de la guirnalda (en px). Cada "arco" cuelga entre dos puntos de sujecion.
const LIGHTS_HEIGHT = 28;
const WIRE_TOP = 3; // donde esta sujeto el cable
const SWAG_DEPTH = 10; // cuanto cuelga el cable en el centro de cada arco
const BULBS_PER_SWAG = 4;

// Esferas que cuelgan de los puntos de sujecion de la guirnalda (colores: [brillo, sombra]).
const ORNAMENT_COLORS = [
    ["#ef4444", "#7f1d1d"],
    ["#fcd34d", "#92400e"],
    ["#4ade80", "#14532d"],
];

// Guirnalda de lucecitas colgando en arcos. Va pegada al borde inferior del menu (que debe
// ser "relative"). El cable es una curva (parabola) por arco y cada bombilla cuelga del
// cable en su punto: asi se ve como una guirnalda de verdad y no como una linea recta.
const ChristmasLights = () => {
    const show = useChristmas();
    const isMobile = useMediaQuery({ maxWidth: 639 });
    const isWide = useMediaQuery({ minWidth: 1500 });
    if (!show) return null;

    const swags = isMobile ? 4 : isWide ? 8 : 6;
    const swagWidth = 100 / swags;

    // Curva de Bezier cuadratica por arco: con el punto de control a 2x la profundidad,
    // el punto mas bajo del cable queda exactamente SWAG_DEPTH px por debajo de la sujecion.
    const wirePath = Array.from({ length: swags }, (_, i) => {
        const start = i * swagWidth;
        const move = i === 0 ? `M0 ${WIRE_TOP} ` : "";
        return `${move}Q${start + swagWidth / 2} ${WIRE_TOP + 2 * SWAG_DEPTH} ${start + swagWidth} ${WIRE_TOP}`;
    }).join(" ");

    const bulbs = [];
    for (let swag = 0; swag < swags; swag += 1) {
        for (let k = 0; k < BULBS_PER_SWAG; k += 1) {
            const t = (k + 0.5) / BULBS_PER_SWAG; // posicion dentro del arco, de 0 a 1
            const index = swag * BULBS_PER_SWAG + k;
            bulbs.push({
                key: index,
                x: `${(swag + t) * swagWidth}%`,
                y: `${WIRE_TOP + 4 * SWAG_DEPTH * t * (1 - t)}px`, // altura del cable en ese punto
                color: BULB_COLORS[index % BULB_COLORS.length],
                delay: `${((index * 37) % 18) / 10}s`,
            });
        }
    }

    // Una esfera cada dos puntos de sujecion (el 1, el 3, el 5...), sin tocar los extremos.
    const ornaments = [];
    for (let junction = 1; junction < swags; junction += 2) {
        const [light, dark] = ORNAMENT_COLORS[((junction - 1) / 2) % ORNAMENT_COLORS.length];
        ornaments.push({ key: junction, x: `${junction * swagWidth}%`, light, dark, delay: `${(junction * 0.7) % 2}s` });
    }

    return (
        <div className="xmas-lights" aria-hidden="true">
            <svg className="xmas-wire" viewBox={`0 0 100 ${LIGHTS_HEIGHT}`} preserveAspectRatio="none">
                <path d={wirePath} fill="none" stroke="#14532d" strokeWidth="2" vectorEffect="non-scaling-stroke" strokeLinecap="round" />
            </svg>
            {bulbs.map((bulb) => (
                <span
                    key={bulb.key}
                    className="xmas-bulb"
                    style={{ "--c": bulb.color, "--d": bulb.delay, "--x": bulb.x, "--y": bulb.y }}
                />
            ))}
            {ornaments.map((ornament) => (
                <span
                    key={ornament.key}
                    className="xmas-ornament"
                    style={{ left: ornament.x, "--c1": ornament.light, "--c2": ornament.dark, "--d": ornament.delay }}
                >
                    <i className="xmas-ornament-ball" />
                </span>
            ))}
        </div>
    );
};

// Espacio que reserva el menu para que las luces no tapen su contenido.
const ChristmasLightsSpacer = () => (useChristmas() ? <div className="xmas-lights-spacer" aria-hidden="true" /> : null);

// Gorrito de Santa para el logo. Se coloca con "absolute" sobre un contenedor "relative".
const SantaHat = ({ className = "" }) => {
    if (!useChristmas()) return null;
    return (
        <svg viewBox="0 0 64 56" className={`xmas-hat ${className}`} aria-hidden="true">
            <path d={HAT_BODY} fill="#dc2626" stroke="#991b1b" strokeWidth="1.2" strokeLinejoin="round" />
            <rect x={HAT_FUR.x} y={HAT_FUR.y} width={HAT_FUR.width} height={HAT_FUR.height} rx={HAT_FUR.radius} fill="#ffffff" stroke="#d1d5db" strokeWidth="1" />
            <circle cx={HAT_POMPOM.cx} cy={HAT_POMPOM.cy} r={HAT_POMPOM.r} fill="#ffffff" stroke="#d1d5db" strokeWidth="1" />
        </svg>
    );
};

// Destellos que titilan sobre el carrusel de productos. Va dentro de un contenedor "relative".
const SPARKLES = [
    { left: "6%", top: "18%", size: 14, delay: "0s" },
    { left: "14%", top: "62%", size: 9, delay: "0.7s" },
    { left: "24%", top: "8%", size: 11, delay: "1.3s" },
    { left: "33%", top: "76%", size: 8, delay: "0.3s" },
    { left: "45%", top: "4%", size: 13, delay: "1.8s" },
    { left: "55%", top: "80%", size: 10, delay: "1s" },
    { left: "66%", top: "12%", size: 9, delay: "0.5s" },
    { left: "76%", top: "70%", size: 14, delay: "1.5s" },
    { left: "86%", top: "22%", size: 11, delay: "0.9s" },
    { left: "93%", top: "58%", size: 8, delay: "2.1s" },
];

const ChristmasSparkles = () => {
    if (!useChristmas()) return null;
    return (
        <div className="xmas-sparkles" aria-hidden="true">
            {SPARKLES.map((star, index) => (
                <span
                    key={index}
                    className="xmas-star"
                    style={{ left: star.left, top: star.top, "--s": `${star.size}px`, "--d": star.delay }}
                />
            ))}
        </div>
    );
};

// Nieve acumulada sobre el borde superior del pie de pagina. Va dentro del <footer>, que debe
// ser "relative". Son montoncitos de nieve (arcos) con una sombra azulada para que se vean
// sobre el fondo claro.
const DRIFT_BASELINE = 30;
const DRIFT_HEIGHTS = [4, 8, 5, 11, 6, 9, 4, 12, 7, 8, 5, 11, 6, 4];

const driftPath = (offset = 0) => {
    const width = 1000 / DRIFT_HEIGHTS.length;
    const base = DRIFT_BASELINE + offset;
    const mounds = DRIFT_HEIGHTS.map((h, i) => {
        const start = i * width;
        return `Q${start + width / 2} ${base - 2 * h} ${start + width} ${base}`;
    });
    return `M0 40 L0 ${base} ${mounds.join(" ")} L1000 40 Z`;
};

const ChristmasSnowDrift = () => {
    if (!useChristmas()) return null;
    return (
        <svg className="xmas-drift" viewBox="0 0 1000 40" preserveAspectRatio="none" aria-hidden="true">
            <path d={driftPath(2)} fill="rgba(120, 155, 200, 0.45)" />
            <path d={driftPath(0)} fill="#ffffff" />
        </svg>
    );
};

// Escarcha para un titulo: el texto se ve con un brillo helado que lo recorre despacio.
// Envuelve el texto del titulo; si la tematica esta apagada devuelve el texto tal cual.
const ChristmasFrost = ({ children }) => {
    if (!useChristmas()) return children;
    return <span className="xmas-frost">{children}</span>;
};

// Destellos dorados que saltan alrededor de una tarjeta cuando se le pasa el mouse por encima.
// Va dentro de la tarjeta (que debe ser "relative" y la que recibe el hover, con la clase
// "showcase-card"). Se ven con :hover, asi que no hace falta ningun estado de React.
const POPS = [
    { left: "7%", top: "9%", size: 13, delay: "0s" },
    { left: "84%", top: "7%", size: 15, delay: "0.12s" },
    { left: "92%", top: "46%", size: 10, delay: "0.28s" },
    { left: "4%", top: "58%", size: 11, delay: "0.2s" },
    { left: "80%", top: "74%", size: 13, delay: "0.36s" },
    { left: "28%", top: "5%", size: 9, delay: "0.44s" },
];

const ChristmasHoverSparkles = () => {
    if (!useChristmas()) return null;
    return (
        <div className="xmas-pops" aria-hidden="true">
            {POPS.map((pop, index) => (
                <span key={index} className="xmas-pop" style={{ left: pop.left, top: pop.top, "--s": `${pop.size}px`, "--d": pop.delay }} />
            ))}
        </div>
    );
};

// Detalle navideño en la pestaña del navegador: el icono de Olax con gorrito y un 🎄 en el
// titulo. Al salir de la tematica (o entrar al admin) se restaura lo original.
const ChristmasTab = () => {
    const active = useChristmas();

    useEffect(() => {
        if (!active) return undefined;

        const link = document.querySelector('link[rel~="icon"]');
        const originalTitle = document.title;
        const originalHref = link?.getAttribute("href");
        const originalType = link?.getAttribute("type");
        let cancelled = false;

        document.title = `🎄 ${originalTitle}`;

        if (link && originalHref) {
            const image = new Image();
            image.onload = () => {
                if (cancelled) return;
                const size = 64;
                const canvas = document.createElement("canvas");
                canvas.width = size;
                canvas.height = size;
                const ctx = canvas.getContext("2d");

                // Logo ajustado a una caja de 52x52 abajo a la izquierda, sin deformarlo.
                const box = 52;
                const ratio = Math.min(box / image.width, box / image.height);
                const w = image.width * ratio;
                const h = image.height * ratio;
                ctx.drawImage(image, 2 + (box - w) / 2, size - 2 - box + (box - h) / 2, w, h);

                // Gorrito arriba a la derecha (mismas formas que el del logo del menu), con contorno
                // para que la piel blanca se distinga sobre pestañas claras.
                ctx.save();
                ctx.translate(22, 0);
                ctx.scale(0.6, 0.6);
                ctx.lineJoin = "round";
                ctx.lineWidth = 2.4;
                ctx.fillStyle = "#dc2626";
                ctx.strokeStyle = "#991b1b";
                const body = new Path2D(HAT_BODY);
                ctx.fill(body);
                ctx.stroke(body);
                ctx.fillStyle = "#ffffff";
                ctx.strokeStyle = "#9ca3af";
                ctx.beginPath();
                ctx.roundRect(HAT_FUR.x, HAT_FUR.y, HAT_FUR.width, HAT_FUR.height, HAT_FUR.radius);
                ctx.fill();
                ctx.stroke();
                ctx.beginPath();
                ctx.arc(HAT_POMPOM.cx, HAT_POMPOM.cy, HAT_POMPOM.r, 0, Math.PI * 2);
                ctx.fill();
                ctx.stroke();
                ctx.restore();

                link.setAttribute("type", "image/png");
                link.setAttribute("href", canvas.toDataURL("image/png"));
            };
            image.src = originalHref;
        }

        return () => {
            cancelled = true;
            document.title = originalTitle;
            if (link && originalHref) {
                link.setAttribute("href", originalHref);
                if (originalType) link.setAttribute("type", originalType);
                else link.removeAttribute("type");
            }
        };
    }, [active]);

    return null;
};

export {
    ChristmasSnow,
    ChristmasLights,
    ChristmasLightsSpacer,
    SantaHat,
    ChristmasSparkles,
    ChristmasSnowDrift,
    ChristmasTab,
    ChristmasFrost,
    ChristmasHoverSparkles,
};
