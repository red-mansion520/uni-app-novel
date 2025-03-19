<template>
  <view class="container">
    <!-- 上传小说文件区域 -->
    <view class="form-item">
      <text class="label">选择文件</text>
      <button class="file-button" @click="chooseFile">选取文件</button>
      <text class="file-tip">只能上传txt/epub/pdf文件，且不超过10MB</text>
    </view>

    <!-- 小说类型选择器 -->
    <view class="form-item">
      <text class="label">小说类型</text>
      <picker class="type-picker" :range="categories" @change="onCategoryChange">
        <view class="type-placeholder">
          {{ selectedCategory || '请选择小说类型' }}
        </view>
      </picker>
    </view>

    <!-- 上传按钮 -->
    <view class="upload-button">
      <button class="upload-btn" @click="upload">上传</button>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      novelFilePath: null, // 小说文件路径
      selectedCategory: null, // 选中的小说类型
      categories: ['玄幻', '武侠', '都市', '言情', '科幻', '历史', '悬疑', '穿越', '重生', '灵异', '游戏', '竞技', '轻小说', '其他'], // 小说类型列表
    };
  },
  methods: {
    // 选择小说文件
    chooseFile() {
      const _this = this;
      if (uni.getSystemInfoSync().platform === 'android') {
        const Intent = plus.android.importClass('android.content.Intent');
        const File = plus.android.importClass('java.io.File');
        const uri = plus.android.importClass('android.net.Uri');
        const intent = new Intent(Intent.ACTION_GET_CONTENT);
        intent.setType('*/*');
        intent.putExtra(Intent.EXTRA_ALLOW_MULTIPLE, false);
        plus.android.ready(function () {
          const main = plus.android.runtimeMainActivity();
          main.startActivityForResult(intent, 1000);
          plus.android.overrideBackPress(function () {});
          plus.android.onActivityResult = function (requestCode, resultCode, data) {
            if (requestCode === 1000 && resultCode === plus.android.RESULT_OK) {
              const uriData = data.getData();
              const realPath = _this.getRealPathFromURI(uriData);
              const file = new File(realPath);
              const size = file.length();
              const fileExt = file.getName().split('.').pop().toLowerCase();
              if (size > 10 * 1024 * 1024) {
                uni.showToast({
                  title: '文件大小不能超过10MB',
                  icon: 'none',
                  duration: 2000
                });
                return;
              }
              if (!['txt', 'epub', 'pdf'].includes(fileExt)) {
                uni.showToast({
                  title: '只能上传txt/epub/pdf文件',
                  icon: 'none',
                  duration: 2000
                });
                return;
              }
              _this.novelFilePath = realPath;
              uni.showToast({
                title: '文件选择成功',
                icon:'success',
                duration: 2000
              });
            }
          };
        });
      } else {
        uni.chooseFile({
          count: 1,
          type: 'file',
          success: (res) => {
            if (res.tempFiles[0].size > 10 * 1024 * 1024) {
              uni.showToast({
                title: '文件大小不能超过10MB',
                icon: 'none',
                duration: 2000
              });
              return;
            }
            const fileExt = res.tempFiles[0].name.split('.').pop().toLowerCase();
            if (!['txt', 'epub', 'pdf'].includes(fileExt)) {
              uni.showToast({
                title: '只能上传txt/epub/pdf文件',
                icon: 'none',
                duration: 2000
              });
              return;
            }
            _this.novelFilePath = res.tempFiles[0].path; // 保存文件路径
            uni.showToast({
              title: '文件选择成功',
              icon:'success',
              duration: 2000
            });
          },
          fail: (err) => {
            console.error('选择文件失败', err);
            uni.showToast({
              title: '选择文件失败',
              icon: 'none',
              duration: 2000
            });
          }
        });
      }
    },

    // 获取文件真实路径
    getRealPathFromURI(uri) {
      const context = plus.android.runtimeMainActivity();
      const ContentResolver = plus.android.importClass('android.content.ContentResolver');
      const cursor = context.getContentResolver().query(uri, null, null, null, null);
      if (cursor!= null && cursor.moveToFirst()) {
        const column_index = cursor.getColumnIndexOrThrow(android.provider.MediaStore.Images.Media.DATA);
        const realPath = cursor.getString(column_index);
        cursor.close();
        return realPath;
      }
      return null;
    },

    // 小说类型选择
    onCategoryChange(e) {
      this.selectedCategory = this.categories[e.detail.value];
    },

    // 上传小说
    upload() {
      if (!this.novelFilePath) {
        uni.showToast({
          title: '请先选择小说文件',
          icon: 'none',
          duration: 2000
        });
        return;
      }

      if (!this.selectedCategory) {
        uni.showToast({
          title: '请选择小说类型',
          icon: 'none',
          duration: 2000
        });
        return;
      }

      // 引入插件
      const fileUploadModule = uni.requireNativePlugin('FileUploadModule');
      const url = 'your_upload_api_url'; // 替换为实际的上传接口地址
      fileUploadModule.uploadFile(this.novelFilePath, url, (res) => {
        if (res.success) {
          uni.showToast({
            title: '上传成功',
            icon:'success',
            duration: 2000
          });
        } else {
          console.error('上传失败：', res.message);
          uni.showToast({
            title: '上传失败',
            icon: 'none',
            duration: 2000
          });
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
  justify-content: center;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}

/* 表单项样式 */
.form-item {
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
}

/* 标签样式 */
.label {
  font-size: 14px;
  color: #666;
  margin-bottom: 8px;
}

/* 小说类型选择器样式 */
.type-picker {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  box-sizing: border-box;
}

.type-placeholder {
  color: #999;
}

/* 上传按钮样式 */
.upload-button {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.upload-btn {
  width: 120px;
  padding: 10px 0;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
}

.file-button {
  padding: 8px 20px;
  background-color: #4285f4;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  align-self: flex-start;
}

.file-tip {
  font-size: 12px;
  color: #999;
  margin-top: 8px;
}
</style>