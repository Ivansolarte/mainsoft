
import { Routes, Route, Navigate } from "react-router";
import { Dashboard } from "../pages/dashboard";
import PokemonInfo from "../components/templates/pokemonInfo";

export const Routees = () => {
  return (
    <Routes >
      <Route path="/" index element={<Dashboard />} />
      <Route path="pokemon/:id" element={<PokemonInfo />} />

      {/* Redirige cualquier ruta desconocida al Dashboard */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
