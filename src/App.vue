<template>
<div class="container">
<div class="container-item">
  <photo-tile
      :key="minecraftItemList.id"
      :id="minecraftItemList.id"
      :name="minecraftItemList.name"
      :image="minecraftItemList.icon"
  ></photo-tile>
</div>
  <div class="container-item">
    <answer-tile
          :key="minecraftItemList.id"
      :id="minecraftItemList.id"
      :name="minecraftItemList.name"
      :image="minecraftItemList.icon"
    ></answer-tile>
  </div>
</div>
  <button @click="getRandomItem">Random Item Button</button>
</template>

<script>
import PhotoTile from "@/components/PhotoTile";
import AnswerTile from "@/components/AnswerTile";
const minecraftItems = require('minecraft-items')

export default {
  name: 'App',
  components: {
    PhotoTile,
    AnswerTile,
  },
  data() {
    return {
      randomWord: '',
      minecraftItemList: [],
    };
  },
  methods: {
    getRandomItem() {
      const randomItemList = ['apple', 'armor', 'bed', 'book', 'bone', 'cactus', 'cobblestone', 'chicken', 'compass',
        'crafting', 'creeper', 'diamond', 'dirt', 'emerald', 'egg', 'end', 'flint','flower', 'furnace', 'glass', 'gold',
        'hay', 'hoe', 'iron', 'ice', 'jack', 'jungle', 'ladder', 'lava', 'leather', 'melon', 'mooshroom', 'minecart', 'nether',
        'obsidian', 'ore', 'paper', 'poppy', 'potato', 'pumpkin', 'quartz', 'raw', 'redstone', 'rose', 'sand', 'slime', 'snow', 'spider',
        'sunflower', 'sword', 'tnt', 'torch', 'village', 'vines', 'water', 'wool', 'yellow', 'zombie'];
      const randomNumber = Math.floor(Math.random() * randomItemList.length - 1);
      this.randomWord = randomItemList[randomNumber];
      const randomItem = minecraftItems.find(this.randomWord);
      this.minecraftItemList = randomItem[0];
        console.log(this.minecraftItemList.icon);

    }
    }}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.container {
  display: flex;
  justify-content: center;
  background-color: blue;
  color: grey;
  margin: 1rem;
  padding: 1rem;
}
.container-item {
  justify-content: center;
  margin: 1rem;
  padding: 1rem;
  }
</style>
