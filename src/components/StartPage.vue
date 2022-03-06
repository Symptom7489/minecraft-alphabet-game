<template>
  <div class="grid place-items-center h-screen">
    <h1 class="text-6xl font-bold text-center box-shadow-2">Minecraft Alphabet Game!</h1>
  <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full" @click="newGame">Start Game!</button>
</div>
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