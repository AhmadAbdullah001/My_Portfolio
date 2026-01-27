import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Center } from "@react-three/drei";

function Model() {
  const { scene } = useGLTF("/avatar.glb");

  return <primitive object={scene} scale={1.7} />;
}

export default function Avatar() {
  return (
    <div className="w-72 h-72 md:w-96 md:h-96">

      <Canvas camera={{ position: [0, 1.6, 2.4], fov: 32 }}>

        {/* Lights */}
        <ambientLight intensity={0.5} />

        <directionalLight
          position={[3, 5, 3]}
          intensity={1.1}
        />

        <directionalLight
          position={[-3, 2, 2]}
          intensity={0.6}
        />

        {/* Auto center model */}
        <Center>
          <Model />
        </Center>

        {/* Controls */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 2.2}
          maxPolarAngle={Math.PI / 2.2}
        //   autoRotate
        //   autoRotateSpeed={0.6}
        />

      </Canvas>

    </div>
  );
}
