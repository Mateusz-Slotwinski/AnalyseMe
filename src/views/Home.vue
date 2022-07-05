<template>
  <div></div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({})
export default class Home extends Vue {
  mounted() {
    document.title = 'AnalyseMe'
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
</style>
