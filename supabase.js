import { supabase } from "./supabase.js";

async function cargarRifa() {
  const { data, error } = await supabase
    .from("rifas")
    .select("*")
    .eq("estado", "activa")
    .limit(1)
    .single();

  if (error) {
    console.error(error);
    return;
  }

  document.getElementById("titulo").textContent = data.titulo;
  document.getElementById("descripcion").textContent = data.descripcion;

  const progreso = (data.boletas_vendidas / data.total_boletas) * 100;
  document.getElementById("progreso").textContent =
    Math.round(progreso) + "% vendido";
}

cargarRifa();