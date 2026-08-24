import { IProject } from "@/core/types/project";
import { FiExternalLink, FiGithub } from "react-icons/fi";

interface PortfolioGalleryImage {
  title: string;
  img: string;
}

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
  highlights?: string[];
  cover: string;
  logo?: string;
  gallery?: PortfolioGalleryImage[];
  localSource?: string;
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
    ProjectImages: meta.gallery?.length
      ? meta.gallery.map((image, index) => ({
          id: index + 1,
          title: image.title,
          img: image.img,
        }))
      : [
          { id: 1, title: "Vista principal", img: meta.cover },
          { id: 2, title: "Identidad visual", img: meta.logo || meta.cover },
          { id: 3, title: "Referencia del proyecto", img: meta.cover },
        ],
    ProjectInfo: {
      ClientHeading: "Resumen ejecutivo",
      CompanyInfo: [
        { id: 1, title: "Repositorio", details: meta.repositoryLabel },
        {
          id: 2,
          title: "Produccion",
          details: meta.productionUrl || "No disponible",
        },
        {
          id: 3,
          title: "Entorno de pruebas",
          details: meta.testingUrl || "No disponible",
        },
        { id: 4, title: "Visibilidad", details: meta.visibility },
        ...(meta.localSource
          ? [{ id: 5, title: "Fuente documental", details: meta.localSource }]
          : []),
      ],
      ObjectivesHeading: "Objetivo",
      ObjectivesDetails: meta.objective,
      Technologies: [
        { title: "Stack tecnologico", techs: meta.techs },
        ...(meta.highlights?.length
          ? [{ title: "Funcionalidades destacadas", techs: meta.highlights }]
          : []),
      ],
      ProjectDetailsHeading: "Alcance del proyecto",
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
    id: 18,
    title: "Landing Laboratoria × L'Oréal",
    category: "Landing page",
    publishDate: "Agosto 2026",
    visibility: "Publico",
    objective:
      "Impulsar la postulacion a Beauty in Tech (Activa tu Carrera), el programa 100% becado de Laboratoria en colaboracion con L'Oréal para fortalecer el perfil profesional de mujeres en tech e IA.",
    summary:
      "Softlanding estatica en Astro + React islands para Beauty in Tech: narrativa de empleabilidad, beneficios del programa de 10 semanas, metodologia, medios y CTAs hacia postular.",
    description: [
      "Hero full-bleed y secciones con motion/Swiper alineadas al prototipo Beauty in Tech (L'Oréal × Laboratoria).",
      "Contenido modular (identificacion, beneficios, experiencia, resultados, FAQ) orientado a conversion de postulantes en Ciudad de Mexico.",
      "SEO, sitemap y dominio productivo en activatucarrera-laboratoria-loreal.com; preview en Vercel.",
    ],
    techs: ["Astro", "React", "TypeScript", "TailwindCSS", "Framer Motion", "Swiper"],
    highlights: [
      "Beauty in Tech",
      "Colaboracion Laboratoria × L'Oréal",
      "Programa 100% becado / remoto",
      "Landing de conversion + SEO",
    ],
    cover:
      "https://raw.githubusercontent.com/germanhyt/softlanding-laboratoria-loreal-prod001/main/public/assets/hero/hero--desktop.webp",
    logo: "/images/projects/laboratoria/logo.webp",
    gallery: [
      {
        title: "Hero — Beauty in Tech (desktop)",
        img: "https://raw.githubusercontent.com/germanhyt/softlanding-laboratoria-loreal-prod001/main/public/assets/hero/hero--desktop.webp",
      },
      {
        title: "Hero — vista mobile",
        img: "https://raw.githubusercontent.com/germanhyt/softlanding-laboratoria-loreal-prod001/main/public/assets/hero/hero--mobile.png",
      },
      {
        title: "Seccion — experiencias y resultados",
        img: "https://raw.githubusercontent.com/germanhyt/softlanding-laboratoria-loreal-prod001/main/public/assets/sections/11/sect11_experiencias_respalda_resultados_reales--desktop.webp",
      },
      {
        title: "Logo Laboratoria × L'Oréal",
        img: "https://raw.githubusercontent.com/germanhyt/softlanding-laboratoria-loreal-prod001/main/public/assets/logos/logo-labo-loreal.png",
      },
    ],
    localSource:
      "softlanding-laboratoria-loreal-prod001 + activatucarrera-laboratoria-loreal.com",
    repositoryLabel: "softlanding-laboratoria-loreal-prod001",
    repositoryUrl: "https://github.com/germanhyt/softlanding-laboratoria-loreal-prod001",
    productionUrl: "https://www.activatucarrera-laboratoria-loreal.com/",
    testingUrl: "https://softlanding-laboratoria-loreal-prod.vercel.app",
  },
  {
    id: 16,
    title: "Landing Laboratoria × UTP",
    category: "Landing page",
    publishDate: "Agosto 2026",
    visibility: "Publico",
    objective:
      "Impulsar la postulacion al programa Activa tu carrera (Laboratoria en colaboracion con UTP) con una landing de conversion clara y mobile-first.",
    summary:
      "Softlanding estatica en Astro + React islands para el programa Activa tu carrera: narrativa de empleabilidad, beneficios, metodologia y CTAs hacia postular.",
    description: [
      "Hero full-bleed y secciones con motion/Swiper orientadas a universitarios que buscan destacar en el mercado laboral.",
      "Contenido modular (identificacion, beneficios, experiencia, FAQ) listo para iterar mensajes sin rehacer la base.",
      "SEO, sitemap y dominio productivo en activatucarrera-laboratoria-utp.com; preview en Vercel.",
    ],
    techs: ["Astro", "React", "TypeScript", "TailwindCSS", "Framer Motion", "Swiper"],
    highlights: [
      "Activa tu carrera",
      "Colaboracion Laboratoria × UTP",
      "Landing de conversion",
      "SEO + sitemap",
    ],
    cover:
      "https://raw.githubusercontent.com/germanhyt/softlanding-laboratoria-utp-prod001/main/public/assets/hero/hero-banner--desktop.webp",
    logo: "/images/projects/laboratoria/logo.webp",
    gallery: [
      {
        title: "Hero — Activa tu carrera (desktop)",
        img: "https://raw.githubusercontent.com/germanhyt/softlanding-laboratoria-utp-prod001/main/public/assets/hero/hero-banner--desktop.webp",
      },
      {
        title: "Hero — vista mobile",
        img: "https://raw.githubusercontent.com/germanhyt/softlanding-laboratoria-utp-prod001/main/public/assets/hero/hero-banner--mobile.webp",
      },
      {
        title: "Seccion — demostrar mi potencial",
        img: "https://raw.githubusercontent.com/germanhyt/softlanding-laboratoria-utp-prod001/main/public/assets/section3/demostrar-mi-potencial.webp",
      },
      {
        title: "Logo Laboratoria",
        img: "/images/projects/laboratoria/logo.webp",
      },
    ],
    localSource: "softlanding-laboratoria-utp-prod001 + activatucarrera-laboratoria-utp.com",
    repositoryLabel: "softlanding-laboratoria-utp-prod001",
    repositoryUrl: "https://github.com/germanhyt/softlanding-laboratoria-utp-prod001",
    productionUrl: "https://activatucarrera-laboratoria-utp.com/",
    testingUrl: "https://softlanding-laboratoria-utp-prod001.vercel.app",
  },
  {
    id: 17,
    title: "Landing Laboratoria × Colsubsidio",
    category: "Landing page",
    publishDate: "Agosto 2026",
    visibility: "Publico",
    objective:
      "Comunicar el programa Laboratoria × Colsubsidio y facilitar el retorno al mercado laboral con una landing de alto impacto visual y conversion.",
    summary:
      "Softlanding Astro + React para la alianza Laboratoria–Colsubsidio: hero fotografico, identificacion, beneficios, metodologia, logistica y FAQ con motion y carruseles.",
    description: [
      "Composicion visual de secciones (hero full-bleed, art-composite, foto+gradiente logistica) alineada al prototipo de marca.",
      "Islas React con Framer Motion y Swiper para recorridos de identificacion y beneficios sin sacrificar rendimiento estatico.",
      "Despliegue publico en Vercel como vitrina del programa ante afiliados y stakeholders.",
    ],
    techs: ["Astro", "React", "TypeScript", "TailwindCSS", "Framer Motion", "Swiper"],
    highlights: [
      "Alianza Laboratoria × Colsubsidio",
      "Landing de empleabilidad",
      "Motion + Swiper",
      "Mobile-first",
    ],
    cover:
      "https://raw.githubusercontent.com/germanhyt/softlanding-laboratoria-colsubsidio-prod001/main/public/assets/hero/hero.webp",
    logo: "/images/projects/laboratoria/logo.webp",
    gallery: [
      {
        title: "Hero — programa Colsubsidio",
        img: "https://raw.githubusercontent.com/germanhyt/softlanding-laboratoria-colsubsidio-prod001/main/public/assets/hero/hero.webp",
      },
      {
        title: "Experiencia — art composite",
        img: "https://raw.githubusercontent.com/germanhyt/softlanding-laboratoria-colsubsidio-prod001/main/public/assets/experiencia/art-composite.png",
      },
      {
        title: "Logistica — foto desktop",
        img: "https://raw.githubusercontent.com/germanhyt/softlanding-laboratoria-colsubsidio-prod001/main/public/assets/logistica/desktop.webp",
      },
      {
        title: "Logo Laboratoria",
        img: "/images/projects/laboratoria/logo.webp",
      },
    ],
    localSource: "softlanding-laboratoria-colsubsidio-prod001",
    repositoryLabel: "softlanding-laboratoria-colsubsidio-prod001",
    repositoryUrl:
      "https://github.com/germanhyt/softlanding-laboratoria-colsubsidio-prod001",
    productionUrl: "https://softlanding-laboratoria-colsubsidio.vercel.app/",
  },
  {
    id: 10,
    title: "Website Diverty",
    category: "Website",
    publishDate: "Abril 2026",
    visibility: "Publico",
    objective:
      "Posicionar a Diverty como referente en su sector con una web corporativa clara, moderna y orientada a generar contactos comerciales.",
    summary:
      "Sitio institucional desarrollado con Astro y React, disenado para comunicar servicios, credibilidad y puntos de contacto en una experiencia fluida de principio a fin.",
    description: [
      "Arquitectura modular que facilita actualizar contenidos y lanzar nuevas secciones sin rehacer la base del sitio.",
      "Diseno responsive con jerarquia visual pensada para conversion y lectura rapida en movil.",
      "Despliegue productivo en diverty.pe como referencia visible para clientes y aliados comerciales.",
    ],
    techs: ["Astro", "React", "TypeScript", "TailwindCSS"],
    cover: "/images/projects/prod-captures/diverty-home.png",
    gallery: [
      { title: "Vista en produccion — Diverty", img: "/images/projects/prod-captures/diverty-home.png" },
      {
        title: "Hero — propuesta de servicios",
        img: "https://raw.githubusercontent.com/germanhyt/softwebsite-diverty-prod-001/master/src/assets/hero.png",
      },
    ],
    repositoryLabel: "softwebsite-diverty-prod-001",
    repositoryUrl: "https://github.com/germanhyt/softwebsite-diverty-prod-001",
    productionUrl: "https://www.diverty.pe/",
  },
  {
    id: 11,
    title: "Landing Haz La Tarea",
    category: "Landing page",
    publishDate: "Enero 2026",
    visibility: "Publico",
    objective:
      "Convertir trafico organico y referido en consultas calificadas mediante una landing comercial de una sola pagina.",
    summary:
      "Landing estatica con narrativa de servicios, metodologia, testimonios, FAQ y formulario de contacto, optimizada para captar leads de familias que buscan apoyo academico.",
    description: [
      "Estructura por secciones que permite iterar mensajes comerciales sin comprometer el flujo de conversion.",
      "Contenido orientado a confianza: metodologia, casos y respuestas frecuentes antes del CTA final.",
      "Entorno publico estable en Vercel para campanas y validacion continua del mensaje comercial.",
    ],
    techs: ["Astro", "React", "TypeScript", "TailwindCSS"],
    cover:
      "https://raw.githubusercontent.com/germanhyt/softlanding-hazlatarea-prod001/master/public/images/hero-banner-desktop.png",
    gallery: [
      {
        title: "Hero — landing comercial",
        img: "https://raw.githubusercontent.com/germanhyt/softlanding-hazlatarea-prod001/master/public/images/hero-banner-desktop.png",
      },
    ],
    repositoryLabel: "softlanding-hazlatarea-prod001",
    repositoryUrl: "https://github.com/germanhyt/softlanding-hazlatarea-prod001",
    productionUrl: "https://softlanding-hazlatarea-prod001.vercel.app",
  },
  {
    id: 12,
    title: "Website BioTraining",
    category: "Website",
    publishDate: "Octubre 2025",
    visibility: "Publico",
    objective:
      "Fortalecer la presencia digital de BioTraining y facilitar la comunicacion de su propuesta formativa en linea.",
    summary:
      "Website comercial en Astro que presenta la academia, sus programas y canales de contacto con una interfaz limpia y facil de mantener.",
    description: [
      "Prioridad en rendimiento, claridad de mensaje y navegacion simple entre secciones de valor.",
      "Base preparada para escalar paginas de cursos o contenido institucional sin reestructurar el sitio.",
      "Produccion en biotraining.pe con preview en Vercel para revisiones previas al lanzamiento.",
    ],
    techs: ["Astro", "TypeScript", "Frontend", "Marketing Site"],
    cover: "/images/projects/prod-captures/biotraining-home.png",
    gallery: [
      { title: "Vista en produccion — BioTraining", img: "/images/projects/prod-captures/biotraining-home.png" },
      {
        title: "Hero — academia y programas",
        img: "https://raw.githubusercontent.com/germanhyt/softwebsite-biotraining-frontend-prod002/Master/src/assets/img/hero-banner_1.webp",
      },
    ],
    repositoryLabel: "softwebsite-biotraining-frontend-prod002",
    repositoryUrl: "https://github.com/germanhyt/softwebsite-biotraining-frontend-prod002",
    productionUrl: "https://www.biotraining.pe/",
    testingUrl: "https://softwebsite-biotraining-frontend-pr.vercel.app",
  },
  {
    id: 13,
    title: "Website Ktalweb",
    category: "Website",
    publishDate: "Mayo 2025",
    visibility: "Publico",
    objective:
      "Impulsar la captacion comercial de Ktalweb como agencia digital, mostrando soluciones, casos de exito y rutas claras hacia la cotizacion.",
    summary:
      "Website corporativo en Astro + React para la marca Ktalweb: propuesta de valor, portafolio de soluciones (landing, tienda y catalogo), proceso de trabajo, testimonios y descarga de brochure.",
    description: [
      "Hero orientado a conversion con CTA hacia soluciones y contacto directo desde cualquier seccion.",
      "Bloque de servicios enfocado en rendimiento, escalabilidad y diseno adaptable a cualquier dispositivo.",
      "Casos de exito y resenas en Google que refuerzan credibilidad comercial ante nuevos prospectos.",
      "Despliegue productivo en ktalweb.com.pe con identidad visual consistente en todo el recorrido.",
    ],
    techs: ["Astro", "React", "TypeScript", "TailwindCSS"],
    cover: "/images/projects/ktalweb/home.png",
    logo: "/images/projects/ktalweb/logo.webp",
    gallery: [
      { title: "Vista en produccion — home (hero)", img: "/images/projects/ktalweb/home.png" },
      { title: "Vista en produccion — soluciones", img: "/images/projects/prod-captures/ktalweb-soluciones-prod.png" },
      { title: "Captura home alternativa", img: "/images/projects/prod-captures/ktalweb-home-prod.png" },
      { title: "Logo Ktalweb", img: "/images/projects/ktalweb/logo.webp" },
    ],
    localSource: "softwebsite-ktalweb-frontend-prod001 + ktalweb.com.pe",
    repositoryLabel: "softwebsite-ktalweb-frontend-prod001",
    repositoryUrl: "https://github.com/germanhyt/softwebsite-ktalweb-frontend-prod001",
    productionUrl: "https://ktalweb.com.pe/",
  },
  {
    id: 14,
    title: "Landing Laboratoria",
    category: "Landing page",
    publishDate: "Diciembre 2024",
    visibility: "Privado",
    objective:
      "Comunicar el impacto del informe sobre brecha de genero y captar leads institucionales con una landing de alto nivel narrativo.",
    summary:
      "Landing corporativa para Laboratoria con frontend Next.js y backend integrado para gestion de leads y panel administrativo privado.",
    description: [
      "Narrativa centrada en impacto social y datos del caso BCP, con diseno editorial que prioriza claridad del mensaje.",
      "Formularios y flujos de captacion conectados a capa backend para seguimiento comercial del equipo.",
      "Frontend publico en laboratoria-brechadegenero.la como vitrina del proyecto ante stakeholders.",
    ],
    techs: ["Next.js", "React", "TypeScript", "TailwindCSS", "PostgreSQL"],
    cover: "/images/projects/prod-captures/laboratoria-home.png",
    logo: "/images/projects/laboratoria/logo.webp",
    gallery: [
      { title: "Vista en produccion — informe", img: "/images/projects/prod-captures/laboratoria-home.png" },
      { title: "Landing — caso BCP", img: "/images/projects/laboratoria/portfolio-1.webp" },
      { title: "Landing — variante visual", img: "/images/projects/laboratoria/portfolio-2.webp" },
      { title: "Logo Laboratoria", img: "/images/projects/laboratoria/logo.webp" },
    ],
    localSource: "laboratoria-brechadegenero.la + referencias Ktalweb",
    repositoryLabel: "softlanding-laboratoria-frontend-prod002",
    repositoryUrl: "https://github.com/germanhyt",
    productionUrl: "https://laboratoria-brechadegenero.la/",
  },
  {
    id: 1,
    title: "CRM Bosque Magico — Panel Comercial",
    category: "Fullstack web",
    publishDate: "Junio 2026",
    visibility: "Publico",
    objective:
      "Digitalizar el pipeline comercial de fiestas infantiles: desde la solicitud hasta la cotizacion, agenda y auditoria operativa.",
    summary:
      "Panel CRM del ecosistema Bosque Magico, integrado con API NestJS y PostgreSQL, para que el equipo comercial gestione leads, cotizaciones y eventos en un solo lugar.",
    description: [
      "Dashboard con indicadores por etapa, tabla de solicitudes con filtros y seguimiento detallado por oportunidad.",
      "Modulo de cotizaciones con calculo centralizado en backend, envio por enlace publico y trazabilidad completa del proceso.",
      "Agenda de eventos con validacion de disponibilidad por fecha y turno, evitando doble reserva.",
      "Bitacora de auditoria y permisos por rol (view, manage, admin) para una operacion segura y trazable.",
    ],
    techs: [
      "NestJS",
      "Prisma",
      "PostgreSQL",
      "React 19",
      "Vite",
      "TanStack Query",
      "Formik",
      "Docker",
    ],
    highlights: [
      "Solicitudes y leads",
      "Cotizaciones",
      "Agenda de eventos",
      "Configuracion y catalogo",
      "Auditoria",
      "Cotizacion publica",
    ],
    cover: "/images/projects/prod-captures/bosque-panel-prod.png",
    logo: "/images/projects/bosque-magico/logo-bm.png",
    gallery: [
      { title: "Vista en produccion — panel CRM", img: "/images/projects/prod-captures/bosque-panel-prod.png" },
      {
        title: "Dashboard CRM — KPIs por etapa",
        img: "/images/projects/bosque-magico/crm-dashboard.png",
      },
      {
        title: "Solicitudes — tabla, filtros y seguimiento",
        img: "/images/projects/bosque-magico/crm-solicitudes.png",
      },
      {
        title: "Cotizaciones — totales explicables y envio",
        img: "/images/projects/bosque-magico/crm-cotizaciones.png",
      },
      {
        title: "Agenda — eventos por fecha y turno",
        img: "/images/projects/bosque-magico/crm-agenda.png",
      },
      {
        title: "Landing publica — vista desktop",
        img: "/images/projects/bosque-magico/landing-desktop.png",
      },
      {
        title: "Landing publica — vista mobile",
        img: "/images/projects/bosque-magico/landing-mobile.png",
      },
      {
        title: "Identidad Bosque Magico",
        img: "/images/projects/bosque-magico/logo-bm.png",
      },
    ],
    localSource:
      "proyecto-bosque-magio (README.md, MODULOS_ESTADO.md, mockups CRM y landing)",
    repositoryLabel: "soft-project-gcb-bosque-magico-prod-001",
    repositoryUrl: "https://github.com/germanhyt/soft-project-gcb-bosque-magico-prod-001",
    productionUrl: "https://sandbox-panel-bosque.gcbprojects.site/",
  },
  {
    id: 2,
    title: "Landing Bosque Magico",
    category: "Landing page",
    publishDate: "Mayo 2026",
    visibility: "Publico",
    objective:
      "Transformar visitas web en solicitudes comerciales para el negocio de fiestas infantiles Bosque Magico.",
    summary:
      "Landing comercial con cotizador interactivo conectado a la API del ecosistema, cotizacion compartible por enlace y optimizacion SEO para captacion local.",
    description: [
      "Secciones de propuesta de valor — paquetes, shows, catering y FAQ — para reducir friccion previa al contacto.",
      "Cotizador con estimacion referencial desde tarifas en tiempo real y envio de solicitud validado en backend.",
      "Pagina publica de cotizacion por token para aceptacion directa del cliente desde WhatsApp o email.",
      "Metadatos SEO (JSON-LD, Open Graph, sitemap) y diseno responsive mobile-first alineado a la identidad de marca.",
    ],
    techs: ["React", "Vite", "TypeScript", "TailwindCSS", "Formik", "SEO"],
    highlights: [
      "Cotizador interactivo",
      "Cotizacion publica",
      "JSON-LD y Open Graph",
      "Responsive mobile-first",
    ],
    cover: "/images/projects/prod-captures/bosque-landing-prod.png",
    logo: "/images/projects/bosque-magico/logo-bm.png",
    gallery: [
      { title: "Vista en produccion — landing", img: "/images/projects/prod-captures/bosque-landing-prod.png" },
      {
        title: "Hero — propuesta comercial",
        img: "/images/projects/bosque-magico/hero.jpg",
      },
      {
        title: "Landing — vista desktop",
        img: "/images/projects/bosque-magico/landing-desktop.png",
      },
      {
        title: "Landing — vista mobile",
        img: "/images/projects/bosque-magico/landing-mobile.png",
      },
      {
        title: "Logo Bosque Magico",
        img: "/images/projects/bosque-magico/logo-bm.png",
      },
    ],
    localSource: "proyecto-bosque-magio/apps/landing y mockups landing v2",
    repositoryLabel: "softlanding-bosquemagico-frontend-prod001",
    repositoryUrl: "https://github.com/germanhyt/softlanding-bosquemagico-frontend-prod001",
    productionUrl: "https://sandbox-landing-bosque.gcbprojects.site/",
  },
  {
    id: 3,
    title: "Landing Calendario Deportivo",
    category: "Landing page",
    publishDate: "Mayo 2026",
    visibility: "Publico",
    objective:
      "Exhibir la programacion deportiva semanal en formato cartelera digital, usable en kiosk o movil, con contenido siempre actualizado.",
    summary:
      "Aplicacion web tipo cartelera construida con Astro 6, carrusel Swiper y sincronizacion en tiempo casi real via API y WebSocket.",
    description: [
      "Slides por disciplina — agenda general, futbol internacional y peruano, voley, UFC y mas — con filtro por categoria.",
      "Modo kiosk y modo movil con preferencias persistentes y navegacion por gestos o controles.",
      "Actualizacion de programacion sin recargar la pagina completa, ideal para pantallas en local comercial.",
      "Build hibrido que mantiene compatibilidad con despliegues existentes y evolucion del producto.",
    ],
    techs: ["Astro 6", "TypeScript", "Swiper", "WebSocket", "Vercel"],
    highlights: [
      "Carrusel deportivo",
      "Modo kiosk",
      "Actualizacion en vivo",
      "Reproductor musical",
    ],
    cover: "/images/projects/calendario-deportivo/slide-01.png",
    gallery: [
      { title: "Agenda deportiva semanal", img: "/images/projects/calendario-deportivo/slide-01.png" },
      { title: "Pasion por el deporte", img: "/images/projects/calendario-deportivo/slide-02.png" },
      { title: "Futbol internacional", img: "/images/projects/calendario-deportivo/slide-03.png" },
      { title: "Futbol peruano", img: "/images/projects/calendario-deportivo/slide-04.png" },
    ],
    localSource: "catelera-deportiva (assets/, SportsCarousel.astro, agendaClient)",
    repositoryLabel: "softlanding-calendario-deportivo-gcb-prod001",
    repositoryUrl: "https://github.com/germanhyt/softlanding-calendario-deportivo-gcb-prod001",
    productionUrl: "https://softlanding-calendario-deportivo-gc.vercel.app",
  },
  {
    id: 4,
    title: "Sistema de Estacionamiento GCB",
    category: "Fullstack web",
    publishDate: "Junio 2026",
    visibility: "Privado",
    objective:
      "Automatizar la operacion diaria de un estacionamiento urbano: ingreso, cobro, tarifas, abonados e impresion de tickets en punto de venta.",
    summary:
      "Plataforma multicapa para Explanada Olguin: panel React de caja, backend Laravel, totem de autoservicio y microservicio local de impresion termica ESC/POS.",
    description: [
      "Frontend operativo con modulos de caja, tarifas, abonados, movimientos, tickets y gestion de usuarios con permisos.",
      "Backend que centraliza reglas de negocio y trazabilidad de cada ticket emitido en campo.",
      "Servicio ticketera en Node para impresion desde navegador en impresoras termicas 3nStar.",
      "Totem Next.js para autoservicio y PWA con soporte offline en el acceso operativo del personal.",
    ],
    techs: ["Laravel", "React", "Next.js", "Node.js", "Express", "ESC/POS"],
    highlights: [
      "Caja y cobros",
      "Tarifas y abonados",
      "Impresion termica",
      "Totem autoservicio",
      "PWA offline",
    ],
    cover: "/images/projects/prod-captures/parking-login-prod.png",
    logo: "/images/projects/parking-gcb/logo-icon.webp",
    gallery: [
      { title: "Vista en produccion — acceso operativo", img: "/images/projects/prod-captures/parking-login-prod.png" },
      { title: "Panel de caja — entorno local", img: "/images/projects/parking-gcb/panel-login.png" },
      { title: "Portada de acceso", img: "/images/projects/parking-gcb/login.webp" },
      { title: "Ticket de entrada impreso", img: "/images/projects/parking-gcb/ticket-entrada.jpg" },
      { title: "Logo sistema GCB", img: "/images/projects/parking-gcb/logo.webp" },
      { title: "Identidad visual", img: "/images/projects/parking-gcb/logo-var.webp" },
    ],
    localSource:
      "SISTEMA ESTACIONAMIENTO/V2/parking-system-gcb-fontend-prod-002 + WEB_TICKETERA_SERVICE + WEB_TOTTEM",
    repositoryLabel:
      "parking-system-gcb-frontend-prod002 + parking-system-gcb-backend-prod-002 + parking-system-gcb-ticketera-service-prod001",
    repositoryUrl: "https://github.com/germanhyt",
    productionUrl: "https://estacionamiento.gcbprojects.site/",
    testingUrl: "https://github.com/germanhyt/parking-system-gcb-ticketera-service-prod001",
  },
  {
    id: 5,
    title: "Arquitectura de Datos en GCP — Refugio Data",
    category: "Data Engineering",
    publishDate: "Marzo 2026",
    visibility: "Publico",
    objective:
      "Disenar una arquitectura de datos escalable en Google Cloud para unificar ingesta, analitica y consumo seguro de informacion comercial.",
    summary:
      "Plataforma Refugio Data: pipeline hacia BigQuery, panel web con RBAC, informes Power BI embebidos y extension operativa con apps moviles de delivery.",
    description: [
      "Flujos de ingesta dual: procesamiento de archivos historicos y fuentes estructuradas por periodo y locatario.",
      "Capa API con autenticacion JWT, permisos granulares e integracion con Google Drive.",
      "Visualizacion embebida de Power BI y modulo Delivery desacoplado con apps Expo para kiosk y reparto.",
      "Infraestructura reproducible con Docker Compose y Nginx, documentada para despliegue y mantenimiento.",
    ],
    techs: [
      "FastAPI",
      "BigQuery",
      "PostgreSQL",
      "React 19",
      "Power BI",
      "Expo",
      "Docker",
    ],
    highlights: [
      "Pipeline BigQuery",
      "RBAC y permisos",
      "Power BI embed",
      "Apps Delivery",
      "Fuentes de datos",
    ],
    cover: "/images/projects/refugio-data/bg.png",
    logo: "/images/projects/refugio-data/logo.png",
    gallery: [
      { title: "Identidad Refugio Data", img: "/images/projects/refugio-data/logo.png" },
      { title: "Plataforma analitica", img: "/images/projects/refugio-data/bg.png" },
      { title: "Informes embebidos", img: "/images/projects/refugio-data/informe.png" },
    ],
    localSource: "001_procesamiento_refugio (README.md, backend/, frontend/, mobile/)",
    repositoryLabel: "DataEngineering_ArquitecturaDatos_Refugio_001",
    repositoryUrl:
      "https://github.com/germanhyt/DataEngineering_ArquitecturaDatos_Refugio_001",
  },
  {
    id: 6,
    title: "Sistema de Reservas SISA Coffee",
    category: "Fullstack web",
    publishDate: "Mayo 2026",
    visibility: "Privado",
    objective:
      "Modernizar la gestion de reservas de SISA Coffee con un flujo digital alineado a la operacion real del restaurante.",
    summary:
      "Sistema fullstack para reservas en linea y panel operativo: formulario publico, libro de reservas, waitlist, inventario de mesas y notificaciones en tiempo real.",
    description: [
      "Reglas de negocio alineadas a operacion gastronomica: anticipacion minima, bloques horarios, tolerancias no-show y liberacion automatica de mesas.",
      "Formulario publico con busqueda por telefono o email, lista de espera integrada y confirmacion por email con calendario ICS.",
      "Panel con calendario, CRM de clientes, configuracion centralizada y alertas SSE con sonido hasta cambio de estado.",
      "Mensajeria email y WhatsApp Cloud; control de acceso por roles aplicado de forma consistente en API e interfaz.",
    ],
    techs: [
      "NestJS",
      "TypeORM",
      "PostgreSQL",
      "React 19",
      "TanStack Query",
      "TanStack Table",
      "PWA",
    ],
    highlights: [
      "Formulario publico",
      "Libro de reservas",
      "Lista de espera",
      "Inventario mesas",
      "Notificaciones SSE",
      "WhatsApp Cloud",
      "RBAC",
    ],
    cover: "/images/projects/prod-captures/sisa-registro-prod.png",
    logo: "/images/projects/sisa-reservas/logo.svg",
    gallery: [
      { title: "Vista en produccion — registro", img: "/images/projects/prod-captures/sisa-registro-prod.png" },
      { title: "Formulario publico — buscar disponibilidad", img: "/images/projects/sisa-reservas/registro-form.png" },
      { title: "Panel operativo — login", img: "/images/projects/sisa-reservas/panel-login.png" },
      { title: "Fachada SISA en formulario", img: "/images/projects/sisa-reservas/frontis.png" },
      { title: "Decoracion visual — planta 1", img: "/images/projects/sisa-reservas/planta-1.png" },
      { title: "Decoracion visual — planta 2", img: "/images/projects/sisa-reservas/planta-2.png" },
      { title: "Logo SISA", img: "/images/projects/sisa-reservas/logo.svg" },
      { title: "Icono PWA", img: "/images/projects/sisa-reservas/pwa-icon.png" },
    ],
    localSource:
      "proyecto-sisa-reservas (.docs/auditoria-modulos.md, proyecto-reservas-iterations.md)",
    repositoryLabel: "soft-project-gcb-reservas-sisa-prod-001",
    repositoryUrl: "https://github.com/germanhyt",
    productionUrl: "https://sisa.reservaspe.com/",
  },
  {
    id: 7,
    title: "E-commerce Off Road Peru",
    category: "Website",
    publishDate: "Mayo 2026",
    visibility: "Publico",
    objective:
      "Lanzar una tienda online completa para accesorios 4x4, overland y racing, con gestion de catalogo y operacion comercial en backend.",
    summary:
      "E-commerce Next.js con catalogo por categorias, carrito, marcas, taller y registro de clientes, respaldado por backend Laravel administrable.",
    description: [
      "Experiencia de compra con hero de marcas, navegacion por categorias 4x4, auto, overland y racing, y flujo de carrito integrado.",
      "Backend separado para administracion de productos, contenido promocional y operacion comercial del negocio.",
      "Produccion en offroadperu.com.pe con entorno de preview en Vercel para validacion previa de cambios.",
    ],
    techs: ["Next.js", "React", "TypeScript", "PHP", "Laravel", "E-commerce"],
    highlights: ["Tienda online", "Carrito", "Catalogo 4x4", "Taller", "Marcas"],
    cover: "/images/projects/prod-captures/offroad-home.png",
    logo: "/images/projects/offroad/logo.png",
    gallery: [
      { title: "Vista en produccion — tienda", img: "/images/projects/prod-captures/offroad-home.png" },
      { title: "Home — marcas y categorias", img: "/images/projects/offroad/home.png" },
      { title: "Logo Off Road Peru", img: "/images/projects/offroad/logo.png" },
    ],
    localSource: "Captura offroadperu.com.pe + assets GitHub",
    repositoryLabel:
      "softwebsite-offroadperu-frontend-prod004 + softwebsite-offroadperu-backend-prod004",
    repositoryUrl: "https://github.com/germanhyt/softwebsite-offroadperu-frontend-prod004",
    productionUrl: "https://offroadperu.com.pe/",
    testingUrl: "https://softwebsite-offroadperu-frontend-pr.vercel.app",
  },
  {
    id: 8,
    title: "E-commerce Zukarzen",
    category: "Website",
    publishDate: "Septiembre 2024",
    visibility: "Privado",
    objective:
      "Llevar la marca Zukarzen al canal digital con una tienda de postres saludables orientada a pedidos en Lima.",
    summary:
      "E-commerce Next.js para Zukarzen — pasteleria saludable con catalogo de productos, busqueda, carrito y checkout, respaldado por backend Laravel privado.",
    description: [
      "Home con propuesta de marca \"el dulce sano\", hero de productos destacados y CTA hacia el catalogo completo.",
      "Catalogo con busqueda integrada, ficha de producto y carrito de compras listo para conversion.",
      "Contacto via WhatsApp y diseno premium en tonos organicos acorde a la identidad de la pasteleria.",
      "Produccion en zukarzen.com con capa administrativa y backend en entorno restringido del cliente.",
    ],
    techs: ["Next.js", "React", "TypeScript", "PHP", "Laravel", "E-commerce"],
    cover: "/images/projects/prod-captures/zukarzen-home-prod.png",
    logo: "/images/projects/zukarzen/logo.webp",
    gallery: [
      { title: "Vista en produccion — home", img: "/images/projects/prod-captures/zukarzen-home-prod.png" },
      { title: "Vista en produccion — catalogo", img: "/images/projects/prod-captures/zukarzen-productos-prod.png" },
      { title: "Identidad de marca", img: "/images/projects/zukarzen/logo.webp" },
    ],
    localSource: "softwebsite-zukarzen-frontend-prod001 + zukarzen.com",
    repositoryLabel:
      "softwebsite-zukarzen-frontend-prod001 + softwebsite-zukarzen-backend-prod001",
    repositoryUrl: "https://github.com/germanhyt",
    productionUrl: "https://zukarzen.com/",
  },
  {
    id: 9,
    title: "Landing Profesional Marca Stephanie",
    category: "Landing page",
    publishDate: "Junio 2026",
    visibility: "Publico",
    objective:
      "Presentar la marca personal de Stephanie con una landing elegante que transmita profesionalismo y facilite el contacto directo.",
    summary:
      "Landing de una pagina con narrativa de marca, animaciones sutiles y puntos de contacto claros, desplegada en entorno publico estable.",
    description: [
      "Stack Astro + React con TailwindCSS y Framer Motion para una experiencia visual refinada sin sacrificar rendimiento.",
      "Jerarquia tipografica y banner principal alineados a la identidad visual de la marca.",
      "Estructura preparada para iterar contenidos de servicios y testimonios segun evolucione la propuesta comercial.",
    ],
    techs: ["Astro", "React", "TypeScript", "TailwindCSS", "Framer Motion"],
    cover:
      "https://raw.githubusercontent.com/germanhyt/softlanding-marca-stephanie-prod001/master/info/img/Imagen%20banner%20-%20web%20Stephanie/Imagen%20banner%20-%20web%20stephanie.webp",
    logo: "https://raw.githubusercontent.com/germanhyt/softlanding-marca-stephanie-prod001/master/public/favicon.svg",
    gallery: [
      {
        title: "Banner principal",
        img: "https://raw.githubusercontent.com/germanhyt/softlanding-marca-stephanie-prod001/master/info/img/Imagen%20banner%20-%20web%20Stephanie/Imagen%20banner%20-%20web%20stephanie.webp",
      },
      {
        title: "Favicon / identidad",
        img: "https://raw.githubusercontent.com/germanhyt/softlanding-marca-stephanie-prod001/master/public/favicon.svg",
      },
    ],
    repositoryLabel: "softlanding-marca-stephanie-prod001",
    repositoryUrl: "https://github.com/germanhyt/softlanding-marca-stephanie-prod001",
    productionUrl: "https://softlanding-marca-stephanie-prod001.vercel.app",
  },

  {
    id: 15,
    title: "ERP Textil Puntozip",
    category: "Fullstack web",
    publishDate: "Agosto 2024",
    visibility: "Privado",
    objective:
      "Digitalizar la operacion textil de exportacion con un ERP modular que conecte produccion, inventario y control de calidad.",
    summary:
      "Sistema ERP/MRP para Puntozip: frontend React + Vite por modulos operativos y backend Laravel con arquitectura hexagonal por dominio de negocio.",
    description: [
      "Modulos de tejidos e hilados, flujos productivos, ordenes de cliente y produccion, stock, avios, guias, estilos y control de calidad.",
      "Interfaces con tablas filtrables, modales de gestion y permisos por rol segun area operativa del usuario.",
      "Frontend en produccion en sistemapuntozip.online; backend en infraestructura privada del cliente.",
      "Flujos y pantallas documentados a partir del codigo fuente del sistema en operacion.",
    ],
    techs: ["React", "TypeScript", "Vite", "PHP", "Laravel", "MySQL", "Docker"],
    highlights: [
      "Tejidos e hilados",
      "Flujos de produccion",
      "Ordenes de produccion",
      "Stock y avios",
      "Control de calidad",
      "RBAC por rol",
    ],
    cover: "/images/projects/prod-captures/puntozip-home-prod.png",
    logo: "/images/projects/puntozip/logo.png",
    gallery: [
      { title: "Vista en produccion — acceso ERP", img: "/images/projects/prod-captures/puntozip-home-prod.png" },
      { title: "Mapa de flujos ERP", img: "/images/projects/puntozip/flows.png" },
      { title: "Proceso productivo", img: "/images/projects/puntozip/flow-process.png" },
      { title: "Modulo tejidos", img: "/images/projects/puntozip/tejidos.png" },
      { title: "Orden de produccion", img: "/images/projects/puntozip/orden-produccion.png" },
      { title: "Login corporativo", img: "/images/projects/puntozip/login.png" },
      { title: "Logo Puntozip", img: "/images/projects/puntozip/logo.png" },
    ],
    localSource: "Desktop/puntozip_bckp/023_puntozipsystem_frontend_prod001",
    repositoryLabel:
      "023_puntozipsystem_frontend_prod001 + 024_puntozipsystem_backend_prod001",
    repositoryUrl: "https://github.com/germanhyt",
    productionUrl: "https://sistemapuntozip.online/",
  },
];

export const projectsData: IProject[] = curatedProjects.map(buildProject);
