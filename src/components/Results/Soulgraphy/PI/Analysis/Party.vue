<template>
  <article class="container">
    <div class="title" v-html="$t('results.political_ideas.sections.party')" />
    <div class="parties">
      <section>
        <div class="name">National</div>
      </section>
      <section>
        <div class="name">International</div>
      </section>
      <section>
        <div class="name">Young</div>
      </section>
    </div>
  </article>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
// import { Prop } from 'vue-property-decorator'

@Options({})
export default class Null extends Vue {}
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
.title {
  font-size: 27px;
  font-weight: 500;
  text-transform: uppercase;
}
.parties {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 10px;
}
.name {
  font-weight: 500;
  font-size: 20px;
  text-transform: uppercase;
  color: #00647d;
}
</style>
