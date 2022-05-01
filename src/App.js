import './App.css';
import Home from './Containers/Home/Home.jsx';
import Export from './Containers/Export/Export.jsx';
import { GlobalProvider } from './Context/GlobalState';

function App() {
  return (
    <>
      <GlobalProvider>
        {/* <Home /> */}
        <Export />
      </GlobalProvider>
    </>
  );
}

export default App;
