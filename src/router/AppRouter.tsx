import { Route, Routes } from "react-router"
import { Header } from "../shared/components/Header"
import { Footer } from "../shared/components/Footer"
import App from "../App"
import { NotFound } from "../shared/components/notfound/NotFound"
import { Game } from "./pages/game/Game"
import { Games } from "./pages/games/Games"

export const AppRouter = () => {
  return (
    <div className="bg-black text-white flex flex-col">
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/games" element={<Games />} />
        <Route path="/games/:uuid" element={<Game />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}
