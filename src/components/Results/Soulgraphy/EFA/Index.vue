<template>
  <div>asdasdads</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { Prop } from 'vue-property-decorator'
import { Result, _Soulgraphy_EFA } from '@/data/types/quizzes'

@Options({})
export default class Index extends Vue {
  @Prop({ type: Object as () => Result<_Soulgraphy_EFA>, required: true })
  readonly results!: Result<_Soulgraphy_EFA>
}
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
</style>
