<template>
  <Compass />
  <Scores />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Compass from './Compass.vue'
import Scores from './Scores.vue'
import { Result, _Compass } from '@/data/types/quizzes'

@Options({
  components: {
    Compass,
    Scores,
  },
  computed: {
    results(): Result<_Compass> {
      return this.$store.getters.getResults
    },
  },
})
export default class Index extends Vue {}
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
</style>
