<template>
  <main>
    <Navbar />
    <div class="maincontainer">
      <router-view />
    </div>
    <Footer />
    <notifications position="bottom left" width="400px" />
  </main>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Navbar from '@/components/Shared/Navbar/Navbar.vue'
import Footer from '@/components/Shared/Footer/Footer.vue'

@Options({
  components: {
    Navbar,
    Footer,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import './styles/index.scss';
*,
*:before,
*:after {
  box-sizing: border-box;
  position: relative;
}

*::-moz-selection {
  /* Code for Firefox */
  background: $second !important;
}

*::selection {
  background: $second !important;
}

html {
  font-family: 'Rubik', sans-serif !important;
}

body {
  padding: 0px !important;
  margin: 0px !important;
  overflow-x: hidden;
  background-color: #ebeaed;
  min-height: 100vh;
  color: #262626;
}

a {
  text-decoration: none;
  color: #262626;
  cursor: pointer;
}

input,
button,
select,
textarea {
  font-family: 'Rubik', sans-serif;
  border: none;
  background-color: #e3e3e3;
  color: #333;
  padding: 0;
}

button,
select {
  cursor: pointer;
}

button:focus,
input:focus,
select:focus,
textarea:focus {
  outline: 0 !important;
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #888;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}

.katex-html {
  * {
    font-family: 'Rubik' !important;
  }
}

main {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  .maincontainer {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }
}

.vue-notification {
  margin: 0 5px 5px;
  padding: 10px;
  font-size: 17px !important;
  color: theme(#e3e3e3);
}
</style>
