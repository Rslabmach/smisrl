import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import QuienesSomos from "@/components/QuienesSomos";
import Servicios from "@/components/Servicios";
import Clientes from "@/components/Clientes";
import ObrasGrid from "@/components/ObrasGrid";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <QuienesSomos />
        <Servicios />
        <Clientes />
        <ObrasGrid />
        <Contacto />
      </main>
      <Footer />
      <RevealObserver />
    </>
  );
}
