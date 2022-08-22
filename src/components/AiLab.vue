<template>
  <div
    class="ml-0 flex w-full flex-row bg-local bg-left-top bg-no-repeat md:ml-4"
    :style="
      breakpoints.md ? { backgroundImage: `url(${backgroundImage})` } : {}
    "
  >
    <SizeBox width="290" class="shrink-0" v-show="breakpoints.md" />
    <slot />
  </div>
</template>

<script setup>
import backgroundImage from "@/assets/img/AI_Lab.svg";
import useBreakpoint from "@/plugins/breakpoints";
import SizeBox from "./SizeBox.vue";
const breakpoints = useBreakpoint();
</script>
