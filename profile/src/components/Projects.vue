<script setup lang="ts">
import {computed, ComputedRef} from "vue";
import {useCoursesStore} from "../stores/courses";
import {storeToRefs} from "pinia";
import {Course} from "../types/Course";

const {allCourses} = storeToRefs(useCoursesStore())

const coursesWithProjects: ComputedRef<Course[]> = computed(() => {
  return allCourses.value.filter((c) => c.projects.length > 0)
})

</script>

<template>
  <dl class="projects">
    <template v-for="course in coursesWithProjects">
      <dt>{{course.id}}</dt>
      <dd>
        <ul>
          <li v-for="project in course.projects">
            <a :href="project.link" target="_blank">{{ project.name }}</a>
            <template v-if="project.desc">
              ({{ project.desc }})
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
  }
}
}
// TODO: something less sucky
//table.projects {
//  margin: 0;
//  th {
//    font-weight: normal !important;
//  }
//
//  td {
//    font-size: 0.9rem;
//  }
//}

</style>
