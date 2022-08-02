<template>
  <div class="md:ml-20">
    <div class="mt-20 text-3xl">上傳照片</div>
    <SizeBox height="30" />
    <div>
      本實驗的機器正在接受你的訓練 <br />
      需要量測同一位模特兒 <br />
      經過彩妝後會有多少差異?<br />
      並藉此產生彩妝評量分數
      <br /><br />
      目前電腦反饋的分數僅供參考<br />
      照片上傳之後即會產生分數也是訓練的一部分！<br />
      外部提供資料數量越多<br />
      分數的準確度會提高<br />
      請大家多多上傳<br />
      訓練機器變聰明喔！<br />
      <br />
      照片請用JPG或PNG檔 5MB 以下直式照片
      <a href="https://www.google.com" class="underline">詳細格式說明</a
      >（點此下載照片格式說明.pdf）
    </div>
    <SizeBox height="30" />
    <div class="flex">
      <div>
        <div class="bg-gray-200 py-1 pl-1" @click="upload()">
          請上傳素顏照片
        </div>
        <div class="my-3">素顏 Before</div>
        <SizeBox width="300" height="400" class="bg-black" />
      </div>
      <SizeBox width="50" />
      <div>
        <div class="bg-gray-200 py-1 pl-1">請上傳完妝照片</div>
        <div class="my-3">完妝 After</div>
        <SizeBox width="300" height="400" class="bg-black" />
      </div>
    </div>
    <SizeBox height="20" />
    <div class="flex">
      <div class="my-auto mr-2">完妝照片目前評分</div>
      <input
        class="rounded-md border border-slate-300 bg-white py-2 pr-3 shadow-sm placeholder:italic placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
        placeholder="評分"
        type="text"
        name="score"
      />
    </div>
    <SizeBox height="50" />
    <div class="text-xl">為您的完妝照片定義彩妝關鍵字</div>
    <SizeBox height="20" />
    <div>
      伴隨深度學習本實驗希望加入關鍵字向度，將能拓展研究及定義彩妝 <br />
      假若選項中沒有您心中可以選擇的關鍵字,請於下方輸入您自行定義的關鍵字
    </div>
    <SizeBox height="20" />
    <div class="flex">
      <div class="my-auto w-24 shrink-0">彩妝關鍵字</div>
      <div class="flex flex-wrap">
        <div v-for="keyword in keywords" class="m-2 h-10 w-32 bg-gray-200">
          <div class="flex h-full w-full justify-center">
            <span class="my-auto">
              {{ keyword }}
            </span>
          </div>
        </div>
      </div>
    </div>
    <SizeBox height="20" />
    <div class="text-xl">完妝關鍵字的範例照片</div>
    <SizeBox height="20" />
    <div class="flex">
      <SizeBox width="150" height="200" class="mx-3 bg-black" />
      <SizeBox width="150" height="200" class="mx-3 bg-black" />
      <SizeBox width="150" height="200" class="mx-3 bg-black" />
      <SizeBox width="150" height="200" class="mx-3 bg-black" />
    </div>
    <SizeBox height="20" />
    <div class="flex">
      <div class="my-auto mr-2">或者自行定義關鍵字</div>
      <input
        class="rounded-md border border-slate-300 bg-white py-2 pr-3 shadow-sm placeholder:italic placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
        placeholder="關鍵字"
        type="text"
        name="keyword"
      />
    </div>
    <SizeBox height="20" />
    <div class="text-xl">證書申請</div>
    <SizeBox height="10" />
    <div>
      同一個帳號可以申請一張證書<br />
      每組帳號上傳100組合格彩妝的照片<br />
      同一位模特兒可採用照片 上限為20組彩妝<br />
    </div>
    <SizeBox height="30" />
    <div class="flex justify-end">
      <router-link
        to="/makeupPhotos/certificate"
        class="bg-gray-200 px-4 py-2 text-lg"
        >確認上傳</router-link
      >
    </div>
    <SizeBox height="30" />
  </div>
</template>

<script setup>
import SizeBox from "@/components/SizeBox.vue";

const keywords = [
  "大舞台妝",
  "小舞台妝",
  "日莊",
  "晚宴妝",
  "上班妝",
  "新娘妝",
  "宴會妝",
];

const upload = () => {
  console.assert("uploaded");
};
</script>
