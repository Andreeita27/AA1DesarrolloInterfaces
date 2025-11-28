import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import CharacterDetailPage from "./pages/CharacterDetailPage";
import LocationsPage from "./pages/LocationsPage";

export default function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/character/:id" element={<CharacterDetailPage />} />
        <Route path="/locations" element={<LocationsPage />} />
      </Routes>
    </BrowserRouter>
  );
}