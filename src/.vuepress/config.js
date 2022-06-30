

module.exports = {
  title: 'three.js学习笔记',
  description: '风浪没平息 我宣告奔跑的意义',
  base: '/web-three/', // 部署站点的基础路径
  port: 3009,
  dest: 'web-three', // 指定 vuepress 的输出目录
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  head: [

    ['script', { src: '/libs/three.js' }],
    ['script', { src: '/libs/stats.js' }],
    ['script', { src: '/libs/dat.gui.js' }],
    ['script', { src: '/libs/CanvasRenderer.js' }],
    ['script', { src: '/libs/Projector.js' }],
    ['script', { src: '/libs/tween.min.js' }],
    ['script', { src: '/libs/ParametricGeometries.js' }],
    ['script', { src: '/libs/ConvexGeometry.js' }],
    ['script', { src: '/libs/WebGLDeferredRenderer.js' }],
    ['script', { src: '/libs/ShaderDeferred.js' }],
    ['script', { src: '/libs/RenderPass.js' }],
    ['script', { src: '/libs/EffectComposer.js' }],
    ['script', { src: '/libs/CopyShader.js' }],
    ['script', { src: '/libs/ShaderPass.js' }],
    ['script', { src: '/libs/FXAAShader.js' }],
    ['script', { src: '/libs/MaskPass.js' }],
    ['script', { src: '/libs/d3-threeD.js' }],
    ['script', { src: '/libs/OrbitControls.js' }],
    ['script', { src: '/libs/spin.js' }],
    ['script', { src: '/libs/ThreeBSP.js' }],
    ['script', { src: '/libs/SceneLoader.js' }],
    ['script', { src: '/libs/SceneExporter.js' }],
    ['script', { src: '/libs/OBJLoader.js' }],
    ['script', { src: '/libs/chroma.js' }],
    ['script', { src: '/libs/TrackballControls.js' }],
    ['script', { src: '/libs/RollControls.js' }],
    ['script', { src: '/libs/FirstPersonControls.js' }],
    ['script', { src: '/libs/FlyControls.js' }],
    ['script', { src: '/libs/MTLLoader.js' }],
    ['script', { src: '/libs/OBJMTLLoader.js' }],
    ['script', { src: '/libs/ColladaLoader.js' }],
    ['script', { src: '/libs/STLLoader.js' }],
    ['script', { src: '/libs/CTMLoader.js' }],
    ['script', { src: '/libs/ctm.js' }],
    ['script', { src: '/libs/CTMWorker.js' }],
    ['script', { src: '/libs/lzma.js' }],
    ['script', { src: '/libs/VTKLoader.js' }],
    ['script', { src: '/libs/PDBLoader.js' }],
    ['script', { src: '/libs/PLYLoader.js' }],
    ['script', { src: '/libs/AWDLoader.js' }],
    ['script', { src: '/libs/AssimpJSONLoader.js' }],
    ['script', { src: '/libs/VRMLLoader.js' }],
    ['script', { src: '/libs/BabylonLoader.js' }],
    ['script', { src: '/libs/perlin.js' }],
    ['script', { src: '/libs/glTFLoaderUtils.js' }],
    ['script', { src: '/libs/glTFAnimation.js' }],
    ['script', { src: '/libs/glTFLoader.js' }],
    ['script', { src: '/libs/glTF-parser.js' }],
    ['script', { src: '/libs/DDSLoader.js' }],
    ['script', { src: '/libs/PVRLoader.js' }],
    ['script', { src: '/libs/TGALoader.js' }],
    ['script', { src: '/libs/literally/jquery-1.8.2.js' }],
    ['script', { src: '/libs/literally/underscore-1.4.2.js' }],
    ['script', { src: '/libs/literally/js/literallycanvas.js' }],
    ['script', { src: '/assets/fonts/helvetiker_regular.typeface.js' }],
    ['script', { src: '/assets/fonts/helvetiker_bold.typeface.js' }],
    ['script', { src: '/assets/fonts/bitstream_vera_sans_mono_roman.typeface.js' }],
    ['script', { src: '/libs/postprocessing/FilmPass.js' }],
    ['script', { src: '/libs/shaders/FilmShader.js' }],

    ['script', { src: '/libs/physi.js' }],
  ],
  plugins: {
    'vuepress-plugin-anchor-toc': {
      showDepth: 1,
      customClass: 'your-customClass',
      ignore: [
        '/',
        '/api/'
        // more...
      ]
    },
    'demo-container': true,
    // 名称：@vuepress/plugin-pwa 网页内容有更新的时候有刷新按钮。可以把网页保存到桌面，当一个app一样
    '@vuepress/pwa': {
      serviceWorker: true,
      updatePopup: true
    },
    // 名称：@vuepress/plugin-back-to-top 效果：文章看到下面的时候，点击一个图标会回到顶部
    '@vuepress/back-to-top': true,
    '@vuepress/medium-zoom': true,
    '@vuepress/nprogress': true,
    // 名称：@vuepress/plugin-active-header-links 效果：页面滚动时自动激活侧边栏链接的插件，效果就是右边内容滚动的时候，看到哪里了，左侧菜单会自动高亮显示当前看的目录。
    '@vuepress/active-header-links': {
      sidebarLinkSelector: '.sidebar-link',
      headerAnchorSelector: '.header-anchor'
    },
    "@vssue/vuepress-plugin-vssue": {
      platform: 'github', //v3的platform是github，v4的是github-v4
      locale: 'zh', //语言
      // 其他的 Vssue 配置
      owner: 'zhoubichuan', //github账户名
      repo: 'web-three', //github一个项目的名称
      clientId: 'Iv1.2923ba5d4de48a3c', //注册的Client ID
      clientSecret: '110210', //注册的Client Secret
      autoCreateIssue: true // 自动创建评论，默认是false，最好开启，这样首次进入页面的时候就不用去点击创建评论的按钮了。
    },
    "vuepress-plugin-boxx": ["vuepress-plugin-boxx"]
  },
  // 主题配置
  themeConfig: {
    editLinks: true,
    docsDir: 'src', // 假如文档不是放在仓库的根目录下
    docsBranch: 'master', // 假如文档放在一个特定的分支下
    editLinks: true, // 启用编辑
    editLinkText: '在github上编辑此页',
    sidebarDepth: 0,
    lastUpdated: '上次更新', // 获取每个文件最后一次 git 提交的时间戳
    nav: require('./nav.js'),
    sidebar: require('./sidebar.js'),
    searchMaxSuggestoins: 10
  },
}