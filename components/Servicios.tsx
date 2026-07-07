import { servicios } from "@/lib/content";
import s from "./Servicios.module.css";

export default function Servicios() {
  return (
    <section id="servicios" className={s.section}>
      <div className={s.header} data-reveal>
        <p className={s.label}>Nuestros servicios</p>
        <h2 className={s.heading}>Lo que hacemos</h2>
      </div>

      {servicios.map((srv, i) => (
        <article key={srv.id} className={s.servicio} data-reveal>
          <div className={s.texto}>
            <span className={s.numero}>0{i + 1}</span>
            <h3 className={s.titulo}>{srv.titulo}</h3>
            <p className={s.descripcion}>{srv.descripcion}</p>
          </div>
          <div
            className={`${s.imagen} ${
              srv.id === "gestion" || srv.id === "supervision" || srv.id === "mantenimiento" || srv.id === "estructuras"
                ? s.imagenPhoto
                : ""
            }`}
            aria-hidden="true"
          >
            {srv.id === "gestion" ? (
              <img
                src="/images/GESTION2.jpg"
                alt={`Foto ${srv.titulo}`}
                className={s.servicePhoto}
              />
            ) : srv.id === "supervision" ? (
              <img
                src="/images/SEGUIMIENTO.jpg"
                alt={`Foto ${srv.titulo}`}
                className={s.servicePhoto}
              />
            ) : srv.id === "mantenimiento" ? (
              <img
                src="/images/MANTENIMIENTO.jpg"
                alt={`Foto ${srv.titulo}`}
                className={s.servicePhoto}
              />
            ) : srv.id === "estructuras" ? (
              <img
                src="/images/ESTRUCTURA.jpg"
                alt={`Foto ${srv.titulo}`}
                className={s.servicePhoto}
              />
            ) : (
              <span>{'Foto ' + (srv as any).titulo}</span>
            )}
          </div>
        </article>
      ))}
    </section>
  );
}
