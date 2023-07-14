import "./App.css";
import MainContainer from "./components/MainContainer";
import backroundImg from "./assets/mobile/dayTime.svg";

function App() {
  const containerStyles = {
    backgroundImage: `url(${backroundImg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "375px",
    height: "667px",
  };
  return (
    <div style={containerStyles}>
      <MainContainer />
    </div>
  );
}

export default App;
