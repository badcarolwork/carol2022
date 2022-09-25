
import About from "./components/about";
import Home from "./components/home";
import Skills from "./components/skills";
import Works from "./components/works";
import Service from "./components/services";
import Menu from "./components/menu";

function App() {

  return (
    <div className="main-page w-full p-0 m-0">
      <Menu />
      <Home />
      <About />
      <Skills />
      <Works />
      <Service />

    </div>
  );
}

export default App;
