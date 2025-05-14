
import { Banner } from "./shared/components/home/Banner"
import { FeaturedGame } from "./shared/components/home/FeaturedGame"
import { Features } from "./shared/components/home/Features"
import { Latest } from "./shared/components/home/Latest"
import { MostSold } from "./shared/components/home/MostSold"
import { Popular } from "./shared/components/home/Popular"
import { Subtitle } from "./shared/components/home/Subtitle"
import { BackgroundGradient } from "./shared/components/ui/BackgroundGradient"
export default function App() {
  return (
    <main className="relative z-0">
      <BackgroundGradient />
      {/* Hero Banner - Semántico con <section> y contenido relevante */}
      <Banner />

      {/* Features - Semántico con <section> y <article> para cada característica */}
      <Features />

      {/* Best Sellers - Semántico con <section>, <h2> y <article> para cada juego */}
      <section aria-labelledby="bestsellers-heading" className="py-8">
        <div className="container mx-auto px-4">
          <Subtitle>LOS MÁS VENDIDOS</Subtitle>
          <MostSold />
        </div>
      </section>

      {/* Special Offers - Semántico con <section> y <article> para cada oferta */}
      <section aria-labelledby="offers-heading" className="py-8">
        <div className="container mx-auto px-4">
          <Subtitle>OFERTAS ESPECIALES</Subtitle>
          <Popular />
        </div>
      </section>

      {/* Featured Game - Semántico con <section> y <article> */}
      <FeaturedGame />

      {/* Latest Releases - Semántico con <section> y <article> para cada lanzamiento */}
      <section aria-labelledby="latest-heading" className="py-8">
        <div className="container mx-auto px-4">
          <Subtitle>ÚLTIMOS LANZAMIENTOS</Subtitle>
          <Latest />
        </div>
      </section>
    </main>
  )
}
