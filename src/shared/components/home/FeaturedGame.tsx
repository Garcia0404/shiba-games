
export const FeaturedGame = () => {
  return (
    <section aria-labelledby="featured-heading" className="py-8">
      <div>
        <article className="bg-[#18171785] overflow-hidden py-10">
          <div className="flex flex-col md:flex-row container mx-auto px-4">
            <div className="md:w-1/3">
              <img
                src="https://zeroxgames.gg/cdn/shop/files/minecraftsinfondo.png?v=1744158947&width=1200"
                alt="Minecraft Java & Bedrock"
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-2/3 p-6">
              <h2 id="featured-heading" className="text-2xl font-bold">
                Minecraft Java & Bedrock
              </h2>
              <p className="mt-2 text-gray-400">
                Explora mundos infinitos y construye desde sencillas casas hasta increíbles castillos. Juega en modo
                creativo con recursos ilimitados o extrae en el mundo en modo supervivencia.
              </p>
              <div className="mt-4 flex items-center gap-4">
                <span className="text-2xl font-bold">S/ 19.99</span>
                <button className="bg-main text-black px-4 py-2 rounded-md font-medium hover:bg-green-400 transition-colors">
                  Comprar ahora
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
