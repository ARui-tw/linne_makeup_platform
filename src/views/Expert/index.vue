<template>
  <div class="my-20 ml-4">
    <div class="text-2xl font-bold">夥伴團隊列表</div>
    <SizeBox height="10" />
    <div class="grid grid-cols-2 gap-2">
      <div
        v-for="(pro, key) in proList"
        class="flex flex-col items-center justify-center"
      >
        <router-link :to="`/expert/${pro._id}`">
          <img :src="`${$baseURL}${imageList[key]}`" style="width: 300px" />
          <div class="text-right">{{ userList[key] }}</div>
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
const imageList = ref([]);
const userList = ref([]);
const getProList = async () => {
  const result = await $api.profession.getProfessions({
    filter: { verified: true },
  });
  Object.keys(result.data).forEach(async (key) => {
    const image = await $api.artwork.getArtwork({
      _id: result.data[key].imagePhotoId,
    });
    imageList.value.push(image.artwork_url);
    const user = await $api.user.getUser({ _id: result.data[key].user_id });
    userList.value.push(user.title);
  });
  proList.value = result.data;
};
getProList();
</script>
