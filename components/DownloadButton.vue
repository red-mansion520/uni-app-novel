<template>
  <button @click="handleDownload">下载</button>
</template>

<script setup>
import { ref } from 'vue';
import { onLoad } from '@dcloudio/uni-app';

const novelId = ref('');
const userId = ref(uni.getStorageSync('userId'));

onLoad((options) => {
  if (options.novel_id) {
    novelId.value = options.novel_id;
  }
});

const handleDownload = () => {
  console.log('下载操作，小说 ID:', novelId.value, '用户 ID:', userId.value);
};
</script>

<style scoped>
button {
  padding: 8px 16px;
  border: none;
  background: linear-gradient(to bottom, #66b3ff, #3399ff);
  color: white;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  min-width: 80px;
}

button:hover {
  background: linear-gradient(to bottom, #3399ff, #0073e6);
}
</style>    