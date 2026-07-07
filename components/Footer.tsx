import { contacto } from "@/lib/content";
import s from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={s.footer}>
      <p className={s.statement}>
        Soluciones que resisten<em>.</em>
      </p>

      <div className={s.meta}>
        <img
          src="/logo/LOGO SMI 3.png"
          alt="SMI Logo"
          width="100"
          height="100"
          style={{ width: 'auto', height: '40px', background: 'transparent' }}
        />

        <nav className={s.metaLinks} aria-label="Footer">
          <a href="#quienes-somos">Nosotros</a>
          <a href="#servicios">Servicios</a>
          <a href="#obras">Obras</a>
          <a href={contacto.whatsapp} target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
          <a href={`mailto:${contacto.email}`}>{contacto.email}</a>
          <a href={contacto.instagram} target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </nav>

        <span className={s.copy}>
          © {year} SMI — Soluciones de Mantenimiento e Ingeniería
        </span>
      </div>
    </footer>
  );
}
