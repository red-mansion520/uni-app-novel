<template>
  <view class="container">
    <view class="more-icon" @click="showActionSheet">
      <uni-icons type="bars" size="20" color="#666"></uni-icons>
    </view>
    <!-- 用户信息区域 -->
    <view class="user-info">
      <view class="avatar">
        <image src="https://example.com/avatar.jpg" class="avatar-image"></image>
      </view>
      <view class="username-wrapper">
        <view class="username">用户名</view>
      </view>
    </view>

    <!-- 功能入口区域 -->
    <view class="function-section">
      <view class="function-item" @click="goToPage('points')">
        <uni-icons type="star-filled" size="24" color="#ffcc00"></uni-icons>
        <text>积分</text>
      </view>
      <view class="function-item" @click="goToPage('downloads')">
        <uni-icons type="download-filled" size="24" color="#007aff"></uni-icons>
        <text>下载</text>
      </view>
      <view class="function-item" @click="goToPage('collections')">
        <uni-icons type="star-filled" size="24" color="#ff5500"></uni-icons>
        <text>收藏</text>
      </view>
      <view class="function-item" @click="goToPage('settings')">
        <uni-icons type="gear-filled" size="24" color="#ff5500"></uni-icons>
        <text>设置</text>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    goToPage(page) {
      switch (page) {
        case 'points':
          uni.navigateTo({ url: '/pages/points/points' });
          break;
        case 'downloads':
          uni.navigateTo({ url: '/pages/downloads/downloads' });
          break;
        case 'collections':
          uni.navigateTo({ url: '/pages/collections/collections' });
          break;
        case 'settings':
          uni.navigateTo({ url: '/pages/settings/settings' });
          break;
        default:
          uni.showToast({ title: '功能暂未开放', icon: 'none' });
      }
    },
    showActionSheet() {
      uni.showActionSheet({
        itemList: ['登录', '退出登录'],
        success: function (res) {
          if (!res.cancel) {
            if (res.tapIndex === 0) {
              // 处理登录逻辑，跳转到登录页面
              uni.navigateTo({ url: '/pages/login/login' });
            } else if (res.tapIndex === 1) {
              // 处理退出登录逻辑
              // 清空本地存储中的 token
              uni.removeStorageSync('token');
              console.log('已退出登录');
              // 跳转到登录页面
              uni.reLaunch({ url: '/pages/profile/profile' });
            }
          }
        },
        fail: function (err) {
          console.log('操作菜单显示失败', err);
        }
      });
    }
  }
};
</script>

<style>
/* 页面容器样式 */
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  padding: 20px;
  background-color: #f0f0f0;
}

/* 用户信息区域样式 */
.user-info {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
  width: 100%;
  position: relative;
  margin-top: 30px;
}

.avatar {
  width: 60px; /* 减小头像尺寸 */
  height: 60px;
  border-radius: 30px;
  overflow: hidden;
  border: 4px solid #4ffcc00; /* 添加头像框的边框 */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* 添加阴影效果 */
}

.avatar-image {
  width: 100%;
  height: 100%;
}

.username-wrapper {
  flex-grow: 1;
  display: flex;
  justify-content: center;
}

.username {
  font-size: 20px;
  font-weight: bold;
  color: #333;
}

.more-icon {
  position: absolute;
  top: 10px;
  right: 10px;
  margin-top: 50rpx;
  margin-right: 10rpx;
}

/* 功能入口区域样式 */
.function-section {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.function-item {
  display: flex;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid #ddd;
}

.function-item text {
  font-size: 16px;
  color: #333;
  margin-left: 10px;
}
</style>