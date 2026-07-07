export interface Obra {
  slug: string;
  titulo: string;
  descripcion: string;
  fotos: string[]; /* nombres de archivo en public/images/obras/<slug>/ */
}

export const obras: Obra[] = [
  {
    slug: "escalera-tk-agua-reposicion",
    titulo: "Escalera TK Agua Reposición",
    descripcion:
      "Diseño y montaje de escalera de acceso en tanque de agua para reposición de planta industrial.",
    fotos: ["AGUA 1.jpg", "AGUA 2.jpg", "AGUA 3.jpg"],
  },
  {
    slug: "montaje-estructura-metalica-casa-elevada",
    titulo: "Montaje Estructura Metálica — Casa Elevada",
    descripcion:
      "Montaje de estructura metálica para vivienda elevada. Coordinación de logística de transporte y montaje en altura.",
    fotos: ["CASA.jpg", "CASA 2.jpg", "CASA 3.jpg"],
  },
  {
    slug: "tolva-balanza-envasadora",
    titulo: "Tolva y Balanza para Envasadora",
    descripcion:
      "Fabricación y montaje de sistema de tolva con balanza integrada para línea de envasado industrial.",
    fotos: ["TOLVA 1.png", "TOLVA 2.jpg", "TOLVA 3.jpg"],
  },
  {
    slug: "estructura-acceso-techo-uta",
    titulo: "Estructura Acceso a Techo UTA",
    descripcion:
      "Diseño y montaje de estructura de acceso a techo para unidad de tratamiento de aire (UTA).",
    fotos: ["TECHO 1.png", "TECHO 2.jpg", "TECHO 3.jpg"],
  },
  {
    slug: "plataforma-deslizante-calador",
    titulo: "Plataforma Deslizante Calador",
    descripcion:
      "Fabricación e instalación de plataforma deslizante para sistema de calado de producción.",
    fotos: ["CALA 1.png", "CALA 2.jpg", "CALA 3.jpg"],
  },
  {
    slug: "movimiento-equipos-wrappeadora",
    titulo: "Movimiento de Equipos y Montaje Wrappeadora",
    descripcion:
      "Coordinación del movimiento de equipos industriales y montaje de máquina wrappeadora en línea productiva.",
    fotos: ["WRAP 1.jpg", "WRAP 2.jpg", "WRAP 3.jpg"],
  },
  {
    slug: "ingenierias-analisis-estructural",
    titulo: "Ingenierías y Análisis Estructural",
    descripcion:
      "Desarrollo de ingenierías y análisis estructural para equipos e instalaciones industriales.",
    fotos: ["ING 1.png", "ING 2.png", "ING 3.png"],
  },
];

export function getObra(slug: string): Obra | undefined {
  return obras.find((o) => o.slug === slug);
}
