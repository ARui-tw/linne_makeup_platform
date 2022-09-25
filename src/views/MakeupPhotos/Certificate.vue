<template>
  <div class="md:ml-20">
    <div class="mt-20 text-xl">上傳彩妝作品 證書</div>
    <SizeBox height="30" />
    <div class="max-w-fit">
      <img :src="getImageUrl(`img/upload_certificate.png`)" />
      <SizeBox height="30" />
      <div class="bg-gray-100 p-5">
        <div v-for="field in fields" class="my-2">
          <div class="flex">
            <div class="my-auto mr-4 flex w-24 flex-col">
              <div>{{ field.label }}</div>
              <div>{{ field.name }}</div>
            </div>
            <input
              class="w-full rounded-md border border-slate-300 bg-white py-2 pr-3 shadow-sm placeholder:italic placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              type="text"
              :name="field.name"
              v-model="userData[field.col]"
            />
          </div>
        </div>

        <SizeBox height="10" />

        <div class="text-sm">
          說明： <br />
          協助彩妝實驗證書由本研究室頒發，須編列序號及鋼印，請務必提供正確資料
          <br />
          同一個帳號提供100 組資料即可申請，單一帳號只能申請一張證書
        </div>
        <div class="flex justify-end">
          <div
            @click="handleSend"
            class="max-w-fit cursor-pointer bg-gray-200 px-4 py-2 text-lg"
          >
            送出
          </div>
        </div>
      </div>
      <SizeBox height="30" />
    </div>
    <div class="justify-begin flex">
      <router-link to="/" class="bg-gray-200 px-4 py-2 text-lg"
        >個人帳號</router-link
      >
      <SizeBox width="10" />
      <router-link to="/" class="bg-gray-200 px-4 py-2 text-lg"
        >回首頁</router-link
      >
      <SizeBox width="10" />
    </div>
  </div>
  <SizeBox height="30" />
</template>
<script setup>
import SizeBox from "@/components/SizeBox.vue";
import { ref } from "vue";
import { router } from "@/routes";

const getImageUrl = (name) => {
  return new URL(`../../assets/${name}`, import.meta.url).href;
};
const fields = [
  {
    label: "姓名",
    name: "name",
    col: "name",
  },
  {
    label: "聯絡電話",
    name: "Tel",
    col: "phone",
  },
  {
    label: "電郵",
    name: "Email",
    col: "email",
  },
  {
    label: "郵寄地址",
    name: "Add",
    col: "post_address",
  },
  // {
  //   label: "稱謂",
  //   name: "Title",
  //   col: "title",
  // },
];
const userData = ref([]);
const getUserData = async () => {
  userData.value = await $api.user.getCurrentUser();
};
getUserData();

const handleSend = async () => {
  try {
    await $api.user.modifyCurrentUser({
      name: userData.value.name,
      phone: userData.value.phone,
      email: userData.value.email,
      post_address: userData.value.post_address,
    });
    await $api.user.email({ type: "upload_certificate" });
    router.push("/");
  } catch (error) {
    console.assert("申請失敗");
  }
};
</script>
