
export const Features = () => {
  return (
    <section aria-labelledby="features-heading" className="max-md:hidden py-2 mt-4 bg-[rgba(0,0,0,0.8)]">
      <div className="container mx-auto px-4">
        <div className="grid min-[560px]:grid-cols-2 md:grid-cols-3 gap-4">
          <article className="flex items-center gap-3 p-4 max-[560px]:justify-center md:justify-end">
            <div className="bg-main p-2 rounded-full">
              <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
              </svg>

            </div>
            <div>
              <h3 className="font-medium">Entrega inmediata</h3>
              <p className="text-sm text-gray-400">Recibe tu código al instante</p>
            </div>
          </article>
          <article className="flex items-center gap-3 p-4 max-[560px]:justify-center min-[560px]:justify-center">
            <div className="bg-main p-2 rounded-full">
              <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
              </svg>
            </div>
            <div>
              <h3 className="font-medium">Precios bajos en PC</h3>
              <p className="text-sm text-gray-400">Garantizamos el mejor precio</p>
            </div>
          </article>
          <article className="flex items-center gap-3 p-4 max-[560px]:justify-center ">
            <div className="bg-main p-2 rounded-full">
              <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
              </svg>
            </div>
            <div>
              <h3 className="font-medium">Pago seguro</h3>
              <p className="text-sm text-gray-400">Métodos de pago confiables</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
