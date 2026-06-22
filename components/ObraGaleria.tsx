"use client";

import { useState } from "react";
import Image from "next/image";
import s from "./ObraGaleria.module.css";

interface Props {
  slug: string;
  fotos: string[];
  titulo: string;
}

export default function ObraGaleria({ slug, fotos, titulo }: Props) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <>
      <ul className={s.galeria}>
        {fotos.map((foto, i) => {
          const isContain = foto === "ING 2.png" || foto === "ING 3.png";
          return (
            <li key={foto}>
              <button
                className={s.item}
                onClick={() => setActive(foto)}
                aria-label={`Ver foto ${i + 1} de ${titulo}`}
              >
                <Image
                  src={`/images/obras/${slug}/${foto}`}
                  alt={`${titulo} — foto ${i + 1}`}
                  fill
                  sizes="(max-width: 414px) 100vw, 50vw"
                  style={{ objectFit: isContain ? "contain" : "cover" }}
                />
              </button>
            </li>
          );
        })}
      </ul>

      {active && (
        <div
          className={s.overlay}
          role="dialog"
          aria-modal="true"
          aria-label={`Foto ampliada: ${titulo}`}
          onClick={() => setActive(null)}
        >
          <button
            className={s.closeLight}
            aria-label="Cerrar"
            onClick={() => setActive(null)}
          >
            ×
          </button>
          <Image
            className={s.lightboxImg}
            src={`/images/obras/${slug}/${active}`}
            alt={titulo}
            width={1200}
            height={900}
            style={{ objectFit: "contain" }}
          />
        </div>
      )}
    </>
  );
}
