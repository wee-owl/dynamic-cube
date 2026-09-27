import * as THREE from "three"
import { useRef } from "react"
import { useNavigate } from "react-router"
import { useDispatch } from "react-redux"
import { AppDispatch } from "#/redux/store/store"
import { addSideParams } from "#/redux/slices/sideSlice"
import { ThreeEvent, useFrame } from "@react-three/fiber"
import { cubeSideParams } from "#/utils/params"
import { Texture } from "../Texture/Texture"


export const Cube = () => {
  const ref = useRef<THREE.Mesh>(null!)
  const dispatch: AppDispatch = useDispatch()
  const navigate = useNavigate()

  useFrame((_, delta) => {
    ref.current.rotation.x += 0.2 * delta
    ref.current.rotation.y += 0.3 * delta
    ref.current.rotation.z += 0.4 * delta
  })

  const handleDoubleClick = (e: ThreeEvent<MouseEvent>) => {
    if (!(e.eventObject instanceof THREE.Mesh)) return
    const id = e.faceIndex && Math.floor(e.faceIndex / 2)
    const obj = (id != null) && {
      id: id, 
      uuid: e.eventObject.material[id].uuid,
      text: id + 1,
      top: e.offsetY,
      left: e.offsetX,
    }
    dispatch(addSideParams(obj))
    navigate(`/dynamic-cube/side/id/${id}`)
  }


  return (
    <mesh 
      ref={ref} 
      position={[0, 0, 0]} 
      onDoubleClick={handleDoubleClick}
    >
      <boxGeometry attach="geometry" args={[3, 3, 3]}/>
      {
        cubeSideParams.map((item, i) => {
          return (
            <Texture 
              color={item.color} 
              text={item.text} 
              id={i} 
              key={i} 
            />
          )
        })
      }
    </mesh>
  )
}
