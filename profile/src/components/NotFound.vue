<script setup lang="ts">
</script>

<template>
  <div class="not-found">
    <header>
      <h1>Not found</h1>
      <a class="button" href="/">Return to main page</a>
    </header>
  </div>
</template>

<style lang="scss">
@use '../colors';

div.not-found {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  header {
    margin-top: auto;
    margin-bottom: auto;
  }

  h1 {
    font-weight: 900;
    font-size: 3rem;
    line-height: 1.2em;
    font-family: Montserrat, 'sans-serif';
    color: colors.$penguin;
  }

  a.button {
    display: block;
    font-family: Montserrat, 'sans-serif';

    color: colors.$cafe-cream;

    &:visited, &:active {
      color: colors.$biarritz;
    }
  }
}

</style>
