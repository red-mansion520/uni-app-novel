<template>
  <view class="container">
    <view class="novel-info">
      <view class="novel-id">小说 ID: {{ novelId }}</view>
      <view v-if="novelDetails">
        <view>小说名称: {{ novelDetails.novel_name }}</view>
        <view>小说分类: {{ novelDetails.novel_sort }}</view>
        <view>上传时间: {{ formattedUploadTime }}</view>
        <view>点赞量:{{novelDetails.likeCount}}</view>
        <view>标签:
          <span v-for="(tag, index) in novelDetails.tags" :key="index" class="tag">
            {{ tag }}
          </span>
        </view>
      </view>
      <!-- 引入组件 -->
      <view class="button-container">
        <template v-if="novelDetails">
          <LikeButton :novel-id="novelId" :novel-details="novelDetails" />
        </template>
        <CommentButton :novel-id="novelId" />
        <AddTagButton :novel-id="novelId" />
        <DownloadButton :novel-id="novelId" />
      </view>
    </view>
  </view>
  <!-- 引入评论框组件 -->
  <CommentBox />
</template>

<script setup>
import { ref, computed } from 'vue';
import { onLoad } from '@dcloudio/uni-app';
import { getNovelDetails } from '../../api/novel_details.js';
import LikeButton from '../../components/LikeButton.vue';
import CommentButton from '../../components/CommentButton.vue';
import AddTagButton from '../../components/AddTagButton.vue';
import DownloadButton from '../../components/DownloadButton.vue';
import CommentBox from '../../components/CommentBox.vue'; // 引入评论框组件

const novelId = ref('');
const novelDetails = ref(null);

// 自定义日期格式化函数
const formatDate = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hour = String(date.getHours()).padStart(2, '0');
  const minute = String(date.getMinutes()).padStart(2, '0');
  const second = String(date.getSeconds()).padStart(2, '0');
  return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
};

const formattedUploadTime = computed(() => {
  if (novelDetails.value && novelDetails.value.upload_time) {
    const date = new Date(novelDetails.value.upload_time);
    return formatDate(date);
  }
  return '';
});

onLoad((options) => {
  if (options.novel_id) {
    novelId.value = options.novel_id;
    getNovelDetails(novelId.value)
     .then((data) => {
        console.log('后端返回的小说详情数据:', data);
        novelDetails.value = data;
      })
     .catch((error) => {
        console.error('获取小说详情失败:', error);
      });
  }
});
</script>

<style>
.container {
  padding: 20px;
}

.novel-info {
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 5px;
}

.novel-id {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}

.button-container {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
}

/* 统一全局按钮样式 */
button {
  padding: 8px 16px;
  border: none;
  background: linear-gradient(to bottom, #66b3ff, #3399ff);
  color: white;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  min-width: 80px;
  height: 36px;
  line-height: 36px;
  box-sizing: border-box;
  font-size: 14px;
  vertical-align: middle;
}

button:hover {
  background: linear-gradient(to bottom, #3399ff, #0073e6);
}

.tag {
  margin-right: 5px;
}
</style>    