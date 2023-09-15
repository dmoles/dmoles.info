<script setup lang="ts">
import { BasicMaterial, Camera, DirectionalLight, Renderer, Scene, Sphere, Text, ToonMaterial } from "troisjs"
import { useStarsStore } from "../stores/stars"
import { computed, Ref, ref } from "vue"

const { stars, xiUMa, sol } = useStarsStore()

// TODO: calculate this dynamically
//       (currently avg position of 53 UMa & 63 UMa * 2
const cameraPosInitial = { x: -15.293, y: 2.027, z: 10.0 }

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

</script>

<template>
  <Renderer ref="renderer" resize="window" :orbitCtrl="true" :shadow="true" :antialias="true">
    <Scene ref="scene" :background="'#ffffff'">
      <Camera ref="camera" :position="cameraPosInitial" :lookAt="sol"/>
      <DirectionalLight ref="light"/>
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
          <BasicMaterial :color="'#000000'"/>
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
