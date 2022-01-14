module.exports = {
  i18n: {
    locales: ['fr', 'en'],
    defaultLocale: 'fr',
    localeDetection: false,
    domains: [
      {
        domain: 'sybel.com:3000',
        defaultLocale: 'fr',
        http: true,
      },
      {
        domain: 'sybel.en:3000',
        defaultLocale: 'en',
        http: true,
      }
    ]
  },
}