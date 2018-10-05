<template>
  <div class="hello">
    Upload File:
    <input type="file" @change="handleFileChange"/>
  </div>
</template>

<script>
export default {
  name: 'FileUpload',
  
  props: {
    value: String
  },

  methods: {
    handleFileChange(e) {
      this.$emit('input', e.target.files[0])
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
