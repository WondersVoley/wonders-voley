
import { useEffect, useRef, useState } from "react";
import "./Header.css";

const menuItems = [
    { label: "Club", href: "/club/" },
    { label: "Centros", href: "/centros/" },
    { label: "Equipos", href: "/equipos/" },
    { label: "Actividades", href: "/actividades/" },
    { label: "Noticias", href: "/noticias/" },
    { label: "Contacto", href: "/contacto/" },
];

export default function Header({ dark = false, home = false }) {
    const [isOpen, setIsOpen] = useState(false);
    const toggleRef = useRef(null);
    const firstLinkRef = useRef(null);

    function closeMenu() {
        setIsOpen(false);
    }

    useEffect(() => {
        if (!isOpen) return;

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        firstLinkRef.current?.focus();

        function handleKeyDown(event) {
            if (event.key === "Escape") {
                setIsOpen(false);
                toggleRef.current?.focus();
            }
        }

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen]);

    return (
        <header
            className={`w-header ${dark ? "w-header--dark" : ""} ${home ? "w-header--home" : ""} ${isOpen ? "w-header--open" : ""}`}>

            <div className="w-header__inner">

                {/* LOGOTIPO */}
                <a
                    href="/"
                    className="w-header__brand"
                    aria-label="Wonders Voley - Inicio"
                >
                    <img
                        src="/images/logo-wonders.webp"
                        alt="Wonders Voley"
                    />
                </a>

                {/* NAVEGACIÓN ESCRITORIO */}
                <nav className="w-header__desktop" aria-label="Menú principal">
                    <ul>
                        {menuItems.map((item) => (
                            <li key={item.href}>
                                <a href={item.href}>{item.label}</a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* HAMBURGUESA */}
                <button
                    ref={toggleRef}
                    className="w-header__toggle"
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
                    aria-expanded={isOpen}
                    aria-controls="w-mobile-menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

            </div>

            {/* CAPA OSCURA SOBRE LA WEB */}
            <div
                className={`w-header__backdrop ${isOpen ? "is-open" : ""}`}
                onClick={closeMenu}
                aria-hidden="true"
            />

            {/* MENÚ LATERAL */}
            <div
                id="w-mobile-menu"
                className={`w-header__drawer ${isOpen ? "is-open" : ""}`}
                role="dialog"
                aria-modal={isOpen}
                aria-label="Navegación móvil"
                aria-hidden={!isOpen}
                inert={!isOpen}
            >

                <nav aria-label="Menú móvil">
                    <ul className="w-header__mobile-links">
                        {menuItems.map((item, index) => (
                            <li key={item.href}>
                                <a
                                    ref={index === 0 ? firstLinkRef : null}
                                    href={item.href}
                                    onClick={closeMenu}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* ENLACES LEGALES */}
                <div className="w-header__legal">
                    <a href="/aviso-legal/" onClick={closeMenu}>
                        Aviso legal
                    </a>
                    <a href="/cookies/" onClick={closeMenu}>
                        Política de cookies
                    </a>
                    <a href="/privacidad/" onClick={closeMenu}>
                        Privacidad
                    </a>
                </div>

            </div>

        </header>
    );
}
