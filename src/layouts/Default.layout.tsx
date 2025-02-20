import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export function DefaultLayout() {
  return (
    <div>
      <Header />
      {/* Apresenta o restante do conteudo 
        ou seja o header vai aparecer em todas as paginas
      */}
      <Outlet />
    </div>
  )
}
