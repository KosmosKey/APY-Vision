import { useMedia } from "react-use";
import ResponsiveNavbar from "./components/ResponsiveNavbar/ResponsiveNavbar";
import ValuePool from "./components/ValuePool";
import "./styles/global.scss";
import VisionLayout from "./views/VisionLayout";

function App() {
  // Max Width of 635px (Mobile)
  const isMaxWidth635px = useMedia("(max-width:635px)");

  return (
    <div className="App">
      {isMaxWidth635px ? <ResponsiveNavbar /> : <ValuePool />}

      <VisionLayout />
    </div>
  );
}

export default App;
