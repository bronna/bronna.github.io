import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import { Text } from '@react-three/drei'
import Spheres from './Spheres'

const root = ReactDOM.createRoot(document.querySelector('#root'))

/**
 * Data
 */
const carbonStores = [
    {
        "name": "Boreal forests",
        "vegetation": 64,
        "soil": 344,
    },
    {
        "name": "Temperate forests",
        "vegetation": 57,
        "soil": 96,
    },
    {
        "name": "Temperate grasslands",
        "vegetation": 7,
        "soil": 236,
    },
    {
        "name": "Tropical forests",
        "vegetation": 120,
        "soil": 123,
    },
    {
        "name": "Deserts and semideserts",
        "vegetation": 2,
        "soil": 42,
    },
    {
        "name": "Tundra",
        "vegetation": 6,
        "soil": 127,
    },
    {
        "name": "Wetlands",
        "vegetation": 43,
        "soil": 643,
    },
    {
        "name": "Tropical savannas",
        "vegetation": 29,
        "soil": 117,
    },
    {
        "name": "Croplands",
        "vegetation": 2,
        "soil": 80,
    },
]

// sort carbonStores by the sum of vegetation and soil
carbonStores.sort((a, b) => {
    return (a.vegetation + a.soil) - (b.vegetation + b.soil)
})

root.render(
    <Canvas
        camera={ {
            fov: 45,
            near: 0.1,
            far: 200,
            position: [ 0, 1, 20 ]
        } }
    >
        <Text
                color="black"
                fontSize={1}
                position-x={-13.5}
                position-y={4}
                //maxWidth={2}
                textAlign="left"
                anchorX="left"
                anchorY="top"
                letterSpacing={0.02}
                lineHeight={1.3}
            >
                Carbon stores by ecosystem
            </Text>
        {/* <Experience carbonStores={carbonStores} /> */}
        <Spheres carbonStores={carbonStores} />
    </Canvas>
)


// TODO

// compare to fossil fuel reserves (oil, coal, natural gas)
// compare to expended fossil fuels
// compare to ocean
// compare to minerals?
// compare to animals/mammals/humans

// compare to percent of earth's surface each ecosystem takes up
// normalize the data to the surface area of each ecosystem?

// based on the above, what data would I need to find?
// how much carbon is in fossil fuel reserves
// how much carbon has been expended by using fossil fuels?
// how much carbon is in the ocean
// how much carbon is in minerals
// how much carbon is in animals/mammals/humans
// percent of earth's surface each ecosystem takes up