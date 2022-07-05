<template>
  <section>
    <img :src="require(`@/assets/results/9axes/${axis}_prim.png`)" />
    <div class="bar">
      <div
        :style="{
          width: `${value}%`,
          backgroundColor: quiz_data[axis].prim,
        }"
        v-html="value >= 30 ? `${value}%` : ''"
      />
      <div
        :style="{
          width: `${100 - value}%`,
          backgroundColor: quiz_data[axis].sec,
        }"
        v-html="value <= 70 ? `${100 - value}%` : ''"
      />
    </div>
    <img :src="require(`@/assets/results/9axes/${axis}_sec.png`)" />
  </section>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { Prop } from 'vue-property-decorator'

@Options({})
export default class Axis extends Vue {
  @Prop({ type: String, required: true })
  readonly axis!: string

  @Prop({ type: Number, required: true })
  readonly value!: number

  quiz_data = {
    fed: {
      prim: '#EFC200',
      sec: '#C3272B',
    },
    dem: {
      prim: '#00897B',
      sec: '#FE8400',
    },
    glo: {
      prim: '#4593BE',
      sec: '#661973',
    },
    mil: {
      prim: '#618834',
      sec: '#B77994',
    },
    fre: {
      prim: '#1C425E',
      sec: '#EFC200',
    },
    equ: {
      prim: '#C3272B',
      sec: '#00897B',
    },
    pro: {
      prim: '#661973',
      sec: '#618834',
    },
    sec: {
      prim: '#FE8400',
      sec: '#00897B',
    },
    mul: {
      prim: '#B77994',
      sec: '#1C425E',
    },
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
section {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 600px;
  max-width: 95vw;
}
img {
  height: calc(45px + 1.4vw);
}
.bar {
  flex-grow: 1;
  height: calc(30px + 1vw);
  max-width: 350px;
  margin: 0 5px;
  display: flex;
  background-color: #262626;
  justify-content: space-between;
  box-sizing: content-box;
  border-radius: 10px;
  overflow: hidden;
  padding: 1px;
  &:after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    border: 3px solid black;
    border-radius: 10px;
    @media (max-width: 900px) {
      border-width: 2px;
    }
  }
  > div {
    font-weight: bold;
    align-items: center;
    font-size: 20px;
    width: 50%;
    height: 100%;
    display: inline-flex;
    color: #161616;
    padding: 10px;
    &:first-child {
      border-radius: 7px 0 0 7px;
    }
    &:last-child {
      border-radius: 0 8px 8px 0;
      justify-content: flex-end;
      flex-grow: 1;
      border-left: 3px solid #262626;
      @media (max-width: 900px) {
        border-width: 2px;
      }
    }
  }
}
</style>
