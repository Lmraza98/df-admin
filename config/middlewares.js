module.exports = [
  "strapi::errors",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            "*.amazonaws.com",
            'lh3.googleusercontent.com', // google avatars
          ],
          "media-src": ["'self'", "data:", "blob:"],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  {    
    name: "strapi::cors",    
    config: {      
      origin: ['*'],
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      headers: ['Authorization', 'Content-Type'],
    },
  },
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::favicon",
  "strapi::public",
  'strapi::session',
];