<template>
  <view>
    <button class="common-button" @click="showCommentBox">评论</button>
    <view v-if="isCommentBoxVisible" class="comment-box">
      <textarea v-model="commentContent" placeholder="请输入评论内容"></textarea>
      <view class="comment-buttons">
        <button class="common-button" @click="submitComment">提交</button>
        <button class="common-button" @click="hideCommentBox">取消</button>
      </view>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue';
import { onLoad } from '@dcloudio/uni-app';
import { postComment } from '../api/comment.js';

const props = defineProps({
  novelId: {
    type: String,
    required: true
  }
});

const isCommentBoxVisible = ref(false);
const commentContent = ref('');
const userId = ref(uni.getStorageSync('userId'));

const showErrorToast = (message) => {
  uni.showToast({
    title: message,
    icon: 'none'
  });
};

const showCommentBox = () => {
  const token = uni.getStorageSync('token');
  if (!token) {
    showErrorToast('请先登录');
    return;
  }
  console.log('显示评论框');
  isCommentBoxVisible.value = true;
};

const hideCommentBox = () => {
  console.log('隐藏评论框');
  isCommentBoxVisible.value = false;
  commentContent.value = '';
};

const submitComment = () => {
  if (commentContent.value.trim() === '') {
    showErrorToast('评论内容不能为空');
    return;
  }
  console.log('提交评论，小说 ID:', props.novelId, '评论内容:', commentContent.value);
  postComment(props.novelId, commentContent.value)
    .then((data) => {
      console.log('后端返回的评论操作结果数据:', data);
      uni.showToast({
        title: '评论提交成功',
        icon: 'success'
      });
      hideCommentBox();
    })
    .catch((error) => {
      console.error('评论提交失败:', error);
      showErrorToast('评论提交失败，请稍后重试');
    });
};
</script>

<style scoped>
/* 用 view 替代 div 提高选择器优先级 */
view .common-button {
  padding: 8px 16px;
  border: none;
  background-color: #66b3ff;
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

view .common-button:hover {
  background-color: #0073e6;
}

.comment-box {
  margin-top: 20px;
}

textarea {
  width: 100%;
  height: 100px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
}

.comment-buttons {
  display: flex;
  gap: 10px;
}
</style>    