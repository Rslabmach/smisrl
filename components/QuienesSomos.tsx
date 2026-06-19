import s from "./QuienesSomos.module.css";

export default function QuienesSomos() {
  return (
    <section id="quienes-somos" className={s.section}>
      <div className={s.grid}>
        <div data-reveal>
          <p className={s.label}>Quiénes somos</p>
          <h2 className={s.heading}>
            Gestión y<br />
            Profesionalismo
          </h2>
        </div>

        <div data-reveal>
          <div className={s.body}>
            <p>
              Somos unesa dedia emprcada a brindar soluciones a la industria,
              mediante servicios de mantenimiento, ingeniería y montajes
              mecánicos.
            </p>
            <p>
              Nos diferenciamos por aportar gestión y profesionalismo a los
              servicios ofrecidos, aplicando la experiencia adquirida en
              empresas de primera línea.
            </p>
            <p>
              Contamos con el personal, las herramientas y la convicción para
              cumplir con los compromisos asumidos y brindarles soluciones
              prácticas y eficientes.
            </p>
          </div>

          <div className={s.imgWrapper}>
            <img
              src="/images/GESTION.jpg"
              alt="Foto del equipo"
              className={s.teamPhoto}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
