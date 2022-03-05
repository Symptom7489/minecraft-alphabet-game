<template>
  <img :src="mcImage" >
  <h2></h2>
</template>

<script>
export default {
  name: "PhotoTile",
    props: ['name','image'],
  data() {
    return {
      mcImage:'data:image/png;charset=utf-8;base64, ' + this.image
    };
  }
}
</script>

<style scoped>

</style>