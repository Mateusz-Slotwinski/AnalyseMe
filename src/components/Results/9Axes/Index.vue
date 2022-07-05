<template>
  <Axis
    v-for="(value, index) in results.results"
    :key="index"
    :axis="index"
    :value="value"
  />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Axis from './Axis.vue'
import { Result, _9Axes } from '@/data/types/quizzes'

@Options({
  components: {
    Axis,
  },
  computed: {
    results(): Result<_9Axes> {
      return this.$store.getters.getResults
    },
  },
})
export default class Index extends Vue {}
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
</style>
