<template>
  <Filter @filtered-search="searchQuiz" @filtered-tags="filterTags" />
  <div v-if="quizzes.length > 0">
    <Thumbnail v-for="quiz in quizzes" :key="quiz" :quiz="quiz" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Thumbnail from '@/components/Select/Thumbnail.vue'
import Filter from '@/components/Select/Filter.vue'
import { quizzes } from '@/data/quizzes'
import { QuizTag } from '@/data/types/quizzes'

@Options({
  components: {
    Thumbnail,
    Filter,
  },
})
export default class Quizzes extends Vue {
  allQuizzes = quizzes
  quizzes = this.allQuizzes
  activeTag = ''
  activeSearch = ''

  filterTags(filtertag: string) {
    this.activeTag = filtertag
    this.filterQuizzes()
  }

  searchQuiz(text: string) {
    this.activeSearch = text
    this.filterQuizzes()
  }

  filterQuizzes() {
    this.quizzes = this.allQuizzes.filter(
      (quiz) =>
        quiz.Title.toLowerCase().includes(this.activeSearch.toLowerCase()) &&
        (this.activeTag
          ? quiz.Tags.some((tag: QuizTag) => tag.Name == this.activeTag)
          : 1 == 1)
    )
  }

  mounted() {
    document.title = `${this.$t('nav.links.quizzes')} | AnalyseMe`
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
div {
  background-color: #56667223;
  display: flex;
  flex-direction: column;
  margin: 10px auto;
  width: 1200px;
  max-width: 95vw;
  padding: 10px;
  border-radius: 10px;
}
</style>
