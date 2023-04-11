import { Text } from '@react-three/drei'
import { EffectComposer } from '@react-three/postprocessing'
// import Gooey from './Gooey'
// import { useRef } from 'react'

function Hemisphere({ store, index, refs, centerX }) {
    function findRadiusOfSphere(volume) {
        // return the radius of the sphere based on the volume parameter
        return Math.pow((3 * volume) / (4 * Math.PI), 1 / 3)
    }

    // const gooeyRef = useRef()

    return (
        // <group ref={refs[index]} position-x={(index * 2.3) - 10}>
        // <group ref={refs[index]}>
        <group ref={refs[index]} position-x={centerX}>
            {/* <EffectComposer>
                <Gooey
                    ref={gooeyRef}
                    frequency={ 2 }
                    amplitude={ 0.1 }
                />
            </EffectComposer> */}
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
}

export default Hemisphere