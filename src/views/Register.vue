<template>
  <div class="my-32 mx-auto flex items-center justify-center">
    <div class="bg-black-300 py-20 px-32 text-white">
      <div class="w-fit border border-solid border-white px-2 py-1">註冊</div>
      <SizeBox height="30" />

      <div class="flex items-center">
        帳號
        <SizeBox width="10" />
        <input
          class="border border-slate-300 bg-white py-2 pr-3 text-black shadow-sm placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
          placeholder="請輸入帳號"
          type="text"
          v-model="name"
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
          v-model="password"
        />
      </div>
      <SizeBox height="20" />
      再次輸入密碼
      <div class="flex items-center">
        <SizeBox width="42" />
        <input
          class="border border-slate-300 bg-white py-2 pr-3 text-black shadow-sm placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
          placeholder="請輸入密碼"
          type="password"
          v-model="passwordCheck"
        />
      </div>
      <SizeBox height="20" />
      <div>
        <div class="flex w-full flex-row justify-between text-black">
          <div
            class="cursor-pointer bg-gray-50 px-2 py-1 text-sm"
            @click="handleRegister"
          >
            確認
          </div>
        </div>
      </div>
      <SizeBox height="30" />
      <div class="w-fit border border-solid border-white px-2 py-1">
        已經有帳號了嗎？
      </div>
      <SizeBox height="15" />
      <div
        class="flex w-full flex-row justify-between text-black"
        @click="handleGoLogin"
      >
        <div class="cursor-pointer bg-gray-50 px-2 py-1 text-sm">登入</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import SizeBox from "@/components/SizeBox.vue";
import { router } from "@/routes.js";

const name = ref("");
const password = ref("");
const passwordCheck = ref("");

const handleRegister = async () => {
  if (password.value !== passwordCheck.value) {
    alert("密碼不一致");
    return;
  }
  try {
    const res = await $api.user.register({
      name: name.value,
      password: password.value,
    });
    if (res._id) {
      alert("註冊成功");
      router.push("/login");
    } else {
      alert("註冊失敗");
    }
  } catch (error) {
    alert("註冊失敗");
  }
};

const handleGoLogin = async () => {
  router.push("/login");
};
</script>
