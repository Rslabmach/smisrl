import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ObraGaleria from "@/components/ObraGaleria";
import { obras, getObra } from "@/lib/obras";
import { notFound } from "next/navigation";
import s from "./page.module.css";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return obras.map((o) => ({ slug: o.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const obra = getObra(slug);
  if (!obra) return {};
  return {
    title: obra.titulo,
    description: obra.descripcion,
  };
}

export default async function ObraPage({ params }: Props) {
  const { slug } = await params;
  const obra = getObra(slug);
  if (!obra) notFound();

  return (
    <>
      <Nav />
      <main className={s.page}>
        <div className={s.hero}>
          <Link href="/#obras" className={s.back}>
            ← Volver a obras
          </Link>
          <h1 className={s.heading}>{obra.titulo}</h1>
          <p className={s.desc}>{obra.descripcion}</p>
        </div>

        <div className={s.galeriaSection}>
          <p className={s.galeriaLabel}>Galería — {obra.fotos.length} fotos</p>
          <ObraGaleria slug={obra.slug} fotos={obra.fotos} titulo={obra.titulo} />
        </div>
      </main>
      <Footer />
    </>
  );
}
