import BASE_URL from './config';
export const loginApi = (username, password) => {
    return new Promise((resolve, reject) => {
        uni.request({
            url: `${BASE_URL}/api/login`,
            method: 'POST',
            data: {
                username,
                password
            },
            header: {
                'Content-Type': 'application/x-www-form-urlencoded' // 确保使用表单编码格式
            },
            success: (res) => {
                resolve(res);
            },
            fail: (err) => {
                reject(err);
            }
        });
    });
};    