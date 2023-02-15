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
  <table class="projects">
    <tr v-for="course in coursesWithProjects">
      <th>{{ course.id }}</th>
      <td class="course-projects">
        <ul>
          <li v-for="project in course.projects">
            <a :href="project.link">{{ project.name }}</a>
          </li>
        </ul>
      </td>
    </tr>
  </table>
</template>

<style lang="scss">
// TODO: something less sucky
table.projects {
  margin: 0;
  th {
    font-weight: normal !important;
  }

  td {
    font-size: 0.9rem;
  }
}

//ul.projects {
//
//  span.projects-course-id {
//    font-family: Montserrat, 'sans-serif';
//    text-transform: uppercase;
//    font-weight: bold;
//    font-size: 0.729rem;
//  }
//
//  ul.course-projects {
//    font-size: 0.9rem;
//  }
//}
//figure {
//  grid-column: 2;
//  margin-top: 0.45rem;
//
//  figcaption {
//    //grid-column: 1;
//    justify-self: end;
//
//    font-family: Montserrat, 'sans-serif';
//    text-transform: uppercase;
//    font-weight: bold;
//    font-size: 0.729rem;
//  }
//
//  ul {
//    //grid-column: 2;
//    font-size: 0.9rem;
//
//    li:not(:last-of-type) {
//      margin-bottom: 0.15rem;
//    }
//  }
//}

</style>
