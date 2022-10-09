<template>
  <div class="my-20 ml-4 mr-7">
    <div class="text-2xl font-bold">
      未來彩妝論述平台 <br />
      Discover new ideas/discourse
    </div>
    <SizeBox height="10" />
    <div class="max-w-4xl">
      <router-link :to="content.url" v-for="content in contents">
        <div class="my-3 bg-gray-200">
          {{ content.name }}
        </div>
      </router-link>
    </div>
  </div>
</template>
<script setup>
import SizeBox from "@/components/SizeBox.vue";
const contents = [
  {
    name: "科普文章 網頁架構製作 ( 上 )",
    url: "/makeupPapers/web-1",
  },
  {
    name: "關於訓練模型與資料集",
    url: "/makeupPapers/MT-ResNet",
  },
  {
    name: "淺談美妝與科技的跨領域結合",
    url: "/makeupPapers/combine",
  },
];
</script>
