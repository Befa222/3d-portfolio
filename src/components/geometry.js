import React, { useState, useRef } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { SpotLight } from '@react-three/drei'
import * as THREE from "three"
import JSONfont from '../fonts/StarJedi Special Edition_Regular.json'
import '../style/home.scss'


export const FirstName = ({ args, position, color, offset = 0 }) => {

  const FirstNRef = React.useRef();

  useFrame(() => (FirstNRef.current.geometry.center()))

  useFrame(({ clock }) => {
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
      <meshPhysicalMaterial attach='material'  color='rgb(233, 198, 45);'
        metalness={0.9}
        roughness={0.2}
        clearcoat={1}
        reflectivity={1}
      />
    </mesh>
  )
}

export const LastName = ({ args, position, color, offset = 0 }) => {


  const lastNRef = React.useRef();

  useFrame(() => (lastNRef.current.geometry.center()))

  useFrame(({ clock }) => {
    lastNRef.current.rotation.y = -Math.sin(offset + clock.elapsedTime) * 0.15
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
      <meshPhysicalMaterial attach='material' color='rgb(233, 198, 45);'
        metalness={1}
        roughness={0.2}
        clearcoat={1}
        reflectivity={1}
      />
    </mesh>
  )
}
export const Spot = ({ position, args }) => {

  const spotRef = React.useRef();

  useFrame(() => spotRef.current.position.set(0, -1, -1))

  return (

    <SpotLight
      color='blue'
      ref={spotRef}
      distance={7} // The diffuse-cone needs a fixed distance (default: 5)
      angle={0.25} // The diffuse-cone needs a fixed angle (default: 0.15)
      attenuation={4.5} // Diffuse-cone attenuation (default: 5)
      anglePower={3} // Diffuse-cone anglePower (default: 5)
    />
  )
}
export const Button1 = ({ position }) => {

  const [project1, setProject1] = useState(false);

  const ref = useRef()
  return (
    <group ref={ref}>
      <mesh
        position={position}
        onClick={() => setProject1(!project1)}
      >
        <circleGeometry attach='geometry' args={[0.02, 60]} postion={position} />
        <meshPhysicalMaterial attach='material' color='pink' />
      </mesh>

      {project1 && (
        <group>
          <Project1 position={[0, 2, 0]} />
          <Spot />
        </group>
      )}

    </group>
  )
}

export const Button2 = ({ position }) => {

  const [project2, setProject2] = useState(false);

  const ref = useRef()
  return (
    <group ref={ref}>
      <mesh
        position={position}
        onClick={() => setProject2(!project2)}
      >
        <circleGeometry attach='geometry' args={[0.02, 60]} postion={position} />
        <meshPhysicalMaterial attach='material' color='orange' />
      </mesh>

      {project2 && (
        <group>
          <Project2 position={[0, 2, 0]} />
          <Spot />
        </group>
      )}

    </group>
  )
}

export const Button3 = ({ position }) => {

  const [project3, setProject3] = useState(false);

  const ref = useRef()
  return (
    <group ref={ref}>
      <mesh
        position={position}
        onClick={() => setProject3(!project3)}
      >
        <circleGeometry attach='geometry' args={[0.02, 60]} postion={position} />
        <meshPhysicalMaterial attach='material' color='green' />
      </mesh>

      {project3 && (
        <group>
          <Project3 position={[0, 2, 0]} />
          <Spot />
        </group>
      )}

    </group>
  )
}

export const Button4 = ({ position }) => {

  const [project4, setProject4] = useState(false);

  const ref = useRef()
  return (
    <group ref={ref}>
      <mesh
        position={position}
        onClick={() => setProject4(!project4)}
      >
        <circleGeometry attach='geometry' args={[0.02, 60]} postion={position} />
        <meshPhysicalMaterial attach='material' color='purple' />
      </mesh>

      {project4 && (
        <group>
          <Project4 position={[0, 2, 0]} />
          <Spot />
        </group>
      )}

    </group>
  )
}

export const Project1 = ({ args, position, color, map, scale }) => {

  const meshRef = React.useRef();
  useFrame(() => (meshRef.current.rotation.y += 0.005))

  const colorMap = useLoader(TextureLoader, 'textures/pikachew1.png')

  return (
    <mesh
      position={position}
      color={color}
      args={args}
      ref={meshRef}
      onClick={() => window.open('/Pick-a-Chew')}
    >
      <boxGeometry attach='geometry' args={[1.2, 3, 0.2]} position={position} />
      <meshPhysicalMaterial attach='material'
        map={colorMap}
        reflectivity={1}
        roughness={1}
      />
    </mesh>
  )
}

export const Project2 = ({ args, position, color, map, scale }) => {

  const meshRef = React.useRef();
  useFrame(() => (meshRef.current.rotation.y += 0.005))

  const colorMap = useLoader(TextureLoader, 'textures/hackathon1.jpg')

  return (
    <mesh
      position={position}
      color={color}
      args={args}
      ref={meshRef}
      onClick={() => window.open('/Tempera')}
    >
      <boxGeometry attach='geometry' args={[1.7, 2.5, 0.2]} position={position} />
      <meshPhysicalMaterial attach='material'
        reflectivity={1}
        roughness={1}
        map={colorMap}
      />
    </mesh>
  )
}

export const Project3 = ({ args, position, color, map, scale }) => {

  const meshRef = React.useRef();
  useFrame(() => (meshRef.current.rotation.y += 0.005))

  const colorMap = useLoader(TextureLoader, 'textures/weather.jpg')

  return (
    <mesh
      position={position}
      color={color}
      args={args}
      ref={meshRef}
      onClick={() => window.open('/Weather-app')}
    >
      <boxGeometry attach='geometry' args={[1.2, 3, 0.2]} position={position} />
      <meshPhysicalMaterial attach='material'
        map={colorMap}
        reflectivity={1}
        roughness={1}
      />
    </mesh>
  )
}

export const Project4 = ({ args, position, color, map, scale }) => {

  const meshRef = React.useRef();
  useFrame(() => (meshRef.current.rotation.y += 0.005))

  const colorMap = useLoader(TextureLoader, 'textures/wildUniverse.jpg')

  return (
    <mesh
      position={position}
      color={color}
      args={args}
      ref={meshRef}
      onClick={() => window.open('/Wild-universe')}
    >
      <boxGeometry attach='geometry' args={[3, 2, 0.2]} position={position} />
      <meshPhysicalMaterial attach='material'
        map={colorMap}
        reflectivity={1}
        roughness={1}
      />
    </mesh>
  )
}