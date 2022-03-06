<template>
  <div class="grid place-items-center h-screen">
  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" @click="newGame">Start Game!</button>
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