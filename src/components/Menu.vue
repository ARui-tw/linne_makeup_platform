<template>
  <div
    class="mt-5 flex flex-col items-center justify-between md:mt-10 md:flex-row"
  >
    <div v-for="menuItem in menuItems">
      <router-link
        :to="menuItem.path"
        class="mb-2 flex flex-col items-center text-xs md:mb-0 md:items-start md:text-base"
      >
        <div class="text-gray-700">
          {{ menuItem.englishName }}
        </div>
        <div class="text-black-100">
          {{ menuItem.name }}
        </div>
      </router-link>
    </div>
  </div>

  <!-- FIXME: maybe a better version on phone is to use a dropdown menu. -->
  <!-- <Menu>
    <MenuButton :class="['block', 'md:hidden']">Menu</MenuButton>
    <MenuItems>
      <MenuItem v-slot="{ active }">
        <a :class="{ 'bg-blue-500': active }" href="/account-settings">
          Account settings
        </a>
      </MenuItem>
      <MenuItem v-slot="{ active }">
        <a :class="{ 'bg-blue-500': active }" href="/account-settings">
          Documentation
        </a>
      </MenuItem>
      <MenuItem disabled>
        <span class="opacity-75">Invite a friend (coming soon!)</span>
      </MenuItem>
    </MenuItems>
  </Menu> -->
</template>

<script setup>
// import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
const menuItems = [
  {
    name: "首頁故事",
    englishName: "Home",
    path: "/home",
  },
  {
    name: "關於我們",
    englishName: "About us",
    path: "/about",
  },
  {
    name: "彩妝上傳",
    englishName: "Makeup photos",
    path: "/makeupPhotos",
  },
  {
    name: "絕對評分",
    englishName: "Absolute score",
    path: "/makeupScore/absolute",
  },
  {
    name: "相對評分",
    englishName: "Relative score",
    path: "/makeupScore/relative",
  },
  {
    name: "夥伴團隊",
    englishName: "Expert area",
    path: "/expert",
  },
  {
    name: "彩妝論述",
    englishName: "Makeup Papers",
    path: "/makeupPapers",
  },
  // {
  //   name: "特殊榮譽",
  //   englishName: "Awards",
  //   path: "/awards",
  // },
];
</script>
