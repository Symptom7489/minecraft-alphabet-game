<template>
    <button class=" w-full mb- 1 bg-green-500 hover:bg-orange-400 hover:text-black text-white font-bold py-2 px-4 rounded-full border-1" @click="this.hint = !this.hint">Need a Hint?</button>

  <div v-if="hint" class="w-full mt-4  border-black border-2 border-stone-900 h-32 bg-green-300"><h1 class="text-center mt-12 text-2xl font-bold w-full">{{ name }}</h1></div>
  <div><input ref="inputBox" v-model="inputLetter" @keyup.enter="tryAnswer" class="mt-4 bg-green-300 shadow appearance-none border rounded w-full py-2 px-3 text-2xl text-black-300 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Enter Letter Here!" autofocus="autofocus"></div>
  <button class="w-full mt-4 bg-green-500 hover:bg-orange-400 hover:text-black text-white font-bold py-2 px-4 rounded-full border-1" @click="$emit('reset-game')">Reseet Game!</button>
  <button class="w-full mt-4 bg-green-500 hover:bg-orange-400 hover:text-black text-white font-bold py-2 px-4 rounded-full border-1" @click="$emit('replay-voice')">Replay the Word</button>


</template>

<script>
export default {
  name: "AnswerTile",
      props: ['name','id'],
  emits: ['new-item', 'reset-game', 'replay-voice'],
  data() {
    return {
      firstLetter: this.name[0],
      inputLetter: '',
      hint: false,
    }
  },
  methods: {
    tryAnswer() {
      if (this.firstLetter.toLowerCase() === this.inputLetter.toLowerCase()) {
        this.$emit('new-item');
      } else {
        alert('Try Again!');
      }
    },
  }

}
</script>

<style scoped>

</style>