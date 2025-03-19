<template>
    <view class="registration-container">
        <view class="input-group">
            <label for="username">用户名:</label>
            <input type="text" id="username" v-model="username" placeholder="请输入用户名">
        </view>
        <view class="input-group">
            <label for="password">密码:</label>
            <input type="password" id="password" v-model="password" placeholder="请输入密码">
        </view>
        <view class="input-group">
            <label for="confirmPassword">确认密码:</label>
            <input type="password" id="confirmPassword" v-model="confirmPassword" placeholder="请再次输入密码">
        </view>
        <button @click="register">注册</button>
    </view>
</template>

<script>
import { registerApi } from '../../api/register.js'; // 根据实际路径调整

export default {
    data() {
        return {
            username: '',
            password: '',
            confirmPassword: ''
        };
    },
    methods: {
        async register() {
            if (this.password!== this.confirmPassword) {
                uni.showToast({
                    title: '两次输入的密码不一致，请重新输入！',
                    icon: 'none'
                });
                return;
            }
            try {
                const response = await registerApi(this.username, this.password);
                console.log('注册成功', response);
                uni.showToast({
                    title: '注册成功',
                    icon: 'success'
                });
                // 这里可以添加注册成功后的逻辑，例如跳转到登录页面
                uni.navigateTo({ url: '/pages/login/login' });
            } catch (error) {
                console.error('注册失败', error);
                uni.showToast({
                    title: '注册失败，请稍后重试',
                    icon: 'none'
                });
            }
        }
    }
};
</script>

<style scoped>
.registration-container {
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

button {
    width: 100%;
    padding: 10px;
    background-color: #007aff;
    color: white;
    border: none;
    border-radius: 3px;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}
</style>    