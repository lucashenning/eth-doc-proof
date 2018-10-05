<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div class="row">
      <div class="col-6">
        <FileUpload v-on:change="funct"/>
      </div>
      <div class="col-6">

      </div>
    </div>
    
  </div>
</template>

<script>
import FileUpload from './components/FileUpload.vue'

export default {
  name: 'app',
  components: {
    FileUpload
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
