import { OrbitControls, ScrollControls } from "@react-three/drei";
import { Office } from "./Office";
import { ModelHouse } from "./ModelHouse";
import { Overlay } from "./Overlay";

export const Experience = () => {
  return (
    <>
      <ambientLight intensity={1} />
      <OrbitControls enableZoom={false} />
      {/* <ModelHouse /> */}
      <ScrollControls pages={3} damping={0.25}>
        {/* <Overlay /> */}
        {/* <Office /> */}
        {/* <PerspectiveCamera position={[-25, -20, -25]}> */}
        <ModelHouse />
        {/* </PerspectiveCamera> */}
      </ScrollControls>
    </>
  );
};
