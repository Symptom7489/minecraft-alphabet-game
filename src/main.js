import { createApp } from 'vue'
import App from './App.vue'

import StartPage from "@/components/StartPage";
import PhotoTile from "@/components/PhotoTile";
import AnswerTile from "@/components/AnswerTile";

const app = createApp(App);
app.component('start-page', StartPage);
app.component('photo-tile', PhotoTile);
app.component('answer-tile', AnswerTile);


app.mount('#app');
