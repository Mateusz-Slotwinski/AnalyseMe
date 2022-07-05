<template>
  <div class="container" v-if="QuizData.ID">
    <header v-html="QuizData.Title" />
    <Compass v-if="QuizData.ID == 'political_compass'" />
    <EightValues v-if="QuizData.ID == '8values'" />
    <NineAxes v-if="QuizData.ID == '9axes'" />
    <SoulgraphyPI v-if="QuizData.ID == 'political_ideas'" />
    <SoulgraphyEFA v-if="QuizData.ID == 'economic_freedom_analysis'" />
    <SoulgraphyPFA v-if="QuizData.ID == 'personal_freedom_analysis'" />
    <MyPolitics v-if="QuizData.ID == 'mypolitics'" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

import axios from '@/utilities/axios'
import { quizzes } from '@/data/quizzes'
import { QuizThumb, Result, QuizEffects } from '@/data/types/quizzes'

import Compass from '@/components/Results/Compass/Index.vue'
import EightValues from '@/components/Results/8Values/Index.vue'
import NineAxes from '@/components/Results/9Axes/Index.vue'
import SoulgraphyPI from '@/components/Results/Soulgraphy/PI/Index.vue'
import SoulgraphyEFA from '@/components/Results/Soulgraphy/EFA/Index.vue'
import SoulgraphyPFA from '@/components/Results/Soulgraphy/PFA/Index.vue'
import MyPolitics from '@/components/Results/MyPolitics/Index.vue'

@Options({
  components: {
    Compass,
    EightValues,
    NineAxes,
    SoulgraphyPI,
    SoulgraphyEFA,
    SoulgraphyPFA,
    MyPolitics,
  },
})
export default class Results extends Vue {
  QuizData = {} as QuizThumb

  mounted() {
    axios
      .get<Result<QuizEffects>>(`results/${this.$route.params.id}`)
      .then((res) => {
        if (res.data) {
          for (const p in res.data.results) {
            res.data.results[p] /= 10
          }

          this.$store.commit('setResults', res.data)
          this.QuizData = quizzes.find((quiz) => quiz.ID == res.data.quizID)!
          document.title = `${this.QuizData.Title} | AnalyseMe`
        } else {
          this.$notify({
            type: 'error',
            title: this.$t('notifications.types.error'),
            text: this.$t('notifications.content.no_quiz'),
          })
          this.$router.push('/quizzes')
        }
      })
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  flex-grow: 1;
}
header {
  margin-top: 20px;
  font-size: 30px;
  font-weight: 700;
  text-transform: uppercase;
  @media (max-width: 900px) {
    font-size: 24px;
  }
}
</style>
