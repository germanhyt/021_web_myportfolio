import { IProject } from "@/core/types/project";
import { FiExternalLink, FiGithub } from "react-icons/fi";

interface PortfolioProjectMeta {
  id: number;
  title: string;
  category: string;
  publishDate: string;
  visibility: "Publico" | "Privado";
  objective: string;
  summary: string;
  description: string[];
  techs: string[];
  cover: string;
  logo?: string;
  repositoryLabel: string;
  repositoryUrl: string;
  productionUrl?: string;
  testingUrl?: string;
}

const buildProject = (meta: PortfolioProjectMeta): IProject => {
  const primaryLink = meta.productionUrl || meta.repositoryUrl;

  return {
    id: meta.id,
    title: meta.title,
    category: meta.category,
    img: meta.cover,
    ProjectHeader: {
      title: meta.title,
      publishDate: meta.publishDate,
      tags: `${meta.category} | ${meta.visibility}`,
      link: primaryLink,
    },
    ProjectImages: [
      { id: 1, title: "Vista principal", img: meta.cover },
      { id: 2, title: "Identidad visual", img: meta.logo || meta.cover },
      { id: 3, title: "Referencia del proyecto", img: meta.cover },
    ],
    ProjectInfo: {
      ClientHeading: "Resumen Ejecutivo",
      CompanyInfo: [
        { id: 1, title: "Repositorio", details: meta.repositoryLabel },
        {
          id: 2,
          title: "Produccion",
          details: meta.productionUrl || "No registrada para este proyecto",
        },
        {
          id: 3,
          title: "Pruebas",
          details: meta.testingUrl || "No registrada para este proyecto",
        },
        { id: 4, title: "Visibilidad", details: meta.visibility },
      ],
      ObjectivesHeading: "Objetivo del Proyecto",
      ObjectivesDetails: meta.objective,
      Technologies: [{ title: "Tecnologias usadas", techs: meta.techs }],
      ProjectDetailsHeading: "Descripcion Profesional",
      ProjectDetails: [
        { id: 1, details: meta.summary },
        ...meta.description.map((item, index) => ({
          id: index + 2,
          details: item,
        })),
      ],
      SocialSharingHeading: "Enlaces",
      SocialSharing: [
        { id: 1, name: "GitHub", icon: <FiGithub />, url: meta.repositoryUrl },
        {
          id: 2,
          name: "Produccion",
          icon: <FiExternalLink />,
          url: meta.productionUrl || meta.repositoryUrl,
        },
        {
          id: 3,
          name: "Pruebas",
          icon: <FiExternalLink />,
          url: meta.testingUrl || meta.repositoryUrl,
        },
      ],
    },
  };
};

const curatedProjects: PortfolioProjectMeta[] = [

  {
    id: 10,
    title: "Website Diverty",
    category: "Web",
    publishDate: "Abril 2026",
    visibility: "Publico",
    objective:
      "Presentar los servicios de Diverty con una web comercial de lectura clara y experiencia premium.",
    summary:
      "Website corporativo implementado en stack moderno con foco en conversion, secciones de valor y contacto.",
    description: [
      "Se usa composicion de componentes para acelerar mantenimiento y nuevas iteraciones.",
      "La URL desplegada sirve como referencia de produccion actual.",
    ],
    techs: ["Astro", "React", "TypeScript", "TailwindCSS"],
    cover:
      "https://raw.githubusercontent.com/germanhyt/softwebsite-diverty-prod-001/master/src/assets/hero.png",
    repositoryLabel: "softwebsite-diverty-prod-001",
    repositoryUrl: "https://github.com/germanhyt/softwebsite-diverty-prod-001",
    productionUrl: "https://softwebsite-diverty-prod-001.vercel.app",
  },
  {
    id: 11,
    title: "Landing Haz La Tarea",
    category: "Web",
    publishDate: "Enero 2026",
    visibility: "Publico",
    objective:
      "Impulsar conversion comercial en una landing de una sola pagina con propuesta de valor y secciones informativas.",
    summary:
      "El README define una landing estatica con metodologia, servicios, testimonios, FAQ y contacto como ejes de contenido.",
    description: [
      "La arquitectura de secciones facilita edicion de contenido sin afectar flujo principal de conversion.",
      "El proyecto se encuentra activo en entorno publico y estable.",
    ],
    techs: ["Astro", "React", "TypeScript", "TailwindCSS"],
    cover:
      "https://raw.githubusercontent.com/germanhyt/softlanding-hazlatarea-prod001/master/public/images/hero-banner-desktop.png",
    repositoryLabel: "softlanding-hazlatarea-prod001",
    repositoryUrl: "https://github.com/germanhyt/softlanding-hazlatarea-prod001",
    productionUrl: "https://softlanding-hazlatarea-prod001.vercel.app",
  },
  {
    id: 12,
    title: "Website BioTraining",
    category: "Web",
    publishDate: "Octubre 2025",
    visibility: "Publico",
    objective:
      "Desarrollar una presencia digital para BioTraining con enfoque comercial y estructura adaptable a crecimiento.",
    summary:
      "Website frontend basado en Astro para mostrar servicios, identidad y puntos de contacto.",
    description: [
      "Se prioriza velocidad de entrega, modularidad visual y flujo de navegacion limpio.",
      "La version publicada funciona como ambiente de referencia para stakeholders.",
    ],
    techs: ["Astro", "TypeScript", "Frontend", "Marketing Site"],
    cover:
      "https://raw.githubusercontent.com/germanhyt/softwebsite-biotraining-frontend-prod002/Master/src/assets/img/hero-banner_1.webp",
    repositoryLabel: "softwebsite-biotraining-frontend-prod002",
    repositoryUrl: "https://github.com/germanhyt/softwebsite-biotraining-frontend-prod002",
    testingUrl: "https://softwebsite-biotraining-frontend-pr.vercel.app",
  },
  {
    id: 13,
    title: "Website Ktalweb",
    category: "Web",
    publishDate: "Mayo 2025",
    visibility: "Publico",
    objective:
      "Consolidar el website principal de Ktalweb con una estructura profesional para venta y comunicacion de servicios.",
    summary:
      "Proyecto web de posicionamiento de marca, construido con stack frontend moderno y enfoque comercial.",
    description: [
      "Se trabajo una base flexible para evolucionar paginas de servicio y contenido institucional.",
      "Incluye despliegue publico y versionado continuo.",
    ],
    techs: ["Astro", "React", "TypeScript", "TailwindCSS"],
    cover: "/images/projects/covers/web.svg",
    repositoryLabel: "softwebsite-ktalweb-frontend-prod001",
    repositoryUrl: "https://github.com/germanhyt/softwebsite-ktalweb-frontend-prod001",
    productionUrl: "https://softwebsite-ktalweb-frontend-prod00.vercel.app",
  },
  {
    id: 14,
    title: "Landing Laboratoria",
    category: "Web",
    publishDate: "Diciembre 2024",
    visibility: "Privado",
    objective:
      "Publicar una landing corporativa para Laboratoria con narrativa de impacto y captura efectiva de leads.",
    summary:
      "README del proyecto describe una landing corporativa con backend integrado para gestion de leads y panel administrativo.",
    description: [
      "Se prioriza una comunicacion de impacto social y claridad de propuesta en el mensaje principal.",
      "El entorno publico actual corresponde a la salida frontend del proyecto.",
    ],
    techs: ["Next.js", "React", "TypeScript", "TailwindCSS", "PostgreSQL"],
    cover: "/images/projects/covers/web.svg",
    repositoryLabel: "softlanding-laboratoria-frontend-prod002",
    repositoryUrl: "https://github.com/germanhyt",
    productionUrl: "https://softlanding-laboratoria-frontend-prod002.vercel.app",
  },
  {
    id: 1,
    title: "Proyecto GCB Bosque Magico (Panel)",
    category: "Web",
    publishDate: "Junio 2026",
    visibility: "Publico",
    objective:
      "Centralizar la operacion comercial en un panel CRM conectado a una landing publica y API, con una arquitectura lista para escalar.",
    summary:
      "Proyecto monorepo para operacion digital de Bosque Magico. El README describe una solucion compuesta por landing, panel CRM y servicios backend.",
    description: [
      "Se priorizo una estructura por aplicaciones para mantener separadas las responsabilidades de panel, marketing y servicios.",
      "El enfoque funcional es de uso interno (panel) con salida comercial (landing), manteniendo trazabilidad entre gestion y captacion.",
    ],
    techs: ["TypeScript", "React", "Node.js", "PostgreSQL", "Docker"],
    cover: "/images/projects/covers/web.svg",
    repositoryLabel: "soft-project-gcb-bosque-magico-prod-001",
    repositoryUrl: "https://github.com/germanhyt/soft-project-gcb-bosque-magico-prod-001",
  },
  {
    id: 2,
    title: "Landing Bosque Magico",
    category: "Web",
    publishDate: "Mayo 2026",
    visibility: "Publico",
    objective:
      "Presentar la propuesta de valor de Bosque Magico en una landing enfocada en conversion, claridad de mensaje y rendimiento.",
    summary:
      "Landing publica orientada a marketing. Segun README, se construye sobre Astro con stack moderno para despliegue rapido.",
    description: [
      "La estructura esta pensada para navegacion simple y lectura guiada de beneficios, servicios y contacto.",
      "Se toma la version publicada como entorno productivo principal.",
    ],
    techs: ["Astro", "React", "TypeScript", "TailwindCSS"],
    cover: "/images/projects/covers/web.svg",
    repositoryLabel: "softlanding-bosquemagico-frontend-prod001",
    repositoryUrl: "https://github.com/germanhyt/softlanding-bosquemagico-frontend-prod001",
    productionUrl: "https://softlanding-bosquemagico-frontend-p.vercel.app",
  },
  {
    id: 3,
    title: "Landing Calendario Deportivo",
    category: "Web",
    publishDate: "Mayo 2026",
    visibility: "Publico",
    objective:
      "Publicar y organizar eventos deportivos en una landing clara, responsiva y facil de actualizar.",
    summary:
      "Sitio de difusion de eventos con enfoque informativo. La implementacion favorece velocidad de carga y mantenimiento sencillo.",
    description: [
      "Se usa un stack estatico moderno para entregar performance y buena experiencia en movil.",
      "El deploy actual funciona como referencia productiva del proyecto.",
    ],
    techs: ["Astro", "TypeScript", "Frontend", "Vercel"],
    cover: "https://raw.githubusercontent.com/germanhyt/softlanding-calendario-deportivo-gcb-prod001/master/assets/1.png",
    repositoryLabel: "softlanding-calendario-deportivo-gcb-prod001",
    repositoryUrl: "https://github.com/germanhyt/softlanding-calendario-deportivo-gcb-prod001",
    productionUrl: "https://softlanding-calendario-deportivo-gc.vercel.app",
  },
  {
    id: 4,
    title: "Proyecto Sistema de Estacionamiento GCB",
    category: "Backend",
    publishDate: "Junio 2026",
    visibility: "Privado",
    objective:
      "Orquestar el flujo completo de estacionamiento: operacion en frontend, logica backend y servicio de impresion de tickets.",
    summary:
      "Solucion compuesta por frontend privado, backend privado y microservicio de ticketera. README del servicio documenta impresion termica desde apps web.",
    description: [
      "La arquitectura separa responsabilidades por capas para facilitar despliegues independientes y soporte operativo.",
      "Se considera tanto el flujo de caja/ingreso como la trazabilidad de tickets en campo.",
    ],
    techs: ["TypeScript", "React", "PHP", "Laravel", "Node.js", "Express"],
    cover: "/images/projects/covers/backend.svg",
    repositoryLabel:
      "parking-system-gcb-frontend-prod002 + parking-system-gcb-backend-prod-002 + parking-system-gcb-ticketera-service-prod001",
    repositoryUrl: "https://github.com/germanhyt",
    testingUrl: "https://github.com/germanhyt/parking-system-gcb-ticketera-service-prod001",
  },
  {
    id: 5,
    title: "Proyecto Arquitectura de Solucion en GCP",
    category: "Data Analytics",
    publishDate: "Marzo 2026",
    visibility: "Publico",
    objective:
      "Definir una arquitectura de datos y servicios en Google Cloud para soportar procesos de analitica y operacion.",
    summary:
      "Repositorio enfocado en arquitectura de datos. El README evidencia orientacion a Google Cloud como base de la solucion.",
    description: [
      "Se aborda la propuesta desde componentes de plataforma, flujo de datos y lineamientos de implementacion.",
      "Esta documentacion sirve como referencia tecnica para evolucion de ambientes de datos en GCP.",
    ],
    techs: ["GCP", "Data Engineering", "Arquitectura", "Python"],
    cover: "/images/projects/covers/data.svg",
    repositoryLabel: "DataEngineering_ArquitecturaDatos_Refugio_001",
    repositoryUrl:
      "https://github.com/germanhyt/DataEngineering_ArquitecturaDatos_Refugio_001",
  },
  {
    id: 6,
    title: "Proyecto Reservas Sisa",
    category: "Web",
    publishDate: "Mayo 2026",
    visibility: "Privado",
    objective:
      "Digitalizar la gestion de reservas con una experiencia simple para usuario final y control operativo.",
    summary:
      "Proyecto privado orientado a reservas, con foco en flujo de disponibilidad, registro y confirmacion.",
    description: [
      "Se plantea una solucion lista para evolucionar por etapas, manteniendo trazabilidad de reservas y estados.",
      "Por politica de privacidad, se publica ficha funcional y no el repositorio tecnico completo.",
    ],
    techs: ["TypeScript", "Web", "Reservas", "Operaciones"],
    cover: "/images/projects/covers/web.svg",
    repositoryLabel: "soft-project-gcb-reservas-sisa-prod-001",
    repositoryUrl: "https://github.com/germanhyt",
  },
  {
    id: 7,
    title: "Proyecto OffRoad (Frontend + Backend)",
    category: "Web",
    publishDate: "Mayo 2026",
    visibility: "Publico",
    objective:
      "Entregar una plataforma web integral para OffRoad, conectando una experiencia frontend moderna con un backend administrable.",
    summary:
      "Proyecto dividido en dos repositorios: frontend Next.js y backend Laravel. Permite evolucion independiente por capa.",
    description: [
      "El frontend prioriza experiencia, navegacion y tiempos de respuesta para usuario final.",
      "El backend se centra en gestion de contenido y soporte operativo para la web en produccion.",
    ],
    techs: ["Next.js", "React", "TypeScript", "PHP", "Laravel"],
    cover: "/images/projects/covers/web.svg",
    repositoryLabel:
      "softwebsite-offroadperu-frontend-prod004 + softwebsite-offroadperu-backend-prod004",
    repositoryUrl: "https://github.com/germanhyt/softwebsite-offroadperu-frontend-prod004",
    testingUrl: "https://softwebsite-offroadperu-frontend-pr.vercel.app",
  },
  {
    id: 8,
    title: "Proyecto Zukarzen",
    category: "Web",
    publishDate: "Septiembre 2024",
    visibility: "Privado",
    objective:
      "Construir un website comercial completo para Zukarzen con frontend orientado a conversion y backend de soporte.",
    summary:
      "Solucion fullstack privada para marca comercial. Incluye separacion por repositorio frontend y backend.",
    description: [
      "Se utiliza una estrategia de versionado por ambientes para controlar releases y cambios funcionales.",
      "La demo publica corresponde al frontend, mientras la capa backend opera en entorno restringido.",
    ],
    techs: ["Next.js", "React", "TypeScript", "PHP", "Laravel"],
    cover: "/images/projects/covers/web.svg",
    repositoryLabel:
      "softwebsite-zukarzen-frontend-prod001 + softwebsite-zukarzen-backend-prod001",
    repositoryUrl: "https://github.com/germanhyt",
    productionUrl: "https://softwebsite-zukarzen-frontend-prod001.vercel.app",
  },
  {
    id: 9,
    title: "Landing Profesional Marca Stephanie",
    category: "Web",
    publishDate: "Junio 2026",
    visibility: "Publico",
    objective:
      "Posicionar una marca profesional con una landing de alto impacto visual y mensajes orientados a conversion.",
    summary:
      "Landing enfocada en branding y captacion. Se prioriza narrativa comercial, jerarquia visual y contacto directo.",
    description: [
      "Se emplea un stack moderno para mantener performance y facilidad de iteracion en contenidos.",
      "La version desplegada representa el entorno oficial de presentacion del servicio.",
    ],
    techs: ["Astro", "React", "TypeScript", "TailwindCSS", "Framer Motion"],
    cover:
      "https://raw.githubusercontent.com/germanhyt/softlanding-marca-stephanie-prod001/master/info/img/Imagen%20banner%20-%20web%20Stephanie/Imagen%20banner%20-%20web%20stephanie.webp",
    logo: "https://raw.githubusercontent.com/germanhyt/softlanding-marca-stephanie-prod001/master/public/favicon.svg",
    repositoryLabel: "softlanding-marca-stephanie-prod001",
    repositoryUrl: "https://github.com/germanhyt/softlanding-marca-stephanie-prod001",
    productionUrl: "https://softlanding-marca-stephanie-prod001.vercel.app",
  },

  {
    id: 15,
    title: "Sistema Textil Puntozip",
    category: "Backend",
    publishDate: "Agosto 2024",
    visibility: "Privado",
    objective:
      "Implementar un sistema ERP/MRP para industria textil de exportacion, integrando procesos operativos y administrativos.",
    summary:
      "Segun README, la solucion se orienta a un contexto ERP/MRP textil y se divide en frontend y backend por repositorios.",
    description: [
      "Se plantea una arquitectura empresarial para control de procesos, datos y trazabilidad del negocio.",
      "El frontend cuenta con URL de despliegue, mientras la capa backend opera de forma restringida.",
    ],
    techs: ["TypeScript", "React", "PHP", "Laravel", "MySQL", "Docker"],
    cover: "/images/projects/covers/backend.svg",
    repositoryLabel:
      "023_puntozipsystem_frontend_prod001 + 024_puntozipsystem_backend_prod001",
    repositoryUrl: "https://github.com/germanhyt",
    productionUrl: "https://023-puntozipsystem-frontend-prod001.vercel.app",
  },
];

export const projectsData: IProject[] = curatedProjects.map(buildProject);
