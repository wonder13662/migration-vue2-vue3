const path = require('path');

module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        '/Users/barogo/Study/VueMastery/migration-vue2-vue3/vue2/src/styles/global.scss',
      ],
    },
    apollo: {
      enableMocks: false,
      enableEngine: false,
    },
  },
};
