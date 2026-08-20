"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const supabase = createClient();
    const { error } = await supabase.auth.signInWithPassword({ email, password });

    setLoading(false);

    if (error) {
      setError("Correo o contraseña incorrectos.");
      return;
    }

    router.push("/");
    router.refresh();
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-stone-50 dark:bg-gray-950 px-4 relative overflow-hidden">
      <div className="absolute top-[-15%] left-[-10%] w-[50%] h-[50%] bg-brand-pink/50 dark:bg-brand-pink/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-[-15%] right-[-10%] w-[50%] h-[50%] bg-brand-turquoise/50 dark:bg-brand-turquoise/10 rounded-full blur-[100px]" />

      <div className="relative w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-serif font-bold text-gray-900 dark:text-pink-200 mb-2">
            Simply Perfect
          </h1>
          <p className="text-gray-500 dark:text-pink-200/70 text-sm tracking-wide uppercase">
            Panel de facturación
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800"
        >
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 dark:text-pink-300 mb-2">
              Correo
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 dark:text-white focus:ring-2 focus:ring-pink-200 focus:border-pink-300 outline-none transition-all"
              placeholder="tu@simplyperfecthn.com"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 dark:text-pink-300 mb-2">
              Contraseña
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 pr-11 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 dark:text-white focus:ring-2 focus:ring-pink-200 focus:border-pink-300 outline-none transition-all"
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                tabIndex={-1}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-pink-500 dark:hover:text-pink-300 transition-colors"
                aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {error && (
            <p className="mb-4 text-sm text-rose-600 bg-rose-50 dark:bg-rose-950/40 dark:text-rose-300 rounded-lg px-3 py-2">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full btn-custom justify-center disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Ingresando..." : "Ingresar"}
          </button>
        </form>
      </div>
    </div>
  );
}
