"use client";

import { useState } from "react";
import { X, Loader2 } from "lucide-react";
import { Gasto, Ingreso } from "@/lib/types";
import { actualizarFactura } from "@/lib/n8n";

const CATEGORIAS = [
  "Renta de mobiliario",
  "Catering",
  "Decoración",
  "Transporte",
  "Personal",
  "Marketing",
  "Servicios",
  "Otros",
];

type Props =
  | { tabla: "gastos"; invoice: Gasto; onClose: () => void }
  | { tabla: "ingresos"; invoice: Ingreso; onClose: () => void };

export function EditInvoiceModal({ tabla, invoice, onClose }: Props) {
  const isGasto = tabla === "gastos";
  const g = invoice as Gasto;
  const i = invoice as Ingreso;

  const [fecha_factura, setFecha] = useState(g.fecha_factura?.slice(0, 10) ?? "");
  const [numero_factura, setNumeroFactura] = useState(invoice.numero_factura ?? "");
  const [nombre, setNombre] = useState(isGasto ? g.proveedor ?? "" : i.cliente ?? "");
  const [descripcion, setDescripcion] = useState(isGasto ? g.concepto ?? "" : i.evento ?? "");
  const [categoria, setCategoria] = useState(g.categoria ?? "Otros");
  const [subtotal, setSubtotal] = useState(invoice.subtotal?.toString() ?? "");
  const [tax, setTax] = useState(invoice.tax?.toString() ?? "");
  const [total, setTotal] = useState(invoice.total?.toString() ?? "");
  const [moneda, setMoneda] = useState(invoice.moneda ?? "HNL");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // ISV general en Honduras. Al cambiar el Subtotal, se sugiere el Tax al
  // 15% automaticamente (ella lo puede corregir a mano si es un caso exento
  // o con otra tasa), y el Total siempre se recalcula como subtotal + tax.
  const ISV_HONDURAS = 0.15;

  function recomputeTotal(nuevoSubtotal: string, nuevoTax: string) {
    const s = parseFloat(nuevoSubtotal);
    const t = parseFloat(nuevoTax);
    if (!isNaN(s) || !isNaN(t)) {
      const suma = (isNaN(s) ? 0 : s) + (isNaN(t) ? 0 : t);
      setTotal(suma.toFixed(2));
    }
  }

  function handleSubtotalChange(value: string) {
    setSubtotal(value);
    const s = parseFloat(value);
    const taxSugerido = isNaN(s) ? "" : (s * ISV_HONDURAS).toFixed(2);
    setTax(taxSugerido);
    recomputeTotal(value, taxSugerido);
  }

  function handleTaxChange(value: string) {
    setTax(value);
    recomputeTotal(subtotal, value);
  }

  async function handleSave() {
    setSaving(true);
    setError(null);
    try {
      const campos: Record<string, string | number | null> = {
        fecha_factura: fecha_factura || null,
        numero_factura: numero_factura || null,
        subtotal: subtotal === "" ? null : Number(subtotal),
        tax: tax === "" ? null : Number(tax),
        total: Number(total),
        moneda,
      };
      if (isGasto) {
        campos.proveedor = nombre;
        campos.concepto = descripcion;
        campos.categoria = categoria;
      } else {
        campos.cliente = nombre;
        campos.evento = descripcion;
      }
      await actualizarFactura(tabla, invoice.id, campos);
      onClose();
    } catch (e) {
      setError(e instanceof Error ? e.message : "Error al guardar");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40">
      <div className="w-full max-w-md bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 dark:border-gray-800">
          <h2 className="font-serif font-bold text-lg text-gray-900 dark:text-pink-200">
            Corregir {isGasto ? "gasto" : "ingreso"} — {invoice.numero_factura_interno}
          </h2>
          <button
            onClick={onClose}
            className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-pink-200"
          >
            <X size={20} />
          </button>
        </div>

        <div className="px-6 py-5 space-y-4">
          <Field label="Fecha de factura">
            <input
              type="date"
              value={fecha_factura}
              onChange={(e) => setFecha(e.target.value)}
              className={inputClass}
            />
          </Field>

          <Field label="Número de factura">
            <input
              type="text"
              value={numero_factura}
              onChange={(e) => setNumeroFactura(e.target.value)}
              className={inputClass}
            />
          </Field>

          <Field label={isGasto ? "Proveedor" : "Cliente"}>
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className={inputClass}
            />
          </Field>

          <Field label={isGasto ? "Concepto" : "Evento"}>
            <input
              type="text"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              className={inputClass}
            />
          </Field>

          {isGasto && (
            <Field label="Categoría">
              <select
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
                className={inputClass}
              >
                {CATEGORIAS.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </Field>
          )}

          <div className="grid grid-cols-2 gap-3">
            <Field label="Subtotal">
              <input
                type="number"
                step="0.01"
                value={subtotal}
                onChange={(e) => handleSubtotalChange(e.target.value)}
                className={inputClass}
              />
            </Field>
            <Field label="Tax (ISV)">
              <input
                type="number"
                step="0.01"
                value={tax}
                onChange={(e) => handleTaxChange(e.target.value)}
                className={inputClass}
              />
            </Field>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Field label="Total">
              <input
                type="number"
                step="0.01"
                required
                value={total}
                onChange={(e) => setTotal(e.target.value)}
                className={inputClass}
              />
            </Field>
            <Field label="Moneda">
              <input
                type="text"
                value={moneda}
                onChange={(e) => setMoneda(e.target.value.toUpperCase())}
                className={inputClass}
                maxLength={3}
              />
            </Field>
          </div>

          {error && (
            <p className="text-sm text-rose-600 bg-rose-50 dark:bg-rose-950/40 dark:text-rose-300 rounded-lg px-3 py-2">
              {error}
            </p>
          )}
        </div>

        <div className="flex gap-3 px-6 py-4 border-t border-gray-100 dark:border-gray-800">
          <button
            onClick={onClose}
            className="flex-1 py-2.5 rounded-lg text-sm font-medium text-gray-600 dark:text-pink-200/70 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            Cancelar
          </button>
          <button
            onClick={handleSave}
            disabled={saving}
            className="flex-1 btn-custom justify-center py-2.5 disabled:opacity-60"
          >
            {saving ? <Loader2 size={16} className="animate-spin mx-auto" /> : "Guardar"}
          </button>
        </div>
      </div>
    </div>
  );
}

const inputClass =
  "w-full px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 dark:text-white text-sm focus:ring-2 focus:ring-pink-200 focus:border-pink-300 outline-none transition-all";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-xs font-medium text-gray-500 dark:text-pink-300/70 mb-1">
        {label}
      </span>
      {children}
    </label>
  );
}
