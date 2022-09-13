<template>
  <div class="mt-4 flex flex-row items-center justify-between">
    <router-link to="/">
      <img
        src="@/assets/img/logo.svg"
        alt="logo"
        :width="breakpoints.md ? 350 : breakpoints.sm ? 250 : 200"
      />
    </router-link>
    <router-link to="/login">
      <div>
        <img
          src="@/assets/img/login_btn.svg"
          alt="login_btn"
          :width="breakpoints.md ? 200 : breakpoints.sm ? 150 : 100"
        />
      </div>
    </router-link>
  </div>
</template>

<script setup>
import useBreakpoint from "@/plugins/breakpoints";

const breakpoints = useBreakpoint();
</script>
