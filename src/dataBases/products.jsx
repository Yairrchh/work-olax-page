const products = [
    {
        id: 1,
        name: "Router Olax AC1200",
        price: 687,
        category: "Routers",
        description: [
            {
                name: 'Funcion',
                property: 'Acces point y repetidor'
            },
            {
                name: 'Frecuencia',
                property: '2,4 GHz y 5 GHz'
            },
            {
                name: 'Tipo de Frecuencia',
                property: 'DualBand'
            },
            {
                name: 'Interfaz',
                property: '3 puertos LAN Gibabit'
            },
            {
                name: 'Modelo',
                property: 'Scorpio X60'
            },
            {
                name: 'Antena',
                property: '4x6DBI de largo alcance'
            },
            {
                name: 'Velocidad',
                property: '1200 Mbpps'
            }

        ],
        images: [
            "../products/ac120.webp",
            "../products/ac120(1).webp",
            "../products/ac120(2).webp",
        ]
    },
    {
        id: 2,
        name: "Olax fire tv 4K",
        price: 687,
        category: "Routers",
        description: [
            {
                name: 'Resolucion de Pantalla',
                property: '4k HDR'
            },
            {
                name: 'ROM',
                property: '16GB'
            },
            {
                name: 'RAM',
                property: '1GB'
            },
            {
                name: 'Conexion',
                property: '2,4 GHz y 5.0 GHz'
            },
            {
                name: 'Sofware',
                property: 'Android Tv'
            },
            {
                name: 'Asistente',
                property: 'Asistente de Goggle'
            },
            {
                name : 'Otros',
                property: '3 meses gratis de TV'
            }
        ],
        images: [
            "../products/firetv.webp",
            "../products/firetv(1).webp"
        ]
    },
    {
        id: 3,
        name: "Olax Magic Q8",
        price: 687,
        category: "Tablets",
        description: [
            {
                name: 'ROM',
                property: '32GB expandible hasta 64GB'
            },
            {
                name: 'RAM',
                property: '2GB'
            },
            {
                name: 'Pantalla',
                property: '8 Pulgadas'
            },
            {
                name: 'Camara',
                property: '2.0 MP'
            },
            {
                name: 'Bateria',
                property: '4000mAh'
            },
            {
                name: 'Procesador',
                property: 'quad core'
            },
            {
                name: 'Software',
                property: 'Android 12 go'
            },
            {
                name: 'Conectividad',
                property: 'Wifi 6'
            }
        ],
        images: [
            "../products/olaxmagic.webp",
            "../products/olaxmagic(1).webp",
            "../products/olaxmagic(2).webp",
            "../products/olaxmagic(3).webp",
            "../products/olaxmagic(4).webp",
        ]
    },
    {
        id: 4,
        name: "Hotspot MF950V Elite",
        price: 687,
        category: "routers",
        description: [
            {
                name: 'Funcion',
                property: 'Modem 4G, Router'
            },
            {
                name: 'Frecuencia',
                property: '4G LTE 850/1800/2300MHZ'
            },
            {
                name: 'Tipo de frecuencia',
                property: 'OneBand'
            },
            {
                name: 'Bateria',
                property: '2100 mAh'
            },
            {
                name: 'Velocidad',
                property: '150 Mbps'
            },
            {
                name: 'Limite de conexion',
                property: '10 Dispositivos'
            },
            {
                name: 'Navegacion',
                property: '8 a 10 Horas'
            }
        ],
        images: [
            "../products/mf950v.webp",
        ]
    },
    {
        id: 5,
        name: "Olax Ocean F8",
        price: 687,
        category: "tablets",
        description: [
            {
                name: 'ROM',
                property: '64GB expandible hasta 64GB'
            },
            {
                name: 'RAM',
                property: '4GB expandible a 8GB'
            },
            {
                name: 'Pantalla',
                property: '8 Pulgadas'
            },
            {
                name: 'Camara',
                property: '2.0 MP'
            },
            {
                name: 'Bateria',
                property: '4000mAh'
            },
            {
                name: 'Procesador',
                property: 'quad core'
            },
            {
                name: 'Software',
                property: 'Android 13'
            },
            {
                name: 'Conectividad',
                property: 'Wifi 6'
            }
        ],
        images: [
            "../products/oceanf8(1).webp",
            "../products/oceanf8(2).webp",
            "../products/oceanf8(3).webp",
        ]
    },
    {
        id: 6,
        name: "Olax ocean k8",
        price: 687,
        category: "tablets",
        description: [
            {
                name: 'ROM',
                property: '32GB expandible hasta 64GB'
            },
            {
                name: 'RAM',
                property: '3GB'
            },
            {
                name: 'Pantalla',
                property: '8 Pulgadas'
            },
            {
                name: 'Camara',
                property: '5.0 MP'
            },
            {
                name: 'Bateria',
                property: '4000mAh'
            },
            {
                name: 'Procesador',
                property: 'quad core'
            },
            {
                name: 'Software',
                property: 'Android 13'
            },
            {
                name: 'Conectividad',
                property: '4G LTE B2/3/4/5/8 WCDNA Wifi 6'
            }
        ],
        images: [
            "../products/oceank8(1).webp",
            "../products/oceank8(2).webp",
            "../products/oceank8(3).webp",
        ]
    },
    {
        id: 7,
        name: "Olax ocean K10",
        price: 687,
        category: "tablets",
        description: [
            {
                name: 'ROM',
                property: '32GB expandible hasta 64GB'
            },
            {
                name: 'RAM',
                property: '2GB'
            },
            {
                name: 'Pantalla',
                property: '10.1 Pulgadas'
            },
            {
                name: 'Camara',
                property: '5.0 MP'
            },
            {
                name: 'Bateria',
                property: '5000mAh'
            },
            {
                name: 'Procesador',
                property: 'quad core'
            },
            {
                name: 'Software',
                property: 'Android 13 go'
            },
            {
                name: 'Conectividad',
                property: 'Wifi 6'
            }
        ],
        images: [
            "../products/oceank10.webp",
            "../products/oceank10(1).webp",
        ]
    },
    {
        id: 8,
        name: "Router Olax AX6 Pro",
        price: 687,
        category: "routers",
        description: [
            {
                name: 'Funcion',
                property: 'Modem 4G Portatil, Router'
            },
            {
                name: 'Frecuencia',
                property: '4G LTE 850/1800/2300MHZ'
            },
            {
                name: 'Tipo de frecuencia',
                property: 'OneBand'
            },
            {
                name: 'Bateria',
                property: '4000 mAh'
            },
            {
                name: 'Velocidad',
                property: '300 Mbps'
            },
            {
                name: 'Interfaz',
                property: '1 puertos LAN Gibabit'
            },
            {
                name: 'Limite de conexion',
                property: '32 Dispositivos'
            },
            {
                name: 'Navegacion',
                property: '8 a 10 Horas'
            }
        ],
        images: [
            "../products/routerax6pro.webp",
            "../products/routerax6pro(1).webp",
        ]
    },
    {
        id: 9,
        name: "OLax Mini DC UPS",
        price: 687,
        category: "routers",
        description: [
            {
                name: 'Funcion',
                property: 'Suministro de energia'
            },
            {
                name: 'Entrada',
                property: '100-240Vac'
            },
            {
                name: 'Salida',
                property: '6V, 9V, 12V'
            },
            {
                name: 'Salida USB',
                property: '5V DC'
            },
            {
                name: 'Bateria',
                property: '10000 mAh'
            },
            {
                name: 'Autonomia',
                property: '8 Horas'
            },
            {
                name: 'Compatibilidad',
                property: 'Principales marcas de router y modem.'
            },
        ],
        images: [
            "../products/ups.webp",
            "../products/ups(1).webp",
        ]
    },
    {
        id: 10,
        name: "Olax Fire TV 4K S1",
        price: 687,
        category: "routers",
        description: [
            {
                name: 'Resolucion de Pantalla',
                property: '4k HDR 1080P Full HD'
            },
            {
                name: 'ROM',
                property: '16GB'
            },
            {
                name: 'RAM',
                property: '1GB'
            },
            {
                name: 'Conexion',
                property: '2,4 GHz y 5.0 GHz'
            },
            {
                name: 'Sofware',
                property: 'Android Tv'
            },
            {
                name: 'Asistente',
                property: 'Asistente de Goggle'
            },
            {
                name : 'Otros',
                property: '3 meses gratis de TV'
            }
        ],
        images: [
            "../products/firetvs21.webp",
            "../products/firetvs21(1).webp",
        ]
    },
    {
        id: 11,
        name: "Olax K8 Pro",
        price: 687,
        category: "tablets",
        description: [
            {
                name: 'ROM',
                property: '64GB expandible hasta 256GB'
            },
            {
                name: 'RAM',
                property: '4GB Ampliable a 8GB'
            },
            {
                name: 'Pantalla',
                property: '8" Pulgadas IPS'
            },
            {
                name: 'Bateria',
                property: '4000mAh'
            },
            {
                name: 'Procesador',
                property: 'quad core'
            },
            {
                name: 'Software',
                property: 'Android 13'
            },
            {
                name: 'Conectividad',
                property: '4G LTE B2/3/4/5/8 WCDNA Wifi 6'
            },
            {
                name: 'Otros',
                property: '3 meses de TV gratis, Cober tipo Agenda'
            },
        ],
        images: [
            "../products/oceank8pro.png",
        ]
    },
    {
        id: 12,
        name: "Smart Watch Ultra 8+",
        price: 687,
        category: "tablets",
        description: [
            {
                name: 'Accesorios',
                property: '3 Correas, Audifonos inalambricos'
            },
            {
                name: 'Carga',
                property: '100% inalambrica'
            },
            {
                name: 'Bluetooth',
                property: '5.0'
            },
            {
                name: 'Funcionalidad',
                property: 'Recibir llamadas, mensajes y notificaciones'
            },
            {
                name: 'Salud',
                property: 'Monitoreo de pulsaciones, ritmo cardicado, presion arterial'
            },
            {
                name : 'Otros',
                property: 'Cuenta con modo Deporte'
            }
        ],
        images: [
            "../products/reloj1.png",
            "../products/reloj2.png",
            "../products/reloj3.png",
            "../products/reloj4.png",
            
        ]
    },
    {
        id: 13,
        name: "Router OLAX Scorpio GX1800 pro",
        price: 687,
        category: "routers",
        description: [
            {
                name: 'Funcion',
                property: 'Access point y repetirdor'
            },
            {
                name: 'Frecuencia',
                property: '2.4 GHz y 5 GHz'
            },
            {
                name: 'Tipo de frecuencia',
                property: 'wifi 6 DualBand'
            },
            {
                name: 'Interfaz',
                property: 'Puerto ETERNET Gigabit'
            },
            {
                name: 'Antena',
                property: '4x high-again largo alcance'
            },
            {
                name: 'Velocidad',
                property: '1201 mbps + 574 mbps'
            },
            {
                name: 'Compatibilidad',
                property: 'Principales marcas de router y modem.'
            },
        ],
        images: [
            "../products/ax1800.png",
            "../products/ax18002.png",
            "../products/ax18003.png",            
        ]
    },
    {
        id: 14,
        name: "Hotspot MF955V Advanced",
        price: 687,
        category: "routers",
        description: [
            {
                name: 'Funcion',
                property: 'Modem 4G Plus, Router'
            },
            {
                name: 'Frecuencia',
                property: '4G LTE 850/1800/2300MHZ'
            },
            {
                name: 'Tipo de frecuencia',
                property: 'OneBand'
            },
            {
                name: 'Bateria',
                property: '3000 mAh'
            },
            {
                name: 'Velocidad',
                property: '300 Mbps'
            },
            {
                name: 'Limite de conexion',
                property: '10 Dispositivos'
            },
            {
                name: 'Navegacion',
                property: '14 a 16 Horas'
            }
        ],
        images: [
            "../products/advance.png",
            "../products/advance1.png",
            "../products/advance2.png",

        ]
    },
        {
        id: 15,
        name: "Router OLAX Scorpio AX3000",
        price: 687,
        category: "routers",
        description: [
            {
                name: 'Funcion',
                property: 'Access point y repetirdor'
            },
            {
                name: 'Frecuencia',
                property: '2.4 GHz y 5 GHz'
            },
            {
                name: 'Tipo de frecuencia',
                property: 'Wifi 6 DualBand'
            },
            {
                name: 'Interfaz',
                property: 'Puerto ETERNET Gigabit'
            },
            {
                name: 'Antena',
                property: '4x high-again largo alcance'
            },
            {
                name: 'Velocidad',
                property: '3000 mbps'
            },
            {
                name: 'Compatibilidad',
                property: 'Principales marcas de router y modem.'
            },
        ],
        images: [
            "../products/ax3000.png",
            "../products/ax30001.png",
            "../products/ax30002.png",            
        ]
    },
        {
        id: 16,
        name: "Magic Q8 Pro",
        price: 687,
        category: "tablets",
        description: [
            {
                name: 'ROM',
                property: '32GB expandible hasta 256GB'
            },
            {
                name: 'RAM',
                property: '4GB'
            },
            {
                name: 'Pantalla',
                property: '8" Pulgadas'
            },
            {
                name: 'Bateria',
                property: '4000mAh'
            },
            {
                name: 'Procesador',
                property: 'quad core'
            },
            {
                name: 'Software',
                property: 'Android 12'
            },
            {
                name: 'Conectividad',
                property: 'Wifi 6'
            },
            {
                name: 'Otros',
                property: 'Protector de pantalla, cober con sujetador lateral'
            },
        ],
        images: [
            "../products/q8pro.png",
            "../products/q8pro1.png",
            "../products/q8pro2.png",
            "../products/q8pro3.png",

        ]
    },
]

export {products};