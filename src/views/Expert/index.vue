<template>
  <div class="my-20 ml-4">
    <div class="text-2xl font-bold">夥伴團隊列表</div>
    <SizeBox height="10" />
    <div class="grid grid-cols-2 gap-2">
      <div
        v-for="pro in proList"
        class="flex flex-col items-center justify-center"
      >
        <router-link :to="`/expert/${pro._id}`">
          <img :src="pro.image_url" />
        </router-link>
      </div>
    </div>
    <SizeBox height="30" />
    <div class="flex justify-end pr-6">
      <router-link to="/expert/register" class="bg-gray-200 px-4 py-2 text-lg"
        >註冊夥伴團隊
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import SizeBox from "@/components/SizeBox.vue";
const proList = ref([]);
// const getProList = async () => {
//   proList.value = await $api.profession.getProfessions({
//     filter: { verified: true },
//   });
// };
// getProList();
proList.value = [
  {
    image_url: "https://i.imgur.com/yimaB3P.jpg",
    _id: "60f1b1b0b9b1a20015f1b1b0",
  },
];
</script>
