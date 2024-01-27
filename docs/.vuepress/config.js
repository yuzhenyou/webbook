import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
export default defineUserConfig({
    bundler: viteBundler(),
    theme: defaultTheme({
        repoLabel: 'GitLab',
        repo: 'https://gitlab.ccyonyou.com/zhenyou/vuepress',
        lastUpdated: true,
        navbar: [
            {
                text: '首页',
                link: '/',
            },
            {
                text: '前端基础',
                children: [
                    {
                        text: '概览',
                        link: '/webBasics/home/indx.md',
                        activeMatch: '^/webBasics/home/'
                    },
                    {
                        text: 'Vue3快速上手',
                        link: '/webBasics/vue/indx.md',
                        activeMatch: '^/webBasics/vue/'
                    },
                    {
                        text: 'TypeScript基础',
                        link: '/webBasics/typescript/indx.md',
                        activeMatch: '^/webBasics/typescript/'
                    },

                ],
            },
            // {
            //     text: 'Group',
            //     children: [
            //         {
            //             text: 'Group1',
            //             children: [
            //                 {
            //                     text: 'group1A',
            //                     link: '/group/group1/a.md',
            //                 },
            //                 {
            //                     text: 'group1B',
            //                     link: '/group/group1/b.md',
            //                 }
            //             ]
            //         },
            //         {
            //             text: 'Group2',
            //             children: [
            //                 {
            //                     text: 'group2A',
            //                     link: '/group/group2/a.md',
            //                 },
            //                 {
            //                     text: 'group2B',
            //                     link: '/group/group2/b.md',
            //                 }
            //             ]
            //         }
            //     ]
            // }
        ],
        // sidebar: [
        //     {
        //         text: '全局侧边导航',
        //         collapsible: true,
        //         children: [
        //             {
        //                 text: 'home',
        //                 link: '/webBasics/home.md',
        //             },
        //             {
        //                 text: 'sidebar',
        //                 link: '/webBasics/sidebar.md',
        //             }
        //         ],
        //     }
        //     , '/webBasics/typescript.md'
        // ],
        // sidebar: {
        //     '/webBasics/': [
        //         {
        //             text: 'webBasics',
        //             collapsible: true,
        //             children: [
        //                 '/webBasics/home.md',
        //                 '/webBasics/sidebar.md',
        //             ],
        //         },
        //     ],
        //     '/typescript/': [
        //         {
        //             text: 'TypeScript',
        //             collapsible: true,
        //             children: [
        //                 '/typescript/home.md',
        //             ],
        //         },
        //     ],
        // }
        
    }),
    host: 'localhost',
    port: 3000,
    lang: 'zh-CN',
    title: '前端文档',
    description: '',
    colorMode: 'light',
})