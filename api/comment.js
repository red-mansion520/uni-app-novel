import request from '../utils/request.js'; // 假设 request.js 是封装的请求工具
import BASE_URL from './config';
// 发送评论的 API 方法
export const postComment = (novelId, comment) => {
    return request({
        url: `${BASE_URL}/api/comment`, // 替换为实际的后端评论接口地址
        method: 'POST',
        data: {
            novelId,
            comment
        }
    });
};    