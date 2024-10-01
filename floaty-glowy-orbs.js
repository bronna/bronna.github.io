import * as THREE from 'three'

let container
let camera, scene, renderer
let group

init()
animate()

function init() {
    container = document.getElementById('visual')

    scene = new THREE.Scene()

    const containerRect = container.getBoundingClientRect();
    camera = new THREE.PerspectiveCamera(50, containerRect.width / containerRect.height, 0.1, 10)
    camera.position.set(0, 0, 3)

    scene.add(new THREE.HemisphereLight(0x808080, 0x606060))

    const light = new THREE.DirectionalLight(0xffffff)
    light.position.set(0, 6, 0)
    scene.add(light)

    group = new THREE.Group()
    scene.add(group)

    // Custom shader material
    const gradientMaterial = new THREE.ShaderMaterial({
        uniforms: {
            time: { value: 0 },
            colorA: { value: new THREE.Color(0xff0080) },
            colorB: { value: new THREE.Color(0x7ebaa0) },
            colorC: { value: new THREE.Color(0x7385bf) },
            gradientDirection: { value: new THREE.Vector3(1, 1, 1) },
            emissiveColor: { value: new THREE.Color(0x000000) },
            emissiveIntensity: { value: 0.0 },
            fresnelColor: { value: new THREE.Color(0xffffff) },
            fresnelIntensity: { value: 0.5 },
            glowColor: { value: new THREE.Color(0xffffff) },
            glowIntensity: { value: 0.5 }
        },
        vertexShader: `
            varying vec2 vUv;
            varying vec3 vPosition;
            varying vec3 vNormal;
            varying vec3 vViewPosition;
            void main() {
                vUv = uv;
                vPosition = position;
                vNormal = normalize(normalMatrix * normal);
                vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
                vViewPosition = -mvPosition.xyz;
                gl_Position = projectionMatrix * mvPosition;
            }
        `,
        fragmentShader: `
            uniform float time;
            uniform vec3 colorA;
            uniform vec3 colorB;
            uniform vec3 colorC;
            uniform vec3 gradientDirection;
            uniform vec3 emissiveColor;
            uniform float emissiveIntensity;
            uniform vec3 fresnelColor;
            uniform float fresnelIntensity;
            uniform vec3 glowColor;
            uniform float glowIntensity;
            varying vec2 vUv;
            varying vec3 vPosition;
            varying vec3 vNormal;
            varying vec3 vViewPosition;

            void main() {
                vec3 color = mix(colorA, colorB, vUv.y);
                float gradientFactor = dot(vPosition, gradientDirection);
                color = mix(color, colorC, sin(gradientFactor * 10.0 + time) * 0.5 + 0.5);

                // Add emissive effect
                color += emissiveColor * emissiveIntensity;

                // Add subtle Fresnel effect
                vec3 viewDir = normalize(vViewPosition);
                float fresnel = pow(1.0 - max(dot(viewDir, vNormal), 0.0), 3.0);
                color = mix(color, fresnelColor, fresnel * fresnelIntensity);

                // Add pulsating glow effect
                float glow = sin(time * 2.0) * 0.5 + 0.5;
                color += glowColor * glow * glowIntensity;

                gl_FragColor = vec4(color, 1.0);
            }
        `,
    })

    createOrbs(gradientMaterial)

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(containerRect.width, containerRect.height)
    renderer.outputEncoding = THREE.sRGBEncoding
    renderer.xr.enabled = true
    container.appendChild(renderer.domElement)

    window.addEventListener('resize', onWindowResize)
}

function createOrbs(gradientMaterial) {
    // Clear existing orbs
    while(group.children.length > 0) { 
        group.remove(group.children[0])
    }

    const distribution = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--orb-distribution'))

    for (let i = 0; i < 20; i++) {
        const geometry = new THREE.IcosahedronGeometry(0.2, 8)
        const material = gradientMaterial.clone()
        
        material.uniforms.colorA.value.setHSL(Math.random(), 0.5, 0.5)
        material.uniforms.colorB.value.setHSL(Math.random(), 0.5, 0.5)
        material.uniforms.colorC.value.setHSL(Math.random(), 0.5, 0.5)

        // Set random gradient direction
        material.uniforms.gradientDirection.value.set(
            Math.random() * 2 - 1,
            Math.random() * 2 - 1,
            Math.random() * 2 - 1
        ).normalize()

        // Set random Fresnel color and intensity
        material.uniforms.fresnelColor.value.setHSL(Math.random(), 0.5, 0.7)
        material.uniforms.fresnelIntensity.value = Math.random() * 0.3 + 0.2

        // Set random glow color and intensity
        material.uniforms.glowColor.value.setHSL(Math.random(), 0.7, 0.5)
        material.uniforms.glowIntensity.value = Math.random() * 0.2 + 0.1

        const object = new THREE.Mesh(geometry, material)

        // Adjust positioning and scale based on distribution
        if (distribution > 0.5) {  // Large screen (vertical distribution)
            object.position.x = (Math.random() - 0.5) * 2  // Range: -1 to 1
            object.position.y = (Math.random() - 0.5) * 6  // Range: -3 to 3
            object.position.z = Math.random() * -4 - 2     // Range: -6 to -2
            object.scale.setScalar(Math.random() * 0.5 + 0.5)  // Range: 0.5 to 1
        } else {  // Small screen (horizontal distribution)
            object.position.x = (Math.random() - 0.5) * 3  // Range: -1.5 to 1.5
            object.position.y = (Math.random() - 0.5) * 2  // Range: -1 to 1
            object.position.z = Math.random() * -2 - 1     // Range: -3 to -1
            
            // Larger scale range for small screens
            const baseScale = Math.random() * 0.7 + 0.8  // Range: 0.8 to 1.5
            object.scale.setScalar(baseScale)
        }

        // Add properties for floating animation
        object.userData.floatSpeed = Math.random() * 0.5
        object.userData.floatAmplitude = Math.random() * 0.3
        object.userData.initialY = object.position.y
        object.userData.initialX = object.position.x
        object.userData.initialZ = object.position.z

        group.add(object)
    }

    adjustCamera()
}

function adjustCamera() {
    const distribution = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--orb-distribution'))
    
    if (distribution > 0.5) {  // Large screen
        camera.position.set(0, 0, 3)
        camera.fov = 50
    } else {  // Small screen
        camera.position.set(0, 0, 2.5)
        camera.fov = 10
    }
    
    camera.updateProjectionMatrix()
}

function onWindowResize() {
    const containerRect = container.getBoundingClientRect();
    const width = containerRect.width;
    const height = containerRect.height;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    renderer.setSize(width, height);

    // Recreate orbs with new distribution
    createOrbs(group.children[0].material)
}

function animate() {
    renderer.setAnimationLoop(render)
}

function render() {
    const time = performance.now() * 0.001 // Convert to seconds

    group.children.forEach(object => {
        object.position.y = object.userData.initialY + 
            Math.sin(time * object.userData.floatSpeed) * object.userData.floatAmplitude
        object.position.x = object.userData.initialX + 
            Math.cos(time * object.userData.floatSpeed * 0.7) * object.userData.floatAmplitude * 0.7
        object.position.z = object.userData.initialZ + 
            Math.sin(time * object.userData.floatSpeed * 0.7) * object.userData.floatAmplitude * 0.7

        object.material.uniforms.time.value = time
    })

    renderer.render(scene, camera)
}