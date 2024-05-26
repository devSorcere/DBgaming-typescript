import "./App.css";
import Header from "./components/header";
import Home from "./pages/home";
import SideBar from "./components/sidebar";
function App() {
  return (
    <div className="App">
      <Header />
      <SideBar />
      <div className="w-[100%]  flex flex-col items-center">
        <div className=" w-[100%]  px-0">
          <div className="w-[100%] mt-[75px]"></div>
          <Home />
        </div>
      </div>
    </div>
  );
}

export default App;
