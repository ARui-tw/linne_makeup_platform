<template>
  <div class="mx-4 sm:mx-5 md:mx-7">
    <Header />
    <Menu />
    <SizeBox height="20" />
    <div class="max-h-72 w-full justify-center overflow-hidden">
      <img src="@/assets/img/index_img.svg" alt="" class="w-full" />
    </div>
    <SizeBox height="20" />
    <AiLab>
      <main class="w-full">
        <router-view />
      </main>
    </AiLab>
    <Footer />
  </div>
</template>

<script setup>
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";
import Menu from "@/components/Menu.vue";
import SizeBox from "./components/SizeBox.vue";
import AiLab from "./components/AiLab.vue";
</script>
