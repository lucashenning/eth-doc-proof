<template>
  <div class="comp">
    <h1>Create PDF:</h1>
    <input class="form-control" type="text" v-model="text" placeholder="Enter data..."/>
    <button @click="createPdf" type="submit" class="btn btn-primary">Create PDF</button>
  </div>
</template>

<script>
import * as jsPDF from 'jspdf'

export default {
  name: 'PdfCreator',
  
  data: function () {
    return {
      text: '',
      hash: ''
    }
  },

  methods: {
    createPdf() {
      var doc = new jsPDF();
      doc.text(this.text, 10, 10);
      doc.save('a4.pdf');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>
