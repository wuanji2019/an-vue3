// import BasicLayout from '@/layouts/BasicLayout.vue'
import { RouteRecordRaw } from 'vue-router'

// const RouteView: RouteComponent = {
//   name: 'RouteView',
//   render: (h: (arg0: string) => any) => h('router-view')
// }

export const asyncRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    // component: BasicLayout,
    meta: { title: '商品数据' },
    redirect: '/redirect',
    children: [
      // {
      //   path: '/product',
      //   name: 'product',
      //   icon: 'product.png',
      //   meta: { title: '商品数据' },
      //   component: RouteView,
      //   redirect: '/product/productData/dataPanel',
      //   children: [
      //     {
      //       path: '/product/productData',
      //       name: 'productData',
      //       icon: 'product.png',
      //       meta: { title: '商品数据', parentTitle: '商品数据' },
      //       component: RouteView,
      //       redirect: '/product/productData/dataPanel',
      //       children: [
      //         {
      //           path: '/product/productData/dataPanel',
      //           name: 'productDataPanel',
      //           component: () => import('@/views/product/dataPanel'),
      //           meta: {
      //             title: '商品数据面板',
      //             roles: ['admin'],
      //             keepAlive: true,
      //             parentTitle: '商品数据'
      //           }
      //         },
      //         {
      //           path: '/product/productData/commodityEffect',
      //           name: 'productCommodityEffect',
      //           component: () => import('@/views/product/commodityEffect'),
      //           meta: {
      //             title: '商品效果明细',
      //             roles: ['admin'],
      //             keepAlive: true,
      //             parentTitle: '商品数据'
      //           }
      //         },
      //         {
      //           path: '/product/productData/trendAnalysis',
      //           name: 'productTrendAnalysis',
      //           hidden: true,
      //           component: () => import('@/views/product/trendAnalysis'),
      //           meta: {
      //             title: '趋势分析',
      //             showHistory: true,
      //             roles: ['admin'],
      //             parentTitle: '商品数据'
      //           }
      //         }
      //       ]
      //     }
      //   ]
      // },
      // {
      //   path: '/crm',
      //   name: 'crm',
      //   icon: 'crm.png',
      //   component: RouteView,
      //   meta: { title: 'CRM' },
      //   redirect: '/crm/crmData/dataPanel',
      //   children: [
      //     {
      //       path: '/crm/crmCustomer',
      //       name: 'crmCustomer',
      //       icon: 'user.png',
      //       meta: { title: '客户', parentTitle: 'CRM' },
      //       component: RouteView,
      //       redirect: '/crm/crmCustomer/allCustomer',
      //       children: [
      //         {
      //           path: '/crm/crmCustomer/allCustomer',
      //           name: 'allCustomer',
      //           component: () => import('@/views/crm/customer/customer'),
      //           meta: {
      //             title: '全部客户',
      //             roles: ['admin'],
      //             keepAlive: true,
      //             parentTitle: '客户'
      //           }
      //         },
      //         {
      //           path: '/crm/crmCustomer/newCustomer',
      //           name: 'newCustomer',
      //           component: () => import('@/views/crm/customer/customer'),
      //           meta: {
      //             title: '新注册客户',
      //             roles: ['admin'],
      //             keepAlive: true,
      //             parentTitle: '客户'
      //           }
      //         },
      //         {
      //           path: '/crm/crmCustomer/pendingCustomer',
      //           name: 'pendingCustomer',
      //           component: () => import('@/views/crm/customer/customer'),
      //           meta: {
      //             title: 'pending客户',
      //             roles: ['admin'],
      //             keepAlive: true,
      //             parentTitle: '客户'
      //           }
      //         },
      //         {
      //           path: '/crm/crmCustomer/firstCustomer',
      //           name: 'firstCustomer',
      //           component: () => import('@/views/crm/customer/customer'),
      //           meta: {
      //             title: '首单客户',
      //             roles: ['admin'],
      //             keepAlive: true,
      //             parentTitle: '客户'
      //           }
      //         },
      //         {
      //           path: '/crm/crmCustomer/secondCustomer',
      //           name: 'secondCustomer',
      //           component: () => import('@/views/crm/customer/customer'),
      //           meta: {
      //             title: '第二单客户',
      //             roles: ['admin'],
      //             keepAlive: true,
      //             parentTitle: '客户'
      //           }
      //         },
      //         {
      //           path: '/crm/crmCustomer/thirdCustomer',
      //           name: 'thirdCustomer',
      //           component: () => import('@/views/crm/customer/customer'),
      //           meta: {
      //             title: '第三单客户',
      //             roles: ['admin'],
      //             keepAlive: true,
      //             parentTitle: '客户'
      //           }
      //         },
      //         {
      //           path: '/crm/crmCustomer/moreCustomer',
      //           name: 'moreCustomer',
      //           component: () => import('@/views/crm/customer/customer'),
      //           meta: {
      //             title: '三单以上客户',
      //             roles: ['admin'],
      //             keepAlive: true,
      //             parentTitle: '客户'
      //           }
      //         },
      //         {
      //           path: '/crm/crmCustomer/highSeasCustomer',
      //           name: 'highSeasCustomer',
      //           component: () => import('@/views/crm/customer/customer'),
      //           meta: {
      //             title: '公海客户',
      //             roles: ['admin'],
      //             keepAlive: true,
      //             parentTitle: '客户'
      //           }
      //         },
      //         {
      //           path: '/crm/crmCustomer/lostCustomer',
      //           name: 'lostCustomer',
      //           component: () => import('@/views/crm/customer/customer'),
      //           meta: {
      //             title: '流失客户',
      //             roles: ['admin'],
      //             keepAlive: true,
      //             parentTitle: '客户'
      //           }
      //         },
      //         {
      //           path: '/crm/crmCustomer/myFollowCustomer',
      //           name: 'myFollowCustomer',
      //           component: () => import('@/views/crm/customer/customer'),
      //           meta: {
      //             title: '我跟进的客户',
      //             roles: ['admin'],
      //             keepAlive: true,
      //             parentTitle: '客户'
      //           }
      //         }
      //         // {
      //         //   path: '/crm/crmCustomer/myGroupCustomer',
      //         //   name: 'myGroupCustomer',
      //         //   component: () => import('@/views/crm/customer/customer'),
      //         //   meta: {
      //         //     title: '我小组的客户',
      //         //     roles: ['admin'],
      //         //     keepAlive: true,
      //         //     parentTitle: '客户'
      //         //   }
      //         // }
      //         // {
      //         //   path: '/crm/crmCustomer/customerInfo/:Id',
      //         //   name: 'customerInfo',
      //         //   component: () => import('@/views/crm/customer/customerInfo'),
      //         //   hidden: true,
      //         //   meta: {
      //         //     title: '客户状态数据面板',
      //         //     showHistory: true,
      //         //     roles: ['admin'],
      //         //     parentTitle: '客户'
      //         //   }
      //         // }
      //       ]
      //     },
      //     {
      //       path: '/crm/crmContent',
      //       name: 'crmContent',
      //       icon: 'info.png',
      //       meta: { title: '内容', parentTitle: 'CRM' },
      //       component: RouteView,
      //       redirect: '/crm/crmContent/article',
      //       children: [
      //         {
      //           path: '/crm/crmContent/article',
      //           name: 'crmArticle',
      //           meta: {
      //             title: '文章',
      //             roles: ['admin'],
      //             parentTitle: '内容'
      //           }
      //         },
      //         {
      //           path: '/crm/crmContent/email',
      //           name: 'crmEmail',
      //           meta: {
      //             title: '邮件',
      //             roles: ['admin'],
      //             parentTitle: '内容'
      //           }
      //         },
      //         {
      //           path: '/crm/crmContent/dict',
      //           name: 'crmDict',
      //           meta: {
      //             title: '话术库',
      //             roles: ['admin'],
      //             parentTitle: '内容'
      //           }
      //         }
      //       ]
      //     },
      //     {
      //       path: '/crm/crmTool',
      //       name: 'crmTool',
      //       icon: 'tool.png',
      //       meta: { title: '工具', parentTitle: 'CRM'},
      //       component: RouteView,
      //       redirect: '/crm/crmTool/coupon',
      //       children: [
      //         {
      //           path: '/crm/crmTool/coupon',
      //           name: 'crmCoupon',
      //           meta: {
      //             title: '接入优惠券',
      //             roles: ['admin'],
      //             parentTitle: '工具'
      //           }
      //         },
      //         {
      //           path: '/crm/crmTool/call',
      //           name: 'crmCall',
      //           meta: {
      //             title: '呼叫',
      //             roles: ['admin'],
      //             parentTitle: '工具'
      //           }
      //         },
      //         {
      //           path: '/crm/crmTool/mailMerge',
      //           name: 'crmMailMerge',
      //           meta: {
      //             title: '群发工具',
      //             roles: ['admin'],
      //             parentTitle: '工具'
      //           }
      //         }
      //       ]
      //     },
      //     {
      //       path: '/crm/crmData',
      //       name: 'crmData',
      //       icon: 'line.png',
      //       meta: { title: '数据', parentTitle: 'CRM' },
      //       component: RouteView,
      //       redirect: '/crm/crmData/dataPanel',
      //       children: [
      //         {
      //           path: '/crm/crmData/dataPanel',
      //           name: 'crmDataPanel',
      //           component: () => import('@/views/crm/data/dataPanel'),
      //           meta: {
      //             title: '大盘概况',
      //             roles: ['admin'],
      //             parentTitle: '数据'
      //           }
      //         },
      //         {
      //           path: '/crm/crmData/salesFunnel',
      //           name: 'crmSalesFunnel',
      //           component: () => import('@/views/crm/data/salesFunnel'),
      //           meta: {
      //             title: '销售漏斗',
      //             roles: ['admin'],
      //             parentTitle: '数据'
      //           }
      //         },
      //         {
      //           path: '/crm/crmData/employeeReport',
      //           name: 'crmEmployeeReport',
      //           component: () => import('@/views/crm/data/employeeReport'),
      //           meta: {
      //             title: '员工报表',
      //             roles: ['admin'],
      //             parentTitle: '数据'
      //           }
      //         }
      //       ]
      //     },
      //     {
      //       path: '/crm/crmSetting',
      //       name: 'crmSetting',
      //       icon: 'setting.png',
      //       meta: { title: '管理', parentTitle: 'CRM'},
      //       component: RouteView,
      //       redirect: '/crm/crmSetting/userSetting',
      //       children: [
      //         {
      //           path: '/crm/crmSetting/staffManage',
      //           name: 'crmStaffManage',
      //           component: () => import('@/views/crm/setting/staffManage'),
      //           meta: {
      //             title: '员工管理',
      //             roles: ['admin'],
      //             parentTitle: '管理'
      //           }
      //         },
      //         // {
      //         //   path: '/crm/crmSetting/followSetting',
      //         //   name: 'crmFollowSetting',
      //         //   component: () => import('@/views/crm/setting/followSetting'),
      //         //   meta: {
      //         //     title: '跟进阶段设置',
      //         //     roles: ['admin'],
      //         //     parentTitle: '管理'
      //         //   }
      //         // },
      //         {
      //           path: '/crm/crmSetting/autoFlow',
      //           name: 'crmAutoFlow',
      //           component: () => import('@/views/crm/setting/customerAssignment'),
      //           meta: {
      //             title: '客户自动流转',
      //             roles: ['admin'],
      //             parentTitle: '管理'
      //           }
      //         },
      //         {
      //           path: '/crm/crmSetting/autoGroup',
      //           name: 'crmAutoGroup',
      //           component: () => import('@/views/crm/setting/autoGroup'),
      //           meta: {
      //             title: '自动分组任务配置',
      //             roles: ['admin'],
      //             parentTitle: '管理'
      //           }
      //         }
      //       ]
      //     }
      //   ]
      // },
      // {
      //   path: '/market',
      //   name: 'market',
      //   icon: 'market.png',
      //   meta: { title: '营销中心' },
      //   component: RouteView,
      //   redirect: '/market/activity/TimeLimit',
      //   children: [
      //     {
      //       path: '/market/activity',
      //       name: 'activity',
      //       icon: 'market.png',
      //       meta: { title: '营销中心', parentTitle: '营销中心' },
      //       component: RouteView,
      //       redirect: '/market/activity/TimeLimit',
      //       children: [
      //         {
      //           path: '/market/activity/TimeLimit',
      //           name: 'TimeLimit',
      //           component: () => import('@/views/activity/TimeLimit'),
      //           meta: {
      //             title: '限时优惠活动',
      //             roles: ['admin'],
      //             parentTitle: '营销中心'
      //           }
      //         },
      //         {
      //           path: '/market/activity/FullAmount',
      //           name: 'FullAmount',
      //           component: () => import('@/views/activity/FullAmount'),
      //           meta: {
      //             title: '阶梯优惠活动',
      //             roles: ['admin'],
      //             parentTitle: '营销中心'
      //           }
      //         }
      //         // {
      //         //   path: '/market/activity/Giving',
      //         //   name: 'Giving',
      //         //   component: () => import('@/views/activity/giving'),
      //         //   meta: {
      //         //     title: '买赠优惠活动',
      //         //     roles: ['admin'],
      //         //     parentTitle: '营销中心'
      //         //   }
      //         // },
      //         // {
      //         //   path: '/market/activity/Reappearance',
      //         //   name: 'Reappearance',
      //         //   component: () => import('@/views/activity/Reappearance'),
      //         //   meta: {
      //         //     title: '订单返现优惠活动',
      //         //     roles: ['admin'],
      //         //     parentTitle: '营销中心'
      //         //   }
      //         // },
      //         // {
      //         //   path: '/market/activity/Clearance',
      //         //   name: 'Clearance',
      //         //   component: () => import('@/views/activity/Clearance'),
      //         //   meta: {
      //         //     title: '清仓降价拍',
      //         //     roles: ['admin'],
      //         //     parentTitle: '营销中心'
      //         //   }
      //         // }
      //       ]
      //     }
      //   ]
      // }
    ]
  }
  // // 404 page must be placed at the end !!!
  // {
  //   path: '*',
  //   redirect: '/404',
  //   hidden: true
  // }
]

/**
 * 基础路由
 * @type { *[] }
 */
export const constantRoutes: Array<RouteRecordRaw> = [
  // {
  //   path: '/redirect',
  //   component: BasicLayout,
  //   meta: { hidden: true },
  //   children: [
  //     {
  //       path: '/redirect/:path(.*)',
  //       component: () => import('@/views/redirect/index.vue')
  //     }
  //   ]
  // },
  {
    path: '/login',
    name: 'login',
    meta: { hidden: true },
    component: () => import('@/views/login/index.vue')
  }
  // {
  //   path: '/404',
  //   meta: { hidden: true },
  //   component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404.vue')
  // }
]
