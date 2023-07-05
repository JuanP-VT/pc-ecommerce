import { PurchaseOrder } from "@/app/types/order";

export const purchaseOrderMockOne: PurchaseOrder[] = [
  {
    product: {
      _id: "648bfc0bfdcfaf871509ef83",
      name: "Silicon Power Value Gaming DDR4 RAM 16GB (8GBx2) 3200MHz",
      category: "RAM",
      img: [
        "https://m.media-amazon.com/images/I/71hqLlS98ZL._AC_SL1500_.jpg",
        "https://m.media-amazon.com/images/I/71xmyDNzv0L._AC_SL1500_.jpg",
        "https://m.media-amazon.com/images/I/71a7M6MUukL._AC_SL1500_.jpg",
        "https://m.media-amazon.com/images/I/81BnbxtQfIL._AC_SL1500_.jpg",
        "https://m.media-amazon.com/images/I/81019udFtML._AC_SL1500_.jpg",
      ],
      description: [
        "Supports Intel Coffee Lake Processors and Intel Extreme Memory Profile (Intel XMP) Standards.",
        "Aluminum heat sink and low voltage of 1.35V enable fast heat dissipation and lower hardware power consumption.",
        "Speeds up to 3200 MT/s / Timing 16-18-18-38 / Voltage 1.35V / Unbuffered / 8GB based",
        "Backed by a lifetime warranty to promise complete services and technical support.",
      ],
      stock: 60,
      price: 60.4,
      discountPercentage: 50,
      specs: [
        {
          key: "Brand",
          value: "SP Silicon Power ",
        },
        {
          key: "Computer Memory Size",
          value: "16 GB",
        },
        {
          key: "Memory Speed",
          value: "3200 MHz",
        },
        {
          key: "Compatible Devices",
          value: "Desktop",
        },
      ],
    },
    quantity: 1,
  },
  {
    product: {
      _id: "648bfe13fdcfaf871509ef87",
      name: "SAMSUNG 870 EVO SATA SSD 500GB 2.5” Internal Solid State Drive",
      category: "SSD",
      img: [
        "https://m.media-amazon.com/images/I/911ujeCkGfL._AC_SL1500_.jpg",
        "https://m.media-amazon.com/images/I/816LWP6S5uL._AC_SL1500_.jpg",
        "https://m.media-amazon.com/images/I/81-9EC8eoqL._AC_SL1500_.jpg",
        "https://m.media-amazon.com/images/I/71RaH0ziN-L._AC_SL1500_.jpg",
      ],
      description: [
        "THE SSD ALL-STAR: The latest 870 EVO has indisputable performance, reliability and compatibility built upon Samsung's pioneering technology. S.M.A.R.T. Support: Yes",
        "EXCELLENCE IN PERFORMANCE: Enjoy professional level SSD performance which maximizes the SATA interface limit to 560 530 MB/s sequential speeds,* accelerates write speeds and maintains long term high performance with a larger variable buffer\n",
        "INDUSTRY-DEFINING RELIABILITY: Meet the demands of every task — from everyday computing to 8K video processing, with up to 600 TBW** under a 5-year limited warranty***\n",
        "MORE COMPATIBLE THAN EVER: The 870 EVO has been compatibility tested**** for major host systems and applications, including chipsets, motherboards, NAS, and video recording devices\n",
        "UPGRADE WITH EASE: Using the 870 EVO SSD is as simple as plugging it into the standard 2.5 inch SATA form factor on your desktop PC or laptop; The renewed migration software takes care of the rest\n",
        "SAMSUNG MAGICIAN SOFTWARE: Samsung Magician 6 software**** helps you easily manage your drive, keep up the latest updates, monitor the drive's health and status, or even enhance its performance",
        "WORLD'S #1 FLASH MEMORY BRAND: Experience the performance and reliability from the world's #1 brand for flash memory since 2003;***** All firmware and components, including Samsung's world-renowned DRAM and NAND, are produced in-house, allowing end-to-end integration for quality you can trust",
      ],
      stock: 68,
      price: 68.5,
      discountPercentage: 75,
      specs: [],
    },
    quantity: 10,
  },
  {
    product: {
      _id: "648a10a662f9e48825305b4c",
      name: "AMD RTX 580",
      category: "GPU",
      img: [
        "https://m.media-amazon.com/images/I/41XFzGbYo1L._AC_.jpg",
        "https://m.media-amazon.com/images/I/51sVT4fCb1L._AC_.jpg",
        "https://m.media-amazon.com/images/I/51AmlY6rYuL._AC_.jpg",
        "https://m.media-amazon.com/images/I/41xQAWH-2FL._AC_.jpg",
      ],
      description: [
        "MEMORIA GDDR5 DE 8 GB: la tarjeta gráfica RX 580 tiene una potente potencia de procesamiento de gráficos con una velocidad de GPU de 1284 MHz y una memoria de juego de alto rendimiento de hasta 7000 MHz para una experiencia de juego y aplicación más fluida.",
        "BUENA EXPERIENCIA: la tarjeta gráfica está equipada con DP, interfaz multimedia de alta definición, puertos de salida DVI D, admite HD, resolución 4K de salida de 60 Hz, mejora en gran medida el rendimiento del juego y puede admitir sin problemas varios juegos 1080P 3A.",
        "PCI EXPRESS 3.0: la tarjeta gráfica de 8 GB adopta la ranura para tarjetas gráficas PCI Express 3.0, que es plug and play, fácil de usar y tiene un buen rendimiento. Al mismo tiempo, está equipado con un chip de procesador de flujo 2048, que es duradero y práctico, y tiene una larga vida útil.",
        "2 VENTILADORES DE ENFRIAMIENTO: la tarjeta gráfica de 256 bits tiene dos ventiladores de enfriamiento para proporcionar más flujo de aire para una experiencia de juego fresca y silenciosa, los componentes eléctricos de excelente calidad y la placa PCB garantizan su seguridad y estabilidad.",
      ],
      stock: 230,
      price: 230.99,
      discountPercentage: 0,
      specs: [
        {
          key: "1",
          value: "2",
        },
        {
          key: "3",
          value: "4",
        },
        {
          key: "5",
          value: "6",
        },
        {
          key: "7",
          value: "8",
        },
      ],
    },
    quantity: 10,
  },
];

export const purchaseOrderMockTwo: PurchaseOrder[] = [
  {
    product: {
      _id: "6488b792ab73d6cb1b278a60",
      name: "Gaming GeForce GTX 960 Super 128Bit HDMI/DP 4GB GDDR5 HDCP Soporte DirectX 12 Dual Fan VR Ready Tarjeta gráfica para computadora (2G)",
      category: "GPU",
      img: [
        "https://m.media-amazon.com/images/I/81u9V1mL8GL._AC_SL1500_.jpg",
        "https://m.media-amazon.com/images/I/71D0UcUa7wL._AC_SL1200_.jpg",
        "https://m.media-amazon.com/images/I/614cRkKwmAL._AC_SL1200_.jpg",
        " https://m.media-amazon.com/images/I/61-kRxns59L._AC_SL1200_.jpg",
      ],
      description: [
        "4GB 128-Bit GDDR5,Core Clock 1241MHz (OC Mode)",
        "1216 MHz (Game Mode),1127 MHz (Silent Mode)",
        "Boost Clock 1304 MHz (OC Mode),1279 MHz (Game Mode)",
        "1178 MHz (Silent Mode)",
        "1 x Dual Link DVI-I; 1 x HDMI 2.0; 1 x DisplayPort 1.2 PCI Express 3.0x16",
      ],
      stock: 1,
      price: 399.99,
      discountPercentage: 5,
      specs: [
        {
          key: "Coprocesador de gráficos",
          value: "NVIDIA GeForce GTX 960",
        },
        {
          key: "Marca",
          value: "Abbcoert",
        },
        {
          key: "Tamaño de RAM para gráficos",
          value: "4 GB",
        },
        {
          key: "Velocidad del reloj GPU",
          value: "1253 MHz",
        },
        {
          key: "Interfaz de salida de video",
          value: "VGA, VIVO, DisplayPort, DVI, HDMI",
        },
      ],
    },
    quantity: 1,
  },
  {
    product: {
      _id: "648ba2dcab0afbc3426cfb51",
      name: "GOWENIC GTX 1060 Graphics Card, 6GB/5GB/3GB GDDR5 Gaming Graphics Card 192bit 4K HDR 8008MHz Memory Frequency, HDMI DVI DP Interface, Dual Fans(5GB)",
      category: "GPU",
      img: [
        "https://m.media-amazon.com/images/I/61Y7+5QUGEL._AC_SL1500_.jpg",
        "https://m.media-amazon.com/images/I/71C7ufrB4tL._AC_SL1500_.jpg",
      ],
      description: [
        "【GDDR5 192bit】: The computer graphics card is a GDDR5 (192bit) video memory graphics card, with powerful image processing capabilities, 1759MHz boost clock, 8008MHz video memory main frequency",
        "【Wide Compatible】: The GPU graphics card is compatible with for 1060 GAMING, for 06G P4 6161 KR, for 6GB GDDR5, for ACX 2.0",
        "【4K HDR Technology】: The 192bit graphics card supports a clearer and brighter large picture, supports HDR technology, and presents the details of the dark and bright parts that could not be displayed before",
        "【Good Stability】: The gaming graphics card adopts PCB board and high temperature resistant capacitors, which ensure more stable gaming and entertainment",
        "【Dual Fans】: The GDDR5 graphics card is equipped with cooling dual fans for more airflow, quiet operation and no noise disturbance【Dual Fans】: The GDDR5 graphics card is equipped with cooling dual fans for more airflow, quiet operation and no noise disturbance",
      ],
      stock: 243,
      price: 243.99,
      discountPercentage: 10,
      specs: [],
    },
    quantity: 10,
  },
  {
    product: {
      _id: "648bfe13fdcfaf871509ef87",
      name: "SAMSUNG 870 EVO SATA SSD 500GB 2.5” Internal Solid State Drive",
      category: "SSD",
      img: [
        "https://m.media-amazon.com/images/I/911ujeCkGfL._AC_SL1500_.jpg",
        "https://m.media-amazon.com/images/I/816LWP6S5uL._AC_SL1500_.jpg",
        "https://m.media-amazon.com/images/I/81-9EC8eoqL._AC_SL1500_.jpg",
        "https://m.media-amazon.com/images/I/71RaH0ziN-L._AC_SL1500_.jpg",
      ],
      description: [
        "THE SSD ALL-STAR: The latest 870 EVO has indisputable performance, reliability and compatibility built upon Samsung's pioneering technology. S.M.A.R.T. Support: Yes",
        "EXCELLENCE IN PERFORMANCE: Enjoy professional level SSD performance which maximizes the SATA interface limit to 560 530 MB/s sequential speeds,* accelerates write speeds and maintains long term high performance with a larger variable buffer\n",
        "INDUSTRY-DEFINING RELIABILITY: Meet the demands of every task — from everyday computing to 8K video processing, with up to 600 TBW** under a 5-year limited warranty***\n",
        "MORE COMPATIBLE THAN EVER: The 870 EVO has been compatibility tested**** for major host systems and applications, including chipsets, motherboards, NAS, and video recording devices\n",
        "UPGRADE WITH EASE: Using the 870 EVO SSD is as simple as plugging it into the standard 2.5 inch SATA form factor on your desktop PC or laptop; The renewed migration software takes care of the rest\n",
        "SAMSUNG MAGICIAN SOFTWARE: Samsung Magician 6 software**** helps you easily manage your drive, keep up the latest updates, monitor the drive's health and status, or even enhance its performance",
        "WORLD'S #1 FLASH MEMORY BRAND: Experience the performance and reliability from the world's #1 brand for flash memory since 2003;***** All firmware and components, including Samsung's world-renowned DRAM and NAND, are produced in-house, allowing end-to-end integration for quality you can trust",
      ],
      stock: 68,
      price: 68.5,
      discountPercentage: 75,
      specs: [],
    },
    quantity: 10,
  },
  {
    product: {
      _id: "648ba7d8ab0afbc3426cfb53",
      name: "MSI Radeon RX 6600",
      category: "GPU",
      img: [
        "https://m.media-amazon.com/images/I/71j+4HdA5-L._AC_SL1500_.jpg",
        "https://m.media-amazon.com/images/I/814d+gBXbOL._AC_SL1500_.jpg",
        "https://m.media-amazon.com/images/I/81ICcrL81gL._AC_SL1500_.jpg",
      ],
      description: [
        "The award-winning MSI TORX Fan 3.0 design creates high static pressure and pushes the limits of thermal performance.",
        "An abundance of thermal pads use any chance for additional heat transfer directly from the components.",
        "The custom PCB has been engineered with hardened circuits and optimized trace routing for performance and reliability.",
        "Zero Frozr is the calm before the storm, keeping fans still and maintaining silence until cooling is needed.",
        "Take full control with the most recognized and widely used graphics card overclocking software in the world.",
      ],
      stock: 250,
      price: 250.9,
      discountPercentage: 15,
      specs: [],
    },
    quantity: 4,
  },
];
