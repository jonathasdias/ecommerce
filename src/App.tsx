import { Outlet } from "react-router-dom";
import Header from "./ui/components/header/Header";
import Footer from "./ui/components/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App;