<template>
  <div class="mx-4 sm:mx-5 md:mx-7">
    <Header />
    <Menu />
    <main>
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";
import Menu from "@/components/Menu.vue";
</script>
