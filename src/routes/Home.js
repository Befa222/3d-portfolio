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
import {FirstName, LastName} from '../components/geometry'
import NavBar from '../components/navBar'
import {Bomber, Cockpit, DeathStar, Xwing} from '../components/model3d'
import '../style/home.scss'

function Dolly() {
    useFrame(({ camera }) => {
      camera.position.z = 6 + window.scrollY /10
      camera.position.y = 4 - window.scrollY /400
      camera.position.x = 0 - window.scrollY /400
     
      camera.lookAt(2,2, 0)
    })
    return null
  }

  function Dolly2() {
    useFrame(({ camera }) => {
      
        camera.position.z = 5.2
        camera.position.y = -1.05 
        camera.position.x = 0
      
     
      camera.lookAt(0,2, 0)
    })
    return null
  }



extend({ OrbitControls })

const Controls = () => {
    const orbitRef = useRef()
    const { camera, gl } = useThree()
  
    useFrame(() => {
      orbitRef.current.update()
    })
  
    return (
      <>
        <orbitControls
     // autoRotate
       
       
     enableZoom={false}
      
    //     maxPolarAngle={Math.PI / 2.3}
    //     minPolarAngle={Math.PI / 2.3}
    //     minAzimuthAngle={-Math.PI / 5}
    //    maxAzimuthAngle={Math.PI / 5}
          args={[camera, gl.domElement]}
          ref={orbitRef}
        />
      </>
    )
  }

  const Reflection = ({ position }) => {

    const mirRef = React.useRef();
  
    useFrame(() => (mirRef.current.rotation.x = -1.58))
  
    return (
      <Reflector
        ref={mirRef}
        args={[35, 25]}
        resolution={1980}
        mirror={1}
        position={position}
      >
        {(Material, props) => <Material {...props} metalness={1} roughness={1} clearcoat={1}
          reflectivity={1} />}
      </Reflector>
    )
  }


export default function Home() {

    return (
        <>
            <header id='intro'>
            <NavBar/>
                <Canvas camera={{fov: 60 }}>
                    
                <Dolly/>
                  
                    <directionalLight intensity={1} position={[0, 1, 5]}/>
                    <directionalLight intensity={1} position={[0, 4, -2]}/>
                    <Suspense fallback={null}>
                        <FirstName position={[0,4,-2]}/>
                        <LastName position={[1.7,2,-2]}/>
                        <Bomber/>
                        <Xwing/>
                        <DeathStar/>
                        <Reflection/>
                        <Stars radius={60} depth={10} count={1200} factor={7} saturation={5} fade />
               
                    </Suspense>
                
                </Canvas>
            </header>

            <section id='projects'>
                <Canvas camera={{fov: 60 }}>
                    <ambientLight intensity={0.3}/>
                    <directionalLight/>
                    <Dolly2/>
                    <Suspense fallback={null}>
                        <Cockpit/>
                    </Suspense>
                    <Stars radius={60} depth={10} count={1200} factor={7} saturation={5} fade />
                </Canvas>
            </section>
        </>
    )
}
