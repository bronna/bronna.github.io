export default function Experience({ carbonStores }) {
    console.log(carbonStores)

    // return <>
    //     <group>
    //         <mesh>
    //             <sphereGeometry args={ [ 1.5, 32, 32 ] } />
    //             <meshNormalMaterial />
    //         </mesh>
    //     </group>
    // </>

    // return a centered group of spheres, where the radius of each sphere equals the number amount of soil in each store in carbonStores, and the spheres are positioned along the x-axis in a line
    return <>
        <group>
            {carbonStores.map( ( store, index ) => {
                return (
                    <mesh key={ index } position-x={ index - 3 }>
                        <sphereGeometry args={ [ store.soil * 0.002, 32, 32 ] } />
                        <meshNormalMaterial />
                    </mesh>
                )
            }
            )}
        </group>
    </>


    
}