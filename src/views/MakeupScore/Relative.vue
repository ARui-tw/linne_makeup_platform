<template>
  <div
    :style="{ backgroundImage: `url(${bottleBG})` }"
    class="ml-5 bg-repeat-y p-14 md:ml-20"
  >
    <div class="text-2xl">
      相對分數 <br />
      說明
    </div>
    <SizeBox height="30" />
    <div>
      這個研究是相對分數<br />
      每張研究照片是以相對關係存在<br />
      藉著六張一組的數量<br />
      請評鑑者點選出最喜歡的照片<br />
      按順序到最不喜歡....<br /><br />
      相對分數是請評分者按照自己喜歡的彩妝照 最喜歡到最不喜歡的順序<br />
      每按一個照片將會消失<br />
      如果很難判斷時<br />
      也可以隨時按下難以判斷的按鈕<br />
      該區照片將移至專區作更精確的評鑑<br />
    </div>
    <SizeBox height="60" />
    <div class="flex flex-wrap" style="max-width: 520px">
      <div class="basis-1/3 p-3" v-for="item in set">
        <div class="relative cursor-pointer" @click="calculateRank(item)">
          <div class="flex justify-center">
            <div
              style="width: 135px; height: 180px"
              class="flex items-center justify-center bg-gray-300 align-middle"
            >
              <img
                :src="`${$baseURL}${item.url}`"
                :style="item.rank ? 'filter: opacity(60%)' : ''"
                style="max-width: 100%; max-height: 100%"
              />
            </div>
          </div>
          <div
            class="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 text-center text-3xl font-bold text-white"
          >
            {{ item.rank }}
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
      class="min-w-fit bg-gray-200 px-4 py-2 text-lg"
      >證書申請
    </router-link>

    <SizeBox width="10" />

    <router-link to="/account" class="min-w-fit bg-gray-200 px-4 py-2 text-lg"
      >個人帳號</router-link
    >

    <SizeBox width="10" />

    <router-link to="/" class="min-w-fit bg-gray-200 px-4 py-2 text-lg"
      >回首頁</router-link
    >
  </div>
  <SizeBox height="30" />
</template>

<script setup>
import { ref } from "vue";
import bottleBG from "@/assets/img/bottle_bg.svg";
import SizeBox from "@/components/SizeBox.vue";

const cur_rank = ref(0);
const set = ref([]);

const getRandomPhoto = async () => {
  cur_rank.value = 0;
  try {
    set.value = await $api.photo.getRandomPhoto({ size: 6 });
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

const calculateRank = (item) => {
  if (item.rank === null) {
    item.rank = ++cur_rank.value;
  } else {
    set.value.forEach((el) => {
      if (el.rank !== null && el.rank > item.rank) {
        el.rank = el.rank - 1;
      }
    });
    item.rank = null;
    cur_rank.value--;
  }
};

const handleNextSet = async () => {
  if (cur_rank.value === 6) {
    try {
      const user_id = await $cookies.get("user_id");
      const newRS = await $api.relativeScore.createRelativeScore({ user_id });
      const { _id: RS_id } = newRS;

      set.value.forEach(async (item) => {
        await $api.photoRelativeScore.createPhotoRelativeScore({
          relative_score_id: RS_id,
          photo_id: item._id,
          score: item.rank,
        });
      });
    } catch (error) {
      // console.log(error); // for debug
    }

    getRandomPhoto();
  } else {
    alert("請先完成評分");
  }
};
</script>
