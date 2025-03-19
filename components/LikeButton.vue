<template>
  <button @click="handleLike">点赞</button>
</template>

<script setup>
import { ref } from 'vue';
import { likeNovel } from '../api/like.js';

const props = defineProps({
  novelId: {
    type: String,
    required: true
  },
  novelDetails: {
    type: [Object, null],
    required: true
  }
});

const userId = ref(uni.getStorageSync('userId'));

const showErrorToast = (message) => {
  uni.showToast({
    title: message,
    icon: 'none'
  });
};

const handleLike = () => {
  console.log('点赞操作，小说 ID:', props.novelId, '用户 ID:', userId.value);
  likeNovel(props.novelId)
    .then((data) => {
      if (typeof data === 'string' && data.includes('您已经点赞过了')) {
        showErrorToast('您已经点赞过了');
      } else {
        console.log('后端返回的点赞操作结果数据:', data);
        console.log('点赞成功:', props.novelId);
        if (props.novelDetails) {
          props.novelDetails.likeCount++;
        }
      }
    })
    .catch((error) => {
      const errorMessages = {
        '登录失效，请重新登录': '登录失效，请重新登录',
        '请先登录': '请先登录'
      };
      const message = errorMessages[error.message];
      if (message) {
        showErrorToast(message);
      } else {
        console.error('点赞失败:', error);
      }
    });
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