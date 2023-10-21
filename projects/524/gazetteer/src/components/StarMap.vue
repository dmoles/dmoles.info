<script setup lang="ts">
import * as THREE from "three"
import { BasicMaterial, Box, Camera, DirectionalLight, Renderer, Scene, Sphere, Text, ToonMaterial } from "troisjs"
import { useStarsStore } from "../stores/stars"
import { computed, onMounted, Ref, ref } from "vue"
import { Star } from "../types/Star"


const { stars, xiUMa, sol } = useStarsStore()

// const cameraPosInitial = { x: -15.293, y: 2.027, z: 10.0 }
// const cameraPosInitial = { x: xiUMa.x * 2, y: xiUMa.y * 2, z: -xiUMa.z * 2 }

const cameraPosInitial = { x: -12.1, y: 3.9, z: 12}

// const cameraTargetInitial = sol
const cameraTargetInitial = xiUMa
// const cameraTargetInitial = { x:0, y: 1, z: 2}
//const cameraTargetInitial = { x: xiUMa.x / 2, y: xiUMa.y / 2, z: -xiUMa.z / 2 }

const sphereSize = 0.05

const starsToRender = stars
// const starsToRender = [xiUMa, sol]

const scene: Ref<null | typeof Scene> = ref(null)
const camera: Ref<null | typeof Camera> = ref(null)
const renderer: Ref<null | typeof Renderer> = ref(null)

// TODO: update text rotations
const cameraPos = computed(() => {
  const r = camera.value
  if (r) {
    return r.position
  }
  return cameraPosInitial
})

const gridSize = 30
const gridThickness = sphereSize / 2
const gridDistance = (gridSize / 2)


const gridIncrements = 9
const gridSpacing = gridSize / (1 + gridIncrements)

const gridOffset = (gridSize / 2) // + (gridSpacing / 2)


const pathPerseverance: Array<Star> = namesToStars([
  "53 UMa",
  "Groombridge 1830",
  "LP 169-22",
  "G 195-59",
  "GJ 1119",
  "GJ 1105",
  "WISE J082507.35+280548.5",
  "GJ 1116",
  "GJ 1111",
  "WISE J085510.83-071442.5",
  "Sol"
])

const pathXiUmaDefault: Array<Star> = namesToStars([
  "53 UMa",
  "Ross 104",
  "AD Leonis",
  "GJ 1111",
  "WISE J085510.83-071442.5",
  "Sol"
])

const path61UMaDefault: Array<Star> = namesToStars([
  "61 UMa",
  "Ross 905",
  "WISE J121756.90+162640.8",
  "GJ 1156",
  "Wolf 424",
  "Wolf 359",
  "Sol"
])

function namesToStars(names: Array<string>): Array<Star> {
  return names.map((name: string) => {
    return <Star>stars.find((s) => s.name === name)
  })
}

function drawPath(pathStars: Array<Star>, pathColor: string) {
  const points: Array<THREE.Vector3> = pathStars.map((s) => new THREE.Vector3(s.x, s.y, s.z))
  const geometry = new THREE.BufferGeometry().setFromPoints( points );
  const material = new THREE.LineBasicMaterial({ color: pathColor })
  const line = new THREE.Line( geometry, material );

  const scn: THREE.Scene = (<typeof Scene>scene.value).scene
  scn.add(line)
}

function reRender() {
  const rndr: THREE.Renderer = (<typeof Renderer>renderer.value).renderer
  const scn: THREE.Scene = (<typeof Scene>scene.value).scene
  const cam: THREE.Camera = (<typeof Camera>camera.value).camera
  rndr.render(scn, cam)
}

function reLook() {
  const cam: THREE.Camera = (<typeof Camera>camera.value).camera
  cam.lookAt(cameraTargetInitial)
}

// const gridBackgroundYZ = '#001020'
// const gridBackgroundXZ = '#200010'
// const gridBackgroundXY = '#102000'
// const gridForeground = '#c0c000'
// const textColor = '#ffffff'
// const pathColor61Uma = '#ff7f00'
// const pathColorXiUma = '#007fff'
// const pathColorPerseverance = '#00ff7f'
const gridBackgroundYZ = '#e8f0f8'
const gridBackgroundXZ = '#f8e8f0'
const gridBackgroundXY = '#f0f8e8'
const gridForeground = '#002020'
const textColor = '#000000'
const pathColor61Uma = '#603000'
const pathColorXiUma = '#003060'
const pathColorPerseverance = '#006030'


onMounted(() => {
  drawPath(path61UMaDefault, pathColor61Uma)
  drawPath(pathXiUmaDefault, pathColorXiUma)
  drawPath(pathPerseverance, pathColorPerseverance)
  reLook()
  reRender()
})

</script>

<template>
  <Renderer ref="renderer" :pixelRatio="2" resize="true" :orbitCtrl="true" :shadow="true" :antialias="true">
    <Scene ref="scene" :background="'#000000'">
      <Camera ref="camera" :position="cameraPosInitial" :lookAt="cameraTargetInitial"/>
      <DirectionalLight ref="light"/>

      <!-- TODO: make coordinate plane a component -->
      <!-- TODO: use LineMaterial for grid lines -->

      <Box :width="gridSize" :height="gridThickness" :depth="gridSize" :position="{x: 0, y: -(gridDistance + gridThickness), z: 0}">
        <BasicMaterial :color="gridBackgroundXZ"/>
      </Box>
      <template v-for="i in gridIncrements">
        <Box :width="gridSize" :height="gridThickness" :depth="gridThickness" :position="{x: 0, y: -gridDistance, z: (i * gridSpacing) - gridOffset}">
          <BasicMaterial :color="gridForeground"/>
        </Box>
        <Box :width="gridThickness" :height="gridThickness" :depth="gridSize" :position="{x: (i * gridSpacing) - gridOffset, y: -gridDistance, z: 0}">
          <BasicMaterial :color="gridForeground"/>
        </Box>
      </template>

      <Box :width="gridSize" :height="gridSize" :depth="gridThickness" :position="{x: 0, y: 0, z: -(gridDistance + gridThickness)}">
        <BasicMaterial :color="gridBackgroundXY"/>
      </Box>
      <template v-for="i in gridIncrements">
        <Box :width="gridSize" :height="gridThickness" :depth="gridThickness" :position="{x: 0, y: (i * gridSpacing) - gridOffset, z: -gridDistance}">
          <BasicMaterial :color="gridForeground"/>
        </Box>
        <Box :width="gridThickness" :height="gridSize" :depth="gridThickness" :position="{x: (i * gridSpacing) - gridOffset, y: 0, z: -gridDistance}">
          <BasicMaterial :color="gridForeground"/>
        </Box>
      </template>

      <Box :width="gridThickness" :height="gridSize" :depth="gridSize" :position="{x: (gridDistance + gridThickness), y: 0, z: 0}">
        <BasicMaterial :color="gridBackgroundYZ"/>
      </Box>
      <template v-for="i in gridIncrements">
        <Box :width="gridThickness" :height="gridThickness" :depth="gridSize" :position="{x: gridDistance, y: (i * gridSpacing) - gridOffset, z: 0}">
          <BasicMaterial :color="gridForeground"/>
        </Box>
        <Box :width="gridThickness" :height="gridSize" :depth="gridThickness" :position="{x: gridDistance, y: 0, z: (i * gridSpacing) - gridOffset}">
          <BasicMaterial :color="gridForeground"/>
        </Box>
      </template>

      <template v-for="star in starsToRender">
        <Sphere :radius="sphereSize" :position="{ x: star.x, y: star.y, z: star.z}">
          <BasicMaterial :color="star.rgb"/>
        </Sphere>
        <Text
          :text="star.name"
          font-src="src/assets/helvetiker_regular.typeface.json"
          :align="'center'"
          :size="sphereSize"
          :height="sphereSize * 0.1"
          :curveSegments="16"
          :position="{ x: star.x, y: -(2 * sphereSize) + star.y, z: star.z}"
          :lookAt="cameraPos"
        >
          <BasicMaterial :color="textColor"/>
        </Text>
        <!--        <Cylinder-->
        <!--          :radiusTop="sphereSize / 10"-->
        <!--          :radiusBottom="sphereSize / 10"-->
        <!--          :height="star.y"-->
        <!--          :position="{x: star.x, y: star.y / 2, z: star.z}"-->
        <!--        >-->
        <!--          <BasicMaterial :color="'#000000'"/>-->
        <!--        </Cylinder>-->
      </template>
    </Scene>
  </Renderer>
</template>
