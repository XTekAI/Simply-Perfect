export default function Terminos() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-gray-700">
      <header className="bg-white border-b border-gray-100 shadow-sm py-4 px-6">
        <a href="/" className="inline-block">
          <img src="/logo-principal.png" alt="Simply Perfect Honduras" className="h-10 w-auto object-contain" />
        </a>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="font-serif font-bold text-4xl text-gray-900 mb-2">Términos y Condiciones</h1>
        <p className="text-sm text-gray-400 mb-10">Última actualización: abril 2026</p>

        <div className="space-y-8 leading-relaxed">
          <section>
            <h2 className="font-serif font-semibold text-2xl text-gray-800 mb-3">1. Aceptación de los términos</h2>
            <p>
              Al contratar los servicios o adquirir productos de Simply Perfect, aceptas cumplir con los presentes términos y condiciones. Si no estás de acuerdo con alguna parte, te pedimos que no realices ningún pedido.
            </p>
          </section>

          <section>
            <h2 className="font-serif font-semibold text-2xl text-gray-800 mb-3">2. Pedidos y cotizaciones</h2>
            <p>
              Todos los pedidos se confirman únicamente con el pago completo por adelantado. Una cotización tiene validez de 7 días calendario desde su emisión. Simply Perfect se reserva el derecho de ajustar precios ante cambios significativos en costos de materiales.
            </p>
          </section>

          <section>
            <h2 className="font-serif font-semibold text-2xl text-gray-800 mb-3">3. Plazos de entrega</h2>
            <p>
              Los tiempos de producción y entrega se acuerdan al momento de confirmar el pedido. Simply Perfect hará su mejor esfuerzo para cumplir con los plazos establecidos. Retrasos por causas de fuerza mayor (desastres naturales, problemas de suministro, etc.) serán comunicados oportunamente.
            </p>
          </section>

          <section>
            <h2 className="font-serif font-semibold text-2xl text-gray-800 mb-3">4. Política de pagos</h2>
            <p className="font-semibold text-gray-900 mb-2">
              Para todos nuestros servicios y productos se requiere el pago del 100% por adelantado para confirmar el pedido o reservar la fecha del evento.
            </p>
            <p className="mb-3">No se iniciará ningún trabajo ni se separará ninguna fecha sin haber recibido el pago completo.</p>
            <p>Los métodos de pago aceptados son:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Transferencia bancaria</li>
              <li>Pago en efectivo</li>
              <li>Otros métodos acordados previamente</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif font-semibold text-2xl text-gray-800 mb-3">5. Cancelaciones y reembolsos</h2>
            <p>
              Una vez realizado el pago y confirmado el pedido, no se aceptan cancelaciones ni reembolsos. Si el error es atribuible a Simply Perfect (defecto de fabricación o error en el diseño previamente aprobado), se repondrá el producto sin costo adicional. El cliente es responsable de revisar y aprobar el diseño antes de que se inicie la producción.
            </p>
          </section>

          <section>
            <h2 className="font-serif font-semibold text-2xl text-gray-800 mb-3">6. Propiedad intelectual</h2>
            <p>
              Los diseños creados por Simply Perfect son propiedad de la empresa hasta que se realice el pago completo. El cliente garantiza tener los derechos sobre cualquier imagen, logo o material que proporcione para la personalización.
            </p>
          </section>

          <section>
            <h2 className="font-serif font-semibold text-2xl text-gray-800 mb-3">7. Limitación de responsabilidad</h2>
            <p>
              Simply Perfect no se hace responsable por daños indirectos, pérdidas de ingresos ni perjuicios derivados del uso de los productos adquiridos. Nuestra responsabilidad máxima se limita al valor del pedido en cuestión.
            </p>
          </section>

          <section>
            <h2 className="font-serif font-semibold text-2xl text-gray-800 mb-3">8. Modificaciones</h2>
            <p>
              Simply Perfect se reserva el derecho de actualizar estos términos en cualquier momento. Los cambios serán publicados en este sitio web con la fecha de actualización correspondiente.
            </p>
          </section>

          <section>
            <h2 className="font-serif font-semibold text-2xl text-gray-800 mb-3">9. Contacto</h2>
            <p>Para cualquier consulta sobre estos términos, contáctanos:</p>
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
