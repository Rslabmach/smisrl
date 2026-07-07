import Link from "next/link";
import Image from "next/image";
import { obras } from "@/lib/obras";
import s from "./ObrasGrid.module.css";

export default function ObrasGrid() {
  return (
    <section id="obras" className={s.section}>
      <div className={s.header} data-reveal>
        <div>
          <p className={s.label}>Trabajos realizados</p>
          <h2 className={s.heading}>Obras</h2>
        </div>
      </div>

      <ul className={s.grid}>
        {obras.map((obra) => (
          <li key={obra.slug} data-reveal className={s.item}>
            <Link href={`/obras/${obra.slug}`} className={s.card}>
              <div className={s.imgWrap}>
                <Image
                  src={`/images/obras/${obra.slug}/${obra.fotos[0]}`}
                  alt={obra.titulo}
                  fill
                  sizes="(max-width: 414px) 100vw, (max-width: 768px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className={s.info}>
                <h3 className={s.titulo}>{obra.titulo}</h3>
                <span className={s.arrow}>Ver obra →</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
