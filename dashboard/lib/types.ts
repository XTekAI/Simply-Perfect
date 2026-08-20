export type EstadoRevision = "auto" | "revisar" | "revisado";

export interface Gasto {
  id: string;
  numero_factura_interno: string;
  fecha_registro: string;
  fecha_factura: string | null;
  numero_factura: string | null;
  proveedor: string | null;
  concepto: string | null;
  categoria: string | null;
  subtotal: number | null;
  tax: number | null;
  total: number;
  moneda: string;
  drive_file_id: string;
  nombre_archivo: string | null;
  link_imagen: string;
  estado_revision: EstadoRevision;
  confianza: "alta" | "media" | "baja" | null;
  revisado_at: string | null;
}

export interface Ingreso {
  id: string;
  numero_factura_interno: string;
  fecha_registro: string;
  fecha_factura: string | null;
  numero_factura: string | null;
  cliente: string | null;
  evento: string | null;
  subtotal: number | null;
  tax: number | null;
  total: number;
  moneda: string;
  drive_file_id: string;
  nombre_archivo: string | null;
  link_imagen: string;
  estado_revision: EstadoRevision;
  confianza: "alta" | "media" | "baja" | null;
  revisado_at: string | null;
}

export interface Lead {
  id: string;
  fecha_registro: string;
  nombre: string | null;
  email: string | null;
  telefono: string | null;
  fecha_evento: string | null;
  tipo_evento: string | null;
  numero_invitados: number | null;
  lugar_evento: string | null;
  mensaje: string | null;
  estado: "no_revisado" | "revisado";
}

export interface Profile {
  id: string;
  email: string;
  role: "owner" | "admin";
}
