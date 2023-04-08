import "./App.css";
import Footer from "./components/Index/Footer";
import IndexHeader from "./components/Index/IndexHeader";
import Main from "./components/Index/Main";
import Recent from "./components/Index/Recent";

function App() {
  return (
    <div>
      <IndexHeader />
      <Recent />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
