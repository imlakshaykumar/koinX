import { Route, Routes } from "react-router-dom"
import { NavBar } from "./components/NavBar"
import { Home } from "./pages/Home"
import { FooterLike } from "./components/FooterLike"

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={ <Home /> } />
      </Routes>
      <FooterLike />
    </>
  )
}

export default App
