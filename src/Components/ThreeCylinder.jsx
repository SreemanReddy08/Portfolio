import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import * as THREE from "three";

// Texture path (place Frame_1_3.png in public/files)
const texturePath = "/Frame 1 (5).png";

const Cylinder = () => {
    const tex = useTexture(texturePath);

    // Texture settings
    tex.minFilter = THREE.LinearFilter;
    tex.magFilter = THREE.NearestFilter;
    tex.anisotropy = 16; // Reduced for performance
    tex.generateMipmaps = true;

    const meshRef = useRef();

    // Rotate the mesh every frame
    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += delta * 0.5;
        }
    });

    return (
        <group rotation={[0.2, -0.1, 0.2]}>
            <mesh ref={meshRef}>
                <cylinderGeometry args={[6, 6, 2.5, 32, 5, true]} />
                <meshStandardMaterial
                    wireframe={false}
                    map={tex}
                    transparent
                    side={THREE.DoubleSide}
                    
                    
                />
            </mesh>
        </group>
    );
};

const ThreeCylinder = () => {


   


   



    return (
        <Canvas
            style={{
                width: "100%",
                height: "100%",
                position: "relative",
            }}
            gl={{
                alpha: true,
                antialias: true,
                outputEncoding: THREE.sRGBEncoding,
                toneMapping: THREE.ACESFilmicToneMapping,
            }}
            camera={{ position: [0, 0, 15], fov: 75 }}
            onCreated={({ gl, scene }) => {
                scene.background = null;
                gl.setClearAlpha(0);
            }}
        >
            <OrbitControls
                autoRotate={false}
                enableZoom={false}
                rotateSpeed={4}
                enablePan={false}
            />
            <ambientLight intensity={1} />
            <directionalLight
                position={[5, 5, 5]}
                intensity={1}
                castShadow
            />
            <Cylinder />
            
            
        </Canvas>
    );
};

export default ThreeCylinder;