const { join } = require('path');

module.exports = {
  theme: {
    definitions: {
      index: [
        {
          type: 'file',
          path: './index.js',
          template: join(__dirname, 'templates/index.js.stub'),
        },
      ],
      types: [
        {
          type: 'toGenericThemeType',
          source: './themes/light',
          path: './types.d.ts',
          template: join(__dirname, 'templates/types.d.ts.stub'),
          variables: {
            NAME: 'Theme',
          },
          transform(ctx) {
            ctx.color =
              '\n' +
              ctx.elements
                .filter((el) => el.main === 'color')
                .map((el) => `\t| '${el.path.split('.').slice(1).join('-')}'`)
                .join('\n');

            return ctx;
          },
        },
      ],
      light: [
        {
          type: 'toThemeType',
          source: './themes/light',
          path: './light/types.d.ts',
          template: join(__dirname, 'templates/[theme]/types.d.ts.stub'),
          variables: {
            PARENT: 'Theme',
            NAME: 'LightTheme',
          },
        },
        {
          type: 'toCssVariables',
          source: './themes/light',
          path: './light/LightTheme.css',
          template: join(__dirname, 'templates/[theme]/[theme].css.stub'),
          variables: {
            SELECTOR: ':root',
          },
        },
        {
          type: 'toCssVariablesThemeObject',
          source: './themes/light',
          path: './light/index.js',
          template: join(__dirname, 'templates/[theme]/index.js.stub'),
          variables: {
            NAME: 'lightTheme',
          },
        },
        {
          type: 'toThemeObject',
          source: './themes/light',
          path: './light/lightTheme.js',
          template: join(__dirname, 'templates/[theme]/[theme].js.stub'),
          variables: {
            NAME: 'lightTheme',
          },
        },
      ],
    },
  },
};
