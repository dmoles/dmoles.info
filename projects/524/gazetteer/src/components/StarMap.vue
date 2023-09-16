<script setup lang="ts">
import * as THREE from "three"
import { BasicMaterial, Box, Camera, DirectionalLight, Renderer, Scene, Sphere, Text, ToonMaterial } from "troisjs"
import { useStarsStore } from "../stores/stars"
import { computed, onMounted, Ref, ref } from "vue"
import { Star } from "../types/Star"


const { stars, xiUMa, sol } = useStarsStore()

// const cameraPosInitial = { x: -15.293, y: 2.027, z: 10.0 }
// const cameraPosInitial = { x: xiUMa.x * 2, y: xiUMa.y * 2, z: -xiUMa.z * 2 }

const cameraPosInitial = { x: -13, y: 4, z: 10 }

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

const gridBackgroundYZ = 0x001020
const gridBackgroundXZ = 0x200010
const gridBackgroundXY = 0x102000

const gridIncrements = 9
const gridSpacing = gridSize / (1 + gridIncrements)
const gridForeground = 0xc0c000

const gridOffset = (gridSize / 2) // + (gridSpacing / 2)

const textColor = 0xffffff


const pathPerseverance: Array<Star> = [
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
].map((name: string) => {
  return <Star>stars.find((s) => s.name === name)
})

function drawPath(pathStars: Array<Star>, pathColor: number) {
  const points: Array<THREE.Vector3> = pathStars.map((s) => new THREE.Vector3(s.x, s.y, s.z))
  const geometry = new THREE.BufferGeometry().setFromPoints( points );
  const material = new THREE.LineBasicMaterial({ color: pathColor })
  const line = new THREE.Line( geometry, material );

  const scn: THREE.Scene = (<typeof Scene>scene.value).scene
  scn.add(line)
  reRender()
}

function reRender() {
  const rndr: THREE.Renderer = (<typeof Renderer>renderer.value).renderer
  const scn: THREE.Scene = (<typeof Scene>scene.value).scene
  const cam: THREE.Camera = (<typeof Camera>camera.value).camera
  rndr.render(scn, cam)
}

onMounted(() => {
  drawPath(pathPerseverance, 0x008040)
})

</script>

<template>
  <Renderer ref="renderer" resize="window" :orbitCtrl="true" :shadow="true" :antialias="true">
    <Scene ref="scene" :background="0x000000">
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
          <ToonMaterial :color="star.rgb"/>
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
        <!--          <BasicMaterial :color="0x000000"/>-->
        <!--        </Cylinder>-->
      </template>
    </Scene>
  </Renderer>
</template>
