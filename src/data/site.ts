export type LocalizedText = {
  en: string;
  es: string;
};

export type Project = {
  number: string;
  title: LocalizedText;
  repo: string;
  year: string;
  featured?: boolean;
  reverse?: boolean;
  terminal: string;
  description: LocalizedText;
  highlights: string[];
  stack: string[];
  url: string;
  visual: 'aegis' | 'vault' | 'scan' | 'market' | 'weather' | 'energy' | 'sentinel' | 'emberwall' | 'chain' | 'phosphor';
  accent?: string;
};

export type Service = {
  number: string;
  title: LocalizedText;
  description: LocalizedText;
  deliverables: LocalizedText[];
};

export type ArchiveEntry = {
  name: string;
  description: LocalizedText;
  tags: string[];
  url: string;
};

export const site = {
  name: 'Zoel Arias Manchón',
  shortName: 'ZA',
  github: 'https://github.com/Zoel-Manchon',
  email: 'zroot1001@proton.me',
  location: 'Spain',
};

export const tickerLines = [
  'sentinel ▸ presencia detectada · 2.4 m · conf 0.94',
  'lorawan ▸ uplink rx · sdm230 · 3.42 kW · rssi -97',
  'mqtt ▸ nave-2/temp · 24.1 °C · qos1 ack',
  'weather-sim ▸ frente de presión aplicado · lluvia 2.4 mm/h',
  'alerta ▸ consumo l3 > umbral · aviso enviado',
  'pyscan ▸ 10.0.8.20:502/tcp abierto · modbus · unit-id=1',
  'edge-ml ▸ evento acústico clasificado · solo veredicto publicado',
  'ota ▸ firmware v1.4 desplegado · 0 downtime',
  'vault ▸ credenciales rotadas · 0 secretos expuestos',
  'grafana ▸ panel actualizado · 12.4 kWh hoy',
];

export const services: Service[] = [
  {
    number: '07',
    title: {
      es: 'Monitorización energética',
      en: 'Energy monitoring',
    },
    description: {
      es: 'Tu consumo eléctrico en un panel en tiempo real: del contador a Grafana, con alertas cuando algo se dispara. Sabrás qué gasta cada línea, cuándo y cuánto cuesta.',
      en: 'Your electrical consumption on a real-time dashboard: from the meter to Grafana, with alerts when something spikes. Know what each line draws, when, and what it costs.',
    },
    deliverables: [
      { es: 'Contador → LoRaWAN/MQTT → panel', en: 'Meter → LoRaWAN/MQTT → dashboard' },
      { es: 'Alertas de consumo y umbrales', en: 'Consumption alerts and thresholds' },
      { es: 'Histórico y comparativas', en: 'History and comparisons' },
    ],
  },
  {
    number: '02',
    title: {
      es: 'Sensorización de nave y campo',
      en: 'Site & field sensing',
    },
    description: {
      es: 'Temperatura, humedad, riego, calidad del aire — sensores autónomos donde no llega el cable, con datos fiables en tu móvil. Pensado para agro, naves e invernaderos.',
      en: 'Temperature, humidity, irrigation, air quality — self-powered sensors where cables can’t reach, with reliable data on your phone. Built for agriculture, warehouses and greenhouses.',
    },
    deliverables: [
      { es: 'Nodos ESP32/LoRa a medida', en: 'Custom ESP32/LoRa nodes' },
      { es: 'Autonomía solar donde haga falta', en: 'Solar-powered where needed' },
      { es: 'Panel + avisos por umbral', en: 'Dashboard + threshold alerts' },
    ],
  },
  {
    number: '03',
    title: {
      es: 'Seguridad del despliegue',
      en: 'Deployment security',
    },
    description: {
      es: 'Reviso y endurezco instalaciones IoT existentes: autenticación, cifrado, actualizaciones y qué está expuesto a la red que no debería. La parte que casi nadie ofrece a pymes.',
      en: 'I review and harden existing IoT deployments: authentication, encryption, updates, and what’s exposed to the network that shouldn’t be. The part almost nobody offers small businesses.',
    },
    deliverables: [
      { es: 'Auditoría de red y protocolos OT', en: 'Network & OT protocol audit' },
      { es: 'Cifrado y credenciales bien hechos', en: 'Encryption & credentials done right' },
      { es: 'Informe claro, sin humo', en: 'A clear report, no fluff' },
    ],
  },
];

export const projects: Project[] = [
  {
    number: '01',
    title: {
      es: 'Distro que se blinda sola',
      en: 'A distro that hardens itself',
    },
    repo: 'emberwall',
    year: '2026',
    featured: true,
    terminal: 'emberwall — boot · sentinel armado · mqtt tls',
    description: {
      es: 'Una distribución Linux entera compilada desde cero con Buildroot: su propio toolchain, kernel endurecido y un userland inmutable de pocos MB — sin gestor de paquetes, con PIE/RELRO/SSP, KASLR, LSMs lockdown+yama y firewall nftables default-deny. Lleva sentinel, una herramienta nativa en Rust que fusiona mi escáner pyscan y el núcleo cripto de AegisVault en un único binario estático: escaneo TCP/UDP con reconocimiento OT/ICS (Modbus, S7comm, IEC-104) más un vault argon2id + XChaCha20. Diseñada para correr como pasarela MQTT segura en el borde.',
      en: 'A whole Linux distribution built from scratch with Buildroot: its own toolchain, a hardened kernel and a few-MB immutable userland — no package manager, PIE/RELRO/SSP, KASLR, lockdown+yama LSMs and an nftables default-deny firewall. It ships sentinel, a native Rust tool fusing my pyscan scanner and the AegisVault crypto core into a single static binary: TCP/UDP scanning with OT/ICS recognition (Modbus, S7comm, IEC-104) plus an argon2id + XChaCha20 vault. Designed to run as the secure MQTT edge gateway.',
    },
    highlights: ['Buildroot desde cero', 'Kernel + userland endurecidos', 'sentinel: scan + vault en Rust', 'x86-64 y ARM64'],
    stack: ['Buildroot', 'Rust', 'C', 'Linux', 'nftables'],
    url: 'https://github.com/Zoel-Manchon/emberwall',
    visual: 'emberwall',
    accent: '#e8663d',
  },
  {
    number: '02',
    title: {
      es: 'Centinela de espacios',
      en: 'Space sentinel',
    },
    repo: 'sentinel-node',
    year: '2026',
    featured: true,
    terminal: 'sentinel — sala-1 · presencia:sí · ml:on-device',
    description: {
      es: 'Nodo centinela multisensor con ML en el borde: calidad de aire (BME680), presencia mmWave (LD2410), eventos acústicos con TinyML y visión con ESP32-CAM. Los modelos corren en el dispositivo y solo publican el veredicto — ni audio ni imágenes crudas entran nunca en la telemetría. Un espacio simulado coherente alimenta todos los canales desde un mismo horario de ocupación, y 45 tests con funciones de fitness vigilan la arquitectura.',
      en: 'A multi-sensor sentinel node with ML at the edge: air quality (BME680), mmWave presence (LD2410), acoustic events with TinyML and vision with ESP32-CAM. Models run on-device and publish only the verdict — raw audio and images never enter the telemetry. A coherent simulated space drives every channel from one occupancy schedule, and 45 tests with fitness functions guard the architecture.',
    },
    highlights: ['ML on-device', 'Privacidad por diseño', '4 canales de sensor', '45 tests + fitness'],
    stack: ['ESP32-S3', 'TinyML', 'MQTT', 'InfluxDB', 'Hexagonal'],
    url: 'https://github.com/Zoel-Manchon/sentinel-node',
    visual: 'sentinel',
    accent: '#5b9dff',
  },
  {
    number: '03',
    title: {
      es: 'Estación solar autónoma',
      en: 'Self-powered weather station',
    },
    repo: 'solar-weather-station',
    year: '2026',
    terminal: 'weather-sim — día 14 · 06:42 · cargando',
    description: {
      es: 'Estación meteorológica que se alimenta del sol y no depende de nadie: sensores de presión, luz, partículas y lluvia enviando datos por MQTT a InfluxDB y Grafana. Desarrollada simulation-first — un mundo climático virtual valida todo el sistema antes de tocar hardware, así el despliegue físico es solo un cambio de adaptador.',
      en: 'A weather station that runs on sunlight and depends on no one: pressure, light, particulate and rain sensors streaming over MQTT into InfluxDB and Grafana. Built simulation-first — a virtual weather world validates the whole system before touching hardware, so physical deployment is just an adapter swap.',
    },
    highlights: ['Autonomía solar', '4 sensores', 'MQTT → InfluxDB → Grafana', 'Núcleo MicroPython-ready'],
    stack: ['Python', 'MQTT', 'Node-RED', 'InfluxDB', 'Hexagonal'],
    url: 'https://github.com/Zoel-Manchon/solar-weather-station',
    visual: 'weather',
    accent: '#f0aa4e',
  },
  {
    number: '04',
    title: {
      es: 'Energía en tiempo real',
      en: 'Real-time energy',
    },
    repo: 'eastron-lorawan',
    year: '2026',
    terminal: 'telemetría — sdm230 · uplink en vivo',
    description: {
      es: 'Monitorización eléctrica sobre LoRaWAN: el contador emite, la pila de telemetría procesa, y el consumo aparece en paneles Grafana con histórico de series temporales. La arquitectura de referencia para monitorización energética en pymes.',
      en: 'Electrical monitoring over LoRaWAN: the meter transmits, the telemetry stack processes, and consumption lands on Grafana dashboards with time-series history. The reference architecture for small-business energy monitoring.',
    },
    highlights: ['Uplinks LoRaWAN', 'Series temporales', 'Paneles Grafana'],
    stack: ['LoRaWAN', 'InfluxDB', 'Grafana', 'IoT'],
    url: 'https://github.com/Zoel-Manchon/eastron-lorawan-energy-monitoring',
    visual: 'energy',
    accent: '#5dd1b0',
  },
  {
    number: '05',
    title: {
      es: 'Radar industrial',
      en: 'Industrial radar',
    },
    repo: 'pyscan',
    year: '2026',
    terminal: '$ sudo pyscan scan 10.0.8.0/24 --top-ports 100',
    description: {
      es: 'Escáner de protocolos industriales que ve lo que hay realmente conectado a una red de planta: sondas Modbus, IEC-104 y S7comm, escaneo SYN/UDP y captura de tráfico en vivo.',
      en: 'An industrial-protocol scanner that sees what’s actually connected to a plant network: Modbus, IEC-104 and S7comm probes, SYN/UDP scanning and live traffic capture.',
    },
    highlights: ['3 protocolos OT', '74 tests · CI', 'Captura pcap en vivo'],
    stack: ['Python', 'Scapy', 'Textual', 'Hexagonal'],
    url: 'https://github.com/Zoel-Manchon/pyscan',
    visual: 'scan',
    accent: '#6ee787',
  },
  {
    number: '06',
    title: {
      es: 'Acceso blindado',
      en: 'Hardened access',
    },
    repo: 'aegis-zero-trust',
    year: '2026',
    terminal: 'aegis — consola soc · sse:conectado',
    description: {
      es: 'Plataforma de identidad zero-trust con consola de operaciones en vivo: passkeys, rotación de tokens, motor de riesgo y auditoría a prueba de manipulación — más un laboratorio con 10 ataques para ver saltar las defensas. La prueba de que cuando digo "seguro", va en serio.',
      en: 'A zero-trust identity platform with a live operations console: passkeys, token rotation, a risk engine and tamper-evident audit — plus a lab with 10 attacks to watch the defenses fire. Proof that when I say “secure”, I mean it.',
    },
    highlights: ['Passkeys WebAuthn', 'Cadena de auditoría', '10 escenarios de ataque'],
    stack: ['Rust', 'Axum', 'React', 'PostgreSQL', 'Redis'],
    url: 'https://github.com/Zoel-Manchon/aegis-zero-trust',
    visual: 'aegis',
    accent: '#d0432e',
  },
  {
    number: '07',
    title: {
      es: 'Paneles en vivo',
      en: 'Live dashboards',
    },
    repo: 'crypto-dashboard',
    year: '2026',
    featured: true,
    reverse: true,
    terminal: 'crypto-watch — btc/eur · ws:streaming',
    description: {
      es: 'Terminal de mercado en tiempo real: un backend Rust emitiendo precios en vivo por WebSockets a un panel web, con autenticación endurecida y observabilidad completa con Prometheus y Grafana. La misma ingeniería de datos en vivo que piden los sensores, llevada al extremo.',
      en: 'A real-time market terminal: a Rust backend streaming live prices over WebSockets to a web dashboard, with hardened authentication and full Prometheus + Grafana observability. The same live-data engineering sensor fleets demand, pushed to the limit.',
    },
    highlights: ['Streaming WebSocket', 'Argon2id + JWT', 'Prometheus · Grafana'],
    stack: ['Rust', 'Axum', 'Astro', 'React', 'PostgreSQL'],
    url: 'https://github.com/Zoel-Manchon/crypto-dashboard',
    visual: 'market',
    accent: '#c8b6ff',
  },
  {
    number: '08',
    title: {
      es: 'Integridad que se ve',
      en: 'Integrity you can see',
    },
    repo: 'toychain',
    year: '2026',
    reverse: true,
    terminal: 'toychain — minando · dificultad 4 · ws:live',
    description: {
      es: 'Una blockchain educativa en Ruby on Rails construida para hacer la integridad visible — y atribuible. Minado proof-of-work SHA-256 en jobs de fondo (Solid Queue) con barra de progreso en vivo por Turbo Streams sobre Solid Cable, autenticada en el propio WebSocket. Cada bloque registra quién lo minó; un validador de tres capas rompe la cadena en cascada al manipularla. API JSON con tokens Bearer (solo se guardan digests SHA-256) que consume un verificador Python independiente — don\'t trust, verify.',
      en: 'An educational blockchain in Ruby on Rails built to make integrity visible — and attributable. SHA-256 proof-of-work mined in background jobs (Solid Queue) with a live progress bar over Turbo Streams on Solid Cable, authenticated at the WebSocket itself. Every block records who mined it; a three-check validator breaks the chain in cascade on tampering. Bearer-token JSON API (only SHA-256 digests stored) consumed by an independent Python verifier — don\'t trust, verify.',
    },
    highlights: ['PoW SHA-256 en background', 'Tiempo real multiproceso', 'API Bearer + verificador Python', '~40 tests · CI'],
    stack: ['Rails 8', 'Ruby', 'Hotwire', 'Solid Queue', 'SQLite'],
    url: 'https://github.com/Zoel-Manchon/toychain',
    visual: 'chain',
    accent: '#ff5db1',
  },
  {
    number: '09',
    title: {
      es: 'El vigilante de ficheros',
      en: 'The file watchman',
    },
    repo: 'phosphor',
    year: '2026',
    terminal: 'phosphor — guarding · sha-256 · hmac:on',
    description: {
      es: 'Monitor de integridad de ficheros de escritorio (un mini Tripwire) en Rust con interfaz egui ámbar-CRT. Ancla un baseline SHA-256 de una carpeta y la vigila en tiempo real: un hilo notify transmite eventos del sistema de ficheros por un canal mpsc y cualquier cambio salta al instante, con notificación nativa aunque esté minimizada. El propio baseline va firmado con HMAC-SHA256, así que un atacante que edite un fichero y reescriba el baseline no puede forjar una firma válida sin la clave. Reglas de ignore, re-baseline y export JSON/CEF para SIEM.',
      en: 'A desktop file integrity monitor (a mini Tripwire) in Rust with an amber-CRT egui interface. Anchor a SHA-256 baseline of a folder and watch it in real time: a notify thread streams filesystem events over an mpsc channel and any change surfaces instantly, with a native notification even while minimized. The baseline itself is HMAC-SHA256 signed, so an attacker who edits a file and rewrites the baseline can\'t forge a valid signature without the key. Ignore rules, re-baseline and JSON/CEF export for SIEM.',
    },
    highlights: ['Watch en vivo (notify + mpsc)', 'Baseline firmado HMAC', 'GUI nativa egui', 'Export JSON/CEF'],
    stack: ['Rust', 'egui', 'SHA-256', 'HMAC', 'notify'],
    url: 'https://github.com/Zoel-Manchon/phosphor',
    visual: 'phosphor',
    accent: '#ffb033',
  },
];

export const archive: ArchiveEntry[] = [
  {
    name: 'aegisvault',
    description: {
      en: 'Local-first encrypted secrets manager: Python core, native Rust crypto (Argon2id + XChaCha20), Shamir K-of-N recovery — 96 tests.',
      es: 'Gestor de secretos cifrado y local-first: núcleo Python, cripto nativa en Rust (Argon2id + XChaCha20), recuperación Shamir K-de-N — 96 tests.',
    },
    tags: ['Python', 'Rust', 'Cryptography'],
    url: 'https://github.com/Zoel-Manchon/aegisvault',
  },
  {
    name: 'quantlab',
    description: {
      en: 'Backtesting engine on a full DDD trading domain — CLI, TUI and native GUI over one core, 54 tests in CI.',
      es: 'Motor de backtesting sobre un dominio de trading DDD completo — CLI, TUI y GUI nativa sobre un mismo núcleo, 54 tests en CI.',
    },
    tags: ['Python', 'DDD', 'PySide6'],
    url: 'https://github.com/Zoel-Manchon/quantlab',
  },
  {
    name: 'auth-lab',
    description: {
      en: 'NestJS zero-trust auth: JWT rotation, TOTP MFA, GeoIP impossible-travel — with an attack simulator that CI-verifies the defenses.',
      es: 'Autenticación zero-trust en NestJS: rotación JWT, MFA TOTP, GeoIP impossible-travel — con un simulador de ataques que verifica las defensas en CI.',
    },
    tags: ['NestJS', 'TypeScript', 'Vault'],
    url: 'https://github.com/Zoel-Manchon/auth-lab',
  },
  {
    name: 'arch-hardened-server',
    description: {
      en: 'Security-focused Arch Linux server: system hardening and reduced attack surface, documented end to end.',
      es: 'Servidor Arch Linux orientado a seguridad: hardening del sistema y superficie de ataque reducida, documentado de principio a fin.',
    },
    tags: ['Linux', 'Hardening'],
    url: 'https://github.com/Zoel-Manchon/arch-linux-hardened-server',
  },
  {
    name: 'api-iot',
    description: {
      en: 'End-to-end IoT monitor: ESP32 + DHT22 firmware publishing over MQTT to a Node.js backend and a real-time React dashboard.',
      es: 'Monitor IoT de extremo a extremo: firmware ESP32 + DHT22 publicando por MQTT a un backend Node.js y un panel React en tiempo real.',
    },
    tags: ['ESP32', 'MQTT', 'React'],
    url: 'https://github.com/Zoel-Manchon/api_iot',
  },
  {
    name: 'smartwatch-lorawan',
    description: {
      en: 'Wearable IoT project with embedded sensors and remote monitoring over LoRaWAN.',
      es: 'Proyecto IoT wearable con sensores embebidos y monitorización remota sobre LoRaWAN.',
    },
    tags: ['ESP32', 'LoRaWAN', 'Embedded'],
    url: 'https://github.com/Zoel-Manchon/Proyecto_IoT_J3_SmartWatch_LoRaWAN',
  },
  {
    name: 'snake-hd',
    description: {
      en: 'Nokia-era classic rebuilt as a polished arcade game — with a SHA-256 tamper-evident leaderboard on a Rust/Axum service.',
      es: 'El clásico de la era Nokia reconstruido como arcade pulido — con un marcador a prueba de manipulación (SHA-256) sobre un servicio Rust/Axum.',
    },
    tags: ['Python', 'Pygame', 'Rust'],
    url: 'https://github.com/Zoel-Manchon/snake-hd',
  },
];
