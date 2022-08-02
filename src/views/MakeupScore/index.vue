<template>
  <div class="ml-4 flex h-screen flex-col">
    <router-link to="/makeupScore/Absolute" class="flex w-32 bg-gray-200 p-3">
      <button class="mx-auto">Pro login</button>
    </router-link>
    <SizeBox height="20" />
    <router-link to="/makeupScore/Relative" class="flex w-32 bg-gray-200 p-3"
      ><button class="mx-auto">User login</button>
    </router-link>
  </div>
</template>

<script setup>
import SizeBox from "@/components/SizeBox.vue";
</script>
