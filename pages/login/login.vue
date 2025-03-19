<template>
    <view class="login-container">
        <view class="input-group">
            <label for="username">用户名:</label>
            <input type="text" id="username" v-model="username" placeholder="请输入用户名">
        </view>
        <view class="input-group">
            <label for="password">密码:</label>
            <input type="password" id="password" v-model="password" placeholder="请输入密码">
        </view>
        <view class="button-group">
            <button @click="login">登录</button>
            <button @click="register">注册</button>
        </view>
    </view>
</template>

<script>
import { loginApi } from '../../api/login.js'; // 根据实际路径调整

export default {
    data() {
        return {
            username: '',
            password: ''
        };
    },
    methods: {
        async login() {
            try {
                const response = await loginApi(this.username, this.password);
                if (response.statusCode === 200) {
                    console.log('登录成功', response);
                    // 保存 Token 到本地存储
                    uni.setStorageSync('token', response.data);
                    // 跳转到主页
                    uni.switchTab({
                        url: '/pages/profile/profile' // 根据实际路径调整
                    });
                } else {
                    throw new Error('用户名或密码错误');
                }
            } catch (error) {
                console.error('登录失败', error);
                // 这里可以添加登录失败后的提示逻辑
                uni.showToast({
                    title: '登录失败，请检查用户名和密码',
                    icon: 'none'
                });
            }
        },
        register() {
            // 这里可以添加注册逻辑，例如跳转到注册页面
            console.log('点击了注册按钮');
            uni.navigateTo({ url: '/pages/register/register' });
        }
    }
};
</script>

<style scoped>
.login-container {
    padding: 20px;
}

.input-group {
    margin-bottom: 15px;
}

.input-group label {
    display: block;
    margin-bottom: 5px;
}

.input-group input {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 3px;
}

.button-group {
    display: flex;
    justify-content: space-between;
}

.button-group button {
    width: 48%;
    padding: 10px;
    background-color: #007aff;
    color: white;
    border: none;
    border-radius: 3px;
    cursor: pointer;
}

.button-group button:hover {
    background-color: #0056b3;
}
</style>    