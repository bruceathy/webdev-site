import MainSec from "./components/MainSec.jsx";
import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";
import "./App.css";

function App() {
  return (
    <div className="background-space">
      <div className="container">
        <Header />
        <Navbar />
        <MainSec />
      </div>
    </div>
  );
}

export default App;
