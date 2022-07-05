<template>
  <router-link :to="`/quiz/${quiz.ID}`">
    <div
      class="img"
      :style="{
        backgroundImage: `url(${require('@/assets/select/' +
          quiz.ID +
          '.png')})`,
      }"
    >
      <div class="imgtitle">{{ quiz.Title }}</div>
    </div>
    <div class="content">
      <div class="title" v-html="quiz.Title" />
      <div class="desc" v-html="$t(`select.quizzes.${quiz.ID}.desc`)" />
      <div class="tags">
        <Tag v-for="tag in quiz.Tags" :key="tag" :tag="tag" />
      </div>
    </div>
  </router-link>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { Prop } from 'vue-property-decorator'
import Tag from './Tag.vue'
import { QuizThumb } from '@/data/types/quizzes'

@Options({
  components: {
    Tag,
  },
})
export default class Thumbnail extends Vue {
  @Prop({ type: Object as () => QuizThumb, required: true })
  readonly quiz!: QuizThumb
}
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';

a {
  display: flex;
  align-items: center;
  padding: 15px;
  transition: all 0.5s;
  background-color: #d7d8dd;
  &:hover {
    filter: brightness(0.95);
  }
}

.img {
  width: 320px;
  height: 180px;
  flex-shrink: 0;
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 10px;
  transition: all 0.3s;
  overflow: hidden;
  border: 4px solid $main;
  background-color: $main;
  .imgtitle {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #e3e3e3;
    position: absolute;
    top: 0;
    left: 0;
    font-size: 25px;
    font-weight: 500;
    width: 100%;
    height: 100%;
    background-color: #566672d0;
    opacity: 0;
    transition: all 0.3s;
  }
  &:hover {
    background-size: 110%;
    cursor: pointer;
    border: none;
    .imgtitle {
      opacity: 1;
      backdrop-filter: blur(2px);
    }
  }
}

.content {
  margin-left: 10px;
  flex-shrink: 1;
  padding: 10px;
  .title {
    font-size: 24px;
    font-weight: 500;
  }
  .desc {
    padding: 10px 0;
    font-size: 17px;
    font-weight: 300;
    width: 80%;
  }
  .tags {
    display: flex;
  }
}
</style>
