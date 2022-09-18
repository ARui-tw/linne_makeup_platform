<template>
  <div class="my-20 ml-4">
    <div class="text-2xl font-bold">夥伴團隊列表</div>
    <SizeBox height="10" />
    <div class="grid grid-cols-1 gap-2 md:grid-cols-2">
      <div
        v-for="pro in proList"
        class="flex flex-col items-center justify-center"
      >
        <router-link :to="`/expert/${pro._id}`">
          <div
            style="width: 300px; height: 243px"
            class="flex items-center justify-center bg-gray-300 align-middle"
          >
            <img
              :src="`${$baseURL}${pro.imagePhotoUrl}`"
              style="width: 300px"
            />
          </div>
          <div class="text-right">{{ pro.title }}</div>
        </router-link>
      </div>
    </div>
    <SizeBox height="30" />
    <div class="flex justify-center pr-6">
      <router-link to="/expert/register" class="bg-gray-200 px-4 py-2 text-lg"
        >註冊夥伴團隊
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import SizeBox from "@/components/SizeBox.vue";
const proList = ref([]);

const getProList = async () => {
  const result = await $api.profession.getProfessions({
    filter: { verified: true },
  });
  proList.value = result.data;
};

onMounted(async () => {
  await getProList();
});
</script>
