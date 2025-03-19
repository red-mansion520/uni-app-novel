const request = (options) => {
    return new Promise((resolve, reject) => {
        // 获取本地存储的 Token
        const token = uni.getStorageSync('token');
        const headers = {
            'Content-Type': 'application/x-www-form-urlencoded'
        };
        if (token) {
            headers['Authorization'] = `Bearer ${token}`;
        } else {
            // 如果没有 token，直接返回错误信息
            reject(new Error('请先登录'));
            return;
        }
        uni.request({
            ...options,
            header: headers,
            success: (res) => {
                if (res.statusCode === 401) {
                    uni.showToast({
                        title: '登录失效，请重新登录',
                        icon: 'none'
                    });
                    // 引导用户重新登录
                    // 例如：跳转到登录页面
                    // uni.navigateTo({
                    //     url: '/pages/login/login'
                    // });
                    reject(new Error('登录失效，请重新登录'));
                } else {
                    resolve(res.data);
                }
            },
            fail: (err) => {
                reject(err);
            }
        });
    });
};

export default request;