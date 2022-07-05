<template>
  <div>
    <img
      class="xy"
      :style="{
        left: `${0.795 * results.results.econ}%`,
        bottom: `${0.935 * results.results.govt}%`,
      }"
      :src="require('@/assets/results/compass/xy.png')"
    />
    <img
      class="z"
      :style="{ top: `${0.955 * results.results.scty}%` }"
      :src="require('@/assets/results/compass/z.png')"
    />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { Result, _Compass } from '@/data/types/quizzes'

@Options({
  computed: {
    results(): Result<_Compass> {
      return this.$store.getters.getResults
    },
  },
})
export default class Compass extends Vue {}
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';

div {
  margin: 15px 0;
  width: 445px;
  height: 378px;
  background-image: url('../../../assets/results/compass/compass.png');
  background-size: cover;
  @media (max-width: 800px) {
    transform: scale(0.7);
  }
  .xy {
    width: 20px;
    height: 20px;
    position: absolute;
    bottom: 0;
    left: 0;
  }
  .z {
    width: 55px;
    height: 12px;
    position: absolute;
    top: 0;
    right: -5px;
  }
}
</style>
