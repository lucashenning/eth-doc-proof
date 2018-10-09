<template>
  <div id="app" class='container'>

    <div class="row">
      <PdfCreator />
    </div>
    
    <div class="row">
      <BcHashWriter />
    </div>

    <div class="row">
      <BcHashReader />
    </div>
    
  </div>
</template>

<script>
import FileUpload from './components/FileUpload.vue';
import BcHashReader from './components/BcHashReader.vue';
import BcHashWriter from './components/BcHashWriter.vue';
import PdfCreator from './components/PdfCreator.vue';

export default {
  name: 'app',
  components: {
    FileUpload,
    BcHashReader,
    BcHashWriter,
    PdfCreator
  },

  methods: {
    fileSpecified (value) {
      console.log(value) // someValue
    }
  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
