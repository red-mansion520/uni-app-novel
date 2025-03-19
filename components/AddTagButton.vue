<template>
  <button @click="handleAddTag">添加标签</button>
</template>

<script setup>
import { ref } from 'vue';
import { onLoad } from '@dcloudio/uni-app';
import { addTag } from '../api/add_tag.js';

const novelId = ref('');
const userId = ref(uni.getStorageSync('userId'));

onLoad((options) => {
  if (options.novel_id) {
    novelId.value = options.novel_id;
  }
});

const showErrorToast = (message) => {
  uni.showToast({
    title: message,
    icon: 'none'
  });
};

const handleAddTag = async () => {
  const token = uni.getStorageSync('token');
  if (!token) {
    showErrorToast('请先登录');
    return;
  }

  uni.showModal({
    title: '添加标签',
    content: '请输入要添加的标签',
    editable: true,
    success: async (res) => {
      if (res.confirm) {
        const tag = res.content;
        try {
          const response = await addTag(novelId.value, tag);
          console.log('后端返回的添加标签操作结果数据:', response);
          if (response && typeof response === 'string' && response.includes('标签添加成功')) {
            uni.showToast({
              title: '标签添加成功',
              icon: 'success'
            });
          } else {
            showErrorToast('标签添加失败');
          }
        } catch (error) {
          const errorMessages = {
            '登录失效，请重新登录': '登录失效，请重新登录',
            '请先登录': '请先登录'
          };
          const message = errorMessages[error.message];
          if (message) {
            showErrorToast(message);
          } else {
            console.error('添加标签失败:', error);
            showErrorToast('标签添加失败');
          }
        }
      }
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