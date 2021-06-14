import { createWebHistory, createRouter } from 'vue-router';
import Main from '@/views/Main.vue';
import About from '@/views/About.vue';
import Catalog from '@/views/Catalog.vue';
import DetailPage from '@/views/DetailPage.vue';
import Gallery from '@/views/Gallery.vue';

const routes = [
    {
        path: '/main',
        name: 'Main',
        component: Main,
    },
    {
        path: '/about',
        name: 'About',
        component: About,
    },
    {
        path: '/catalog',
        name: 'Catalog',
        component: Catalog,
    },
    {
        path: `/detailpage/:id`,
        name: 'DetailPage',
        props: true,
        component: DetailPage,
    },
    {
        path: '/gallery',
        name: 'Gallery',
        component: Gallery,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
