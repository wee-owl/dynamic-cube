import { Canvas } from "@react-three/fiber";
import Container from "./Components/Container/Container";
import CameraController from "./Components/OrbitController/OrbitController";
import Cube from "./Components/Cube/Cube";
import "./App.css";


function App() {
  return (
    <>
      <h1 className="title">Dynamic cube</h1>
      <Container>
        <div className="cube-wrapper">
          <Canvas camera={{ position: [5, 5, 5], fov: 25 }}>
            <ambientLight intensity={1} />
            <directionalLight position={[1, 1, 1]} />
            <CameraController />
            <Cube />
          </Canvas>
        </div>
      </Container>
    </>
  );
}

export default App;