<template>
  <div class="my-20 ml-4">
    <div class="text-2xl font-bold">{{ user.title }}</div>
    <div class="whitespace-pre-wrap">
      {{ profession.description }}
    </div>

    <div v-for="image in artworks" class="my-4">
      <img :src="`${$baseURL}${image.artwork_url}`" />
    </div>
    <div class="mt-3 mr-4 max-w-4xl"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { router } from "@/routes";

const profession = ref({});
const user = ref({});
const artworks = ref([]);

onMounted(async () => {
  const result = await $api.profession.getProfession({
    _id: router.currentRoute.value.params._id,
  });
  const user_result = await $api.user.getUser({
    _id: result.user_id,
  });
  const artworks_result = await $api.artwork.getArtworks({
    filter: { profession_id: result._id },
  });

  profession.value = result;
  user.value = user_result;
  artworks.value = artworks_result.data;
});

// getProfession();
</script>
