module.exports = {
  title: 'Day.js',
  locales: {
    '/': {
      lang: 'en',
      title: 'Day.js',
      description: 'Day.js is a minimalist JavaScript library that parses, validates, manipulates, and displays dates and times for modern browsers with a largely Moment.js-compatible API. If you use Moment.js, you already know how to use Day.js.',
    },
    '/ja/': {
      lang: 'ja',
      title: 'Day.js',
      description: 'Day.js は日付と時刻をパース・検証・操作・表示する最小のモダンブラウザ向け JavaScript ライブラリであり、 Moment.js の API との広い互換性を持ちます。 Moment.js を使ったことがあればすぐにでも Day.js を使い始めることができます。',
    },
  },

  themeConfig: {
    logo: "/logo.png",
    repo: 'iamkun/dayjs',

    sidebar: 'auto',

    locales: {
      '/': {
        selectText: 'Languages',
        label: 'English',
        ariaLabel: 'English',
        editLinkText: 'Edit',
        nav: [
          { text: 'Installation', link: '/Installation' },
          { text: 'API Reference', link: '/API-Reference' },
          { text: 'I18n', link: '/I18n' },
          { text: 'Plugin', link: '/Plugin' }
        ],
      },
      '/ja/': {
        selectText: '言語',
        label: '日本語',
        ariaLabel: '日本語',
        editLinkText: '編集',
        nav: [
          { text: 'インストールガイド', link: '/ja/Installation' },
          { text: 'API リファレンス', link: '/ja/API-Reference' },
          { text: '国際化', link: '/ja/I18n' },
          { text: 'プラグインリスト', link: '/ja/Plugin' }
        ],
      },
    },
  },
};
