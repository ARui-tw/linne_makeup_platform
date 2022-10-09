<template>
  <div class="my-20 ml-4">
    <div class="text-2xl font-bold">本月之星：實驗室最新情報</div>
    <SizeBox height="10" />
    <div class="grid grid-cols-1 gap-2 md:grid-cols-2">
      <div
        v-for="content in contents"
        class="flex flex-col items-center justify-center"
      >
        <router-link :to="content.url">
          <img :src="content.image" style="width: 300px" />
          <div class="text-right">{{ content.title }}</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import SizeBox from "@/components/SizeBox.vue";
const contents = [
  {
    image: "https://i.imgur.com/FUCtchu.jpg",
    title: "【大數據應用於建構彩妝審美基準之研究】",
    url: "/home/BigData",
  },
  {
    image: "https://i.imgur.com/jDNjoUZ.jpg",
    title: "關於選擇的演算法",
    url: "/home/Algo",
  },
];
</script>
