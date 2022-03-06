<template>
  <div class="ml-20 shadow border-black border-2 border-stone-900 h-32 w-32 bg-green-300"><h1 class="mt-12 ml-8">{{ name }}</h1></div>
  <div><input ref="inputBox" v-model="inputLetter" @keyup.enter="tryAnswer" class="mt-4 bg-green-300 shadow appearance-none border rounded w-full py-2 px-3 text-2xl text-black-300 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Enter Letter Here!"></div>


</template>

<script>
export default {
  name: "AnswerTile",
      props: ['name','id'],
  emits: ['new-item'],
  data() {
    return {
      firstLetter: this.name[0],
      inputLetter: '',
    }
  },
  methods: {
    tryAnswer() {
      if (this.firstLetter.toLowerCase() === this.inputLetter.toLowerCase()) {
        this.$emit('new-item');
      } else {
        alert('Try Again!');
      }
    }
  }

}
</script>

<style scoped>

</style>