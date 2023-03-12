const config = {
  locales: [
    // 'ar',
    // 'fr',
    // 'cs',
    // 'de',
    // 'dk',
    // 'es',
    // 'he',
    // 'id',
    // 'it',
    // 'ja',
    // 'ko',
    // 'ms',
    // 'nl',
    // 'no',
    // 'pl',
    // 'pt-BR',
    // 'pt',
    // 'ru',
    // 'sk',
    // 'sv',
    // 'th',
    // 'tr',
    // 'uk',
    // 'vi',
    // 'zh-Hans',
    // 'zh',
  ],
  translations: {
    en: {
      'app.components.LeftMenu.navbrand.title': 'DakotahFerrari.com Admin',
      'app.components.LeftMenu.navbrand.title': 'DakotahFerrari.com Admin',
      "Auth.form.welcome.title": "Welcome to Your App!",
      "Auth.form.welcome.subtitle": "Log in to your App",
    }
  },
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
