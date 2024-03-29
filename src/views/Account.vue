<template>
  <div class="my-32 mx-auto flex items-center justify-center">
    <div
      class="flex flex-col-reverse bg-black-300 py-10 px-16 text-white md:flex-row lg:py-20 lg:px-32"
    >
      <div>
        <div class="flex justify-between">
          <div class="min-w-fit text-lg font-bold">個人帳號</div>
          <div class="flex min-w-fit flex-row justify-between text-black">
            <div
              @click="handleEditEnable"
              class="cursor-pointer bg-gray-50 px-2 py-1 text-sm"
            >
              {{ editEnable ? "取消修改" : "修改資料" }}
            </div>
          </div>
        </div>
        <div>
          <div v-for="field in fields" class="my-2">
            <div class="flex">
              <div class="my-auto mr-4 flex w-24 flex-col">
                <div>{{ field.label }}</div>
                <div>{{ field.name }}</div>
              </div>
              <input
                class="w-full rounded-md border border-slate-300 bg-white py-2 pr-3 text-black shadow-sm placeholder:italic placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                type="text"
                :name="field.name"
                v-model="userData[field.col]"
                :disabled="!editEnable"
              />
            </div>
          </div>
          <div class="flex justify-between">
            <div class="flex min-w-fit flex-row justify-between text-black">
              <div
                @click="handleLogout"
                class="cursor-pointer bg-gray-50 px-2 py-1 text-sm"
              >
                登出
              </div>
            </div>
            <div
              v-show="editEnable"
              class="flex min-w-fit flex-row justify-between text-black"
            >
              <div
                @click="handleEdit"
                class="cursor-pointer bg-gray-50 px-2 py-1 text-sm"
              >
                送出
              </div>
            </div>
          </div>
        </div>
      </div>
      <SizeBox width="50" height="30" />
      <div class="min-w-fit">
        <div class="text-lg font-bold">個人相簿區/可提供化妝歷程回顧</div>
        <div
          class="grid grid-cols-2 gap-1 lg:grid-cols-3 lg:gap-2"
          :style="breakpoints.lg ? { height: '294px' } : {}"
        >
          <div v-for="photo in photos" class="my-1">
            <div
              style="width: 100px; height: 135px"
              class="flex items-center justify-center bg-gray-300 align-middle"
            >
              <img
                :src="`${$baseURL}${photo.url}`"
                style="width: 100px; max-width: 100%; max-height: 100%"
              />
            </div>
          </div>
        </div>
        <SizeBox height="10" />
        <div class="flex justify-between">
          <div class="flex w-full text-black">
            <div
              @click="handleNext"
              v-show="totalPhotos > offset + 6"
              class="cursor-pointer bg-gray-50 px-2 py-1 text-sm"
            >
              下一頁
            </div>
          </div>
          <div class="flex min-w-fit text-black">
            <router-link
              class="cursor-pointer bg-gray-50 px-2 py-1 text-sm"
              to="/MakeupPhotos/Certificate"
            >
              申請證書
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { router } from "@/routes";
import { ref } from "vue";
import SizeBox from "@/components/SizeBox.vue";
import useBreakpoint from "@/plugins/breakpoints";

const breakpoints = useBreakpoint();

const fields = [
  {
    label: "姓名",
    name: "name",
    col: "name",
  },
  {
    label: "聯絡電話",
    name: "Tel.",
    col: "phone",
  },
  {
    label: "電郵地址",
    name: "E-Mail",
    col: "email",
  },
  {
    label: "郵寄地址",
    name: "Add.",
    col: "post_address",
  },
  {
    label: "稱謂",
    name: "Title",
    col: "title",
  },
];

const userData = ref([]);
const photos = ref([]);
const totalPhotos = ref(0);
const offset = ref(0);
const editEnable = ref(false);

const getUserData = async () => {
  userData.value = await $api.user.getCurrentUser();
};

const getUserPhotos = async () => {
  const photos_result = await $api.photo.getPhotos({
    filter: { provided_user: userData.value._id },
    limit: 6,
  });
  photos.value = photos_result.data;
  totalPhotos.value = photos_result.total;
};

const getData = async () => {
  await getUserData();
  await getUserPhotos();
};

getData();

const handleNext = async () => {
  offset.value += 6;
  const photos_result = await $api.photo.getPhotos({
    filter: { provided_user: userData.value._id },
    limit: 6,
    skip: offset.value,
  });
  photos.value = photos_result.data;
};

const handleEditEnable = async () => {
  if (editEnable.value) {
    await getUserData();
  }
  editEnable.value = !editEnable.value;
};

const handleEdit = async () => {
  const modifyData = {
    name: userData.value.name,
    phone: userData.value.phone,
    email: userData.value.email,
    post_address: userData.value.post_address,
    title: userData.value.title,
  };

  if (userData.value.name === "") {
    alert("請輸入姓名");
    return;
  }

  const emailValidate =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (emailValidate.test(userData.value.email)) {
    await $api.user.modifyCurrentUser(modifyData);
    await getUserData();
    editEnable.value = false;
  } else {
    alert("請輸入正確的電郵地址");
  }
};

const handleLogout = async () => {
  await $cookies.remove("token");
  await $cookies.remove("user_id");
  await $cookies.remove("user_name");
  router.go("/");
};
</script>
