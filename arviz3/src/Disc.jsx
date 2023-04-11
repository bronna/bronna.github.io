import * as THREE from 'three'
import { Text } from '@react-three/drei'

function Disc({ store, index, refs, centerX }) {

    function HalfCylinder({ area, soil }) {
        // The surface area of a half-circle is given by (πr^2)/2, so we can rearrange this to solve for r.
        const radius = Math.sqrt((2 * area) / Math.PI) * 0.08

        // Create a path that represents a half-circle
        const path = new THREE.Shape()

        let startAngle
        let endAngle

        if (soil) {
            startAngle = Math.PI
            endAngle = startAngle + Math.PI
        } else {
            startAngle = 0
            endAngle = Math.PI
        }

        const x = radius * Math.cos(startAngle)
        const y = radius * Math.sin(startAngle)

        path.moveTo(x, y)

        const curveSegments = 32
        const angleDelta = (endAngle - startAngle) / curveSegments

        for (let i = 1; i <= curveSegments; i++) {
            const angle = startAngle + angleDelta * i
            const x = radius * Math.cos(angle)
            const y = radius * Math.sin(angle)
            path.lineTo(x, y)
        }

        // Create an extruded geometry from the path
        const extrudeSettings = {
            depth: 0.2, // Extrude depth
            bevelEnabled: false, // Disable bevel
            // bevelEnabled: true,
            // bevelThickness: 0.06,
            // bevelSize: 0.06,
            // bevelOffset: 0,
            // bevelSegments: 8
          }
          
        const geometry = new THREE.ExtrudeGeometry(path, extrudeSettings)
        const material = new THREE.MeshNormalMaterial()
        return <mesh geometry={geometry} material={material} position-y={soil ? 0 : 0.05} />

    }

    return (

        <group ref={refs[index]} position-x={centerX}>

            <Text
                color="black"
                fontSize={0.3}
                position-y={-2}
                maxWidth={2}
                textAlign="center"
                anchorX="center"
                anchorY="top"
                letterSpacing={0.02}
                lineHeight={1.3}
            >
                {store.name}
            </Text>

            <HalfCylinder area={store.soil} soil={true} />
            <HalfCylinder area={store.vegetation} soil={false} position-y={0.07} />

        </group>

    )

}

export default Disc