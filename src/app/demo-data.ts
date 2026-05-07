export type DemoKind =
  | 'home'
  | 'content'
  | 'listing'
  | 'detail'
  | 'dashboard'
  | 'form'
  | 'table'
  | 'login';

export interface DemoMetric {
  label: string;
  value: string;
}

export interface DemoCard {
  title: string;
  subtitle: string;
  detail: string;
}

export interface DemoTable {
  columns: string[];
  rows: string[][];
}

export interface DemoField {
  label: string;
  value: string;
}

export interface DemoPage {
  key: string;
  path: string;
  samplePath: string;
  label: string;
  title: string;
  eyebrow: string;
  summary: string;
  accent: string;
  kind: DemoKind;
  metrics: DemoMetric[];
  cards: DemoCard[];
  bullets: string[];
  table?: DemoTable;
  fields?: DemoField[];
}

const portalPages: DemoPage[] = [
  {
    key: 'home',
    path: 'home',
    samplePath: '/home',
    label: 'Inicio',
    title: 'Observatorio Apurimac',
    eyebrow: 'Portada institucional',
    summary:
      'Una portada más clara y contemporánea para presentar evidencia, contenidos multimedia y enlaces de consulta en una sola experiencia.',
    accent: 'aurora',
    kind: 'home',
    metrics: [
      { label: 'Vistas públicas', value: '13' },
      { label: 'Módulos demo', value: '30' },
      { label: 'Aliados estratégicos', value: '18' },
    ],
    cards: [
      { title: 'Noticias priorizadas', subtitle: 'Actualidad regional', detail: 'Titulares destacados con lectura rápida, etiquetas y CTA directos.' },
      { title: 'Infografías interactivas', subtitle: 'Evidencia visual', detail: 'Bloques editoriales listos para mostrar fichas, datos y resúmenes.' },
      { title: 'Repositorio temático', subtitle: 'Consulta técnica', detail: 'Colección de documentos con filtros y fichas de acceso visible.' },
    ],
    bullets: ['Hero editorial con llamada principal', 'Bloques modulares para noticias, videos y repositorio', 'Resumen visual del ecosistema del observatorio'],
  },
  {
    key: 'about',
    path: 'about',
    samplePath: '/about',
    label: 'Nosotros',
    title: 'Quienes Somos',
    eyebrow: 'Presentación institucional',
    summary: 'Una sección de narrativa institucional con tono más humano, mejor jerarquía tipográfica y foco en propósito, alcance y resultados.',
    accent: 'cobre',
    kind: 'content',
    metrics: [
      { label: 'Ejes de trabajo', value: '4' },
      { label: 'Lineas de articulación', value: '6' },
      { label: 'Cobertura territorial', value: '7 provincias' },
    ],
    cards: [
      { title: 'Misión', subtitle: 'Gestión basada en evidencia', detail: 'Explica el valor del observatorio para decisiones públicas y articulación social.' },
      { title: 'Visión', subtitle: 'Incidencia sostenible', detail: 'Muestra un horizonte de transformación con enfoque territorial y de derechos.' },
      { title: 'Equipo y red', subtitle: 'Trabajo colaborativo', detail: 'Espacio para reconocer especialistas, aliados y articulaciones.' },
    ],
    bullets: ['Línea de tiempo institucional', 'Resumen de capacidades del observatorio', 'Tarjetas con principios de trabajo'],
  },
  {
    key: 'contact',
    path: 'contact',
    samplePath: '/contact',
    label: 'Contacto',
    title: 'Canales de Atencion',
    eyebrow: 'Vinculación con la ciudadanía',
    summary: 'Una vista de contacto pensada para convertir consultas en acciones: mapa, áreas responsables, horarios y formulario visible.',
    accent: 'rio',
    kind: 'content',
    metrics: [
      { label: 'Puntos de contacto', value: '5' },
      { label: 'Tiempo de respuesta', value: '24 h' },
      { label: 'Cobertura digital', value: '100%' },
    ],
    cards: [
      { title: 'Mesa de consultas', subtitle: 'Atención general', detail: 'Canal principal para orientación ciudadana y derivaciones temáticas.' },
      { title: 'Prensa y difusión', subtitle: 'Vocería institucional', detail: 'Espacio para solicitudes de entrevistas, contenidos y materiales.' },
      { title: 'Cooperación y aliados', subtitle: 'Articulación externa', detail: 'Contacto para proyectos, convenios y acciones conjuntas.' },
    ],
    bullets: ['Formulario visual de contacto', 'Mapa estilizado del punto institucional', 'Tarjetas por canal con responsable y horario'],
  },
  {
    key: 'infografias',
    path: 'infografias',
    samplePath: '/infografias',
    label: 'Infografías',
    title: 'Biblioteca de Infografias',
    eyebrow: 'Visualización de datos',
    summary: 'Catálogo visual con enfoque editorial para explorar piezas de evidencia rápida y contenidos listos para difusión.',
    accent: 'selva',
    kind: 'listing',
    metrics: [
      { label: 'Piezas activas', value: '24' },
      { label: 'Series temáticas', value: '8' },
      { label: 'Formato descarga', value: 'PNG/PDF' },
    ],
    cards: [
      { title: 'Niñez y adolescencia', subtitle: 'Serie priorizada', detail: 'Lectura rápida de brechas, avances y alertas.' },
      { title: 'Violencia de genero', subtitle: 'Indicadores clave', detail: 'Piezas preparadas para campañas, notas y presentaciones.' },
      { title: 'Servicios sociales', subtitle: 'Monitoreo territorial', detail: 'Comparativos por provincia y alertas institucionales.' },
    ],
    bullets: ['Mosaico con portadas de infografías', 'Etiquetas por temática y fecha', 'CTA directo a cada ficha visual'],
  },
  {
    key: 'marco-conceptual',
    path: 'marco-conceptual',
    samplePath: '/marco-conceptual',
    label: 'Marco conceptual',
    title: 'Marco Conceptual',
    eyebrow: 'Base metodológica',
    summary: 'Una lectura limpia y más pedagógica de conceptos, definiciones y enfoques que sostienen la lógica del observatorio.',
    accent: 'aurora',
    kind: 'content',
    metrics: [
      { label: 'Conceptos base', value: '12' },
      { label: 'Enfoques transversales', value: '5' },
      { label: 'Documentos de respaldo', value: '9' },
    ],
    cards: [
      { title: 'Enfoque territorial', subtitle: 'Lectura del contexto', detail: 'Describe como se analizan desigualdades y dinámicas locales.' },
      { title: 'Enfoque de derechos', subtitle: 'Marco de interpretación', detail: 'Ordena los contenidos desde garantías, acceso y respuesta pública.' },
      { title: 'Modelo de análisis', subtitle: 'Sistema de evidencia', detail: 'Conecta datos, visualización y toma de decisiones.' },
    ],
    bullets: ['Sección con texto largo mejor ventilado', 'Cajas de conceptos clave', 'Referencias metodológicas destacadas'],
  },
  {
    key: 'noticias',
    path: 'noticias',
    samplePath: '/noticias',
    label: 'Noticias',
    title: 'Sala de Noticias',
    eyebrow: 'Actualidad y seguimiento',
    summary: 'La vista prioriza actualidad, lectura rápida y relevancia institucional con un diseño más cercano a un medio digital.',
    accent: 'cobre',
    kind: 'listing',
    metrics: [
      { label: 'Publicaciones', value: '63' },
      { label: 'Categorias', value: '7' },
      { label: 'Notas destacadas', value: '5' },
    ],
    cards: [
      { title: 'Titular principal', subtitle: 'Cobertura regional', detail: 'Espacio hero para la noticia más importante del momento.' },
      { title: 'Notas secundarias', subtitle: 'Actualización continua', detail: 'Grid con piezas breves, etiquetas y mini resúmenes.' },
      { title: 'Agenda del observatorio', subtitle: 'Próximos hitos', detail: 'Banda lateral con eventos, campañas y anuncios.' },
    ],
    bullets: ['Diseño tipo newsroom', 'Filtros visuales por categoría', 'Tarjetas con jerarquía de contenido'],
  },
  {
    key: 'sistema-regional',
    path: 'sistema-regional',
    samplePath: '/sistema-regional',
    label: 'Sistema regional',
    title: 'Sistema Regional de Proteccion',
    eyebrow: 'Mapa de articulación',
    summary: 'Página pensada para explicar actores, flujos y responsabilidades del sistema regional de forma más didáctica y visual.',
    accent: 'rio',
    kind: 'content',
    metrics: [
      { label: 'Instituciones mapeadas', value: '21' },
      { label: 'Rutas de atención', value: '6' },
      { label: 'Niveles de gestión', value: '3' },
    ],
    cards: [
      { title: 'Gobernanza', subtitle: 'Instancias de decisión', detail: 'Mapa de actores con relaciones visibles y jerarquía clara.' },
      { title: 'Servicios', subtitle: 'Respuesta territorial', detail: 'Explica puertas de entrada, atención y derivaciones.' },
      { title: 'Coordinación', subtitle: 'Trabajo intersectorial', detail: 'Resumen de roles, mesas y circuitos de articulación.' },
    ],
    bullets: ['Infografía de arquitectura institucional', 'Tarjetas por actor clave', 'Bloques de ruta y articulación'],
  },
  {
    key: 'videos',
    path: 'videos',
    samplePath: '/videos',
    label: 'Videos',
    title: 'Mediateca Audiovisual',
    eyebrow: 'Divulgación en video',
    summary: 'Una videoteca con miniaturas grandes, orden visual y foco en campañas, entrevistas y material de sensibilización.',
    accent: 'aurora',
    kind: 'listing',
    metrics: [
      { label: 'Videos activos', value: '18' },
      { label: 'Series', value: '4' },
      { label: 'Duración promedio', value: '03:20' },
    ],
    cards: [
      { title: 'Campañas', subtitle: 'Mensajes de sensibilización', detail: 'Videos cortos de alto impacto visual para difusión.' },
      { title: 'Entrevistas', subtitle: 'Vocería y análisis', detail: 'Contenido con especialistas y actores del territorio.' },
      { title: 'Cobertura de actividades', subtitle: 'Memoria institucional', detail: 'Registro audiovisual de eventos y acciones clave.' },
    ],
    bullets: ['Miniaturas con overlay de duración', 'Layout para galerías de video', 'Bloque destacado para reproducción principal'],
  },
  {
    key: 'repositorio',
    path: 'repositorio',
    samplePath: '/repositorio',
    label: 'Repositorio',
    title: 'Repositorio Documental',
    eyebrow: 'Consulta técnica y académica',
    summary: 'Una biblioteca más ordenada para estudios, normas, reportes y productos técnicos del observatorio y sus aliados.',
    accent: 'selva',
    kind: 'listing',
    metrics: [
      { label: 'Documentos', value: '112' },
      { label: 'Colecciones', value: '11' },
      { label: 'Etiquetas activas', value: '28' },
    ],
    cards: [
      { title: 'Informes regionales', subtitle: 'Análisis territorial', detail: 'Publicaciones de seguimiento con fichas de lectura.' },
      { title: 'Normativa y guías', subtitle: 'Marco operativo', detail: 'Documentos organizados por tema, nivel y vigencia.' },
      { title: 'Investigación aliada', subtitle: 'Conocimiento externo', detail: 'Biblioteca conectada con organizaciones y academia.' },
    ],
    bullets: ['Cabecera con buscador visible', 'Tarjetas por colección', 'Resumen de filtros por tipo, tema y año'],
  },
  {
    key: 'detalle-repositorio',
    path: 'detalle-repositorio/:id',
    samplePath: '/detalle-repositorio/demo-ficha',
    label: 'Detalle repositorio',
    title: 'Ficha de Documento',
    eyebrow: 'Detalle documental',
    summary: 'Vista de lectura rápida con portada del documento, metadatos y acciones principales sin ruido visual.',
    accent: 'selva',
    kind: 'detail',
    metrics: [
      { label: 'Formato', value: 'PDF' },
      { label: 'Paginas', value: '86' },
      { label: 'Actualización', value: '2026' },
    ],
    cards: [
      { title: 'Resumen ejecutivo', subtitle: 'Lectura inmediata', detail: 'Caja introductoria para entender el aporte del documento.' },
      { title: 'Metadatos', subtitle: 'Referencia ordenada', detail: 'Autoría, fecha, categoría, palabras clave y procedencia.' },
      { title: 'Recursos relacionados', subtitle: 'Profundización', detail: 'Lista curada de documentos cercanos y productos derivados.' },
    ],
    bullets: ['Portada grande con acciones laterales', 'Panel de información bibliográfica', 'Bloque de citas y relacionados'],
    fields: [
      { label: 'Autor responsable', value: 'Equipo técnico del observatorio' },
      { label: 'Tema', value: 'Protección integral y gestión territorial' },
      { label: 'Cobertura', value: 'Apurímac y provincias priorizadas' },
    ],
  },
  {
    key: 'detalle-infografia',
    path: 'detalle-infografia/:id',
    samplePath: '/detalle-infografia/1',
    label: 'Detalle infografía',
    title: 'Ficha de Infografia',
    eyebrow: 'Detalle visual',
    summary: 'Presentación inmersiva de una pieza gráfica con contexto, indicadores clave y opciones de descarga visibles.',
    accent: 'rio',
    kind: 'detail',
    metrics: [
      { label: 'Formato', value: 'PNG' },
      { label: 'Tema central', value: 'Prevención' },
      { label: 'Uso sugerido', value: 'Difusión' },
    ],
    cards: [
      { title: 'Vista previa', subtitle: 'Pieza principal', detail: 'Espacio amplio para la infografía con mejor protagonismo visual.' },
      { title: 'Mensajes clave', subtitle: 'Contexto de uso', detail: 'Resumen que explica cómo leer y compartir el contenido.' },
      { title: 'Serie relacionada', subtitle: 'Contenido complementario', detail: 'Más piezas conectadas por temática y campaña.' },
    ],
    bullets: ['Lienzo central grande', 'Panel lateral con datos contextuales', 'Carrusel de piezas relacionadas'],
    fields: [
      { label: 'Campaña', value: 'Protección y bienestar' },
      { label: 'Audiencia objetivo', value: 'Ciudadanía y equipos técnicos' },
      { label: 'Frecuencia de actualización', value: 'Trimestral' },
    ],
  },
  {
    key: 'detalle-noticia',
    path: 'detalle-noticia/:id',
    samplePath: '/detalle-noticia/1',
    label: 'Detalle noticia',
    title: 'Nota Completa',
    eyebrow: 'Cobertura editorial',
    summary: 'Lectura de noticia con foco en claridad, ritmo y jerarquía entre titular, bajada, cuerpo y contenidos relacionados.',
    accent: 'cobre',
    kind: 'detail',
    metrics: [
      { label: 'Lectura estimada', value: '4 min' },
      { label: 'Categoría', value: 'Actualidad' },
      { label: 'Compartidos', value: '128' },
    ],
    cards: [
      { title: 'Titular y contexto', subtitle: 'Entrada editorial', detail: 'Cabecera limpia con fecha, etiqueta y resumen de alto impacto.' },
      { title: 'Cuerpo de la nota', subtitle: 'Lectura cómoda', detail: 'Columnado ancho, citas y recuadros complementarios.' },
      { title: 'Relacionados', subtitle: 'Continuidad temática', detail: 'Noticias vinculadas para ampliar la lectura.' },
    ],
    bullets: ['Hero periodístico con gran imagen', 'Texto mejor espaciado para lectura larga', 'Lateral con enlaces relacionados y CTA'],
    fields: [
      { label: 'Fuente principal', value: 'Sala de monitoreo regional' },
      { label: 'Cobertura', value: 'Región Apurímac' },
      { label: 'Estado', value: 'Publicado' },
    ],
  },
  {
    key: 'detalle-video',
    path: 'detalle-video/:id',
    samplePath: '/detalle-video/1',
    label: 'Detalle video',
    title: 'Ficha de Video',
    eyebrow: 'Contenido audiovisual',
    summary: 'Página pensada para reproducción destacada, descripción breve, metadatos y galería lateral de otros videos.',
    accent: 'aurora',
    kind: 'detail',
    metrics: [
      { label: 'Duración', value: '05:14' },
      { label: 'Resolución', value: 'Full HD' },
      { label: 'Serie', value: 'Campañas' },
    ],
    cards: [
      { title: 'Reproductor protagonista', subtitle: 'Experiencia inmersiva', detail: 'Un bloque visual amplio para centrar la atención en el video.' },
      { title: 'Ficha descriptiva', subtitle: 'Contexto y uso', detail: 'Se resume el objetivo del video y cómo aprovecharlo en difusión.' },
      { title: 'Playlist sugerida', subtitle: 'Navegación continua', detail: 'Relación con materiales cercanos sin salir de la experiencia.' },
    ],
    bullets: ['Header con miniatura grande', 'Panel de información técnica', 'Lista lateral de contenidos relacionados'],
    fields: [
      { label: 'Vocería', value: 'Equipo del observatorio' },
      { label: 'Objetivo', value: 'Sensibilización y reporte público' },
      { label: 'Canal', value: 'Portal y redes institucionales' },
    ],
  },
];

const dashboardPages: DemoPage[] = [
  {
    key: 'dashboard',
    path: 'dashboard',
    samplePath: '/dashboard',
    label: 'Dashboard',
    title: 'Panel General',
    eyebrow: 'Centro de gestión',
    summary: 'Un tablero ejecutivo con indicadores, actividad reciente, estado editorial y accesos rápidos a todos los módulos.',
    accent: 'aurora',
    kind: 'dashboard',
    metrics: [
      { label: 'Contenidos activos', value: '217' },
      { label: 'Pendientes de revisión', value: '12' },
      { label: 'Usuarios internos', value: '9' },
    ],
    cards: [
      { title: 'Rendimiento semanal', subtitle: 'Pulso del portal', detail: 'Resumen del movimiento editorial y piezas más consultadas.' },
      { title: 'Alertas operativas', subtitle: 'Seguimiento rápido', detail: 'Pendientes, aprobaciones y elementos con observaciones.' },
      { title: 'Acciones frecuentes', subtitle: 'Atajos de gestión', detail: 'Entradas directas a creación, edición y revisión de contenidos.' },
    ],
    bullets: ['KPIs con lectura inmediata', 'Panel de actividad reciente', 'Módulos visuales para control operativo'],
  },
  {
    key: 'crear-noticia',
    path: 'crear-noticia',
    samplePath: '/crear-noticia',
    label: 'Crear noticia',
    title: 'Crear Noticia',
    eyebrow: 'Formulario editorial',
    summary: 'Formulario estático para redactar, categorizar y programar noticias con estructura más clara que la vista original.',
    accent: 'cobre',
    kind: 'form',
    metrics: [
      { label: 'Campos clave', value: '9' },
      { label: 'Estado por defecto', value: 'Borrador' },
      { label: 'Canales', value: 'Portal y redes' },
    ],
    cards: [
      { title: 'Datos principales', subtitle: 'Titular y resumen', detail: 'Encabezado, extracto, categoría y fecha de publicación.' },
      { title: 'Contenido', subtitle: 'Cuerpo de la nota', detail: 'Área principal de redacción con bloques de apoyo visual.' },
      { title: 'Difusión', subtitle: 'Control editorial', detail: 'Etiquetas, portada, autor y visibilidad.' },
    ],
    bullets: ['Formulario en dos columnas', 'Resumen lateral del borrador', 'CTA claros para guardar y publicar'],
    fields: [
      { label: 'Titular', value: 'Nueva campaña regional de protección integral' },
      { label: 'Categoría', value: 'Actualidad institucional' },
      { label: 'Estado', value: 'Borrador' },
    ],
  },
  {
    key: 'crear-infografia',
    path: 'crear-infografia',
    samplePath: '/crear-infografia',
    label: 'Crear infografía',
    title: 'Registrar Infografia',
    eyebrow: 'Carga visual',
    summary: 'Pantalla para registrar una nueva pieza gráfica con mejor jerarquía de inputs y bloque de vista previa.',
    accent: 'selva',
    kind: 'form',
    metrics: [
      { label: 'Campos clave', value: '7' },
      { label: 'Formatos', value: 'PNG/PDF' },
      { label: 'Canal principal', value: 'Biblioteca visual' },
    ],
    cards: [
      { title: 'Información base', subtitle: 'Titulo y temática', detail: 'Datos mínimos de la pieza y su clasificación.' },
      { title: 'Carga del archivo', subtitle: 'Asset principal', detail: 'Zona de arrastre o carga visible con validaciones visuales.' },
      { title: 'Vista previa', subtitle: 'Control final', detail: 'Bloque para revisar portada, etiquetas y mensaje principal.' },
    ],
    bullets: ['Área de carga destacada', 'Preview integrada en el flujo', 'Resumen de uso y audiencia'],
    fields: [
      { label: 'Título', value: 'Brechas territoriales 2026' },
      { label: 'Serie', value: 'Monitoreo regional' },
      { label: 'Formato', value: 'PNG horizontal' },
    ],
  },
  {
    key: 'crear-video',
    path: 'crear-video',
    samplePath: '/crear-video',
    label: 'Crear video',
    title: 'Registrar Video',
    eyebrow: 'Gestión audiovisual',
    summary: 'Formulario visual para registrar videos con foco en miniatura, enlace, descripción y clasificación de campaña.',
    accent: 'aurora',
    kind: 'form',
    metrics: [
      { label: 'Campos clave', value: '8' },
      { label: 'Fuentes soportadas', value: 'YouTube/Vimeo' },
      { label: 'Estado', value: 'Programado' },
    ],
    cards: [
      { title: 'Metadatos del video', subtitle: 'Datos de publicación', detail: 'Título, duración, enlace y serie audiovisual.' },
      { title: 'Carátula', subtitle: 'Portada y estética', detail: 'Espacio para miniatura y control de imagen de portada.' },
      { title: 'Descripción', subtitle: 'Contexto de difusión', detail: 'Ayuda a documentar el propósito y audiencia del material.' },
    ],
    bullets: ['Carga de miniatura destacada', 'Tarjeta lateral de reproducción', 'Acciones visibles para guardar o programar'],
    fields: [
      { label: 'Título', value: 'Testimonios de articulación territorial' },
      { label: 'Plataforma', value: 'YouTube' },
      { label: 'Serie', value: 'Voces del territorio' },
    ],
  },
  {
    key: 'crear-usuario',
    path: 'crear-usuario',
    samplePath: '/crear-usuario',
    label: 'Crear usuario',
    title: 'Nuevo Usuario',
    eyebrow: 'Administración interna',
    summary: 'Vista de alta de usuarios con mejor organización de roles, acceso, contacto y permisos.',
    accent: 'rio',
    kind: 'form',
    metrics: [
      { label: 'Perfiles disponibles', value: '4' },
      { label: 'Permisos agrupados', value: '6' },
      { label: 'Acceso inicial', value: 'Temporal' },
    ],
    cards: [
      { title: 'Datos personales', subtitle: 'Identificación', detail: 'Nombre, correo, cargo y dependencia.' },
      { title: 'Rol y permisos', subtitle: 'Acceso segmentado', detail: 'Asignación clara del alcance operativo.' },
      { title: 'Estado de cuenta', subtitle: 'Control administrativo', detail: 'Activación, vigencia y observaciones de seguridad.' },
    ],
    bullets: ['Permisos en chips visuales', 'Formulario dividido por bloques', 'Panel lateral con resumen de acceso'],
    fields: [
      { label: 'Perfil', value: 'Editor institucional' },
      { label: 'Dependencia', value: 'Equipo de contenidos' },
      { label: 'Estado', value: 'Pendiente de activación' },
    ],
  },
  {
    key: 'lista-infografia',
    path: 'lista-infografia',
    samplePath: '/lista-infografia',
    label: 'Lista infografías',
    title: 'Gestion de Infografias',
    eyebrow: 'Listado administrativo',
    summary: 'Tabla con filtros y estados para manejar piezas gráficas sin perder legibilidad.',
    accent: 'selva',
    kind: 'table',
    metrics: [
      { label: 'Registros', value: '24' },
      { label: 'Borradores', value: '3' },
      { label: 'Publicadas', value: '21' },
    ],
    cards: [
      { title: 'Filtros rápidos', subtitle: 'Búsqueda y estado', detail: 'Controles para ordenar por serie, fecha y publicación.' },
      { title: 'Acciones masivas', subtitle: 'Operación eficiente', detail: 'Opciones visuales para publicar, archivar o duplicar.' },
      { title: 'Resumen por serie', subtitle: 'Lectura ejecutiva', detail: 'Bloque lateral que sintetiza volúmenes por categoría.' },
    ],
    bullets: ['Tabla con estados de color', 'Cabecera fija con acciones', 'Módulo de resumen lateral'],
    table: {
      columns: ['Título', 'Serie', 'Estado', 'Fecha'],
      rows: [
        ['Brechas territoriales 2026', 'Monitoreo', 'Publicada', '06 May 2026'],
        ['Ruta de atención regional', 'Sistema', 'Borrador', '03 May 2026'],
        ['Indicadores de alerta', 'Prevención', 'Publicada', '29 Abr 2026'],
      ],
    },
  },
  {
    key: 'lista-noticia',
    path: 'lista-noticia',
    samplePath: '/lista-noticia',
    label: 'Lista noticias',
    title: 'Gestion de Noticias',
    eyebrow: 'Control editorial',
    summary: 'Tabla editorial con filtros, estado de publicación y atajos de edición más claros que el diseño original.',
    accent: 'cobre',
    kind: 'table',
    metrics: [
      { label: 'Noticias activas', value: '63' },
      { label: 'Programadas', value: '7' },
      { label: 'Destacadas', value: '5' },
    ],
    cards: [
      { title: 'Búsqueda rápida', subtitle: 'Encontrar y editar', detail: 'Entrada de búsqueda visible y filtros compactos.' },
      { title: 'Flujo editorial', subtitle: 'Publicación controlada', detail: 'Estado, autor, fecha y categoría en una sola lectura.' },
      { title: 'Acciones', subtitle: 'Edición directa', detail: 'Botones más limpios para revisar, editar o despublicar.' },
    ],
    bullets: ['Tabla más aireada', 'Estados editoriales legibles', 'Sección de acciones superiores'],
    table: {
      columns: ['Titular', 'Categoría', 'Estado', 'Autor'],
      rows: [
        ['Campaña regional 2026', 'Actualidad', 'Publicada', 'Ana Valdivia'],
        ['Mesa técnica provincial', 'Agenda', 'Programada', 'Luis Tapia'],
        ['Reporte de monitoreo', 'Seguimiento', 'Borrador', 'María Huamán'],
      ],
    },
  },
  {
    key: 'lista-video',
    path: 'lista-video',
    samplePath: '/lista-video',
    label: 'Lista videos',
    title: 'Gestion de Videos',
    eyebrow: 'Biblioteca audiovisual',
    summary: 'Vista de gestión audiovisual con miniaturas, duración, serie y estado editorial.',
    accent: 'aurora',
    kind: 'table',
    metrics: [
      { label: 'Videos', value: '18' },
      { label: 'Series', value: '4' },
      { label: 'Pendientes', value: '2' },
    ],
    cards: [
      { title: 'Miniaturas', subtitle: 'Identificación rápida', detail: 'La primera columna funciona como referencia visual.' },
      { title: 'Metadatos', subtitle: 'Control técnico', detail: 'Duración, plataforma y clasificación en una sola tabla.' },
      { title: 'Visibilidad', subtitle: 'Estado de publicación', detail: 'Estados y acciones rápidas para el equipo.' },
    ],
    bullets: ['Tabla con portada de video', 'Duraciones como badges', 'Filtro por serie y canal'],
    table: {
      columns: ['Video', 'Serie', 'Duración', 'Estado'],
      rows: [
        ['Voces del territorio', 'Entrevistas', '05:14', 'Publicado'],
        ['Campaña de prevención', 'Campañas', '02:40', 'Programado'],
        ['Memoria del foro regional', 'Cobertura', '07:06', 'Publicado'],
      ],
    },
  },
  {
    key: 'lista-usuario',
    path: 'lista-usuario',
    samplePath: '/lista-usuario',
    label: 'Lista usuarios',
    title: 'Gestion de Usuarios',
    eyebrow: 'Accesos y perfiles',
    summary: 'Panel administrativo para usuarios con estados, perfiles y control de actividad de forma más ordenada.',
    accent: 'rio',
    kind: 'table',
    metrics: [
      { label: 'Usuarios', value: '9' },
      { label: 'Activos', value: '8' },
      { label: 'Roles', value: '4' },
    ],
    cards: [
      { title: 'Perfiles', subtitle: 'Lectura por rol', detail: 'La tabla resalta claramente el tipo de usuario.' },
      { title: 'Actividad', subtitle: 'Último acceso', detail: 'Facilita seguimiento administrativo y soporte.' },
      { title: 'Seguridad', subtitle: 'Estado de cuenta', detail: 'Estados activos, bloqueados o pendientes.' },
    ],
    bullets: ['Tabla con avatares y rol', 'Indicadores de seguridad', 'Filtros por perfil y estado'],
    table: {
      columns: ['Usuario', 'Rol', 'Estado', 'Último acceso'],
      rows: [
        ['Ana Valdivia', 'Administrador', 'Activo', 'Hoy 08:45'],
        ['Luis Tapia', 'Editor', 'Activo', 'Hoy 07:10'],
        ['María Huamán', 'Colaborador', 'Pendiente', 'Ayer 18:22'],
      ],
    },
  },
  {
    key: 'editar-infografia',
    path: 'editar-infografia/:id',
    samplePath: '/editar-infografia/1',
    label: 'Editar infografía',
    title: 'Editar Infografia',
    eyebrow: 'Actualización de pieza visual',
    summary: 'Misma lógica de registro, pero con histórico de cambios, preview actual y controles de versión.',
    accent: 'selva',
    kind: 'form',
    metrics: [
      { label: 'Versión actual', value: 'v3' },
      { label: 'Cambios pendientes', value: '2' },
      { label: 'Estado', value: 'En revisión' },
    ],
    cards: [
      { title: 'Asset actual', subtitle: 'Referencia vigente', detail: 'Vista previa de la pieza publicada o en borrador.' },
      { title: 'Edición de datos', subtitle: 'Metadatos y orden', detail: 'Actualiza tema, serie, fechas y descripciones.' },
      { title: 'Control de versión', subtitle: 'Seguimiento interno', detail: 'Notas de cambios y trazabilidad visual.' },
    ],
    bullets: ['Antes y después visual', 'Bloque de observaciones internas', 'Acciones para actualizar o duplicar'],
    fields: [
      { label: 'Versión', value: 'v3 en revisión' },
      { label: 'Última edición', value: 'Equipo de análisis' },
      { label: 'Motivo', value: 'Actualización de cifras 2026' },
    ],
  },
  {
    key: 'editar-noticia',
    path: 'editar-noticia/:id',
    samplePath: '/editar-noticia/1',
    label: 'Editar noticia',
    title: 'Editar Noticia',
    eyebrow: 'Ajuste editorial',
    summary: 'Una experiencia más cómoda para corregir contenidos, revisar portada y actualizar datos de publicación.',
    accent: 'cobre',
    kind: 'form',
    metrics: [
      { label: 'Versión actual', value: 'v5' },
      { label: 'Comentarios', value: '3' },
      { label: 'Estado', value: 'Publicado' },
    ],
    cards: [
      { title: 'Titular activo', subtitle: 'Contenido principal', detail: 'Se ve el estado actual antes de guardar cambios.' },
      { title: 'Edición y observaciones', subtitle: 'Mejora editorial', detail: 'Bloque para contenido y observaciones del equipo.' },
      { title: 'Control de publicación', subtitle: 'Visibilidad y fecha', detail: 'Configura si se actualiza portada o prioridad.' },
    ],
    bullets: ['Panel de observaciones', 'Vista previa del artículo', 'Acciones de actualización seguras'],
    fields: [
      { label: 'Estado', value: 'Publicado' },
      { label: 'Última revisión', value: '05 May 2026' },
      { label: 'Editor responsable', value: 'Ana Valdivia' },
    ],
  },
  {
    key: 'editar-usuario',
    path: 'editar-usuario/:id',
    samplePath: '/editar-usuario/1',
    label: 'Editar usuario',
    title: 'Editar Usuario',
    eyebrow: 'Ajuste de accesos',
    summary: 'Vista pensada para actualizar roles, permisos y estado de cuenta con mejor lectura operativa.',
    accent: 'rio',
    kind: 'form',
    metrics: [
      { label: 'Perfil actual', value: 'Editor' },
      { label: 'Permisos activos', value: '5' },
      { label: 'Estado', value: 'Activo' },
    ],
    cards: [
      { title: 'Ficha del usuario', subtitle: 'Datos base', detail: 'Información de contacto y posición actual.' },
      { title: 'Permisos', subtitle: 'Alcance de acciones', detail: 'Matriz clara para activar o restringir módulos.' },
      { title: 'Seguridad', subtitle: 'Cuenta y acceso', detail: 'Reset de contraseña, bloqueo o activación.' },
    ],
    bullets: ['Chips por módulo', 'Resumen de seguridad', 'Historial de actividad reciente'],
    fields: [
      { label: 'Usuario', value: 'Luis Tapia' },
      { label: 'Rol', value: 'Editor institucional' },
      { label: 'Último acceso', value: 'Hoy 07:10' },
    ],
  },
  {
    key: 'editar-video',
    path: 'editar-video/:id',
    samplePath: '/editar-video/1',
    label: 'Editar video',
    title: 'Editar Video',
    eyebrow: 'Ajuste audiovisual',
    summary: 'Pantalla de edición con foco en miniatura, metadatos y orden de publicación del video.',
    accent: 'aurora',
    kind: 'form',
    metrics: [
      { label: 'Versión actual', value: 'v2' },
      { label: 'Estado', value: 'Programado' },
      { label: 'Canal', value: 'Portal' },
    ],
    cards: [
      { title: 'Carátula vigente', subtitle: 'Identidad visual', detail: 'Permite ajustar la miniatura desde una zona prioritaria.' },
      { title: 'Datos de publicación', subtitle: 'Orden y serie', detail: 'Organiza fecha, título, enlace y etiquetas.' },
      { title: 'Preview', subtitle: 'Revisión final', detail: 'Comprueba cómo se verá la ficha del video.' },
    ],
    bullets: ['Preview del player', 'Bloques de edición más limpios', 'CTA de actualización visibles'],
    fields: [
      { label: 'Serie', value: 'Campañas' },
      { label: 'Duración', value: '02:40' },
      { label: 'Publicación', value: '07 May 2026' },
    ],
  },
  {
    key: 'login',
    path: 'login',
    samplePath: '/login',
    label: 'Login',
    title: 'Acceso Administrativo',
    eyebrow: 'Ingreso al dashboard',
    summary: 'Una vista de acceso más sobria y moderna, con branding consistente y mejor percepción de seguridad.',
    accent: 'rio',
    kind: 'login',
    metrics: [
      { label: 'Roles permitidos', value: '4' },
      { label: '2FA demo', value: 'Opcional' },
      { label: 'Estado del sistema', value: 'Operativo' },
    ],
    cards: [
      { title: 'Inicio seguro', subtitle: 'Acceso centralizado', detail: 'Formulario minimalista con claridad en acciones y ayuda contextual.' },
      { title: 'Soporte', subtitle: 'Asistencia de ingreso', detail: 'Enlaces rápidos para recuperación y contacto interno.' },
      { title: 'Estado', subtitle: 'Confianza operativa', detail: 'Panel visual breve sobre disponibilidad y seguridad.' },
    ],
    bullets: ['Formulario centrado con fondo editorial', 'Estados y ayuda visibles', 'Experiencia de acceso más cuidada'],
    fields: [
      { label: 'Correo', value: 'usuario@observatorio.gob.pe' },
      { label: 'Método', value: 'Clave institucional' },
      { label: 'Recuperación', value: 'Correo alterno habilitado' },
    ],
  },
  {
    key: 'crear-entidad-aliada',
    path: 'crear-entidad-aliada',
    samplePath: '/crear-entidad-aliada',
    label: 'Crear aliado',
    title: 'Registrar Entidad Aliada',
    eyebrow: 'Red institucional',
    summary: 'Formulario visual para registrar organizaciones aliadas y mostrar su rol dentro del ecosistema del observatorio.',
    accent: 'selva',
    kind: 'form',
    metrics: [
      { label: 'Campos base', value: '8' },
      { label: 'Tipos de aliado', value: '5' },
      { label: 'Visibilidad', value: 'Pública' },
    ],
    cards: [
      { title: 'Identidad institucional', subtitle: 'Nombre y tipo', detail: 'Datos esenciales para la ficha pública del aliado.' },
      { title: 'Presencia visual', subtitle: 'Logo y color', detail: 'Carga de logotipo y detalles de identidad.' },
      { title: 'Participación', subtitle: 'Rol en la red', detail: 'Se documenta alcance, sector y tipo de colaboración.' },
    ],
    bullets: ['Formulario con preview de logo', 'Campos agrupados por identidad y rol', 'CTA para publicar o guardar'],
    fields: [
      { label: 'Tipo', value: 'Sociedad civil' },
      { label: 'Cobertura', value: 'Regional' },
      { label: 'Estado', value: 'Pendiente de validación' },
    ],
  },
  {
    key: 'editar-entidad-aliada',
    path: 'editar-entidad-aliada/:id',
    samplePath: '/editar-entidad-aliada/1',
    label: 'Editar aliado',
    title: 'Editar Entidad Aliada',
    eyebrow: 'Actualización institucional',
    summary: 'Pantalla para ajustar datos, logo, descripción y estado de las entidades aliadas.',
    accent: 'selva',
    kind: 'form',
    metrics: [
      { label: 'Ficha', value: 'Activa' },
      { label: 'Última edición', value: '02 May 2026' },
      { label: 'Estado', value: 'Visible' },
    ],
    cards: [
      { title: 'Ficha vigente', subtitle: 'Información actual', detail: 'Vista comparativa de la información que ya aparece publicada.' },
      { title: 'Edición', subtitle: 'Ajuste del perfil', detail: 'Permite retocar contacto, logo y descripción institucional.' },
      { title: 'Participación', subtitle: 'Rol y convenios', detail: 'Espacio para actualizar articulaciones y líneas de trabajo.' },
    ],
    bullets: ['Ficha previa y editable', 'Resumen de relación institucional', 'Botones claros de actualización'],
    fields: [
      { label: 'Entidad', value: 'Red Regional de Protección' },
      { label: 'Rol', value: 'Aliado estratégico' },
      { label: 'Visibilidad', value: 'Pública' },
    ],
  },
  {
    key: 'detalle-entidad-aliada',
    path: 'detalle-entidad-aliada/:id',
    samplePath: '/detalle-entidad-aliada/1',
    label: 'Detalle aliado',
    title: 'Ficha de Entidad Aliada',
    eyebrow: 'Perfil institucional',
    summary: 'Vista de detalle para exponer identidad, aporte y relación de cada aliado con el observatorio.',
    accent: 'rio',
    kind: 'detail',
    metrics: [
      { label: 'Sector', value: 'Público' },
      { label: 'Convenios', value: '3' },
      { label: 'Ámbito', value: 'Regional' },
    ],
    cards: [
      { title: 'Identidad del aliado', subtitle: 'Presencia pública', detail: 'Logo, descripción y frase institucional con diseño más elegante.' },
      { title: 'Aporte al observatorio', subtitle: 'Valor de la alianza', detail: 'Se explica de forma clara el rol y los productos compartidos.' },
      { title: 'Proyectos relacionados', subtitle: 'Trabajo conjunto', detail: 'Muestra acciones, campañas o iniciativas conectadas.' },
    ],
    bullets: ['Cabecera institucional con logo', 'Bloque de aporte y articulación', 'Relacionados con otros aliados o proyectos'],
    fields: [
      { label: 'Entidad', value: 'Gerencia Regional de Desarrollo Social' },
      { label: 'Rol principal', value: 'Coordinación territorial' },
      { label: 'Contacto', value: 'articulacion@apurimac.gob.pe' },
    ],
  },
  {
    key: 'lista-entidad-aliada',
    path: 'lista-entidad-aliada',
    samplePath: '/lista-entidad-aliada',
    label: 'Lista aliados',
    title: 'Gestion de Entidades Aliadas',
    eyebrow: 'Red de colaboración',
    summary: 'Tabla visual para administrar aliados, tipos de organización y visibilidad dentro del portal.',
    accent: 'rio',
    kind: 'table',
    metrics: [
      { label: 'Aliados', value: '18' },
      { label: 'Sectores', value: '5' },
      { label: 'Activos', value: '16' },
    ],
    cards: [
      { title: 'Mapa de aliados', subtitle: 'Lectura por sector', detail: 'Resumen de participación y distribución institucional.' },
      { title: 'Directorio', subtitle: 'Consulta y edición', detail: 'Tabla con filtros por tipo, estado y territorio.' },
      { title: 'Vinculación', subtitle: 'Valor de la red', detail: 'Indicadores sobre proyectos y articulaciones vigentes.' },
    ],
    bullets: ['Tabla con logotipo y tipo', 'Filtros por sector', 'Indicadores de participación institucional'],
    table: {
      columns: ['Entidad', 'Tipo', 'Estado', 'Participación'],
      rows: [
        ['Gerencia Regional de Desarrollo Social', 'Público', 'Activa', 'Coordinación'],
        ['Mesa de Concertación', 'Sociedad civil', 'Activa', 'Incidencia'],
        ['Universidad aliada', 'Academia', 'Pendiente', 'Investigación'],
      ],
    },
  },
];

export const portalNav = {
  title: 'Portal público',
  pages: portalPages,
};

export const dashboardNav = {
  title: 'Dashboard demo',
  pages: dashboardPages,
};

export const allPages = [...portalPages, ...dashboardPages];

export const pageMap = new Map(allPages.map((page) => [page.key, page]));
