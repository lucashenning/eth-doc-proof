<template>
  <div class="hello">
    <input class="form-control-file" type="file" @change="handleFileChange"/>
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
      this.$emit('fileSpecified', e.target.files[0])
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
