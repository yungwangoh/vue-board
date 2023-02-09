<template>
  <div>
    <h2>About</h2>
    <button class="btn btn-primary" @click="getAboutPage">
      About으로 이동
    </button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const getAboutPage = () => {
  router.push('/about');
};
</script>

<style lang="scss" scoped></style>
