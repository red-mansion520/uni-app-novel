import BASE_URL from './config';
export const uploadNovel = (filePath, category) => {
    return new Promise((resolve, reject) => {
        uni.uploadFile({
            url: `${BASE_URL}/api/upload`,
            filePath: filePath,
            name: 'novelFile',
            formData: {
                category: category
            },
            success: (res) => {
                if (res.statusCode === 200) {
                    resolve(res);
                } else {
                    reject(new Error('上传失败，状态码：' + res.statusCode));
                }
            },
            fail: (err) => {
                reject(err);
            }
        });
    });
};