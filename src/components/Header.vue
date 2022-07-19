<template>
  <div class="mt-4 flex flex-row items-center justify-between">
    <div>
      <img
        src="@/assets/img/logo.svg"
        alt="logo"
        :width="breakpoints.md ? 350 : breakpoints.sm ? 250 : 200"
      />
    </div>
    <div>
      <img
        src="@/assets/img/login_btn.svg"
        alt="login_btn"
        :width="breakpoints.md ? 200 : breakpoints.sm ? 150 : 100"
      />
    </div>
  </div>
</template>

<script setup>
import useBreakpoint from "@/plugins/breakpoints";

const breakpoints = useBreakpoint();
</script>
