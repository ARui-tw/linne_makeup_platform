<template>
  <div class="my-32 mx-auto flex items-center justify-center">
    <div class="bg-black-300 py-20 px-32 text-white">
      HI

      <div
        class="flex w-full flex-row justify-between text-black"
        @click="handleLogout"
      >
        <div class="cursor-pointer bg-gray-50 px-2 py-1 text-sm">登出</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { router } from "@/routes";

const handleLogout = async () => {
  await $cookies.remove("token");
  await $cookies.remove("login");
  router.push("/");
};
</script>
