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
  terminal: LocalizedText;
  description: LocalizedText;
  highlights: LocalizedText[];
  stack: string[];
  url: string;
  visual: 'aegis' | 'vault' | 'scan' | 'market' | 'weather' | 'energy' | 'sentinel' | 'emberwall' | 'chain' | 'phosphor' | 'agri' | 'maat' | 'keystone' | 'ferrogate' | 'psychron' | 'honeytrap';
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
  'agrisentinel ▸ replay detectado · frame rechazado · soc alert',
  'maat ▸ buffer ≠ disco · :w bloqueado · audit emitted',
  'psychron ▸ backlog reinyectado · 92 min · forma intacta',
  'honeytrap ▸ 5 pares de credenciales · una sesión · brute_force',
  'honeytrap ▸ coap /.well-known/core · respuesta suprimida · ×4.5',
];

export const services: Service[] = [
  {
    number: '01',
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
    terminal: { en: 'emberwall — boot · sentinel armed · mqtt tls', es: 'emberwall — boot · sentinel armado · mqtt tls' },
    description: {
      es: 'Una distribución Linux entera compilada desde cero con Buildroot: su propio toolchain, kernel endurecido y un userland inmutable de pocos MB — sin gestor de paquetes, con PIE/RELRO/SSP, KASLR, LSMs lockdown+yama y firewall nftables default-deny. Lleva sentinel, una herramienta nativa en Rust que fusiona mi escáner pyscan y el núcleo cripto de AegisVault en un único binario estático: escaneo TCP/UDP con reconocimiento OT/ICS más un vault argon2id + XChaCha20. Diseñada para correr como pasarela MQTT segura en el borde.',
      en: 'A whole Linux distribution built from scratch with Buildroot: its own toolchain, a hardened kernel and a few-MB immutable userland — no package manager, PIE/RELRO/SSP, KASLR, lockdown+yama LSMs and an nftables default-deny firewall. It ships sentinel, a native Rust tool fusing my pyscan scanner and the AegisVault crypto core into a single static binary: TCP/UDP scanning with OT/ICS recognition plus an argon2id + XChaCha20 vault. Designed to run as the secure MQTT edge gateway.',
    },
    highlights: [
      { en: 'Buildroot from scratch', es: 'Buildroot desde cero' },
      { en: 'Hardened kernel + userland', es: 'Kernel + userland endurecidos' },
      { en: 'sentinel: Rust scan + vault', es: 'sentinel: scan + vault en Rust' },
      { en: 'x86-64 and ARM64', es: 'x86-64 y ARM64' },
    ],
    stack: ['Buildroot', 'Rust', 'C', 'Linux', 'nftables'],
    url: 'https://github.com/Zoel-Manchon/emberwall',
    visual: 'emberwall',
    accent: '#e8663d',
  },
  {
    number: '02',
    title: {
      es: 'Telemetría que no confía',
      en: 'Telemetry that trusts nothing',
    },
    repo: 'agrisentinel',
    year: '2026',
    terminal: { en: 'agrisentinel — signed frame · replay rejected', es: 'agrisentinel — frame firmado · replay rechazado' },
    description: {
      es: 'Laboratorio IoT rural que trata la propia red de sensores como superficie de ataque. Cada nodo firma su telemetría con HMAC, secuencia y nonce; el gateway valida cada frame y ejecuta detección de rango, replay, caducidad y frecuencia antes de publicar. Los datos limpios y las alertas viajan por canales MQTT separados hacia dos dashboards Grafana: agronomía y SOC.',
      en: 'A rural IoT lab that treats the sensor network itself as an attack surface. Every node signs telemetry with HMAC, sequence and nonce; the gateway validates each frame and runs range, replay, stale and rate checks before publishing. Clean data and security alerts travel over separate MQTT streams into two Grafana dashboards: agronomy and SOC.',
    },
    highlights: [
      { en: 'HMAC + anti-replay', es: 'HMAC + anti-replay' },
      { en: '4 anomaly detectors', es: '4 detectores de anomalía' },
      { en: 'Agronomy + SOC', es: 'Agronomía + SOC' },
      { en: '33 tests · CI', es: '33 tests · CI' },
    ],
    stack: ['Python', 'MQTT', 'InfluxDB', 'Grafana', 'Hexagonal'],
    url: 'https://github.com/Zoel-Manchon/agrisentinel',
    visual: 'agri',
    accent: '#d59a45',
  },
  {
    number: '03',
    title: {
      es: 'Centinela de espacios',
      en: 'Space sentinel',
    },
    repo: 'sentinel-node',
    year: '2026',
    terminal: { en: 'sentinel — room-1 · presence:yes · ml:on-device', es: 'sentinel — sala-1 · presencia:sí · ml:on-device' },
    description: {
      es: 'Nodo centinela multisensor con ML en el borde: calidad de aire, presencia mmWave, eventos acústicos con TinyML y visión con ESP32-CAM. Los modelos corren en el dispositivo y solo publican el veredicto — ni audio ni imágenes crudas entran en la telemetría. Un espacio simulado coherente alimenta todos los canales y las funciones de fitness vigilan la arquitectura.',
      en: 'A multi-sensor sentinel node with ML at the edge: air quality, mmWave presence, acoustic events with TinyML and vision with ESP32-CAM. Models run on-device and publish only the verdict — raw audio and images never enter the telemetry. A coherent simulated space drives every channel and fitness functions guard the architecture.',
    },
    highlights: [
      { en: 'On-device ML', es: 'ML on-device' },
      { en: 'Privacy by design', es: 'Privacidad por diseño' },
      { en: '4 sensor channels', es: '4 canales de sensor' },
      { en: '45 tests + fitness', es: '45 tests + fitness' },
    ],
    stack: ['ESP32-S3', 'TinyML', 'MQTT', 'InfluxDB', 'Hexagonal'],
    url: 'https://github.com/Zoel-Manchon/sentinel-node',
    visual: 'sentinel',
    accent: '#5b9dff',
  },
  {
    number: '04',
    title: {
      es: 'Energía en tiempo real',
      en: 'Real-time energy',
    },
    repo: 'eastron-lorawan',
    year: '2026',
    terminal: { en: 'telemetry — sdm230 · live uplink', es: 'telemetría — sdm230 · uplink en vivo' },
    description: {
      es: 'Monitorización eléctrica sobre LoRaWAN: el contador emite, la pila de telemetría procesa y el consumo aparece en paneles Grafana con histórico de series temporales. Es la referencia más directa para convertir una instalación física en un servicio de observabilidad energética.',
      en: 'Electrical monitoring over LoRaWAN: the meter transmits, the telemetry stack processes and consumption lands on Grafana dashboards with time-series history. It is the most direct reference for turning a physical installation into an energy-observability service.',
    },
    highlights: [
      { en: 'LoRaWAN uplinks', es: 'Uplinks LoRaWAN' },
      { en: 'Time-series history', es: 'Series temporales' },
      { en: 'Grafana dashboards', es: 'Paneles Grafana' },
    ],
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
    terminal: { en: '$ sudo pyscan scan 10.0.8.0/24 --top-ports 100', es: '$ sudo pyscan scan 10.0.8.0/24 --top-ports 100' },
    description: {
      es: 'Escáner modular de redes y protocolos industriales que identifica Modbus, IEC-104 y S7comm, descubre hosts, detecta servicios y puede capturar tráfico en vivo. La arquitectura hexagonal permite añadir nuevas estrategias de escaneo sin contaminar el núcleo.',
      en: 'A modular network and industrial-protocol scanner that identifies Modbus, IEC-104 and S7comm, discovers hosts, detects services and can capture live traffic. Its hexagonal architecture lets new scan strategies drop in without contaminating the core.',
    },
    highlights: [
      { en: '3 OT protocols', es: '3 protocolos OT' },
      { en: '74 tests · CI', es: '74 tests · CI' },
      { en: 'Live pcap capture', es: 'Captura pcap en vivo' },
    ],
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
    terminal: { en: 'aegis — soc console · sse:connected', es: 'aegis — consola soc · sse:conectado' },
    description: {
      es: 'Plataforma de identidad zero-trust con consola de operaciones en vivo: passkeys, rotación de tokens, motor de riesgo y auditoría encadenada — más un laboratorio con diez ataques para observar cómo responden las defensas.',
      en: 'A zero-trust identity platform with a live operations console: passkeys, token rotation, a risk engine and hash-chained audit — plus a ten-scenario attack range for watching the defenses respond.',
    },
    highlights: [
      { en: 'WebAuthn passkeys', es: 'Passkeys WebAuthn' },
      { en: 'Hash-chained audit', es: 'Cadena de auditoría' },
      { en: '10 attack scenarios', es: '10 escenarios de ataque' },
    ],
    stack: ['Rust', 'Axum', 'React', 'PostgreSQL', 'Redis'],
    url: 'https://github.com/Zoel-Manchon/aegis-zero-trust',
    visual: 'aegis',
    accent: '#d0432e',
  },
  {
    number: '07',
    title: {
      es: 'El vigilante de ficheros',
      en: 'The file watchman',
    },
    repo: 'phosphor',
    year: '2026',
    terminal: { en: 'phosphor — guarding · sha-256 · hmac:on', es: 'phosphor — vigilando · sha-256 · hmac:on' },
    description: {
      es: 'Monitor de integridad de ficheros de escritorio en Rust con interfaz egui ámbar-CRT. Ancla un baseline SHA-256 firmado con HMAC y vigila una carpeta en tiempo real; cualquier modificación, alta o borrado aparece al instante, con notificación nativa y exportación JSON/CEF para SIEM.',
      en: 'A desktop file-integrity monitor in Rust with an amber-CRT egui interface. It anchors an HMAC-signed SHA-256 baseline and watches a folder in real time; modifications, additions and deletions surface instantly, with native notifications and JSON/CEF export for SIEM.',
    },
    highlights: [
      { en: 'Live filesystem watch', es: 'Watch en vivo' },
      { en: 'HMAC-signed baseline', es: 'Baseline firmado HMAC' },
      { en: 'Native egui GUI', es: 'GUI nativa egui' },
      { en: 'JSON/CEF export', es: 'Export JSON/CEF' },
    ],
    stack: ['Rust', 'egui', 'SHA-256', 'HMAC', 'notify'],
    url: 'https://github.com/Zoel-Manchon/phosphor',
    visual: 'phosphor',
    accent: '#ffb033',
  },
  {
    number: '08',
    title: {
      es: 'Paneles en vivo',
      en: 'Live dashboards',
    },
    repo: 'crypto-dashboard',
    year: '2026',
    featured: true,
    reverse: true,
    terminal: { en: 'crypto-watch — btc/eur · ws:streaming', es: 'crypto-watch — btc/eur · ws:streaming' },
    description: {
      es: 'Terminal de mercado en tiempo real: backend Rust, precios en vivo por WebSockets, persistencia PostgreSQL, autenticación endurecida y observabilidad con Prometheus y Grafana. Demuestra la misma ingeniería de eventos y telemetría que exigen las flotas de sensores, aplicada a un dominio distinto.',
      en: 'A real-time market terminal: Rust backend, live prices over WebSockets, PostgreSQL persistence, hardened authentication and Prometheus/Grafana observability. It demonstrates the same event and telemetry engineering sensor fleets demand, applied to a different domain.',
    },
    highlights: [
      { en: 'WebSocket streaming', es: 'Streaming WebSocket' },
      { en: 'Argon2id + JWT', es: 'Argon2id + JWT' },
      { en: 'Prometheus · Grafana', es: 'Prometheus · Grafana' },
    ],
    stack: ['Rust', 'Axum', 'Astro', 'React', 'PostgreSQL'],
    url: 'https://github.com/Zoel-Manchon/crypto-dashboard',
    visual: 'market',
    accent: '#c8b6ff',
  },
  {
    number: '09',
    title: {
      es: 'Editar sin sobrescribir a ciegas',
      en: 'Edit without overwriting blind',
    },
    repo: 'maat',
    year: '2026',
    featured: true,
    terminal: { en: 'maat — buffer ≠ disk · write blocked', es: 'maat — buffer ≠ disco · guardado bloqueado' },
    description: {
      es: 'Editor modal retro para terminal escrito en Rust. Maat toma una huella SHA-256 al abrir el archivo, comprueba el disco antes de guardar, bloquea sobrescrituras conflictivas, escribe de forma atómica y emite eventos JSON/CEF. Incluye búsqueda incremental, undo/redo, registros de línea y verificación no interactiva para scripts y appliances.',
      en: 'A retro modal terminal editor written in Rust. Maat fingerprints the file on open, checks the disk before every save, blocks conflicting overwrites, writes atomically and emits JSON/CEF events. It also includes incremental search, undo/redo, line registers and non-interactive verification for scripts and appliances.',
    },
    highlights: [
      { en: '4 modal modes', es: '4 modos modales' },
      { en: 'SHA-256 + :check', es: 'SHA-256 + :check' },
      { en: 'Atomic saves', es: 'Guardado atómico' },
      { en: 'JSON/CEF audit', es: 'Auditoría JSON/CEF' },
    ],
    stack: ['Rust', 'ratatui', 'crossterm', 'SHA-256', 'SIEM'],
    url: 'https://github.com/Zoel-Manchon/maat',
    visual: 'maat',
    accent: '#b24a63',
  },
  {
    number: '10',
    title: {
      es: 'Identidad de flota, no tokens copiables',
      en: 'Fleet identity, not copyable tokens',
    },
    repo: 'keystone',
    year: '2026',
    featured: true,
    terminal: { en: 'keystone — cohort 25% · rollback armed', es: 'keystone — cohorte 25% · rollback armado' },
    description: {
      es: 'Plano de control de identidad criptográfica y OTA para flotas IoT. Keystone no recoge telemetría: emite y revoca certificados X.509 desde su propia CA, limita el enrolamiento a tokens de un solo uso, exige prueba de posesión para rotar, firma el firmware con Ed25519 y despliega por cohortes con vuelta atrás. Hexagonal con las capas como módulos Maven, así que la dirección de dependencias la impone el compilador.',
      en: 'A cryptographic identity and OTA control plane for IoT fleets. Keystone collects no telemetry: it issues and revokes X.509 certificates from its own CA, gates enrolment behind single-use tokens, demands proof of possession to rotate, signs firmware with Ed25519 and rolls out in cohorts with a way back. Hexagonal, with the layers as separate Maven modules so the compiler enforces the dependency direction.',
    },
    highlights: [
      { en: 'Own root + issuing CA', es: 'CA raíz + emisora propias' },
      { en: 'Proof-of-possession rotation', es: 'Rotación con prueba de posesión' },
      { en: 'Ed25519-signed firmware', es: 'Firmware firmado Ed25519' },
      { en: 'Hash-chained audit log', es: 'Auditoría encadenada' },
    ],
    stack: ['Java 25', 'Spring Boot 4', 'PostgreSQL', 'Bouncy Castle', 'MQTT 5 mTLS'],
    url: 'https://github.com/Zoel-Manchon/keystone',
    visual: 'keystone',
    accent: '#7c9cff',
  },
  {
    number: '11',
    title: {
      es: 'El aislamiento lo impone el motor',
      en: 'Isolation enforced by the engine',
    },
    repo: 'ferrogate',
    year: '2026',
    featured: true,
    terminal: { en: 'ferrogate — cross-tenant query · 0 rows', es: 'ferrogate — consulta entre tenants · 0 filas' },
    description: {
      es: 'Telemetría industrial multi-tenant donde la frontera entre clientes la impone PostgreSQL con FORCE ROW LEVEL SECURITY, no acordarse de escribir un WHERE: una consulta que olvida fijar el tenant devuelve cero filas, nunca las de otro. Los gateways hablan Modbus, firman cada envoltorio en el borde y publican por MQTT sobre mTLS; el broker queda fuera de la base de confianza.',
      en: 'Multi-tenant industrial telemetry where the boundary between customers is enforced by PostgreSQL with FORCE ROW LEVEL SECURITY rather than by remembering to write a WHERE clause: a query that forgets to set the tenant returns zero rows, never somebody else’s. Gateways speak Modbus, sign every envelope at the edge and publish over MQTT on mTLS — the broker is not in the trust base.',
    },
    highlights: [
      { en: 'RLS FORCE per transaction', es: 'RLS FORCE por transacción' },
      { en: 'Signed at the edge', es: 'Firmado en el borde' },
      { en: '4 bounded contexts', es: '4 contextos acotados' },
      { en: 'Import contracts in CI', es: 'Contratos de imports en CI' },
    ],
    stack: ['Python', 'PostgreSQL 17', 'InfluxDB', 'Mosquitto', 'Grafana'],
    url: 'https://github.com/Zoel-Manchon/ferrogate',
    visual: 'ferrogate',
    accent: '#4fb3a5',
  },
  {
    number: '12',
    title: {
      es: 'El sensor no tiene reloj',
      en: 'The sensor has no clock',
    },
    repo: 'psychron',
    year: '2026',
    featured: true,
    terminal: { en: 'psychron — backlog replayed · shape intact', es: 'psychron — backlog reinyectado · forma intacta' },
    description: {
      es: 'Estación ambiental de extremo a extremo. El nodo no sabe qué hora es: solo cuánto lleva encendido, y tras un corte vuelve a contar desde cero. Por eso el contrato de datos lleva el uptime, siempre válido, junto a un reloj de pared que puede ser nulo — la ingesta ancla cada arranque una vez y reconstruye el resto. Un backlog reinyectado conserva su forma en lugar de aplastarse contra el instante de llegada. Todo lo demás sale de proteger ese registro: mTLS de extremo a extremo sin escucha en claro a la que caer, identidad de lectura por (dispositivo, arranque, secuencia) y huecos deducidos de los datos, nunca interpolados.',
      en: 'An end-to-end environmental station. The node does not know the time — only how long it has been running, and after a power cut it counts from zero again. So the wire contract carries uptime, always valid, alongside a wall clock that may legitimately be null: ingestion anchors each boot once and reconstructs the rest. A replayed backlog keeps its shape instead of collapsing onto its arrival instant. Everything else follows from protecting that record: mutual TLS end to end with no plaintext listener to fall back to, (device, boot, seq) as the identity of a reading, and gaps found from the data rather than interpolated away.',
    },
    highlights: [
      { en: 'Boot-anchored timestamps', es: 'Sellado por ancla de arranque' },
      { en: 'mTLS, no plaintext port', es: 'mTLS, sin puerto en claro' },
      { en: 'Digest-verified OTA', es: 'OTA verificada por hash' },
      { en: 'Gaps drawn as gaps', es: 'Huecos dibujados como huecos' },
    ],
    stack: ['ESP32', 'Arduino C++', 'FastAPI', 'TimescaleDB', 'MQTT mTLS'],
    url: 'https://github.com/Zoel-Manchon/psychron',
    visual: 'psychron',
    accent: '#4ea8c4',
  },
  {
    number: '13',
    title: {
      es: 'Una trampa que se niega a ser un arma',
      en: 'A trap that refuses to become a weapon',
    },
    repo: 'honeytrap',
    year: '2026',
    featured: true,
    terminal: { en: 'honeytrap — reply suppressed · factor 4.5', es: 'honeytrap — respuesta suprimida · factor 4.5' },
    description: {
      es: 'Honeypot MQTT/CoAP de baja interacción que emula dispositivos IoT creíbles para capturar y clasificar lo que atraen: credenciales por defecto, suscripciones comodín, enumeración CoAP y paquetes rotos a propósito. El veredicto vive en la sesión, no en el paquete — tres CONNECT aislados no son fuerza bruta hasta que se ven juntos. Y sobre UDP la dirección de origen no está verificada, así que responder convertiría el señuelo en un reflector de DDoS contra un tercero: un techo de amplificación, un cubo de fichas por origen y el rechazo de Proxy-Uri deciden si la respuesta sale. La captura nunca se pierde: el intento es la señal.',
      en: 'A low-interaction MQTT/CoAP honeypot that emulates believable IoT devices to capture and classify what they attract: default credentials, wildcard harvesting, CoAP enumeration and deliberately malformed packets. The verdict belongs to the session rather than the packet — three isolated CONNECTs are not brute force until you see them together. And over UDP the source address is unverified, so answering would turn the decoy into a DDoS reflector aimed at a third party: an amplification ceiling, a per-source token bucket and a refused Proxy-Uri decide whether a reply goes out. The capture is never lost — the attempt is the signal.',
    },
    highlights: [
      { en: 'Verdicts at session level', es: 'Veredictos a nivel de sesión' },
      { en: 'Refuses to be a reflector', es: 'Se niega a ser reflector' },
      { en: 'Committed pcap evidence', es: 'Evidencia pcap commiteada' },
      { en: 'Write path segmented', es: 'Ruta de escritura segmentada' },
    ],
    stack: ['Python', 'asyncio', 'MQTT / CoAP', 'InfluxDB', 'Grafana'],
    url: 'https://github.com/Zoel-Manchon/honeytrap',
    visual: 'honeytrap',
    accent: '#d08a3c',
  },
];

export const archive: ArchiveEntry[] = [
  {
    name: 'aegisvault',
    description: {
      en: 'Local-first encrypted secrets manager: Python core, native Rust crypto, Shamir K-of-N recovery, TOTP and a tamper-evident audit chain.',
      es: 'Gestor de secretos cifrado y local-first: núcleo Python, cripto nativa en Rust, recuperación Shamir K-de-N, TOTP y auditoría encadenada.',
    },
    tags: ['Python', 'Rust', 'Cryptography'],
    url: 'https://github.com/Zoel-Manchon/aegisvault',
  },
  {
    name: 'quantlab',
    description: {
      en: 'Backtesting engine on a DDD trading domain — CLI, TUI and native GUI over one core.',
      es: 'Motor de backtesting sobre un dominio de trading DDD — CLI, TUI y GUI nativa sobre un mismo núcleo.',
    },
    tags: ['Python', 'DDD', 'PySide6'],
    url: 'https://github.com/Zoel-Manchon/quantlab',
  },
  {
    name: 'auth-lab',
    description: {
      en: 'NestJS zero-trust authentication with JWT rotation, TOTP MFA, GeoIP impossible-travel and a CI-verified attack simulator.',
      es: 'Autenticación zero-trust en NestJS con rotación JWT, MFA TOTP, GeoIP impossible-travel y simulador de ataques verificado en CI.',
    },
    tags: ['NestJS', 'TypeScript', 'Vault'],
    url: 'https://github.com/Zoel-Manchon/auth-lab',
  },
  {
    name: 'solar-weather-station',
    description: {
      en: 'Simulation-first, solar-powered ESP32 weather station with LoRa, MQTT, Node-RED, InfluxDB and Grafana.',
      es: 'Estación meteorológica ESP32 solar y simulation-first con LoRa, MQTT, Node-RED, InfluxDB y Grafana.',
    },
    tags: ['Python', 'ESP32', 'LoRa'],
    url: 'https://github.com/Zoel-Manchon/solar-weather-station',
  },
  {
    name: 'toychain',
    description: {
      en: 'Educational Rails blockchain with background proof-of-work, attributed tampering and independent Python verification.',
      es: 'Blockchain educativa en Rails con proof-of-work en background, manipulación atribuida y verificación independiente en Python.',
    },
    tags: ['Ruby', 'Rails', 'SHA-256'],
    url: 'https://github.com/Zoel-Manchon/toychain',
  },
  {
    name: 'arch-linux-hardened-server',
    description: {
      en: 'Security-focused Arch Linux server with nftables, SSH hardening and Fail2Ban, documented end to end.',
      es: 'Servidor Arch Linux orientado a seguridad con nftables, hardening SSH y Fail2Ban, documentado de principio a fin.',
    },
    tags: ['Linux', 'Hardening'],
    url: 'https://github.com/Zoel-Manchon/arch-linux-hardened-server',
  },
  {
    name: 'api_iot',
    description: {
      en: 'End-to-end IoT monitor: ESP32 and DHT22 publishing over MQTT to a Node.js backend and React dashboard.',
      es: 'Monitor IoT de extremo a extremo: ESP32 y DHT22 publicando por MQTT a un backend Node.js y un panel React.',
    },
    tags: ['ESP32', 'MQTT', 'React'],
    url: 'https://github.com/Zoel-Manchon/api_iot',
  },
  {
    name: 'Proyecto_IoT_J3_SmartWatch_LoRaWAN',
    description: {
      en: 'End-to-end LoRaWAN smartwatch platform with embedded sensors, TTN integration and real-time dashboards.',
      es: 'Plataforma smartwatch LoRaWAN con sensores embebidos, integración TTN y dashboards en tiempo real.',
    },
    tags: ['ESP32', 'LoRaWAN', 'Embedded'],
    url: 'https://github.com/Zoel-Manchon/Proyecto_IoT_J3_SmartWatch_LoRaWAN',
  },
  {
    name: 'snake-hd',
    description: {
      en: 'Polished Pygame arcade game with custom pixel art and a SHA-256 tamper-evident leaderboard backed by Rust/Axum.',
      es: 'Arcade pulido en Pygame con pixel art propio y un marcador SHA-256 a prueba de manipulación sobre Rust/Axum.',
    },
    tags: ['Python', 'Pygame', 'Rust'],
    url: 'https://github.com/Zoel-Manchon/snake-hd',
  },
];
