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
                        text: '目录',
                        link: '/webBasics/home.md',
                        activeMatch: '^/webBasics/home.html'
                    },
                    {
                        text: 'typescript',
                        link: '/typescript/index.md',
                        activeMatch: '^/typescript/'
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
        sidebar: {
            '/webBasics/': [
                {
                    text: '目录侧边导航',
                    collapsible: true,
                    children: [
                        '/webBasics/home.md',
                        '/webBasics/sidebar.md',
                    ],
                },
            ],
            '/typescript/': [
                {
                    text: 'TypeScript',
                    collapsible: true,
                    children: [
                        '/typescript/index.md',
                    ],
                },
            ],
        }
    }),
    host: 'localhost',
    port: 3000,
    lang: 'zh-CN',
    title: 'VuePress',
    description: '',
    colorMode: 'light',
})