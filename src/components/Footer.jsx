
import "./Footer.css";

// NAVEGACIÓN PRINCIPAL

const mainLinks = [
  { name: "Club", href: "/club/" },
  { name: "Centros", href: "/centros/" },
  { name: "Equipos", href: "/equipos/" },
  { name: "Voleibol", href: "/voleibol/" },
  { name: "Noticias", href: "/noticias/" },
  { name: "Contacto", href: "/contacto/" },
];

// ACTIVIDADES

const activityLinks = [
  { name: "Campus", href: "/campus/" },
  { name: "Espinho", href: "/espinho/" },
  {
    name: "Escuela de voleibol",
    href: "/escuela-voleibol/",
  },
];

// INFORMACIÓN LEGAL

const legalLinks = [
  { name: "Aviso legal", href: "/aviso-legal/" },
  { name: "Privacidad", href: "/privacidad/" },
  {
    name: "Política de cookies",
    href: "/cookies/",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-footer">

      {/* CONTENIDO PRINCIPAL */}

      <div className="w-footer__container">

        <div className="w-footer__grid">

          {/* LOGOTIPO Y DESCRIPCIÓN */}

          <div className="w-footer__brand">

            <a
              href="/"
              className="w-footer__logo"
              aria-label="Wonders Voley - Inicio"
            >
              <img
                src="/images/wonders-footer.webp"
                alt="Wonders Voley"
                loading="lazy"
              />
            </a>

            <p className="w-footer__slogan">
              Un sueño hecho en equipo.
            </p>

            <p className="w-footer__description">
              Club de voleibol en Madrid.
              Formación, deporte y experiencias
              para crecer juntos.
            </p>

          </div>

          {/* MENÚ PRINCIPAL */}

          <nav
            className="w-footer__column"
            aria-label="Navegación del pie de página"
          >
            <h2>Explora</h2>

            <ul>
              {mainLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* ACTIVIDADES */}

          <nav
            className="w-footer__column"
            aria-label="Actividades del club"
          >
            <h2>Actividades</h2>

            <ul>
              {activityLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* INFORMACIÓN LEGAL */}

          <nav
            className="w-footer__column"
            aria-label="Información legal"
          >
            <h2>Información legal</h2>

            <ul>
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

        </div>

        {/* SEPARADOR INFERIOR */}

        <div className="w-footer__divider" />

        {/* PARTE INFERIOR */}

        <div className="w-footer__bottom">

          {/* COPYRIGHT */}

          <p className="w-footer__copyright">
            © {currentYear} Wonders Voley.
            Todos los derechos reservados.
          </p>

          {/* CRÉDITO DE DESARROLLO */}

          <div className="w-footer__credits">

            <span>Desarrollo por:</span>

            <a
              href="https://isaacgallo.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Desarrollo web por Isaac Gallo"
            >
              <img
                src="https://isaacgallo.com/assets/images/lico_logo_pie_pagina.webp"
                alt="LICO - Isaac Gallo"
                loading="lazy"
              />
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}
