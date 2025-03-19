import { createRouter } from 'uni-simple-router';

const routes = [
    {
        path: '/pages/bookstore/bookstore',
        name: 'Bookstore',
        component: () => import('../pages/bookstore/bookstore.vue')
    },
    {
        path: '/pages/bookshelf/bookshelf',
        name: 'Bookshelf',
        component: () => import('../pages/bookshelf/bookshelf.vue')
    },
    {
        path: '/pages/profile/profile',
        name: 'Profile',
        component: () => import('../pages/profile/profile.vue')
    },
    {
        path: '/pages/upload/upload',
        name: 'Upload',
        component: () => import('../pages/upload/upload.vue')
    },
	{
		path:'/pages/sign_in/sign_in',
		name:'Sign_in',
		component:()=>import('../pages/sign_in/sign_in.vue')
	},
	{
		path:'/pages/novel_details/novel_details',
		name:'Novel_details',
		component:()=>import('../pages/novel_details/novel_details.vue')
	}
];

export default createRouter({
    platform: process.env.VUE_APP_PLATFORM, // 明确指定 platform 参数
    routes
});