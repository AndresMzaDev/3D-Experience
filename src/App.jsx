import { Canvas } from "@react-three/fiber";
import "./App.css";
import { Experience } from "./components/Experience";

function App() {
  return (
    <Canvas
      camera={{
        fov: 64,
        position: [-25, -20, -25],
      }}
    >
      <Experience />
    </Canvas>
  );
}

export default App;
