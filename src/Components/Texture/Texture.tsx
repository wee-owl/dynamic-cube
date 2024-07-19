import { RenderTexture, PerspectiveCamera, Text } from '@react-three/drei';


type PropTypes = {
  id: number,
  color: string,
  text: string,
  children?: React.ReactElement,
};


function Texture({...props}:PropTypes) {
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

export default Texture;

/**
* attach - with the attach prop, we can precisely tell the renderer what property to attach each component to.
* PerspectiveCamera - this projection mode is designed to mimic the way the human eye sees. 
* PerspectiveCamera( fov : Number, aspect : Number, near : Number, far : Number ): 
* makeDefault - registers the camera as the system default, fiber will start rendering with it.
*/