"use client";

import { useState } from "react";
import s from "./Nav.module.css";

const links = [
  { href: "#quienes-somos", label: "Nosotros" },
  { href: "#servicios", label: "Servicios" },
  { href: "#obras", label: "Obras" },
  { href: "#contacto", label: "Contacto" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className={s.nav} role="banner">
        <a className={s.mark} href="/">
          <img
            src="/logo/LOGO SMI.png"
            alt="SMI Logo"
            width="100"
            height="100"
            style={{ width: 'auto', height: '40px', background: 'transparent' }}
          />
        </a>

        <nav className={s.links} aria-label="Principal">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              className={i === links.length - 1 ? s.cta : ""}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <button
          className={s.hamburger}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      <nav
        className={`${s.drawer} ${open ? s.open : ""}`}
        aria-label="Menú móvil"
      >
        <button
          className={s.closeBtn}
          aria-label="Cerrar menú"
          onClick={() => setOpen(false)}
        >
          ×
        </button>
        {links.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
      </nav>
    </>
  );
}
