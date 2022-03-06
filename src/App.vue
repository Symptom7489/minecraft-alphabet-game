<template>
  <start-page v-if="!gameStart" @startGame="getRandomItem"></start-page>
  <score-board v-if="gameStart" :score="this.score"></score-board>
  <div class="grid place-items-center grid-flow-column-dense grid-cols-2 h-screen" v-if="gameStart">
    <div class="">
      <photo-tile
          :key="minecraftItemList.id"
          :name="minecraftItemList.name"
          :image="minecraftItemList.icon"
      ></photo-tile>
    </div>
    <div class="">
      <answer-tile
          @replay-voice="replayVoice"
          @reset-game="resetGame"
          @new-item="nextItem"
          :key="minecraftItemList.id"
          :id="minecraftItemList.id"
          :name="minecraftItemList.name"
      ></answer-tile>
    </div>
  </div>
</template>

<script>
import PhotoTile from "@/components/PhotoTile";
import AnswerTile from "@/components/AnswerTile";
import StartPage from "@/components/StartPage";
import ScoreBoard from "@/components/ScoreBoard";

const minecraftItems = require('minecraft-items');


export default {
  name: 'App',
  components: {
    PhotoTile,
    StartPage,
    AnswerTile,
    ScoreBoard,
  },

  data() {
    return {
      randomWord: '',
      minecraftItemList: [],
      gameStart: false,
      score: 0,

    };
  },
  methods: {
    getRandomItem() {
      const randomItemList = ['apple', 'armor', 'bed', 'book', 'bone', 'cactus', 'cobblestone', 'chicken', 'compass',
        'crafting', 'creeper', 'diamond', 'dirt', 'emerald', 'egg', 'end', 'flint', 'furnace', 'glass', 'gold',
        'hay', 'hoe', 'iron', 'ice', 'jack', 'jungle', 'ladder', 'lava', 'leather', 'melon', 'mooshroom', 'minecart', 'nether',
        'obsidian', 'ore', 'paper', 'poppy', 'potato', 'pumpkin', 'quartz', 'raw', 'redstone', 'rose', 'sand', 'slime', 'snow', 'spider',
        'sunflower', 'sword', 'tnt', 'torch', 'village', 'vines', 'water', 'wool', 'yellow', 'zombie'];
      const randomNumber = Math.floor(Math.random() * randomItemList.length - 1);
      this.randomWord = randomItemList[randomNumber];
      const randomItem = minecraftItems.find(this.randomWord);
      this.minecraftItemList = randomItem[0];
      console.log(this.minecraftItemList);

      const msg = new SpeechSynthesisUtterance();
      msg.text = this.minecraftItemList.name + ' the letter ' + this.minecraftItemList.name[0];
      window.speechSynthesis.speak(msg);

      this.gameStart = true;
    },
    nextItem() {
      this.score++;
      this.getRandomItem();
    },
    resetGame() {
      this.score = 0;
      this.gameStart = false;
    },
    replayVoice() {
      const msg = new SpeechSynthesisUtterance();
      msg.text = this.minecraftItemList.name + ' the letter ' + this.minecraftItemList.name[0];
      window.speechSynthesis.speak(msg);
    }
  }
}
</script>

<style>
body {
  background-color: rgb(22 163 74);
}
</style>
