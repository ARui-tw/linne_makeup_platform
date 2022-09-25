<template>
  <div class="mt-4 flex flex-row items-center justify-between">
    <router-link to="/">
      <img
        src="@/assets/img/logo.svg"
        alt="logo"
        :width="breakpoints.md ? 350 : breakpoints.sm ? 250 : 200"
      />
    </router-link>
    <div class="text-lg font-extrabold text-brown-400">
      <!-- <img
          src="@/assets/img/login_btn.svg"
          alt="login_btn"
          :width="breakpoints.md ? 200 : breakpoints.sm ? 150 : 100"
        /> -->
      <div v-if="user_name">
        <router-link to="/account"> Welcome, {{ user_name }} </router-link>
      </div>
      <div v-else>
        <router-link to="/login"> 登入 </router-link>
        /
        <router-link to="/register"> 註冊 </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import useBreakpoint from "@/plugins/breakpoints";
import { computed } from "vue";

const breakpoints = useBreakpoint();
// const user_name = ref("");

const user_name = computed(() => {
  try {
    const temp = $cookies.get("user_name");
    if (!temp) return "";
    else return temp;
  } catch (error) {
    return "";
  }
});
</script>
