import MainSec from "./components/MainSec.jsx";
import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";
import "./App.css";
import "./css/mobile.css";
import "./css/tablet.css";

function App() {
  return (
    <main>
      <Header />
      <Navbar />
      <MainSec />
    </main>
  );
}

export default App;
