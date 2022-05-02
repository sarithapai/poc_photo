import "./App.css";
import Home from "./Containers/Home/Home.jsx";
import { GlobalProvider } from "./Context/GlobalState";

function App() {
  return (
    <>
      <GlobalProvider>
        <Home />
      </GlobalProvider>
    </>
  );
}

export default App;
