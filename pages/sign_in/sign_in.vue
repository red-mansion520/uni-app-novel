<template>
  <view class="container">
    <view class="title">请选择签到的方式</view>
    <view class="sign-in-options">
      <view class="option" @click="selectOption('poem')">古诗词签到</view>
      <view class="option" @click="selectOption('word')">单词拼写签到</view>
    </view>
    <view v-if="selectedOption" class="sign-in-content">
      <view v-if="selectedOption === 'poem'" class="poem-section">
        <view class="poem-question">请填写古诗词的下句：<br>"{{ poemQuestion }}"</view>
        <input class="poem-answer" v-model="poemAnswer" placeholder="请输入答案" />
      </view>
      <view v-if="selectedOption === 'word'" class="word-section">
        <view class="word-question">请填写单词的缺失字母：<br>"{{ wordQuestion }}"</view>
        <input class="word-answer" v-model="wordAnswer" placeholder="请输入答案" />
      </view>
    </view>
    <view class="sign-in-button" @click="submitAnswer">签到</view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      selectedOption: null, // 当前选择的签到方式
      poemQuestion: "床前明月光", // 示例古诗词问题
      poemAnswer: "", // 用户输入的古诗词答案
      wordQuestion: "w_tch", // 示例单词拼写问题
      wordAnswer: "" // 用户输入的单词拼写答案
    };
  },
  methods: {
    selectOption(option) {
      this.selectedOption = option;
    },
    submitAnswer() {
      let isCorrect = false;
      if (this.selectedOption === 'poem' && this.poemAnswer.trim() === "疑是地上霜") {
        isCorrect = true;
      } else if (this.selectedOption === 'word' && this.wordAnswer.trim() === "a") {
        isCorrect = true;
      }

      if (isCorrect) {
        uni.showToast({
          title: "签到成功！",
          icon: 'success',
          duration: 2000
        });
      } else {
        uni.showToast({
          title: "答案错误，请重试！",
          icon: 'none',
          duration: 2000
        });
      }
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
  height: 100vh;
  padding: 20px;
  background-color: #f0f0f0;
}

/* 标题样式 */
.title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;
}

/* 签到选项样式 */
.sign-in-options {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
}

.option {
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  background: linear-gradient(to right, #007bff, #0056b3);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  text-align: center;
}

.option:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

.option:active {
  transform: translateY(0) scale(0.95);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

/* 签到内容样式 */
.sign-in-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
  max-width: 600px;
}

.poem-section, .word-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.poem-question, .word-question {
  font-size: 18px;
  color: #333;
  text-align: center;
}

.poem-answer, .word-answer {
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  max-width: 400px;
}

/* 签到按钮样式 */
.sign-in-button {
  padding: 15px 30px;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  background: linear-gradient(to right, #ff7e5f, #feb47b);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  text-align: center;
}

.sign-in-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4);
}

.sign-in-button:active {
  transform: translateY(0) scale(0.95);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}
</style>