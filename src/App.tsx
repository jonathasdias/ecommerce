import { Outlet } from "react-router-dom";
import Header from "./ui/components/header/Header";

function App() {
  // const dispatch:AppDispatch = useDispatch();
  // const { text } = useSelector((state:RootState) => state.testeReducer);


  return (
    <>
      <Header />
      <Outlet />
      {/* Criar footer com pages, redes sociais, e mais alguma coisa. */}
    </>
  )
}

export default App;