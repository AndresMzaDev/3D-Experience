import { OrbitControls, ScrollControls, useHelper } from "@react-three/drei";
import React, { useRef } from "react";
import { Office } from "./Office";
import { ModelHouse } from "./ModelHouse";
import { Paisaje } from "./Paisaje";
import { Overlay } from "./Overlay";
import { Prueba } from "./Prueba";
import { Castle } from "./Castle";
import Error404 from "./Error404";
import { DirectionalLightHelper } from "three";

export const Experience = () => {
  const directLight = useRef();
  // useHelper(directLight, DirectionalLightHelper, 5, "white");
  return (
    <>
      <ambientLight intensity={0.5} />
      {/* <ambientLight intensity={0.5} /> */}
      {/* <pointLight position={[-20, 40, 10]} castShadow /> */}
      <directionalLight
        penumbra={1}
        position={[-10, 5, 10]}
        castShadow
        ref={directLight}
      />
      {/* <spotLight
        castShadow
        intensity={0.2}
        angle={Math.PI / 7}
        position={[150, 150, 250]}
        penumbra={1}
        shadow-mapSize={2048}
      /> */}
      <OrbitControls enableZoom={false} />
      <ScrollControls pages={3} damping={0.25}>
        <Overlay />
        <Castle />
      </ScrollControls>
    </>
  );
};
