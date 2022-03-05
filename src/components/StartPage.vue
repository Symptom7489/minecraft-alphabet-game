<template>
<h1>Start Page</h1>
  <button @click="newGame">Start Game!</button>
</template>

<script>
export default {
  name: "StartPage",
  emits: ['start-game'],
  methods: {
    newGame() {
      this.$emit('start-game');

    }
  }
}
</script>

<style scoped>

</style>