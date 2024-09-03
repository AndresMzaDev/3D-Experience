import { Canvas } from "@react-three/fiber";
import "./App.css";
import { Experience } from "./components/Experience";

function App() {
  return (
    <Canvas
      camera={{
        fov: 64,
        position: [45, 15, 20],
      }}
      shadows
    >
      <Experience />
    </Canvas>
  );
}

export default App;
