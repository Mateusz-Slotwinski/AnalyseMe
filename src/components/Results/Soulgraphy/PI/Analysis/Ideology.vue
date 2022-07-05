<template>
  <div v-if="ideology">
    <div
      class="title"
      v-html="$t('results.political_ideas.sections.ideology')"
    />
    <div class="ideology">{{ ideology }}</div>
    <div class="description">{{ ideology }}</div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import axios from '@/utilities/axios'
import { Ideology, Result, _Soulgraphy_PI } from '@/data/types/quizzes'
// import { Prop } from 'vue-property-decorator'

@Options({})
export default class Ideologies extends Vue {
  get results(): Result<_Soulgraphy_PI> {
    return this.$store.getters.getResults
  }
  ideologies: Ideology<_Soulgraphy_PI>[] = []
  ideology = ''

  async mounted() {
    const res = await axios.get<Ideology<_Soulgraphy_PI>[]>(
      `/ideologies/${this.results.quizID}`
    )

    let Ideology: Ideology<_Soulgraphy_PI>
    let ideologyDist = Infinity

    for (let ideology of res.data) {
      let dist = 0

      for (let prop in ideology.stats) {
        if (ideology.stats[prop] == -1) continue
        dist += Math.abs(ideology.stats[prop] - this.results.results[prop]) ** 2
      }

      if (dist < ideologyDist) {
        Ideology = ideology
        ideologyDist = dist
      }
    }

    this.ideology = Ideology!.name
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
.ideology {
  margin: 10px;
  padding-top: 5px;
  font-size: 23px;
  font-weight: 500;
  text-transform: uppercase;
}

.description {
  margin: 10px auto;
  font-size: 15.5px;
  width: 380px;
  max-width: 80vw;
  min-height: 110px;
  background-color: $light;
  border-radius: 10px;
  padding: 10px;
}
</style>
