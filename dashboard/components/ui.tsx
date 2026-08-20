import { ReactNode } from "react";

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm ${className}`}
    >
      {children}
    </div>
  );
}

export function EstadoBadge({ estado }: { estado: string }) {
  const revisado = estado === "revisado" || estado === "Revisado";
  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${
        revisado
          ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300"
          : "bg-rose-100 text-rose-700 dark:bg-rose-950/60 dark:text-rose-300"
      }`}
    >
      {revisado ? "Revisado" : "No revisado"}
    </span>
  );
}

export function ConfianzaBadge({ confianza }: { confianza: string | null }) {
  if (!confianza) return null;
  const colors: Record<string, string> = {
    alta: "bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300",
    media: "bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300",
    baja: "bg-rose-100 text-rose-700 dark:bg-rose-950/60 dark:text-rose-300",
  };
  return (
    <span className={`inline-flex px-2 py-0.5 rounded-full text-xs ${colors[confianza] ?? ""}`}>
      {confianza}
    </span>
  );
}
