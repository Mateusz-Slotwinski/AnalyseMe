import { Module, Mutation, VuexModule } from 'vuex-module-decorators'
import { Result, QuizEffects } from '@/data/types/quizzes'

@Module({ name: 'results' })
class ResultsModule extends VuexModule {
  results: Result<QuizEffects> = {
    quizID: '',
    resultID: '',
    results: {},
  }

  get getResults(): Result<QuizEffects> {
    return this.results
  }

  @Mutation
  setResults(results: Result<QuizEffects>): void {
    this.results = results
  }
}

export default ResultsModule
