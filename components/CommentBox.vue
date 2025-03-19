<template>
  <view class="comment-box">
    <view v-for="(comment, index) in comments" :key="index">
      <view>用户名: {{ comment.username }}</view>
      <view>评论内容: {{ comment.comment }}</view>
      <view>评论时间: {{ comment.commentTime }}</view>
    </view>
  </view>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { getNovelDetails } from '../api/novel_details.js';
import { onLoad } from '@dcloudio/uni-app';

const comments = ref([]);
const novelId = ref('');

onLoad((options) => {
  if (options.novel_id) {
    novelId.value = options.novel_id;
  }
});

onMounted(() => {
  if (novelId.value) {
    getNovelDetails(novelId.value)
     .then((data) => {
        if (data && data.comments) {
          comments.value = data.comments;
        }
      })
     .catch((error) => {
        console.error('获取评论数据失败:', error);
      });
  }
});
</script>

<style scoped>
.comment-box {
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 5px;
  margin-top: 20px;
}
</style>    