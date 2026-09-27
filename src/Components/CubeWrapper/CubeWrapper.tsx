import { Canvas } from "@react-three/fiber"
import { CameraController } from "../OrbitController/OrbitController"
import { Cube } from "../Cube/Cube"
import style from "./CubeWrapper.module.css"


export const CubeWrapper = () => {


  return (
    <div className={style.cube_wrapper}>
      <Canvas>
        <ambientLight intensity={1} />
        <directionalLight position={[1, 1, 1]} />
        <CameraController />
        <Cube />
      </Canvas>
    </div>
  )
}
