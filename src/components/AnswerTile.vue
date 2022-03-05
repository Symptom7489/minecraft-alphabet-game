<template>
<h1 class="answer-text">{{ name }}</h1>
  <input class="input-box" type="text" v-model.trim="inputLetter" id="inputLetter">
  <label for="inputLetter"> Enter the Letter Here!</label>
  <button @click="tryAnswer"> LET'S GO!</button>

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
        alert('Great Job!');
        this.$emit('new-item');
      } else {
        alert('Try Again!');
      }
    }
  }

}
</script>

<style scoped>
.answer-text {
  font-size: 5rem;
  font-weight: 500;
  text-align: center;
}
</style>