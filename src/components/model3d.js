import React, { useState, Suspense, useRef, useMemo, useEffect } from 'react'
import { Canvas, useFrame, useLoader, useThree, extend } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { MeshWobbleMaterial, pointsMaterial, Box, useMatcapTexture, Octahedron, Reflector, Cloud, CubeCamera, Sky, Stars, SpotLight, useTexture, useProgress, Html, draco } from '@react-three/drei'
import { useResource } from 'react-three-fiber'
import * as THREE from "three"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader"
import { FogExp2, OrthographicCamera, PerspectiveCamera, PlaneGeometry, PointLightHelper, SpotLightHelper, Vector3 } from 'three'
import { FirstName, LastName } from '../components/geometry'
import NavBar from '../components/navBar'

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
    useFrame(() => (ref.current.rotateOnWorldAxis(new THREE.Vector3(0,1,0), 0.005)))
    const ref = React.useRef()

    const bomberRef = useRef()

    

    useFrame(() => (
    bomberRef.current.rotation.y = 5,
    bomberRef.current.rotation.z += -0.003
     ))

    return (

        gltf ?
            <group ref={ref}>
                <primitive ref={bomberRef} scale={0.007} position={[-2, 3, -4]} object={gltf.scene} />
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
    useFrame(() => (ref.current.rotateOnWorldAxis(new THREE.Vector3(0,1,0), 0.005)))
    const ref = React.useRef()

    const xWingRef = useRef()

    

    useFrame(() => (
    xWingRef.current.rotation.y = 5,
    xWingRef.current.rotation.z += -0.003
     ))

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

    

    useFrame(() => (
    deathSRef.current.rotation.y += -0.003,
    deathSRef.current.rotation.z = -0.2
     ))

    return (

        gltf ?
            <group ref={ref}>
                <primitive ref={deathSRef} scale={0.003} position={[9, 4, -3]} object={gltf.scene} />
            </group>
            : null
    )
}