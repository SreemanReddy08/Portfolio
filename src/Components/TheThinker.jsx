import React, { Suspense, useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";

function Model({ metalness = 0.5, roughness = 0.5 }) {
  const gltf = useGLTF("/thinker_rodin_4k_tris.glb"); // Ensure path is correct
  const modelRef = useRef();

  // Apply material with metalness to all meshes in the model
  useEffect(() => {
    if (modelRef.current) {
      modelRef.current.traverse((child) => {
        if (child.isMesh) {
          // Preserve existing material properties (e.g., map, normalMap) and add metalness
          child.material = new THREE.MeshStandardMaterial({
            ...child.material, // Copy existing material properties
            metalness: metalness, // Set metalness (0 = non-metallic, 1 = fully metallic)
            roughness: roughness, // Set roughness (0 = smooth, 1 = rough)
          });
          child.material.needsUpdate = true;
        }
      });
    }
  }, [metalness, roughness]);

  return <primitive ref={modelRef} object={gltf.scene} scale={2.2} />;
}

export default function My3DModel() {
  const lightRef = useRef();

  // Handle mouse movement to update light position
  useEffect(() => {
    const handleMouseMove = (event) => {
      if (lightRef.current) {
        const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
        const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

        const radius = 10;
        const phi = (1 - mouseY) * (Math.PI / 4);
        const theta = mouseX * Math.PI;

        const x = radius * Math.sin(phi) * Math.tan(theta);
        const y = radius * Math.cos(phi);
        const z = radius * Math.sin(phi) * Math.sin(theta);

        lightRef.current.position.set(x, y, z);
        lightRef.current.lookAt(0, 0, 0);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="w-full h-[800px] relative z-10">
      <Canvas
        camera={{ position: [0, 5, 20], fov: 60 }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight ref={lightRef} position={[0, 5, 4]} intensity={1} />
        <Suspense fallback={null}>
          <Model metalness={0.2} roughness={0} /> {/* Adjust metalness and roughness */}
        </Suspense>
        <OrbitControls
          enableZoom={true}
          enablePan={false}
          autoRotate={true}
          autoRotateSpeed={0}
          target={[0, 0, 0]}
          minDistance={10}
          maxDistance={50}
        />
      </Canvas>
    </div>
  );
}