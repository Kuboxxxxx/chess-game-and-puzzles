import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Puzzles } from "./pages/Puzzles"
import { Users } from "./pages/Users"
import { PlayChess } from "./pages/PlayChess";

// AppRoutes is a custom component which has a routing switch that will conditionally render the corresponding element or component based on the path in the browser's url
export const AppRoutes = () => {
  return (
    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/playchess" element={<PlayChess />} />

      <Route path="/puzzles" element={<Puzzles />} />

      <Route path="/users" element={<Users />} />
    </Routes>
  );
};