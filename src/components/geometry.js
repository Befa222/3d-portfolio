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
import JSONfont from '../fonts/StarJedi Special Edition_Regular.json'
import '../style/home.scss'


export const FirstName = ({ args, position, color, offset=0 }) => {

    const yellowTexture = useLoader(TextureLoader, 'textures/yellow.jpg')
  
    const FirstNRef = React.useRef();
  
    useFrame(() => (FirstNRef.current.geometry.center()))
  
    useFrame(({clock}) =>{
        FirstNRef.current.rotation.y = Math.sin(offset + clock.elapsedTime) * 0.15
    })
  
    const font = new THREE.FontLoader().parse(JSONfont);
  
    const textOptions = {
      font,
      size: 1,
      height: 0.3,
    };
  
    return (
      <mesh
        position={position}
        color={color}
        args={args}
        ref={FirstNRef}
      >
        <textBufferGeometry attach='geometry' args={['Fabien', textOptions]} position={position} />
        <meshPhysicalMaterial attach='material' map={yellowTexture} color='yellow'
         metalness={1}
         roughness={0.2}
         clearcoat={1}
         reflectivity={1}
        /> 
      </mesh>
    )
  }

  export const LastName = ({ args, position, color, offset=0 }) => {

    const yellowTexture = useLoader(TextureLoader, 'textures/yellow.jpg')
  
    const lastNRef = React.useRef();
  
    useFrame(() => (lastNRef.current.geometry.center()))
  
    useFrame(({clock}) =>{
        lastNRef.current.rotation.y = Math.sin(offset + clock.elapsedTime) * 0.15
    })
  
    const font = new THREE.FontLoader().parse(JSONfont);
  
    const textOptions = {
      font,
      size: 1,
      height: 0.3,
    };
  
    return (
      <mesh
        position={position}
        color={color}
        args={args}
        ref={lastNRef}
      >
        <textBufferGeometry attach='geometry' args={['Lallement', textOptions]} position={position} />
        <meshPhysicalMaterial attach='material' map={yellowTexture} color='yellow'
         metalness={1}
         roughness={0.2}
         clearcoat={1}
         reflectivity={1}
        /> 
      </mesh>
    )
  }