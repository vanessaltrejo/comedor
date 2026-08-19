/**
 * Contenido del Informe Anual que tiene forma de lista. La prosa de cada
 * sección vive en su componente; aquí solo lo que se repite en bucle,
 * para que actualizar el informe del año siguiente no implique tocar JSX.
 */

export interface ComedorAddress {
  name: string;
  address: string;
}

export const INFORME_COMEDORES: ComedorAddress[] = [
  {
    name: "Comedor Escobedo",
    address: "Privada Grafito No. 301 Col. Pedregal del Topo Chico, Escobedo, N.L. 66061.",
  },
  {
    name: "Comedor García",
    address: "Colima No. 101 Col. Alfonso Martínez Domínguez, García, N.L. 66006.",
  },
  {
    name: "Comedor Guadalupe",
    address: "Brígida García No. 115 Sur Col. Jardines de Casa Blanca, Guadalupe, N.L. 67116.",
  },
  {
    name: "Comedor Juárez",
    address:
      "Centro Comunitario Arboledas de los Naranjos, Lomas de Francia S/N, Juárez, N.L. 67280.",
  },
];

export interface DemographicBand {
  label: string;
  percentage: number;
  barClass: string;
  dotClass: string;
}

export const INFORME_DEMOGRAPHICS: DemographicBand[] = [
  { label: "0-18 años", percentage: 43, barClass: "bg-blue-400", dotClass: "bg-blue-400" },
  { label: "19-69 años", percentage: 51, barClass: "bg-orange-400", dotClass: "bg-orange-400" },
  { label: "70+ años", percentage: 6, barClass: "bg-green-400", dotClass: "bg-green-400" },
];

export interface InformeEvent {
  icon: string;
  iconClasses: string;
  title: string;
  description: string;
  tag: string;
}

export const INFORME_EVENTS: InformeEvent[] = [
  {
    icon: "fa-ticket-alt",
    iconClasses: "bg-yellow-100 text-yellow-600",
    title: "Loterías Benéficas",
    description:
      '"Chalupa y Buenas" - En cada plato que servimos hay una historia de lucha y esperanza. Realizadas exitosamente en Abril y Octubre.',
    tag: "Eventos de Recaudación",
  },
  {
    icon: "fa-running",
    iconClasses: "bg-orange-100 text-orange-600",
    title: "Carrera Corre y Alimenta",
    description:
      "Salida en Parque Fundidora. Formato de 5K y 10K. Patrocinado por: Power, Krono, Fafl, Frisa. Un evento para toda la familia.",
    tag: "Evento Deportivo y Solidario",
  },
  {
    icon: "fa-birthday-cake",
    iconClasses: "bg-pink-100 text-pink-600",
    title: "Festividades Comunitarias",
    description:
      'Celebración del Día de las Madres "Felicidades Mamás", Día del Niño (con pastel y bolsitas), Posadas Navideñas y Huellas de Solidaridad.',
    tag: "Integración Comunitaria",
  },
  {
    icon: "fa-hands-helping",
    iconClasses: "bg-blue-100 text-blue-600",
    title: "Campañas y Servicio",
    description:
      'Participaciones como "Clamor en el Barrio" y alianzas como la Semana con Sentido Humano y Servicio Social del Tec de Monterrey.',
    tag: "Alianzas Institucionales",
  },
];

export interface MaintenanceGroup {
  comedor: string;
  tasks: string[];
}

export const INFORME_MAINTENANCE: MaintenanceGroup[] = [
  {
    comedor: "Comedor García",
    tasks: [
      "Reparación de iluminación externa",
      "Pintura y reparación de grietas",
      "Mantenimiento de refrigeradores y drenaje",
    ],
  },
  {
    comedor: "Comedor Guadalupe",
    tasks: [
      "Corte de césped y arreglo de malla",
      "Mantenimiento de refrigeradores",
      "Fumigación, sanitización e impermeabilización",
    ],
  },
  {
    comedor: "Comedor Escobedo",
    tasks: [
      "Pintura exterior y mantenimiento de red eléctrica",
      "Corte de césped",
      "Mantenimiento de refrigeradores y drenaje",
    ],
  },
  {
    comedor: "Comedor Juárez",
    tasks: ["Mantenimiento de refrigeradores y congeladores", "Mantenimiento a estufones"],
  },
];

export interface ExpenseLine {
  label: string;
  percentageLabel: string;
  /** Ancho de la barra: el diseño original redondea 0.15% a 1% para que sea visible. */
  barWidth: string;
  barClass: string;
}

export const INFORME_EXPENSES: ExpenseLine[] = [
  {
    label: "Gastos de Operación",
    percentageLabel: "73.0%",
    barWidth: "73%",
    barClass: "bg-purple-600",
  },
  {
    label: "Sueldos y Salarios",
    percentageLabel: "22.85%",
    barWidth: "22.85%",
    barClass: "bg-orange-500",
  },
  {
    label: "IMSS, RCV e INFONAVIT",
    percentageLabel: "4.0%",
    barWidth: "4%",
    barClass: "bg-yellow-500",
  },
  {
    label: "Gasto Administrativo",
    percentageLabel: "0.15%",
    barWidth: "1%",
    barClass: "bg-gray-400",
  },
];

export interface FundingSource {
  percentage: string;
  label: string;
}

export const INFORME_FUNDING_SOURCES: FundingSource[] = [
  { percentage: "26%", label: "Fundaciones" },
  { percentage: "21%", label: "Empresas" },
  { percentage: "21%", label: "En Especie" },
  { percentage: "16%", label: "Personas Físicas" },
  { percentage: "15%", label: "Gobierno" },
];

export const INFORME_DONORS: string[] = [
  "Sigma",
  "Carrocera San Roberto",
  "City Club",
  "Grupo Jaktur",
  "Pollo & Co",
  "Fundación Jesús M. Montemayor",
  "Fundación Treviño Elizondo",
  "Secretaría de Igualdad e Inclusión",
  "Energex",
  "Tortillas San Juan",
  "Viakable",
  "Arca Continental",
  "Fundación Xignux",
  "Apostolado de la Cruz",
  "Fundación Frisa",
];
