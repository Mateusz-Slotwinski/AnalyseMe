<template>
  <a :href="media.Link" :class="{ supp: media.Support }">
    <ic v-if="media.Collection == 'fas'" :icon="['fas', media.Icon]" />
    <ic v-else :icon="['fab', media.Icon]" />
  </a>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    media: Object,
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
a {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  width: 40px;
  height: 40px;
  padding: 5px;
  margin: 5px;
  background: #0883a2;
  background-size: 70%;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 5px;
  transition: 0.2s;
  &:hover {
    filter: brightness(1.2);
  }
  color: #e3e3e3 !important;
}

.supp {
  background: #a50034;
}
</style>
