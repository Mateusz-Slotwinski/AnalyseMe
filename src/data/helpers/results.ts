import { Question, QuizEffects } from '../types/quizzes'

class Results {
  merge(array: QuizEffects[]): QuizEffects {
    return array.reduce((a, b) => {
      for (const p in a) {
        if (b[p]) a[p] += b[p]
      }
      return a
    })
  }
  max(array: Question<QuizEffects>[]): QuizEffects {
    return array
      .map((question) => question.effect)
      .reduce((a, b) => {
        for (const p in a) {
          if (a[p] < 0) a[p] *= -1
          if (b[p]) a[p] += Math.abs(b[p])
        }
        return a
      })
  }
  calcResult(score: number, max: number): number {
    return Math.round((1000 * (max + score)) / (2 * max))
  }
  calcSimple(result: QuizEffects, max: QuizEffects): QuizEffects {
    const res = { ...result }
    for (const i in res) {
      res[i] = this.calcResult(result[i], max[i])
    }
    return res
  }
  calcRaw(
    anwsers: QuizEffects[],
    questions: Question<QuizEffects>[]
  ): QuizEffects {
    const res = { ...this.merge(anwsers) }
    const max = { ...this.max(questions) }
    return this.calcSimple(res, max)
  }
}

export default new Results()
