import { containerPreview, componentPreview } from '@vitepress-demo-preview/plugin'

export default {
  title: 'Package UI',
  themeConfig: {
    nav: [
      { text: '快速开始', link: '/guide/quick-start', activeMatch: `^/guide/` },
      { text: 'Components', link: '/components/demo1' },
    ],
    sidebar: {
      '/components/': [
        {
          text: 'components',
          items: [
            { text: 'One', link: '/components/demo1' },
            { text: 'Two', link: '/components/demo2' },
          ],
        },
      ],
    },
  },
  markdown: {
    config(md) {
      md.use(containerPreview)
      md.use(componentPreview)
    },
  },
}
