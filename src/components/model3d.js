import React, { useRef } from 'react'
import { useFrame, useLoader} from '@react-three/fiber'
import * as THREE from "three"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader"


export const Bomber = () => {

    const gltf = useLoader(

        GLTFLoader,
        "textures/tieBomber/scene.gltf",
        loader => {

            const dracoLoader = new DRACOLoader();
            dracoLoader.setDecoderPath("/draco-gltf/");
            loader.setDRACOLoader(dracoLoader);

        }
    );
    useFrame(() => (ref.current.rotateOnWorldAxis(new THREE.Vector3(0, 1, 0), 0.005)))
    const ref = React.useRef()

    const bomberRef = useRef()

    useFrame(() => bomberRef.current.rotation.y = 5)
    useFrame(()=>bomberRef.current.rotation.z += -0.003)
    
    return (

        gltf ?
            <group ref={ref}>
                <primitive ref={bomberRef} scale={0.006} position={[-2, 3, -4]} object={gltf.scene} />
            </group>
            : null
    )
}

export const Xwing = () => {

    const gltf = useLoader(

        GLTFLoader,
        "textures/Xwing/scene.gltf",
        loader => {

            const dracoLoader = new DRACOLoader();
            dracoLoader.setDecoderPath("/draco-gltf/");
            loader.setDRACOLoader(dracoLoader);

        }
    );
    useFrame(() => (ref.current.rotateOnWorldAxis(new THREE.Vector3(0, 1, 0), 0.005)))
    const ref = React.useRef()

    const xWingRef = useRef()

    useFrame(() => xWingRef.current.rotation.y = 5 )
    useFrame(()=>xWingRef.current.rotation.z += -0.003) 

    return (

        gltf ?
            <group ref={ref}>
                <primitive ref={xWingRef} scale={0.007} position={[2, 3, -4]} object={gltf.scene} />
            </group>
            : null
    )
}

export const DeathStar = () => {

    const gltf = useLoader(

        GLTFLoader,
        "textures/deathStar/scene.gltf",
        loader => {

            const dracoLoader = new DRACOLoader();
            dracoLoader.setDecoderPath("/draco-gltf/");
            loader.setDRACOLoader(dracoLoader);

        }
    );

    const ref = React.useRef()

    const deathSRef = useRef()

    useFrame(() => deathSRef.current.rotation.y += -0.003)
    useFrame(()=> deathSRef.current.rotation.z = -0.2) 
    
    return (

        gltf ?
            <group ref={ref}>
                <primitive ref={deathSRef} scale={0.004} position={[11, 3.5, -3]} object={gltf.scene} />
            </group>
            : null
    )
}

export const Cockpit = () => {

    const gltf = useLoader(

        GLTFLoader,
        "textures/cockpit/scene.gltf",
        loader => {

            const dracoLoader = new DRACOLoader();
            dracoLoader.setDecoderPath("/draco-gltf/");
            loader.setDRACOLoader(dracoLoader);

        }
    );

    const ref = React.useRef()

    const cockpitRef = useRef()

    useFrame(() => cockpitRef.current.rotation.y = 3.15

    )

    return (

        gltf ?
            <group ref={ref}>
                <primitive ref={cockpitRef} scale={2.1} position={[0, -2.1, 4.2]} object={gltf.scene} />
            </group>
            : null
    )
}