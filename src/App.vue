<template>
  <start-page v-if="!gameStart" @startGame="getRandomItem"></start-page>

<div class="grid place-items-center grid-flow-column-dense grid-cols-2 h-screen" v-if="gameStart">
 <div class=""><photo-tile
      :key="minecraftItemList.id"
      :name="minecraftItemList.name"
      :image="minecraftItemList.icon"
  ></photo-tile></div>
   <div class=""> <answer-tile
        @new-item="getRandomItem"
        :key="minecraftItemList.id"
      :id="minecraftItemList.id"
      :name="minecraftItemList.name"
    ></answer-tile></div>
  </div>
 </template>

<script>
import PhotoTile from "@/components/PhotoTile";
import AnswerTile from "@/components/AnswerTile";
import StartPage from "@/components/StartPage";
const minecraftItems = require('minecraft-items');


export default {
  name: 'App',
  components: {
    PhotoTile,
    StartPage,
    AnswerTile,
  },

  data() {
    return {
      randomWord: '',
      minecraftItemList: [],
      gameStart: false,

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
      this.gameStart = true;


    }
    }}
</script>

<style>
body {
  background-color: rgb(22 163 74);
}
</style>
