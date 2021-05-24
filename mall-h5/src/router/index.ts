/*
 * @Author: 鲁遥
 * @Date: 2021-05-08 15:53:50
 * @LastEditTime: 2021-05-24 20:42:29
 * @LastEditors: your name
 * @Description:
 * @FilePath: /mall/mall-h5/src/router/index.ts
 */
/*
 * @Author: 鲁遥
 * @Date: 2020-12-14 20:49:39
 * @LastEditTime: 2021-05-07 15:23:17
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /fe-supply-chain/src/router/index.ts
 */
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "./../views/home/index.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "Home",
        component: Home,
        meta: {
            ishidden: true,
            act: "/"
        }
    },
    {
        path: "/category",
        name: "Category",
        component: () => import('./../views/category/index.vue'),
        meta: {
            ishidden: true,
            act: "/category"
        }
    },
    {
        path: "/category",
        name: "Category",
        component: () => import('./../views/category/index.vue'),
        meta: {
            ishidden: true,
            act: "/category"
        }
    },
    {
        path: "/detail/:id",
        name: "Detail",
        component: () => import('./../views/detail/index.vue'),
        meta: {
            ishidden: true,
            act: "/detail"
        }
    },

    {
        path: "/cart",
        name: "Cart",
        component: () => import('./../views/cart/index.vue'),
        meta: {
            ishidden: true,
            act: "/cart"
        }
    },

    {
        path: "/user",
        name: "User",
        component: () => import('./../views/user/index.vue'),
        meta: {
            ishidden: true,
            act: "/user"
        }
    },
    // 注册
    {
        path: "/register",
        name: "Register",
        component: () => import('./../views/user/component/register.vue'),
        meta: {
            ishidden: true,
            act: "/register"
        }
    },
    {
        path: "/search",
        name: "Search",
        component: () => import('./../views/search/index.vue'),
        meta: {
            ishidden: true,
            act: "/search"
        }
    },


    // {
    //     path: "/layout",
    //     name: "layout",
    //     component: Layout,
    //     meta: {
    //         ishidden: true,
    //         act: "/"
    //     }
    // },
    //   {
    //     path: "/orderManager",
    //     name: "orderManager",
    //     component: Layout,
    //     meta: {
    //       ishidden: false,
    //       act: "/",
    //       title: "订单中心",
    //       icon: 'el-icon-s-order',
    //     },
    //     children: [
    //       // 订单列表
    //       {
    //         path: "/orderManager/orderList",
    //         name: "orderList",

    //         component: () => import("../views/orderManager/orderList/index.vue"),
    //         meta: {
    //           title: "订单列表",
    //           ishidden: false,
    //           keepAlive: true, // 需要被缓存
    //           act: "/orderManager/orderList",
    //           // icon: 'el-icon-menu',
    //           breadcrumb: [{ url: "/orderManager/orderList", title: '订单中心' }, { url: "/orderManager/orderList", title: '订单列表' }]
    //         }
    //       },
    //       {
    //         path: "/orderManager/orderInfo/:id/:type",
    //         name: "orderInfo",
    //         component: () =>
    //           import("../views/orderManager/orderList/orderInfo.vue"),
    //         meta: {
    //           title: "订单详情",
    //           ishidden: true,
    //           act: "/orderManager/orderList",
    //           breadcrumb: [{ url: "/orderManager/orderList", title: '订单中心' }, { url: "/orderManager/orderList", title: '订单列表' }, { url: "/orderManager/orderInfo/:id/:type", title: '订单详情' }]
    //         }
    //       }
    //     ]
    //   },

];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
