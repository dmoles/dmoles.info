<script setup lang="ts">
import { computed, ComputedRef } from "vue"
import { useCoursesStore } from "../stores/courses"
import { storeToRefs } from "pinia"
import { Course } from "../types/Course"

const { allCourses } = storeToRefs(useCoursesStore())

const coursesWithProjects: ComputedRef<Course[]> = computed(() => {
  return allCourses.value.filter((c) => c.projects.length > 0)
})

</script>

<template>
  <dl class="projects">
    <template v-for="course in coursesWithProjects">
      <dt>{{ course.id }}</dt>
      <dd>
        <ul>
          <li v-for="project in course.projects">
            <span class="project-name">
              <a :href="project.link" target="_blank">{{ project.name }}</a>
            </span>
            <template v-if="project.desc">
              &#x202F;<span class="project-desc">({{ project.desc }})</span>
            </template>
          </li>
        </ul>
      </dd>
    </template>
  </dl>
</template>

<style lang="scss">
dl.projects {
  dd {
    li {
      margin-bottom: 0.5em;

      .project-desc {
        display: inline-block;
        white-space: nowrap;
      }
    }
  }
}
</style>
