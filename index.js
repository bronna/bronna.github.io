function rainbowLava(section) {
    let topMargin, btmMargin, part, partHeight, parterHeight
    
    if (section === "lavaHeader") {
        topMargin = 192
        btmMargin = 64
        part = document.querySelector("#header-main")
        partHeight = part.offsetHeight
        parterHeight = topMargin + partHeight + btmMargin
    } else if (section === "lavaFooter") {
        topMargin = 128
        btmMargin = 64
        part = document.querySelector("#about")
        partHeight = part.offsetHeight
        parterHeight = topMargin + partHeight + btmMargin
    }
  
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
    //renderer.setSize( window.innerWidth, (window.innerHeight / 5) * 4 )
    renderer.setSize( window.innerWidth, parterHeight)
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
            vertexShader: document.getElementById('lava-vertex').textContent,
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
        partHeight = part.offsetHeight
        parterHeight = topMargin + partHeight + btmMargin

        //camera.aspect = window.innerWidth / ((window.innerHeight / 5) * 4)
        camera.aspect = window.innerWidth / parterHeight
        camera.updateProjectionMatrix()
  
        //renderer.setSize(window.innerWidth, (window.innerHeight / 5) * 4)
        renderer.setSize(window.innerWidth, parterHeight)
  
        generateObjects()
    }
}
rainbowLava('lavaHeader')
rainbowLava('lavaFooter')
  
  