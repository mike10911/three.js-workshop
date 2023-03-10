import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'lil-gui'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js'



/**
 * Base
 */
// Debug
const gui = new dat.GUI()

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Textures
 */
const textureLoader = new THREE.TextureLoader()

// TODO1: Load a texture with textureLoader from /textures/matcaps/#.png
// https://threejs.org/docs/?q=textur#api/en/loaders/TextureLoader

// TODO2: init fontLoader with new FontLoader() and load a font with fontLoader.load()
// https://threejs.org/docs/?q=font#examples/en/loaders/FontLoader

// TODO3: Create a material with THREE.MeshMatcapMaterial and pass the texture as matcap
// https://threejs.org/docs/?q=MeshM#api/en/materials/MeshMatcapMaterial

// TODO4: Create a text geometry with TextGeometry and pass in parameters
// https://threejs.org/docs/#examples/en/geometries/TextGeometry

// TODO5: Create a text mesh with THREE.Mesh and geometry and material

// TODO6: Add the text mesh to the scene

// TODO7: Create dounut geometry with TorusGeometry and pass in parameters. You can use the any other geometry you want
// https://threejs.org/docs/?q=torus#api/en/geometries/TorusGeometry

// TODO8: Create dounut mesh 100 donuts meshes with random positions, sizes, and rotations

// TODO9: Add the donut mesh to the scene

/**
 * Object
 */
const cube = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial()
)

scene.add(cube)

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 1
camera.position.y = 1
camera.position.z = 2
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()