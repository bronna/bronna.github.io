function rainbowLava(section) {
    /**
     * Setup
     */
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x2E2F30)
  
    const parameters = {
        cameraX: -112,
        cameraY: 460,
        cameraZ: 120,
        count: 300000,
        size: 1.0,
        fov: 85, //original is 85
        aspect: window.innerWidth / window.innerHeight,
        near: 0.1,
        far: 1000
    }
    
    let camera = new THREE.PerspectiveCamera(
        parameters.fov,
        parameters.aspect,
        parameters.near,
        parameters.far
    )
    camera.position.set(parameters.cameraX, parameters.cameraY, parameters.cameraZ)
    camera.up.set(0, 1, 0)
    camera.lookAt(0, 0, -20)
  
    const renderer = new THREE.WebGLRenderer()
    renderer.setSize( window.innerWidth, window.innerHeight )
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    const container = document.getElementById(section)
    container.appendChild(renderer.domElement)
  
    /**
     * Graphics
     */
    let width = 2800
    let height = 2000
    let widthSegments = 200
    let heightSegments = 200
    let geometry = null
    let glowMaterial = null
    let glow = null
  
    const generateObjects = () => {
        // Destroy old objects
        if(glow !== null) {
            geometry.dispose()
            glowMaterial.dispose()
            scene.remove(glow)
        }
  
        geometry = new THREE.PlaneBufferGeometry(width, height, widthSegments, heightSegments)
  
        glowMaterial = new THREE.ShaderMaterial({
            vertexShader: document.getElementById('vertex').textContent,
            fragmentShader: document.getElementById('lava-fragment').textContent,
            uniforms: {
                uTime: { value: 0 },
                uSpeed: { value: 0.5 },
                uMountainFrequency: { value: 180.0 },
                uMountainHeight: { value: 90.0 },
            }
        })
  
        glow = new THREE.Mesh( geometry, glowMaterial)
        glow.position.z = -220
        glow.rotation.x = -Math.PI / 2
        scene.add( glow )
  
        // Resize
        window.addEventListener('resize', onWindowResize)
    }
  
    generateObjects()
  
    /**
     * Animate
     */
    const clock = new THREE.Clock()
  
    function animate() {
        const elapsedTime = clock.getElapsedTime()
  
        glowMaterial.uniforms.uTime.value = elapsedTime
  
        requestAnimationFrame( animate )
  
        renderer.render( scene, camera )
    }
    animate()
  
    /**
     * Handle Resize
     */
    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()

        renderer.setSize(window.innerWidth, window.innerHeight)
  
        generateObjects()
    }

    // /**
    //  * Debug
    //  */
    // const debugObject = {}

    // /**
    //  * Setup
    //  */
    // const scene = new THREE.Scene()

    // const parameters = {}
    // parameters.cameraX = -300
    // parameters.cameraY = 400
    // parameters.cameraZ = 330
    // parameters.count = 300000
    // parameters.size = 1.0

    // const camera = new THREE.PerspectiveCamera(
    //     50,
    //     window.innerWidth / window.innerHeight,
    //     0.1,
    //     1000
    // )
    // camera.position.set(parameters.cameraX, parameters.cameraY, parameters.cameraZ)
    // camera.up.set(0, 1, 0)
    // camera.lookAt(-80, 0, -80)

    // const renderer = new THREE.WebGLRenderer({ antialias: true })
    // renderer.setSize( window.innerWidth, window.innerHeight )
    // renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    // //document.body.appendChild(renderer.domElement)
    // const container = document.getElementById(section)
    // container.appendChild(renderer.domElement)

    // /**
    //  * Graphics
    //  */
    // let width = 1400
    // let height = 2000
    // let widthSegments = 400
    // let heightSegments = 800
    // let geometry = null
    // let sandGeometry = null
    // let glowMaterial = null
    // let sandMaterial = null
    // let glow = null
    // let sands = null

    // // Colors
    // debugObject.depthColor = '#a2dcc6'
    // debugObject.surfaceColor = '#ffbea4'

    // const generateObjects = () => {
    //     // Destroy old objects
    //     if(sands !== null) {
    //         sandGeometry.dispose()
    //         sandMaterial.dispose()
    //         scene.remove(sands)
    //     }

    //     if(glow !== null) {
    //         geometry.dispose()
    //         glowMaterial.dispose()
    //         scene.remove(glow)
    //     }

    //     geometry = new THREE.PlaneBufferGeometry(width, height, widthSegments, heightSegments)

    //     // sandGeometry = new THREE.BufferGeometry()
    //     // const positions = new Float32Array(parameters.count * 3)
    //     // for (let i = 0; i < parameters.count; i++) {
    //     //     const i3 = i * 3

    //     //     positions[i3    ] = (Math.random() - 0.5) * width
    //     //     positions[i3 + 1] = (Math.random() - 0.5) * height
    //     //     positions[i3 + 2] = 0

    //     //     sandGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    //     // }

    //     glowMaterial = new THREE.ShaderMaterial({
    //         vertexShader: document.getElementById('vertex').textContent,
    //         fragmentShader: document.getElementById('glow-fragment').textContent,
    //         uniforms: {
    //             uTime: { value: 0 },
    //             uSpeed: { value: 0.5 },
    //             uMountainFrequency: { value: 300.0 },
    //             uMountainHeight: { value: 140.0 },
    //             uPallete: { type: 't', value: null },
    //             uDepthColor: { value: new THREE.Color(debugObject.depthColor) },
    //             uSurfaceColor: { value: new THREE.Color(debugObject.surfaceColor) },
    //             uColorOffset: { value: 0.8 },
    //             uColorMultiplier: { value: 0.9 },
    //         }
    //     })
        
    //     // sandMaterial = new THREE.ShaderMaterial({
    //     //     depthWrite: false,
    //     //     blending: THREE.AdditiveBlending,
    //     //     vertexColors: true,
    //     //     vertexShader: document.getElementById('particle-vertex').textContent,
    //     //     fragmentShader: document.getElementById('particle-fragment').textContent,
    //     //     uniforms: {
    //     //         uTime: { value: 0 },
    //     //         uSpeed: { value: 0.5 },
    //     //         uMountainFrequency: { value: 4.2 },
    //     //         uMountainHeight: { value: 100.0 },
    //     //         uDepthColor: { value: new THREE.Color(debugObject.depthColor) },
    //     //         uSurfaceColor: { value: new THREE.Color(debugObject.surfaceColor) },
    //     //         uColorOffset: { value: 0.8 },
    //     //         uColorMultiplier: { value: 0.9 },
    //     //         uSize: { value: parameters.size * renderer.getPixelRatio() }
    //     //     }
    //     // })

    //     glow = new THREE.Mesh( geometry, glowMaterial)
    //     glow.position.z = -220
    //     glow.rotation.x = -Math.PI / 2
    //     scene.add( glow )

    //     // sands = new THREE.Points( sandGeometry, sandMaterial )
    //     // sands.position.z = -220
    //     // sands.rotation.x = -Math.PI / 2
    //     // scene.add( sands )

    //     // Resize
    //     window.addEventListener('resize', onWindowResize)
    // }

    // generateObjects()

    // /**
    //  * Animate
    //  */
    // const clock = new THREE.Clock()

    // function animate() {
    //     const elapsedTime = clock.getElapsedTime()

    //     glowMaterial.uniforms.uTime.value = elapsedTime
    //     // sandMaterial.uniforms.uTime.value = elapsedTime

    //     requestAnimationFrame( animate )

    //     renderer.render( scene, camera )
    // }
    // animate()

    // /**
    //  * Handle Resize
    //  */
    // function onWindowResize() {
    //     camera.aspect = window.innerWidth / window.innerHeight
    //     camera.updateProjectionMatrix()

    //     renderer.setSize(window.innerWidth, window.innerHeight)

    //     generateObjects()
    // }
}
rainbowLava('lavaHeader')
rainbowLava('lavaFooter')
  
  