<template>
  <div class="inputcont">
    <div>Filter</div>
    <input v-model="search" :placeholder="`${$t('select.search')} 🔍`" />
  </div>
  <header>
    <div
      @click="$emit('filtered-tags', ''), setActive('')"
      :class="{ activeTag: this.activeTag == '' }"
    >
      <ic icon="globe-americas" />
      <div class="name" v-html="$t(`select.tags.all`)"></div>
    </div>
    <div
      v-for="(tag, index) in tags"
      :key="index"
      @click="$emit('filtered-tags', tag.Name), setActive(tag.Name)"
      :class="{ activeTag: this.activeTag == tag.Name }"
    >
      <ic :icon="tag.Icon" />
      <div class="name" v-html="$t(`select.tags.${tag.Name}`)"></div>
    </div>
  </header>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { Watch } from 'vue-property-decorator'
import { tags } from '@/data/quizzes'

@Options({
  emits: ['filtered-tags', 'filtered-search'],
  // watch: {
  //   emitSearch
  // }
})
export default class Filter extends Vue {
  tags = tags
  activeTag = ''
  search = ''

  @Watch('search')
  public emitSearch() {
    this.$emit('filtered-search', this.search)
  }

  setActive(name: string) {
    this.activeTag != name ? (this.activeTag = name) : (this.activeTag = '')
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
header {
  display: flex;
  justify-content: space-between;
  margin: 10px auto;
  width: 1000px;
  border-radius: 10px;
  overflow: hidden;
  font-size: 17px;
  color: #e3e3e3;
  > div {
    display: flex;
    justify-content: center;
    padding: 12px;
    flex-grow: 1;
    background-color: $dark;
    transition: all 0.3s;
    svg {
      margin-right: 10px;
    }

    &:hover {
      cursor: pointer;
      filter: brightness(1.1);
    }

    &.activeTag {
      background-color: $main;
    }
  }
}
.inputcont {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px auto;
  width: 1000px;
  > div {
    text-transform: uppercase;
    font-size: 31px;
    font-weight: 700;
    color: $dark;
  }
}
input {
  width: 300px;
  border: 4px solid $main;
  border-radius: 10px;
  font-size: 17px;
  padding: 8px;
}
</style>
