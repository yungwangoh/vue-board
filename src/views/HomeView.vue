<template>
  <div>
    <h2>Home</h2>
    <button class="btn btn-primary" @click="$router.push('/')">
      Home으로 이동
    </button>
  </div>
  <hr class="my-4" />
  <AppGrid :items="items" v-slot="{ item }" col="col-3">
    <AppCard>{{ item }}</AppCard>
  </AppGrid>
  <hr class="my-4" />
</template>

<script>
export default {
  created() {
    // console.log(this.$person);
    // this.$person.say();
  },
};
</script>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
console.log('route.path: ', route.path);

const items = ref(['사과', '딸기', '바나나', '포도']);
</script>

<style lang="scss" scoped></style>
