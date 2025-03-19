import BASE_URL from './config';
// api/register.js
export const registerApi = (username, password) => {
    return new Promise((resolve, reject) => {
        uni.request({
            url: `${BASE_URL}/api/register`, // 请替换为实际的后端注册接口地址
            method: 'POST',
            data: {
                username,
                password
            },
            success: (res) => {
                resolve(res.data);
            },
            fail: (err) => {
                reject(err);
            }
        });
    });
};    