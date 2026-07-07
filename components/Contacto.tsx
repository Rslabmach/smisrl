import { contacto } from "@/lib/content";
import s from "./Contacto.module.css";

export default function Contacto() {
  return (
    <section id="contacto" className={s.section}>
      <div className={s.inner}>
        <div data-reveal>
          <p className={s.label}>Contacto</p>
          <h2 className={s.heading}>
            Hablemos
          </h2>
        </div>

        <div data-reveal>
          <dl className={s.datos}>
            <div className={s.datoItem}>
              <dt className={s.datoLabel}>Responsable</dt>
              <dd className={s.datoValor}>{contacto.nombre}</dd>
            </div>
            <div className={s.datoItem}>
              <dt className={s.datoLabel}>Teléfono</dt>
              <dd className={s.datoValor}>{contacto.telefono}</dd>
            </div>
            <div className={s.datoItem}>
              <dt className={s.datoLabel}>Correo</dt>
              <dd className={s.datoValor}>{contacto.email}</dd>
            </div>
            <div className={s.datoItem}>
              <dt className={s.datoLabel}>Instagram</dt>
              <dd className={s.datoValor}>{contacto.instagramHandle}</dd>
            </div>
          </dl>

          <div className={s.links}>
            <a
              className={s.btnPrimary}
              href={contacto.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                <circle cx="9" cy="10" r="0.5" fill="currentColor" />
                <circle cx="12" cy="10" r="0.5" fill="currentColor" />
                <circle cx="15" cy="10" r="0.5" fill="currentColor" />
              </svg>
              WhatsApp
            </a>
            <a
              className={s.btnOutline}
              href={`mailto:${contacto.email}`}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-10 5L2 7" />
              </svg>
              Enviar email
            </a>
            <a
              className={s.btnOutline}
              href={contacto.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" fill="currentColor" stroke="none" />
                <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
              </svg>
              Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
