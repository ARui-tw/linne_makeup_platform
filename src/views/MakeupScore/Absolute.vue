<template>
  <div
    :style="{ backgroundImage: `url(${absolute_bg})` }"
    class="ml-5 bg-repeat-y p-14 md:ml-20"
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
          <div
            style="width: 225px; height: 300px"
            class="flex items-center justify-center bg-gray-300 align-middle"
          >
            <img
              :src="`${$baseURL}${item.url}`"
              :style="item.rank ? 'filter: opacity(70%)' : ''"
              style="max-width: 100%; max-height: 100%"
            />
          </div>
          <SizeBox height="10" />
          <div class="flex">
            <div class="basis-1/4">給分</div>
            <div class="flex flex-row flex-wrap justify-between">
              <div v-for="option in options" class="flex items-center">
                <input
                  type="radio"
                  :id="option"
                  :value="option"
                  class="mr-0.5"
                  v-model="item.rank"
                />
                <label for="age1">{{ option }}</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex w-full flex-col items-end">
        <div
          @click="getRandomPhoto"
          class="w-32 cursor-pointer bg-gray-50 px-4 py-2 text-lg"
        >
          難以判斷
        </div>
        <SizeBox height="10" />
        <div
          @click="handleNextSet"
          class="w-32 cursor-pointer bg-gray-50 px-4 py-2 text-lg"
        >
          下一組
        </div>
      </div>
    </div>
  </div>
  <SizeBox height="30" />
  <div class="ml-5 flex justify-around md:ml-20" style="max-width: 520px">
    <router-link
      to="/makeupScore/certificate"
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

const options = ["1", "2", "3", "4", "5", "無法判斷"];

const set = ref([]);
const getRandomPhoto = async () => {
  try {
    set.value = await $api.photo.getRandomPhoto({ size: 4 });
  } catch (error) {
    console.log(error);
  }
  set.value = set.value.map((obj) => ({
    _id: obj._id,
    url: obj.url,
    rank: null,
  }));
};

getRandomPhoto();

const handleNextSet = async () => {
  if (set.value.some((obj) => obj.rank === null)) {
    alert("請給分");
    return;
  }

  try {
    const user_id = await $cookies.get("user_id");

    set.value.forEach(async (item) => {
      if (item.rank !== "無法判斷")
        await $api.absoluteScore.createAbsoluteScore({
          photo_id: item._id,
          score: parseInt(item.rank),
          user_id,
        });
      else
        await $api.absoluteScore.createAbsoluteScore({
          photo_id: item._id,
          score: -1,
          user_id,
        });
    });
  } catch (error) {
    // console.log(error); // for debug
  }

  getRandomPhoto();
};
</script>
