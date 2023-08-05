<script setup lang="ts">
import {storeToRefs} from "pinia";

import {useOrganizationsStore} from "../stores/organizations";
import {useTermsStore} from "../stores/terms";
import {useCoursesStore} from "../stores/courses";

import Courses from './Courses.vue'
import Organizations from './Organizations.vue'
import Projects from "./Projects.vue";

import selfie from '../assets/images/dm-selfie-2022-08-03-1024x1024.jpg'

const {currentCourses, pastCourses} = storeToRefs(useCoursesStore())
const {currentTerm} = storeToRefs(useTermsStore())
const {organizations} = storeToRefs(useOrganizationsStore())

</script>

<!-- TODO: update for Madrid / leaving Berkeley (incl. full time, work status, etc.) -->
<!-- TODO: Turn this *all* into data, cf. "current courses" -->
<template>
  <div class="profile">
    <aside class="photo">
      <figure>
        <img :src="selfie" class="selfie" alt="Photo of David Moles">
        <figcaption>Photo taken by the subject.</figcaption>
      </figure>
    </aside>
    <section class="text">
      <h1>David Moles</h1>

      <table class="outer">
        <tbody>
          <tr>
            <th scope="row">Pronouns</th>
            <td>they/them</td>
          </tr>
          <tr>
            <th scope="row">Student status</th>
            <td>Online, full time</td>
          </tr>
          <tr>
            <th scope="row">Academic interests</th>
            <td>
              Archives and preservation, academic librarianship, information ethics,
              indigenous and marginalized knowledge, power and agency in GLAM and the
              academy
            </td>
          </tr>
          <tr>
            <th scope="row">
              Current courses
              <span style="white-space: nowrap">({{ currentTerm }})</span>
            </th>
            <td>
              <Courses :courses="currentCourses"/>
            </td>
          </tr>
          <tr>
            <th scope="row">Previous courses</th>
            <td>
              <Courses :courses="pastCourses"/>
            </td>
          </tr>
          <tr>
            <th scope="row">Projects</th>
            <td>
              <Projects/>
            </td>
          </tr>
          <tr>
            <th scope="row">Student organizations</th>
            <td>
              <Organizations :organizations="organizations"/>
            </td>
          </tr>
          <tr>
            <th scope="row">Advisor</th>
            <td><a href="https://comminfo.rutgers.edu/dalbello-marija">Marija Dalbello</a></td>
          </tr>
          <tr>
            <th scope="row">Work status</th>
            <td>Between gigs</td>
          </tr>
          <tr>
            <th scope="row">Contact</th>
            <td>
              <table class="inner">
                <tbody>
                  <tr>
                    <th scope="row">Mastodon:</th>
                    <td><a href="https://glammr.us/@chronodm">glammr.us/@chronodm</a></td>
                  </tr>
                  <tr>
                    <th scope="row">email:</th>
                    <td><a href="mailto:david.moles@rutgers.edu">david.moles@rutgers.edu</a></td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>

      <section class="about">
        <h2>About me</h2>

        <p>
          I'm attending from Madrid, Spain, where I moved with my family
          in July 2023 with the intention of spending a year before returning
          to our home in Northern California.
        </p>

        <p>
          In June 2023 I resigned my position as head of applications for
          Library IT at the <a href="https://www.lib.berkeley.edu">UC
          Berkeley Library</a>, where I'd been working for four years,
          in order to (1) move to Madrid and (2) concentrate on my MI.
          Before Berkeley, I worked in digital preservation and data
          publication at the California Digital Library (part of the
          UC Office of the President in Oakland), and before that for
          a library software vendor called Innovative Interfaces, so
          I’ve been in and around libraries and archives for a
          while. I've enjoyed working in and with libraries and I very
          much like working with librarians and archivists, and I hope
          to keep doing both, but ideally in a role that has me involved
          more directly and creatively in GLAM work rather than just
          helping make other people’s projects happen.
        </p>

        <p>
          I have a BA in language studies (Japanese emphasis) from UC
          Santa Cruz and an MSc in economic and social history from
          Oxford University, and I’m enjoying getting to
          spend some time thinking about things like contested
          historical narratives and the social construction of
          knowledge after many years of decontextualized tech work.
        </p>

        <p>
          I have two small children (ages 6 and 9) and I <a
          href="https://dmoles.net/">sometimes write science
          fiction</a>, although not so much since the small children
          came along, and probably even less till I’ve completed the MI
          program.
        </p>

        <footer>
          My other website: <a href="https://dmoles.net">dmoles.net</a>
        </footer>
      </section>

    </section>
  </div>
</template>

<style lang="scss">
@use '../colors';
@use '../fonts';

@import '../fonts';

@media only screen and (min-width: 896px) {
  div.profile {
    display: grid;
    grid-template-columns: 384px minmax(0, 1fr);

    aside.photo {
      grid-column: 1;
      height: 100%;

      figure {
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;

        img.selfie {
          width: 100%;
          height: auto;
        }
      }
    }

    section.text {
      grid-column: 2;
      max-width: 768px;
    }
  }
}

@media only screen and (max-width: 896px) {
  div.profile {
    display: flex;
    flex-direction: column;
    justify-content: center;

    aside.photo {
      width: 100%;

      figure {
        margin-left: auto;
        margin-right: auto;

        img.selfie {
          height: 384px;
          width: auto;
        }
      }

    }

    section.text {

      table {
        display: flex;
        flex-direction: column;

        tbody {
          display: contents;

          tr {
            display: contents;

            th {
              text-align: left !important;
              padding: 0 0 0.3rem !important;
            }

            > td {
              margin-left: 0.6rem;
            }
          }
        }

        &.inner {
          display: grid;
          grid-template-columns: min-content minmax(0, 1fr);

          th {
            grid-column: 1;
            padding-bottom: 0 !important;
          }

          td {
            grid-column: 2;
            padding-bottom: 0 !important;
          }
        }
      }

    }
  }
}

div.profile {
  font-family: fonts.$family-body;
  color: black;
  background: colors.$cafe-cream;

  aside.photo {

    color: colors.$cafe-cream;
    background: colors.$oxford-blue;

    figure {
      figcaption {
        position: absolute;
        left: -9999px;
        top: -9999px;
      }
    }
  }

  section.text {
    margin: auto;
    padding: 2rem;
    box-sizing: border-box;
    max-width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;

    h1 {
      font-weight: 900;
      font-size: 3rem;
      line-height: 1.2em;
      text-transform: uppercase;
      font-family: fonts.$family-heading;
    }

    h2 {
      font-weight: 900;
      text-transform: uppercase;
      font-size: 1rem;
      line-height: 1.2em;
      font-family: fonts.$family-heading;
      margin-bottom: fonts.$size-smaller;
    }

    p {
      font-size: fonts.$size-body;
      line-height: 1.2rem;
      font-family: fonts.$family-body;
      margin-bottom: fonts.$size-smaller;
    }

    a {
      color: colors.$oxford-blue;
      text-decoration-thickness: 0.1px;
      text-decoration-style: dotted;
      text-decoration-skip-ink: all;
      text-underline-offset: 2px;

      &:visited {
        color: colors.$oxford-blue;
      }
    }

    > table {
      margin-top: 1rem;
    }

    table {
      max-width: 100%;

      tr {

        td {
          font-size: fonts.$size-body;
        }

        th {
          vertical-align: top;
          text-align: right;

          font-family: fonts.$family-heading;
          font-weight: bold;
          font-size: fonts.$size-smaller;

          padding-right: 1rem;
          text-transform: lowercase;
        }

        td, th {
          padding-bottom: 1.2rem;
          line-height: 1.2rem !important;
        }
      }
    }

    table.inner {
      margin: 0;

      th {
        font-family: fonts.$family-body;
        font-size: fonts.$size-body;
        font-weight: normal;
        padding-right: 0.25rem;
        // text-align: left;
      }

      tbody {
        tr {
          td, th {
            padding-bottom: 0.3rem;
            vertical-align: baseline;
          }

          &:last-of-type {
            td, th {
              padding-bottom: 0;
            }
          }
        }
      }
    }

    section.about {
      margin-top: 1.2rem;

      footer {
        width: 50%;
        margin-top: 2.4rem;
        margin-left: auto;
        margin-right: auto;
        padding-top: 0.6rem;
        border-top: 1px dotted colors.$jasper-blue;
        text-align: center;
        font-style: italic;
        font-size: fonts.$size-smaller;
        font-family: fonts.$family-heading;
      }
    }
  }

}
</style>
