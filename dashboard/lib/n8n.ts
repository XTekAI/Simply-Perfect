const MARCAR_REVISADO_URL =
  "https://prueba1-n8n.fihoy6.easypanel.host/webhook/sp-marcar-revisado";

export async function marcarRevisado(
  tabla: "gastos" | "ingresos" | "leads",
  id: string
) {
  const res = await fetch(MARCAR_REVISADO_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ tabla, id }),
  });
  const data = await res.json();
  if (!res.ok || !data.ok) {
    throw new Error(data.mensaje || "No se pudo marcar como revisado");
  }
  return data;
}
