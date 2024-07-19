import { useEffect } from "react";
import { useThree } from "@react-three/fiber";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";


function CameraController() {
  const { camera, gl } = useThree();
  useEffect(
    () => {
      const controls = new OrbitControls(camera, gl.domElement);
      controls.enableZoom = false;
      return () => {
        controls.dispose();
      };
    },
    [camera, gl]
  );
  return null;
}

export default CameraController;