import React from 'react'
import { useRef } from 'react'
import { useFrame, extend, useThree } from '@react-three/fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
// import Hemisphere from './Hemisphere.jsx'
// import Disc from './Disc.jsx'
import { Text } from '@react-three/drei'

extend({ OrbitControls: OrbitControls })

function Spheres({ carbonStores }) {
    const { camera, gl } = useThree()

  let refs = []

  useFrame((state, delta) => {
    for (let i = 0; i < refs.length; i++) {
        refs[i].current.rotation.y += delta / 2
    }
  })

function findRadiusOfSphere(volume) {
    // return the radius of the sphere based on the volume parameter
    return Math.pow((3 * volume) / (4 * Math.PI), 1 / 3)
}

function findRadiusOfArea(area) {
    // The surface area of a half-circle is given by (πr^2)/2, so we can rearrange this to solve for r.
    const radius = Math.sqrt((2 * area) / Math.PI);
    return radius;
}

// function that calculates the x-position of the Hemisphere group, creating equal gap between each Hemisphere group
function findXPosition(index) {
    // gap between each group
    const gap = 2.3

    // calculate the total width of all the spheres
    let totalWidth = 0
    for (let i = 0; i < carbonStores.length; i++) {
        totalWidth += findRadiusOfSphere(carbonStores[i].soil * 2) * 0.2 + gap
    }

    // calculate the total width of all the spheres before the current index
    let totalWidthBefore = 0
    for (let i = 0; i < index; i++) {
        totalWidthBefore += findRadiusOfSphere(carbonStores[i].soil * 2) * 0.2 + gap
    }

    // calculate the total width of all the spheres after the current index
    let totalWidthAfter = 0
    for (let i = index + 1; i < carbonStores.length; i++) {
        totalWidthAfter += findRadiusOfSphere(carbonStores[i].soil * 2) * 0.2 + gap
    }

    // calculate the x-position of the current index
    return (totalWidthBefore - totalWidthAfter) / 2
}

  return (
    <>
        <orbitControls args={ [ camera, gl.domElement ] } />
        {carbonStores.map((store, index) => {
            refs[index] = useRef()
            return (
                // <Hemisphere 
                //     key={index} 
                //     store={store} 
                //     index={index} 
                //     refs={refs} 
                //     centerX={findXPosition(index)} 
                // />
                <group key={index} ref={refs[index]} position-x={findXPosition(index)}>
                <Text
                    color="black"
                    fontSize={0.3}
                    position-y={-1.5}
                    maxWidth={2}
                    textAlign="center"
                    anchorX="center"
                    anchorY="top"
                    letterSpacing={0.02}
                    lineHeight={1.3}
                >
                    {store.name}
                </Text>

                <mesh>
                    <sphereGeometry 
                        args={[
                            findRadiusOfSphere(store.soil) * 0.2, 
                            32,
                            16, 
                            0, 
                            Math.PI * 2, 
                            Math.PI / 2, 
                            Math.PI / 2
                        ]} 
                    />
                    <meshNormalMaterial />
                </mesh>

                <mesh rotation-x={ -Math.PI / 2} >
                    <circleGeometry 
                        args={[
                            findRadiusOfSphere(store.soil) * 0.2, 
                            32
                        ]} 
                    />
                    <meshNormalMaterial />
                </mesh>

                <mesh rotation-x={ Math.PI / 2} position-y={0.07}>
                    <circleGeometry 
                        args={[
                            findRadiusOfSphere(store.vegetation) * 0.2, 
                            32
                        ]} 
                    />
                    <meshNormalMaterial />
                </mesh>

                <mesh position-y={0.07}>
                    <sphereGeometry 
                        args={[
                            findRadiusOfSphere(store.vegetation) * 0.2, 
                            32, 
                            16, 
                            0, 
                            Math.PI * 2, 
                            0, 
                            Math.PI / 2
                        ]} 
                    />
                    <meshNormalMaterial />
                </mesh>
            </group>
            )
        })}
    </>
  )
}

export default Spheres