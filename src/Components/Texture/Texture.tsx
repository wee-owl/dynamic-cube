import { RenderTexture, PerspectiveCamera, Text } from '@react-three/drei'


export const Texture = ({...props}) => {


  return (
    <meshStandardMaterial attach={`material-${props.id}`}>
      <RenderTexture attach="map">
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <color attach="background" args={[`${props.color}`]} />
        <Text fontSize={1} color="#000000">
          {props.text}
        </Text>
      </RenderTexture>
    </meshStandardMaterial>
  )
}
