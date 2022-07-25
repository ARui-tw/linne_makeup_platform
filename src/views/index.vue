<template>
  <div class="mt-5">
    <div class="max-h-72 w-full justify-center overflow-hidden">
      <img src="@/assets/img/index_img.svg" alt="" class="w-full" />
    </div>
    <SizeBox height="20" />
    <div
      class="-ml-3 flex w-full flex-row bg-local bg-left-top bg-no-repeat"
      style="background-image: url(src/assets/img/AI_Lab.svg)"
    >
      <SizeBox width="290" class="shrink-0" />
      <div
        class="my-24 grid w-full grid-flow-row grid-cols-2 justify-between gap-4"
      >
        <div v-for="menuItem in menuItems">
          <div class="ml-5">
            <div class="relative">
              <div class="flex justify-center">
                <!-- FIXME: animate will flash and the code is dirty.   -->
                <router-link
                  :to="menuItem.path"
                  @mouseenter="menuItem.hover = true"
                  @mouseleave="menuItem.hover = false"
                >
                  <img
                    :src="`src/assets/img/circles/${menuItem.svgName}.svg`"
                  />
                </router-link>
              </div>
              <router-link
                :to="menuItem.path"
                @mouseenter="menuItem.hover = true"
                @mouseleave="menuItem.hover = false"
              >
                <div
                  class="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 text-start text-brown-400"
                >
                  {{ menuItem.name }}
                  <br />
                  {{ menuItem.englishName }}
                </div>
              </router-link>
              <router-link
                :to="menuItem.path"
                @mouseenter="menuItem.hover = true"
                @mouseleave="menuItem.hover = false"
              >
                <transition>
                  <div
                    v-show="menuItem.hover"
                    class="absolute left-1/2 bottom-0 -translate-y-1/2 -translate-x-1/2 whitespace-nowrap text-start text-sm text-brown-400"
                  >
                    <span class="font-bold">
                      Welcome to Linné Makeup Laboratory
                    </span>
                    <br />
                    <div v-html="menuItem.explainText"></div>
                  </div>
                </transition>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import SizeBox from "@/components/SizeBox.vue";

const menuItems = ref([
  {
    name: "關於我們",
    englishName: "About us",
    path: "/about",
    hover: false,
    explainText:
      " 一抹微笑需要多少個曲線？ <br /> 這個實驗室將探索更多關於美的秘密 ",
    svgName: "about",
  },
  {
    name: "彩妝上傳",
    englishName: "Makeup photos",
    path: "/makeupPhotos",
    hover: false,
    explainText:
      "您的彩妝作品將成為我們探巡的線索 藝術與科學之間的鏈結 <br /> 起始於一筆一筆的堆疊 妝與美間的意境",
    svgName: "photos",
  },
  {
    name: "專業評分",
    englishName: "Makeup score",
    path: "/makeupScore",
    hover: false,
    explainText:
      "實驗成敗的關鍵來自每一個專注完美的眼光 <br /> 評鑑是一種反饋，表達從起初到未來的經驗 以及對美的沉思",
    svgName: "score",
  },
  {
    name: "夥伴團隊",
    englishName: "Expert area",
    path: "/expert",
    hover: false,
    explainText:
      "懷抱自遠古以來 人類對美的嚮往 <br/> 探索各樣的可能性 開創一個新的美好",
    svgName: "expert",
  },
  {
    name: "彩妝論述",
    englishName: "Makeup Papers",
    path: "/makeupPapers",
    hover: false,
    explainText: "以大數據做應用美學證據 探索未來彩妝",
    svgName: "papers",
  },
  {
    name: "特殊榮譽",
    englishName: "Awards",
    path: "/awards",
    hover: false,
    explainText: "忘記背後 努力向前 向著標竿直跑",
    svgName: "awards",
  },
]);
</script>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
