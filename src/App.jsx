import "./App.css";
import Home from "./pages/Home";
import MagicFrameContextProvider from "./store/MagicFrameContext";

function App() {
  return (
    <>
      <MagicFrameContextProvider>
        <Home></Home>
      </MagicFrameContextProvider>
    </>
  );
}

export default App;
