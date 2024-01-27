export const themeData = JSON.parse("{\"repoLabel\":\"GitLab\",\"repo\":\"https://gitlab.ccyonyou.com/zhenyou/vuepress\",\"lastUpdated\":true,\"navbar\":[{\"text\":\"首页\",\"link\":\"/\"},{\"text\":\"前端基础\",\"children\":[{\"text\":\"概览\",\"link\":\"/webBasics/home/indx.md\",\"activeMatch\":\"^/webBasics/home/\"},{\"text\":\"Vue3快速上手\",\"link\":\"/webBasics/vue/indx.md\",\"activeMatch\":\"^/webBasics/vue/\"},{\"text\":\"TypeScript基础\",\"link\":\"/webBasics/typescript/indx.md\",\"activeMatch\":\"^/webBasics/typescript/\"}]}],\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"logo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebar\":\"auto\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
