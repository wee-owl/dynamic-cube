import * as THREE from "three";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import Texture from "../Texture/Texture";
import cubeSideParams from "../../utils/params";


function Cube () {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame((_, delta) => {
    ref.current.rotation.x += 0.2 * delta;
    ref.current.rotation.y += 0.3 * delta;
    ref.current.rotation.z += 0.4 * delta;
  });


  return (
    <mesh ref={ref} position={[0, 0, 0]} onDoubleClick={(e) => console.dir(e)}>
      <boxGeometry attach="geometry" args={[1.5, 1.5, 1.5]} />
      {
        cubeSideParams.map((item, i) => {
          return (
            <Texture color={item.color} text={item.text} id={i} key={i}/>
          )
        })
      }
    </mesh>
  )
}

export default Cube;