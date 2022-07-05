<template>
  <section>
    <Compass />
    <article class="container ideologycont">
      <Ideology />
      <Thinkers />
    </article>
    <Party />
  </section>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

import Compass from './Compass.vue'
import Ideology from './Ideology.vue'
import Thinkers from './Thinkers.vue'
import Party from './Party.vue'

import { Result, _Soulgraphy_PI } from '@/data/types/quizzes'

@Options({
  components: {
    Compass,
    Ideology,
    Thinkers,
    Party,
  },
})
export default class Analysis extends Vue {
  get results(): Result<_Soulgraphy_PI> {
    return this.$store.getters.getResults
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';

section {
  margin-top: 10px;
  width: 100%;
  max-width: 1250px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.title {
  font-size: 27px;
  font-weight: 500;
  text-transform: uppercase;
}

article.container {
  margin: 0 10px;
  &.ideologycont {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
