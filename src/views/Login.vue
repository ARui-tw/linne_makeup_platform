<template>
  <div class="my-32 mx-auto flex items-center justify-center">
    <div class="bg-black-300 py-20 px-32 text-white">
      <div class="w-fit border border-solid border-white px-2 py-1">
        一般登入
      </div>
      <SizeBox height="30" />

      <div class="flex items-center">
        帳號
        <SizeBox width="10" />
        <input
          class="border border-slate-300 bg-white py-2 pr-3 text-black shadow-sm placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
          placeholder="請輸入帳號"
          type="text"
          name="Account"
        />
      </div>
      <SizeBox height="20" />
      <div class="flex items-center">
        密碼
        <SizeBox width="10" />
        <input
          class="border border-slate-300 bg-white py-2 pr-3 text-black shadow-sm placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
          placeholder="請輸入密碼"
          type="password"
          name="Password"
        />
      </div>
      <SizeBox height="20" />
      <div>
        <div class="flex w-full flex-row justify-between text-black">
          <div class="cursor-pointer bg-gray-50 px-2 py-1 text-sm">
            前往註冊
          </div>
          <div
            @click="handleLogin"
            class="cursor-pointer bg-gray-50 px-2 py-1 text-sm"
          >
            登入
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import SizeBox from "@/components/SizeBox.vue";
import { router } from "@/routes.js";

const handleLogin = async () => {
  await $cookies.set("token", "1234567890");
  router.push("/account");
};
</script>
