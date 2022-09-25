<template>
  <div class="my-20 ml-4">
    <div class="text-2xl font-bold">註冊成為實驗夥伴</div>
    <SizeBox height="30" />
    <div class="max-w-fit">
      <div class="bg-gray-100 p-5">
        <div v-for="field in fields" class="my-2">
          <div class="flex">
            <div class="my-auto mr-4 flex w-32 flex-col">
              <div>{{ field.label }}</div>
              <div>{{ field.name }}</div>
            </div>
            <input
              class="w-full rounded-md border border-slate-300 bg-white py-2 pr-3 shadow-sm placeholder:italic placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              type="text"
              :name="field.name"
              v-model="UserData[field.col]"
            />
          </div>
        </div>

        <SizeBox height="10" />
        <div class="flex items-center justify-between">
          <div>
            各種彩妝相關證照皆可上傳 <br />
            <div class="text-sm">
              說明:<br />
              上傳至本實驗室的證明文件<br />
              將作為驗證使用<br />
              並妥善保管<br />
              避免個資外流<br />
            </div>
          </div>
          <SizeBox width="10" />
          <input
            type="file"
            @change="onFileChange_certificate"
            style="width: 300px"
          />
        </div>

        <SizeBox height="10" />
        <div class="flex items-center justify-between">
          <div>
            您的彩妝作品上傳 <br />
            <div class="text-sm">
              說明:<br />
              上傳至本實驗室的作品<br />
              將公開展示為彩妝展示平台<br />
              內容將會呈現在介紹夥伴的頁面<br />
              可多選<br />
            </div>
          </div>
          <SizeBox width="10" />
          <input
            type="file"
            @change="onFileChange_artwork"
            style="width: 300px"
            multiple="multiple"
          />
        </div>

        <SizeBox height="10" />
        <div class="flex items-center justify-between">
          <div>
            封面照片上傳說明<br />
            <div class="text-sm">可用JPG或PNG檔.5MG以下 直式照片</div>
          </div>
          <SizeBox width="10" />
          <input
            type="file"
            @change="onFileChange_image"
            style="width: 300px"
          />
        </div>

        <SizeBox height="10" />
        <div class="flex items-center justify-between">
          <div>
            您的頁面介紹文
            <div class="text-sm">
              1. 作者(或單位)介紹<br />
              2. 作品論述(含作品標題/作品敘述) 字數以200字以內較為容易閱讀<br />
            </div>
          </div>
          <SizeBox width="10" />
        </div>
        <textarea
          class="my-3 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal transition ease-in-out focus:border-blue-600 focus:bg-white focus:outline-none"
          v-model="UserData.description"
        ></textarea>

        <div class="flex justify-end">
          <div
            class="cursor-pointer bg-gray-200 px-4 py-2 text-lg"
            @click="handleCreateProfession"
          >
            註冊
          </div>
        </div>
      </div>
    </div>
    <div class="my-4 text-lg font-bold">專業帳號將獲得專屬頁面</div>
    <div class="max-w-fit border-2 border-black px-2 py-1">
      <div class="mb-2 text-lg">如何成為夥伴關係說明</div>
      <ol class="list-inside list-cjk">
        <li>可以以個人學校 公司或法人註冊一個帳號</li>
        <li>
          上傳個人計畫主持人或負責人之乙級證照或參展作品及書寫研究專業即可註冊
        </li>
        <li>每一個帳號 只能發一張專業級協助實驗證書</li>
        <!-- <li>每一專業 帳號註冊需繳交費用3000元</li> -->
        <li>專業帳號 將獲得該單位 專屬單頁 網頁並能上傳照片</li>
        <li>專業帳號才能去評選相關評鑑 協助校正訊息</li>
      </ol>
    </div>
  </div>
</template>

<script setup>
import SizeBox from "@/components/SizeBox.vue";
import { router } from "@/routes";
import { ref } from "vue";

const artworks = ref({});
const imagePhoto = ref({});
const certificate = ref({});
const UserData = ref({
  title: "",
  name: "",
  email: "",
  phone: "",
  description: "",
});

const fields = [
  {
    label: "團隊名稱",
    name: "Title",
    col: "title",
  },
  {
    label: "負責人",
    name: "Name",
    col: "name",
  },
  {
    label: "連絡電話",
    name: "Tel.",
    col: "phone",
  },
  {
    label: "電郵",
    name: "E-Mail",
    col: "email",
  },
];

const onFileChange_artwork = (e) => {
  artworks.value = e.target.files;
};

const onFileChange_certificate = (e) => {
  certificate.value = e.target.files[0];
};

const onFileChange_image = (e) => {
  imagePhoto.value = e.target.files[0];
};

const upload_image = async (file, profession_id) => {
  const result = await $api.artwork.createArtwork(file, {
    fileName: encodeURIComponent(file.name),
    profession_id,
    "Content-Type": file.type,
  });
  return result;
};

const handleCreateProfession = async () => {
  const professionResult = await $api.profession.createProfession(
    certificate.value,
    {
      title: encodeURIComponent(UserData.value.title),
      name: encodeURIComponent(UserData.value.name),
      email: encodeURIComponent(UserData.value.email),
      phone: encodeURIComponent(UserData.value.phone),
      description: encodeURIComponent(UserData.value.description),
      fileName: encodeURIComponent(certificate.value.name),
      "Content-Type": certificate.value.type,
    }
  );

  const imageResult = await upload_image(
    imagePhoto.value,
    professionResult._id
  );

  const professionModifyResult = await $api.profession.modifyProfession({
    _id: professionResult._id,
    imagePhotoId: imageResult._id,
  });

  Object.keys(artworks.value).forEach(async (key) => {
    await upload_image(artworks.value[key], professionResult._id);
  });

  await $api.user.email({ type: "profession" });

  router.push("/expert");
};
</script>
