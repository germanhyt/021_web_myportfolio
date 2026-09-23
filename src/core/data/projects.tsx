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
          name: "Entorno de pruebas",
          icon: <FiExternalLink />,
          url: meta.testingUrl || meta.productionUrl || meta.repositoryUrl,
        },
      ],
    },
  };
};

const curatedProjects: PortfolioProjectMeta[] = [
  {
    id: 19,
    title: "AyniFlow — Plataforma Modular de Gestión Financiera",
    category: "Fullstack web",
    publishDate: "Agosto 2026",
    visibility: "Publico",
    objective:
      "Plataforma SaaS/PWA modular para la administración de finanzas de negocio, presupuestos, cierres de caja, webhooks y soporte multi-workspace.",
    summary:
      "Sistema financiero integral con frontend React 19 + TypeScript + Tailwind, backend FastAPI en Python, MySQL, PWA instalable y pipelines de CI/CD.",
    description: [
      "Gestión de transacciones de ingresos y egresos por categorías, balance neto, filtros en tiempo real y gráficos interactivos.",
      "Control de presupuestos, cierres de caja por rango de fechas y soporte multi-workspace para separar finanzas personales y de emprendimiento.",
      "Soporte PWA instalable en móvil y escritorio, integración con webhooks (n8n/automatización) y exportación de reportes en Excel/PDF.",
      "Control de acceso basado en roles (RBAC) con JWT y rate limiting para seguridad operativa.",
    ],
    techs: ["React 19", "TypeScript", "Python", "FastAPI", "MySQL", "TailwindCSS", "Docker", "PWA"],
    highlights: ["Finanzas de negocio", "Multi-workspace", "Webhooks & n8n", "Reportes Excel/PDF", "RBAC & JWT", "PWA instalable"],
    cover: "/images/projects/ayniflow/dashboard.png",
    logo: "/images/projects/ayniflow/logo-dark.png",
    gallery: [
      { title: "Vista en produccion — Resumen y graficos", img: "/images/projects/ayniflow/dashboard.png" },
      { title: "Identidad & Marca AyniFlow", img: "/images/projects/ayniflow/logo-dark.png" },
      { title: "Mockup de arquitectura & PWA", img: "/images/projects/ayniflow/cover.svg" },
    ],
    localSource: "my_system_germanhyt (ayniflow repo + docs)",
    repositoryLabel: "germanhyt/ayniflow",
    repositoryUrl: "https://github.com/germanhyt/ayniflow",
    productionUrl: "https://ayniflow.germ4nhyt.site/",
  },
  {
    id: 18,
    title: "Landing Laboratoria × L'Oréal Beauty in Tech",
    category: "Landing page",
    publishDate: "Julio 2026",
    visibility: "Publico",
    objective:
      "Inspirar e impulsar el talento femenino en tecnologia mediante un programa conjunto entre Laboratoria y L'Oreal Groupe.",
    summary:
      "Landing corporativa de alto impacto visual y responsive para el programa 'Beauty in Tech', que comunica la alianza, testimonios y formulario de postulacion.",
    description: [
      "Secciones estructuradas: Hero con marca compartida, 'Conoce el programa', 'Experiencias exclusivas', 'Testimonios en medios' y 'Nuevas oportunidades'.",
      "Diseno editorial moderno en paleta rosa/dorado L'Oreal con modulos interactivos, tarjetas de prensa y CTAs directos.",
      "Formulario de registro integrado con validacion y adaptacion responsive optimizada para dispositivos moviles.",
    ],
    techs: ["React", "TypeScript", "Vite", "TailwindCSS", "Framer Motion"],
    highlights: [
      "Hero co-branded",
      "Programa Beauty in Tech",
      "Experiencias exclusivas",
      "Impacto en medios",
      "Formulario de postulacion",
    ],
    cover: "/images/projects/laboratoria-loreal/hero-desktop.webp",
    logo: "/images/projects/laboratoria-loreal/logo-labo-loreal.png",
    gallery: [
      { title: "Hero Beauty in Tech", img: "/images/projects/laboratoria-loreal/hero-desktop.webp" },
      { title: "Version movil", img: "/images/projects/laboratoria-loreal/hero-mobile.webp" },
      { title: "Conoce el programa", img: "/images/projects/laboratoria-loreal/conoce-programa.webp" },
      { title: "Experiencias exclusivas", img: "/images/projects/laboratoria-loreal/experiencias-exclusivas.webp" },
      { title: "Impacto en medios", img: "/images/projects/laboratoria-loreal/en-los-medios.webp" },
      { title: "Nuevas oportunidades", img: "/images/projects/laboratoria-loreal/nuevas-oportunidades.webp" },
    ],
    repositoryLabel: "laboratoria-loreal-landing",
    repositoryUrl: "https://github.com/germanhyt",
    productionUrl: "https://activatucarrera-laboratoria-loreal.com/",
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
    id: 13,
    title: "Ktalweb Agentes de IA",
    category: "Website",
    publishDate: "Junio 2026",
    visibility: "Publico",
    objective:
      "Construir una plataforma web moderna para Ktalweb enfocada en la oferta de soluciones digitales y agentes de inteligencia artificial para empresas.",
    summary:
      "Sitio corporativo en produccion para ktalweb.com.pe con catalogo de soluciones, arquitectura en Next.js y diseno responsive optimizado.",
    description: [
      "Plataforma completa para la marca Ktalweb con presentacion de servicios de software, IA y transformacion digital.",
      "Integracion de secciones interactivas, catalogo de soluciones y canales de contacto directo.",
      "Despliegue en produccion en dominio corporativo ktalweb.com.pe.",
    ],
    techs: ["Next.js", "React", "TypeScript", "TailwindCSS", "Framer Motion"],
    highlights: ["Agentes de IA", "Catalogo de soluciones", "Formulario de contacto", "Diseno responsive"],
    cover: "/images/projects/ktalweb/home.png",
    logo: "/images/projects/ktalweb/logo.webp",
    gallery: [
      { title: "Vista principal ktalweb.com.pe", img: "/images/projects/ktalweb/home.png" },
      { title: "Seccion soluciones de IA", img: "/images/projects/ktalweb/soluciones.webp" },
      { title: "Identidad visual Ktalweb", img: "/images/projects/ktalweb/logo.webp" },
    ],
    repositoryLabel: "ktalweb-official-web",
    repositoryUrl: "https://github.com/germanhyt",
    productionUrl: "https://ktalweb.com.pe/",
  },
  {
    id: 1,
    title: "CRM Bosque Magico — Panel Comercial",
    category: "Fullstack web",
    publishDate: "Noviembre 2024",
    visibility: "Privado",
    objective:
      "Centralizar el embudo de ventas, eventos y cotizaciones de Bosque Magico en una plataforma web en tiempo real.",
    summary:
      "CRM fullstack para eventos: frontend React + Vite y backend NestJS con PostgreSQL, WebSockets y calculo automatico de paquetes.",
    description: [
      "Dashboard comercial con metricas de eventos, cotizaciones activas, calendario mensual de fechas ocupadas y modulo de agenda.",
      "Generador dinamico de cotizaciones por tipo de evento, invitados, servicios adicionales y descuentos autorizados.",
      "Gestion de clientes, pipeline de seguimiento comercial e historial de interacciones.",
      "Entorno de pruebas activo en sandbox-panel-bosque.gcbprojects.site; produccion en bosque-panel.com.",
    ],
    techs: ["React", "TypeScript", "Vite", "NestJS", "PostgreSQL", "WebSockets", "TailwindCSS", "Docker"],
    highlights: [
      "Pipeline comercial",
      "Calendario de eventos",
      "Cotizador dinamico",
      "Notificaciones en tiempo real",
      "Exportacion PDF",
    ],
    cover: "/images/projects/prod-captures/bosque-panel-prod.png",
    logo: "/images/projects/bosque-magico/logo-bm.png",
    gallery: [
      { title: "Vista en produccion — panel", img: "/images/projects/prod-captures/bosque-panel-prod.png" },
      { title: "Dashboard de eventos", img: "/images/projects/bosque-magico/crm-dashboard.png" },
      { title: "Modulo de cotizaciones", img: "/images/projects/bosque-magico/crm-cotizaciones.png" },
      { title: "Agenda y calendario", img: "/images/projects/bosque-magico/crm-agenda.png" },
      { title: "Solicitudes y clientes", img: "/images/projects/bosque-magico/crm-solicitudes.png" },
      { title: "Identidad de marca", img: "/images/projects/bosque-magico/logo-bm.png" },
    ],
    localSource:
      "proyecto-bosque-magico (docker-compose.prod.yml + docker-compose.sandbox.yml)",
    repositoryLabel:
      "softcrm-bosquemagico-frontend-prod001 + softcrm-bosquemagico-backend-prod001",
    repositoryUrl: "https://github.com/germanhyt",
    productionUrl: "https://bosque-panel.com/",
    testingUrl: "https://sandbox-panel-bosque.gcbprojects.site/",
  },
  {
    id: 2,
    title: "Landing Corporativa Bosque Magico",
    category: "Landing page",
    publishDate: "Diciembre 2024",
    visibility: "Privado",
    objective:
      "Ofrecer una experiencia web inmersiva para familias y organizadores de eventos en el local de Bosque Magico.",
    summary:
      "Landing corporativa React + Vite con galeria interactiva, paquetes de eventos, recorrido por las instalaciones y conexion directa con el CRM.",
    description: [
      "Hero inmersivo con recorrido por zonas del local, salon infantil, areas verdes y ambientes tematicos.",
      "Presentacion de paquetes de cumpleaños, eventos corporativos y celebraciones con desglose de servicios incluidos.",
      "Formulario de contacto de alta conversion sincronizado con la API comercial del CRM.",
      "Produccion en bosquemagico.pe; ambiente de integracion activo en sandbox-landing-bosque.gcbprojects.site.",
    ],
    techs: ["React", "TypeScript", "Vite", "TailwindCSS", "Framer Motion"],
    highlights: [
      "Hero inmersivo",
      "Galeria por zonas",
      "Catalogo de paquetes",
      "Formulario directo a CRM",
    ],
    cover: "/images/projects/prod-captures/bosque-landing-prod.png",
    logo: "/images/projects/bosque-magico/logo-bm.png",
    gallery: [
      { title: "Vista en produccion — landing", img: "/images/projects/prod-captures/bosque-landing-prod.png" },
      { title: "Hero principal landing", img: "/images/projects/bosque-magico/hero.jpg" },
      { title: "Vista desktop", img: "/images/projects/bosque-magico/landing-desktop.png" },
      { title: "Version movil", img: "/images/projects/bosque-magico/landing-mobile.png" },
      { title: "Logo oficial", img: "/images/projects/bosque-magico/logo-bm.png" },
    ],
    localSource: "proyecto-bosque-magico/landing-web",
    repositoryLabel: "softlanding-bosquemagico-frontend-prod001",
    repositoryUrl: "https://github.com/germanhyt",
    productionUrl: "https://bosquemagico.pe/",
    testingUrl: "https://sandbox-landing-bosque.gcbprojects.site/",
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
    publishDate: "Enero 2025",
    visibility: "Privado",
    objective:
      "Gestionar el aforo, emision de tickets, tarifas por tiempo y control operativo de vehiculos en playas de estacionamiento.",
    summary:
      "Plataforma web de control vehicular: frontend React + Vite, API Laravel, emision de tickets y WebSockets para barreras de acceso.",
    description: [
      "Control de ingreso/salida de vehiculos con impresion de tickets, codigo de barras y calculo automatico de tarifa por minutos o fraccion.",
      "Dashboard operativo de aforo en tiempo real por zonas y tipo de cliente (abonado, visitante, contratista).",
      "Modulo de caja con cierres diarios, reportes por medio de pago y registro de auditoria.",
      "Sandbox operativo en sandbox-admin.estacionamiento.gcbprojects.site; frontend publico de administracion en estacionamiento.gcbprojects.site.",
    ],
    techs: ["React", "TypeScript", "Vite", "PHP", "Laravel", "MySQL", "WebSockets", "Docker"],
    highlights: [
      "Aforo en tiempo real",
      "Emision de tickets",
      "Calculo dinamico de tarifa",
      "Integracion de barreras",
      "Cierre de caja",
    ],
    cover: "/images/projects/prod-captures/parking-login-prod.png",
    logo: "/images/projects/parking-gcb/logo.webp",
    gallery: [
      { title: "Vista en produccion — acceso", img: "/images/projects/prod-captures/parking-login-prod.png" },
      { title: "Panel de ingreso", img: "/images/projects/parking-gcb/panel-login.png" },
      { title: "Ticket de entrada", img: "/images/projects/parking-gcb/ticket-entrada.jpg" },
      { title: "Logo estacionamiento", img: "/images/projects/parking-gcb/logo.webp" },
      { title: "Variacion de logo", img: "/images/projects/parking-gcb/logo-var.webp" },
      { title: "Icono aplicativo", img: "/images/projects/parking-gcb/logo-icon.webp" },
    ],
    localSource:
      "parking-system-gcb (estacionamiento + estacionamiento-sandbox)",
    repositoryLabel: "parking-system-gcb-frontend + backend",
    repositoryUrl: "https://github.com/germanhyt",
    productionUrl: "https://estacionamiento.gcbprojects.site/",
    testingUrl: "https://sandbox-admin.estacionamiento.gcbprojects.site/",
  },
  {
    id: 5,
    title: "Plataforma de Analitica Data Refugio",
    category: "Data Analytics",
    publishDate: "Febrero 2025",
    visibility: "Privado",
    objective:
      "Transformar los datos operativos de restaurantes en dashboards de decisiones para gestion de ventas, insumos y rentabilidad.",
    summary:
      "Plataforma BI y analitica gastronómica: frontend React + Vite, backend Python (FastAPI), BigQuery y modelos predictivos de consumo.",
    description: [
      "Dashboard ejecutivo con indicadores de ticket promedio, horario pico, platos mas vendidos y rotacion de mesas.",
      "Integración de pipelines ETL desde puntos de venta hacia almacenamiento analitico en GCP BigQuery.",
      "Generacion de reportes consolidados y kiosco de consulta rapida para administradores de sede.",
      "Despliegue operativo en datarefugio.gcbprojects.site con API en api.datarefugio.gcbprojects.site y kiosco en kiosk.datarefugio.gcbprojects.site.",
    ],
    techs: ["React", "TypeScript", "Python", "FastAPI", "BigQuery", "GCP", "TailwindCSS", "Docker"],
    highlights: [
      "Dashboards ejecutivos",
      "Pipelines BigQuery",
      "Analisis de rotacion",
      "Kiosco para sedes",
      "Reportes de rentabilidad",
    ],
    cover: "/images/projects/refugio-data/bg.png",
    logo: "/images/projects/refugio-data/logo.png",
    gallery: [
      { title: "Plataforma analitica — vista principal", img: "/images/projects/refugio-data/bg.png" },
      { title: "Informe consolidado", img: "/images/projects/refugio-data/informe.png" },
      { title: "Identidad Data Refugio", img: "/images/projects/refugio-data/logo.png" },
    ],
    localSource:
      "datarefugio (backend + frontend + kiosk-web + tools/nginx-api-websocket.example.conf)",
    repositoryLabel: "datarefugio-analytics-platform",
    repositoryUrl: "https://github.com/germanhyt",
    productionUrl: "https://datarefugio.gcbprojects.site/",
    testingUrl: "https://kiosk.datarefugio.gcbprojects.site/",
  },
  {
    id: 6,
    title: "Sistema de Reservas SISA Coffee",
    category: "Fullstack web",
    publishDate: "Marzo 2025",
    visibility: "Privado",
    objective:
      "Digitalizar la reserva de mesas, espacios de trabajo y experiencias de cata en SISA Coffee con confirmacion inmediata.",
    summary:
      "Sistema de reservas PWA: frontend React + Vite + PWA, backend Node.js (Express), mapa de planta interactivo y notificaciones.",
    description: [
      "Mapa de planta en 2D interactivo con seleccion de mesas por nivel (planta 1 y planta 2), horario y numero de personas.",
      "Formulario de registro fluido con confirmacion via email y recordatorios automáticos de reserva.",
      "Panel de administracion para recepcion con gestion de reservas activas, cancelaciones y aforo por turno.",
      "Modulo PWA instalable para clientes frecuentes y personal de sala.",
      "Despliegue activo en sisa.reservaspe.com.",
    ],
    techs: ["React", "TypeScript", "Vite", "Node.js", "Express", "PostgreSQL", "PWA", "TailwindCSS"],
    highlights: [
      "Mapa interactivo de planta",
      "Reserva de mesas en 2D",
      "PWA instalable",
      "Panel de recepcion",
      "Notificaciones por email",
    ],
    cover: "/images/projects/prod-captures/sisa-registro-prod.png",
    logo: "/images/projects/sisa-reservas/logo-blanco.svg",
    gallery: [
      { title: "Vista en produccion — formulario de reserva", img: "/images/projects/prod-captures/sisa-registro-prod.png" },
      { title: "Formulario de registro de reserva", img: "/images/projects/sisa-reservas/registro-form.png" },
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
