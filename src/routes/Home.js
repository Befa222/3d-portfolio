import React, { useState, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Reflector, Stars, useProgress, Html } from '@react-three/drei'
import { FirstName, LastName, Button1, Button2, Button3, Button4 } from '../components/geometry'
import NavBar from '../components/navBar'
import { Bomber, Cockpit, DeathStar, Xwing } from '../components/model3d'
import '../style/home.scss'


function Loader() {
  const {progress} = useProgress()
  return <Html><div className='progress-bar'>{progress.toFixed(0)} %</div></Html>
}


function Dolly() {
  useFrame(({ camera }) => {
    camera.position.z = 6 + window.scrollY / 10
    camera.position.y = 4 - window.scrollY / 80
    camera.position.x = 0 - window.scrollY / 400

    camera.lookAt(2, 2, 0)
  })
  return null
}

function Dolly2() {
  useFrame(({ camera }) => {

    camera.position.z = 5.2
    camera.position.y = -1.05
    camera.position.x = 0


    camera.lookAt(0, 2, 0)
  })
  return null
}

//extend({ OrbitControls })

// const Controls = () => {
//   const orbitRef = useRef()
//   const { camera, gl } = useThree()

//   useFrame(() => {
//     orbitRef.current.update()
//   })

//   return (
//     <>
//       <orbitControls
//         // autoRotate
//         //  enableZoom={false}
//         //  maxPolarAngle={Math.PI / 1.95}
//         // minPolarAngle={Math.PI / 1.95}
//         // minAzimuthAngle={-Math.PI / 5}
//         // maxAzimuthAngle={Math.PI / 5}
//         args={[camera, gl.domElement]}
//         ref={orbitRef}
//       />
//     </>
//   )
// }

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

  const [popProject, setPopProject] = useState(true);

  return (
    <div id='page-container'>
      <header id='intro'>
        {/* <div className='laser'></div>
        <div className='laser2'></div>
        <div className='laser3'></div>
        <div className='laser4'></div> */}
        <NavBar />
        <Canvas camera={{ fov: 60 }}>
          <Dolly />
          <directionalLight intensity={3} position={[0, 0.7, 5]} />

          <Suspense fallback={<Loader />}>
            <FirstName position={[0, 4, -2]} />
            <LastName position={[1.7, 2, -2]} />
            <Bomber />
            <Xwing />
            <DeathStar />
          </Suspense>
          <Reflection />
          <Stars radius={60} depth={10} count={1200} factor={7} saturation={5} fade />
        </Canvas>
      </header>

      <section id='projects'>
        {popProject && (
          <div id='help-container'>
            <p>Click on the colored circles below to reveal their projects.</p>
            <p>Click on a project for details.</p>
            <button id='ok-button' onClick={() => setPopProject(!popProject)}>dismiss</button>
          </div>
        )}
        <Canvas camera={{ fov: 60 }}>
          <ambientLight intensity={0.3} />
          <directionalLight />
          <spotLight position={[0, 4, 0]} color='red' />
          <Dolly2 />
          <Suspense fallback={null}>
            <Cockpit />
          </Suspense>
          <Suspense fallback={null}>
            <Button1 position={[-0.25, -1.005, 4]} />
          </Suspense>
          <Suspense fallback={null}>
            <Button2 position={[-0.17, -1.005, 4]} />
          </Suspense>
          <Suspense fallback={null}>
            <Button3 position={[0.04, -1.005, 4]} />
          </Suspense>
          <Suspense fallback={null}>
            <Button4 position={[0.12, -1.005, 4]} />
          </Suspense>
          <Stars radius={80} depth={10} count={1200} factor={7} saturation={5} fade />
        </Canvas>
      </section>
    </div>
  )
}
