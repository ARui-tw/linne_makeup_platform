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
      <a
        :href="getFileUrl('pdf/image_format.pdf')"
        target="_blank"
        class="underline"
        >詳細格式說明</a
      >（點此下載照片格式說明.pdf）
    </div>
    <SizeBox height="30" />
    <div class="flex flex-col md:flex-row">
      <div>
        <div class="max-w-fit bg-gray-200 py-1 pl-1">請上傳素顏照片</div>
        <div class="my-3">素顏 Before</div>
        <div
          style="width: 300px; height: 400px"
          class="flex items-center justify-center bg-gray-300 align-middle"
        >
          <img
            v-if="url_before"
            :src="url_before"
            style="max-width: 100%; max-height: 100%"
          />
        </div>
        <SizeBox height="20" />
        <input type="file" @change="onFileChange_before" style="width: 300px" />
      </div>
      <SizeBox width="50" />
      <div>
        <div class="max-w-fit bg-gray-200 py-1 pl-1">請上傳完妝照片</div>
        <div class="my-3">完妝 After</div>
        <div
          style="width: 300px; height: 400px"
          class="flex items-center justify-center bg-gray-300 align-middle"
        >
          <img
            v-if="url_after"
            :src="url_after"
            style="max-width: 100%; max-height: 100%"
          />
        </div>
        <SizeBox height="20" />
        <input type="file" @change="onFileChange_after" style="width: 300px" />
      </div>
    </div>
    <!-- <SizeBox height="20" /> -->
    <!-- <div class="flex">
      <div class="my-auto mr-2">完妝照片目前評分</div>
      <input
        class="rounded-md border border-slate-300 bg-white py-2 pr-3 shadow-sm placeholder:italic placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
        placeholder="評分"
        type="text"
        name="score"
      />
    </div> -->
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
        <div
          v-for="(keyword, key) in keywords"
          @click="
            selected_keyword == key
              ? (selected_keyword = -1)
              : (selected_keyword = key)
          "
          class="m-2 h-10 w-32 cursor-pointer"
          :class="key == selected_keyword ? 'bg-gray-600' : 'bg-gray-200'"
        >
          <div class="flex h-full w-full justify-center">
            <span class="my-auto"> {{ keyword.name }} </span>
          </div>
        </div>
      </div>
    </div>
    <SizeBox height="20" />
    <div class="text-xl">完妝關鍵字的範例照片</div>
    <SizeBox height="20" />
    <div class="flex">
      <div
        class="mr-2 grid w-36"
        v-for="keywordPhoto in keywordPhotos[selected_keyword]"
      >
        <div
          style="width: 144px; height: 144px"
          class="flex items-center justify-center bg-gray-300 align-middle"
        >
          <img
            :src="`${$baseURL}${keywordPhoto.url}`"
            style="max-width: 100%; max-height: 100%"
          />
        </div>
      </div>
    </div>
    <SizeBox height="20" />
    <div class="flex">
      <div class="my-auto mr-2">或者自行定義關鍵字</div>
      <input
        class="rounded-md border border-slate-300 bg-white py-2 pr-3 shadow-sm placeholder:italic placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
        placeholder="關鍵字"
        type="text"
        v-model="customize_keyword"
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
    <div class="flex justify-center">
      <div
        class="cursor-pointer bg-gray-200 px-4 py-2 text-lg"
        @click="handleUpload"
      >
        確認上傳
      </div>
    </div>
    <SizeBox height="30" />
  </div>
</template>

<script setup>
import SizeBox from "@/components/SizeBox.vue";
import { router } from "@/routes";
import { ref } from "vue";

const url_before = ref();
const url_after = ref();
let file_before, file_after;
const selected_keyword = ref(-1);
const customize_keyword = ref("");
const keywords = ref([]);
const keywordPhotos = ref([]);

const getKeywords = async () => {
  const result = await $api.keyword.getKeywords();
  keywords.value = result.data;
};

const getKeywordPhoto = async () => {
  keywords.value.forEach(async (keyword, index) => {
    const result = await $api.keywordPhoto.getKeywordPhotos({
      filter: { keyword_id: keyword._id },
    });
    keywordPhotos.value[index] = result.data;
  });
};

const getData = async () => {
  await getKeywords();
  await getKeywordPhoto();
};

getData();

const getFileUrl = (name) => {
  return new URL(`../../assets/${name}`, import.meta.url).href;
};

// FIXME: must have a better way to do this
const onFileChange_before = async (e) => {
  file_before = e.target.files[0];
  url_before.value = URL.createObjectURL(file_before);
};

const onFileChange_after = (e) => {
  file_after = e.target.files[0];
  url_after.value = URL.createObjectURL(file_after);
};

const upload_photo = async (
  file,
  photo_type,
  keyword_id,
  customize_keyword = ""
) => {
  await $api.photo.createPhoto(file, {
    fileName: encodeURIComponent(file.name),
    photo_type: photo_type,
    keyword_id: keyword_id,
    customize_keyword: encodeURIComponent(customize_keyword),
    "Content-Type": file.type,
  });
};

const handleUpload = async () => {
  if (!file_before || !file_after) {
    alert("請上傳照片");
    return;
  }
  if (selected_keyword.value === -1 && !customize_keyword.value) {
    alert("請選擇或自行定義關鍵字");
    return;
  }
  if (selected_keyword.value !== -1 && customize_keyword.value) {
    alert("請選擇或自行定義關鍵字");
    return;
  }
  try {
    let keyword_id;
    if (selected_keyword.value === -1) {
      keyword_id = null;
    } else {
      keyword_id = keywords.value[selected_keyword.value]._id;
    }
    await upload_photo(
      file_before,
      "before",
      keyword_id,
      encodeURIComponent(customize_keyword.value)
    );
    await upload_photo(
      file_after,
      "after",
      keyword_id,
      encodeURIComponent(customize_keyword.value)
    );
    alert("success");
    router.push("/makeupPhotos");
  } catch (error) {
    alert("上傳失敗");
    console.log(error);
  }
};
</script>
