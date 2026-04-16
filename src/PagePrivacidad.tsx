export default function Privacidad() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-gray-700">
      <header className="bg-white border-b border-gray-100 shadow-sm py-4 px-6">
        <a href="/" className="inline-block">
          <img src="/logo-principal.png" alt="Simply Perfect Honduras" className="h-10 w-auto object-contain" />
        </a>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="font-serif font-bold text-4xl text-gray-900 mb-2">Política de Privacidad</h1>
        <p className="text-sm text-gray-400 mb-10">Última actualización: abril 2026</p>

        <div className="space-y-8 leading-relaxed">
          <section>
            <h2 className="font-serif font-semibold text-2xl text-gray-800 mb-3">1. Información que recopilamos</h2>
            <p>
              Cuando nos contactas a través de nuestro formulario web, WhatsApp, correo electrónico o redes sociales, podemos recopilar información como tu nombre, número de teléfono, correo electrónico y detalles sobre tu proyecto o evento. Esta información es proporcionada voluntariamente por ti.
            </p>
          </section>

          <section>
            <h2 className="font-serif font-semibold text-2xl text-gray-800 mb-3">2. Cómo usamos tu información</h2>
            <p>Usamos la información recopilada exclusivamente para:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Responder a tus consultas y cotizaciones.</li>
              <li>Coordinar la entrega de productos y servicios.</li>
              <li>Enviarte actualizaciones relacionadas con tu pedido.</li>
              <li>Mejorar nuestros servicios y atención al cliente.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif font-semibold text-2xl text-gray-800 mb-3">3. Compartir información con terceros</h2>
            <p>
              Simply Perfect no vende, alquila ni comparte tu información personal con terceros con fines comerciales. Tus datos son tratados de forma confidencial y solo son accesibles por el equipo de Simply Perfect.
            </p>
          </section>

          <section>
            <h2 className="font-serif font-semibold text-2xl text-gray-800 mb-3">4. Redes sociales</h2>
            <p>
              Cuando interactúas con nosotros en Instagram o Facebook, esas plataformas tienen sus propias políticas de privacidad. Te recomendamos revisarlas directamente en cada plataforma.
            </p>
          </section>

          <section>
            <h2 className="font-serif font-semibold text-2xl text-gray-800 mb-3">5. Seguridad de los datos</h2>
            <p>
              Tomamos medidas razonables para proteger tu información personal. Sin embargo, ningún método de transmisión por Internet es 100% seguro. Hacemos nuestro mejor esfuerzo para proteger tus datos.
            </p>
          </section>

          <section>
            <h2 className="font-serif font-semibold text-2xl text-gray-800 mb-3">6. Tus derechos</h2>
            <p>
              Tienes derecho a solicitar el acceso, corrección o eliminación de tu información personal en cualquier momento. Para hacerlo, contáctanos directamente.
            </p>
          </section>

          <section>
            <h2 className="font-serif font-semibold text-2xl text-gray-800 mb-3">7. Contacto</h2>
            <p>Si tienes preguntas sobre esta política, puedes escribirnos a:</p>
            <div className="mt-3 space-y-1">
              <p>
                <span className="font-medium">Correo: </span>
                <a href="mailto:Simplyperfect.lce@gmail.com" className="text-pink-500 hover:underline">
                  Simplyperfect.lce@gmail.com
                </a>
              </p>
              <p>
                <span className="font-medium">WhatsApp: </span>
                <a href="https://wa.link/okweei" target="_blank" rel="noopener noreferrer" className="text-teal-500 hover:underline">
                  Escríbenos
                </a>
              </p>
              <p>
                <span className="font-medium">Instagram: </span>
                <a href="https://www.instagram.com/simplyperf_lce/" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:underline">
                  @simplyperf_lce
                </a>
              </p>
            </div>
          </section>
        </div>
      </main>

      <footer className="text-center py-8 text-xs text-gray-400 border-t border-gray-100 mt-8">
        © 2026 Simply Perfect Honduras. Todos los derechos reservados.
      </footer>
    </div>
  );
}
