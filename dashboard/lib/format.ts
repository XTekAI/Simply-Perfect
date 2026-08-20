export function formatMoney(amount: number, moneda: string = "HNL") {
  return new Intl.NumberFormat("es-HN", {
    style: "currency",
    currency: moneda,
    currencyDisplay: moneda === "HNL" ? "code" : "symbol",
  }).format(amount);
}

export function formatDate(dateStr: string | null) {
  if (!dateStr) return "—";
  const d = new Date(dateStr);
  return d.toLocaleDateString("es-HN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export function formatDateTime(dateStr: string | null) {
  if (!dateStr) return "—";
  const d = new Date(dateStr);
  return d.toLocaleDateString("es-HN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}
