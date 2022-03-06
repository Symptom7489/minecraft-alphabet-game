<template>
<img class="minecraft-image" :src="mcImage" style="width:200px; height:200px; image-rendering: pixelated">
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