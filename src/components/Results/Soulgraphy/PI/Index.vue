<template>
  <article>
    <AxesContainer />
    <Analysis />
  </article>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

import { Result, _Soulgraphy_PI } from '@/data/types/quizzes'
import AxesContainer from './AxesContainer.vue'
import Analysis from './Analysis/Analysis.vue'

@Options({
  components: {
    AxesContainer,
    Analysis,
  },
  computed: {
    results(): Result<_Soulgraphy_PI> {
      return this.$store.getters.getResults
    },
  },
})
export default class Index extends Vue {}
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
article {
  max-width: 95vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  border-radius: 10px;
  margin-top: 30px;
}
</style>
