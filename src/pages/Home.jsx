import "./Home.css";
import Welcome from "../components/Welcome";
import Activities from "../components/Activities";
import ParallaxBanner from "../components/ParallaxBanner";
import Teams from "../components/Teams";
import CampusIreland from "../components/CampusIreland";
import LatestNews from "../components/LatestNews";
import ContactSection from "../components/ContactSection";

export default function Home() {
    return (
        <main>
            <section
                className="home-hero"
                aria-labelledby="home-hero-title"
            >
                <div className="home-hero__content">

                    {/* RÓTULO Y LÍNEAS AMARILLAS */}
                    <div className="home-hero__eyebrow">
                        <span>CLUB DE VOLEIBOL</span>
                    </div>

                    {/* TÍTULO PRINCIPAL */}
                    <h1 id="home-hero-title">
                        WONDERS
                        <span>VOLEY</span>
                    </h1>

                    {/* LEMA DEL CLUB */}
                    <p className="home-hero__subtitle">
                        Un sueño hecho en equipo.
                    </p>

                </div>
            </section>

            <Welcome />
            <Activities />
            <ParallaxBanner
                image="/images/separador-1.webp"
                title="Mucho más que voleibol."
                description="Descubre un club donde cada entrenamiento es una oportunidad para crecer."
                href="/contacto/"
            />
            <Teams />
            <CampusIreland />
            <LatestNews />


            <ParallaxBanner
                image="/images/separador-2.webp"
                eyebrow="ÚNETE A WONDERS"
                title="Tu próximo reto comienza aquí."
                description="Forma parte de Wonders Voley Madrid y descubre todo lo que podemos conseguir juntos."
                buttonText="Contactar con Wonders"
                href="#contacto-home"
            />
            <ContactSection />

        </main>
    );
}
