<template>
  <div>
    <div id="loader"></div>
    <div class="text">{{ $t('loading.wait') }}...</div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
// import { Prop } from 'vue-property-decorator'

@Options({})
export default class Null extends Vue {}
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
$width: 5px;

#loader {
  display: block;
  position: relative;
  width: 20 * $width + 70px;
  height: 20 * $width + 70px;
  left: calc(50% - 10 * $width - 35px);
  margin-bottom: 10 * $width - 35px;
  border: $width solid transparent;
  border-top-color: #00647d;
  border-bottom-color: #00647d1e;
  border-radius: 50%;
  -webkit-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;
  &:before {
    content: '';
    position: absolute;
    top: $width;
    left: $width;
    right: $width;
    bottom: $width;
    border: $width solid transparent;
    border-top-color: #566672;
    border-bottom-color: #5666721e;
    border-radius: 50%;
    -webkit-animation: spin 3s linear infinite;
    animation: spin 3s linear infinite;
  }
  &:after {
    content: '';
    position: absolute;
    top: 3 * $width;
    left: 3 * $width;
    right: 3 * $width;
    bottom: 3 * $width;
    border: 3px solid transparent;
    border: $width solid transparent;
    border-top-color: #7e8f9c;
    border-bottom-color: #7e8f9c1e;
    border-radius: 50%;
    -webkit-animation: spin 1.5s linear infinite;
    animation: spin 1.5s linear infinite;
  }
}

@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

.text {
  font-size: 20px;
}
</style>
