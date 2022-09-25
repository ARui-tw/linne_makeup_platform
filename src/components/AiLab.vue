<template>
  <div class="flex flex-row">
    <SizeBox :width="breakpoints.md ? 16 : 0" />
    <div
      class="flex w-full flex-row bg-local bg-left-top bg-no-repeat"
      :style="
        breakpoints.md ? { backgroundImage: `url(${backgroundImage})` } : {}
      "
    >
      <SizeBox width="290" class="shrink-0" v-show="breakpoints.md" />
      <slot />
    </div>
  </div>
</template>

<script setup>
import backgroundImage from "@/assets/img/AI_Lab.svg";
import useBreakpoint from "@/plugins/breakpoints";
import SizeBox from "./SizeBox.vue";
const breakpoints = useBreakpoint();
</script>
