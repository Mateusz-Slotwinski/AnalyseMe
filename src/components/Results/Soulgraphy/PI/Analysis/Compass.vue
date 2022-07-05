<template>
  <article class="container">
    <div
      class="title"
      v-html="$t('results.political_ideas.sections.compass')"
    />
    <div class="compass">
      <img
        class="xy"
        :style="{
          left: `${0.795 * CompassData.ox}%`,
          bottom: `${0.935 * CompassData.oy}%`,
        }"
        :src="require('@/assets/results/compass/xy.png')"
      />
      <img
        class="z"
        :style="{ top: `${0.955 * CompassData.oz}%` }"
        :src="require('@/assets/results/compass/z.png')"
      />
    </div>
  </article>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { Result, _Soulgraphy_PI } from '@/data/types/quizzes'

@Options({
  computed: {
    results(): Result<_Soulgraphy_PI> {
      return this.$store.getters.getResults
    },

    CompassData() {
      return {
        ox:
          100 -
          this.weightedMean(
            [
              this.results.results.econ_soci,
              this.results.results.econ_regu,
              this.results.results.econ_prot,
              this.results.results.law_ecol,
            ],
            [9, 6, 1, 1]
          ),
        oy:
          100 -
          this.weightedMean(
            [
              this.results.results.law_free,
              this.results.results.state_fede,
              this.results.results.society_ind,
            ],
            [5, 3, 1]
          ),
        oz:
          100 -
          this.weightedMean(
            [
              this.results.results.state_glob,
              this.results.results.state_peac,
              this.results.results.state_demo,
              this.results.results.society_prog,
              this.results.results.society_secu,
              this.results.results.law_reso,
              this.results.results.law_ecol,
            ],
            [2.5, 2, 3, 4, 2, 1.5, 2]
          ),
      }
    },
  },
})
export default class Compass extends Vue {
  weightedMean(arrValues: number[], arrWeights: number[]) {
    const result = arrValues
      .map((value, i) => {
        const weight = arrWeights[i]
        const sum = value * weight
        return [sum, weight]
      })
      .reduce((p, c) => [p[0] + c[0], p[1] + c[1]], [0, 0])

    return result[0] / result[1]
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
.title {
  font-size: 27px;
  font-weight: 500;
  text-transform: uppercase;
}

.compass {
  margin: 15px 0;
  width: 295px;
  height: 250px;
  background-image: url('../../../../../assets/results/compass/compass.png');
  background-size: cover;
  .xy {
    width: 14px;
    height: 14px;
    position: absolute;
    bottom: 0;
    left: 0;
  }
  .z {
    width: 36.8px;
    height: 8px;
    position: absolute;
    top: 0;
    right: -3.5px;
  }
}
</style>
