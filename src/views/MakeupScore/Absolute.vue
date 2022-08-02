<template>
  <div
    :style="{ backgroundImage: `url(${absolute_bg})` }"
    class="ml-20 bg-repeat-y p-14"
  >
    <div class="text-2xl">
      絕對分數 <br />
      說明
    </div>
    <SizeBox height="30" />
    <div>
      絕對分數 ,意為評分者提供作品一個確定的評分 ,分數越高代表您越喜歡這張照片
      <br />
      同時評比複數照片 ,有助於評審保持內在標準<br />
      當照片難以判斷時 ,該照片會送到另外一個區域做更精確的評審...<br />
    </div>
    <SizeBox height="200" />
    <div class="flex flex-wrap" style="max-width: 520px">
      <div class="basis-1/2 p-3" v-for="item in set">
        <div class="flex flex-col justify-center">
          <img
            :src="getImageUrl(`img/fake_photo_data/${item.name}.jpg`)"
            :style="item.rank ? 'filter: opacity(70%)' : ''"
          />
          <SizeBox height="10" />
          <div class="flex">
            <div class="basis-1/4">給分</div>
            <div class="flex flex-row flex-wrap justify-between">
              <div v-for="option in options" class="flex items-center">
                <input
                  type="radio"
                  :id="option"
                  name="age"
                  :value="option"
                  class="mr-0.5"
                />
                <label for="age1">{{ option }}</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex w-full flex-col items-end">
        <div
          @click="getRandomSet"
          class="w-32 cursor-pointer bg-gray-50 px-4 py-2 text-lg"
        >
          難以判斷
        </div>
        <SizeBox height="10" />
        <div
          @click="getRandomSet"
          class="w-32 cursor-pointer bg-gray-50 px-4 py-2 text-lg"
        >
          下一組
        </div>
      </div>
    </div>
  </div>
  <SizeBox height="30" />
  <div class="flex justify-around">
    <router-link
      to="/makeupScore/absolute/certificate"
      class="bg-gray-200 px-4 py-2 text-lg"
      >證書申請
    </router-link>

    <SizeBox width="10" />

    <router-link to="/account" class="bg-gray-200 px-4 py-2 text-lg"
      >個人帳號</router-link
    >

    <SizeBox width="10" />

    <router-link to="/" class="bg-gray-200 px-4 py-2 text-lg"
      >回首頁</router-link
    >
  </div>
  <SizeBox height="30" />
</template>

<script setup>
import { ref } from "vue";
import absolute_bg from "@/assets/img/absolute_bg.svg";
import SizeBox from "@/components/SizeBox.vue";

const options = ["0", "1", "2", "3", "4", "5", "無法判斷"];

const randomIntFromInterval = (min, max) => {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const getImageUrl = (name) => {
  return new URL(`../../assets/${name}`, import.meta.url).href;
};

const set = ref([]);
const getRandomSet = () => {
  set.value = [];
  for (let i = 0; i < 4; i++) {
    set.value.push({ name: randomIntFromInterval(1, 24), score: null });
  }
};
getRandomSet();
</script>
