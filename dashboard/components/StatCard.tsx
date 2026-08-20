import { ReactNode } from "react";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { Card } from "./ui";

export function StatCard({
  label,
  value,
  icon,
  deltaPct,
  tone = "neutral",
  invertDeltaTone = false,
}: {
  label: string;
  value: string;
  icon: ReactNode;
  /** Cambio real del periodo (positivo = subio, negativo = bajo). Determina la flecha. */
  deltaPct?: number | null;
  tone?: "positive" | "negative" | "neutral";
  /** true cuando subir es mala noticia (ej. Gastos) - invierte solo el COLOR, nunca la flecha. */
  invertDeltaTone?: boolean;
}) {
  const toneClasses = {
    positive: "text-emerald-600 dark:text-emerald-400",
    negative: "text-rose-600 dark:text-rose-400",
    neutral: "text-gray-900 dark:text-pink-100",
  }[tone];

  const subio = deltaPct !== undefined && deltaPct !== null && deltaPct >= 0;
  const esBuenaNoticia = invertDeltaTone ? !subio : subio;

  return (
    <Card className="p-6">
      <div className="flex items-start justify-between mb-3">
        <p className="text-sm font-medium text-gray-500 dark:text-pink-300/70">{label}</p>
        <div className="text-pink-400 dark:text-pink-400/80">{icon}</div>
      </div>
      <p className={`text-3xl font-serif font-bold ${toneClasses}`}>{value}</p>
      {deltaPct !== undefined && deltaPct !== null && (
        <div
          className={`flex items-center gap-1 mt-2 text-sm font-medium ${
            esBuenaNoticia
              ? "text-emerald-600 dark:text-emerald-400"
              : "text-rose-600 dark:text-rose-400"
          }`}
        >
          {subio ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
          {Math.abs(deltaPct).toFixed(1)}% vs. periodo anterior
        </div>
      )}
    </Card>
  );
}
