module.exports = {
  "title": "XiolBlog",
  base: '/newblog/',
  "description": "一名前端er的博客",
  "dest": ".vuepress/dist",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        "text": "主页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时间线",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "笔记",
        "link": "https://xiol-liang.github.io/xiolblog/",
        "icon": "reco-blog"
      },
      {
        "text": "文章",
        "icon": "reco-message",
        "items": [
          {
            "text": "vuepress-reco",
            "link": "/docs/theme-reco/"
          }
        ]
      },
      {
        "text": "Contact",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/xiol-liang",
            "icon": "reco-github"
          }
        ]
      }
    ],
    "sidebar": {
      "/docs/theme-reco/": [
        "",
        "theme",
        "plugin",
        "api"
      ]
    },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "分类"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      },
      socialLinks: [     // 信息栏展示社交信息
        { icon: 'reco-github', link: 'https://github.com/xiol-liang' },
        { icon: 'reco-weibo', link: 'https://weibo.com/u/6876190424' },
        { icon: 'reco-bilibili', link: 'https://space.bilibili.com/396411083?spm_id_from=333.1007.0.0' },
        { icon: 'reco-douyin', link: 'https://www.douyin.com/user/MS4wLjABAAAApep8eQhxaNiM5-jeG0Yn2U21vboRubLs6mvMWWK_sB2jiu4wfftuXJEkAnFuGvLu' },
        { icon: 'reco-csdn', link: 'https://blog.csdn.net/qq_45677405?spm=1000.2115.3001.5343' },
      ]
    },
    valineConfig: {
      appId: 'sqwQIJg8yRVMzC6lKTWjicbp-gzGzoHsz',// your appId
      appKey: '83Vqs1jkp0l9KqqImwWKdQq4', // your appKey
    },
    "friendLink": [
      {
        "title": "午后南杂",
        "desc": "Enjoy when you can, and endure when you must.",
        "email": "1156743527@qq.com",
        "link": "https://www.recoluan.com"
      },
    ],
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "xiol",
    "authorAvatar": "/avatar.png",
    "record": "xxxx",
    "startYear": "2022"
  },
  "markdown": {
    "lineNumbers": true
  },
  plugins: [
    [
      '@vuepress-reco/vuepress-plugin-kan-ban-niang',
      {
        theme: ['z16', 'haru1', 'haru2', 'haruto', 'koharu', 'izumi', 'shizuku', 'wanko', 'miku'],
        messages: {
          welcome: '欢迎来到 ' + 'XiolBlog',
          home: '心里的花，我想要带你回家。',
          theme: '好吧，希望你能喜欢我的其他小伙伴。',
          close: '你知道我喜欢吃什么吗？痴痴地望着你。'
        },
      }
    ],
    ['@vuepress-reco/vuepress-plugin-bgm-player', {
      audios: [
        // 本地文件示例

        // 网络文件示例
        {
          name: '강남역 4번 출구',
          artist: 'Plastic / Fallin` Dild',
          url: 'https://assets.smallsunnyfox.com/music/2.mp3',
          cover: 'https://assets.smallsunnyfox.com/music/2.jpg'
        },
        {
          name: '用胳膊当枕头',
          artist: '최낙타',
          url: 'https://assets.smallsunnyfox.com/music/3.mp3',
          cover: 'https://assets.smallsunnyfox.com/music/3.jpg'
        }
      ],
      position: {
        left: '10px',
        bottom: '10px',
        'z-index': '999999'
      },
      autoShrink: true,
      floatPosition: 'left',
      floatStyle: {
        bottom: '80px',
        'z-index': '999999'
      }
    }],
    ['@vuepress-reco/comments', {
      solution: 'valine',
      options: {
        appId: 'sqwQIJg8yRVMzC6lKTWjicbp-gzGzoHsz',// your appId
        appKey: '83Vqs1jkp0l9KqqImwWKdQq4', // your appKey
      }
    }]
  ],
}