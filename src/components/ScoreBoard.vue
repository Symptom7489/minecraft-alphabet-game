<template>
<div>
 <p class="bg-orange-400 text-black font-bold py-2 px-4 rounded-full text-center text-2xl font-bold">{{ score }}</p>
</div>
</template>

<script>
export default {
  name: "ScoreBoard",
  props: ['score']
}
</script>

<style scoped>

</style>