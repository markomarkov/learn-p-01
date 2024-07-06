// const { NxWebpackPlugin } = require('@nx/webpack');
// const { join } = require('path');

// module.exports = {
//   output: {
//     path: join(__dirname, '../../dist/apps/learning-01'),
//   },
//   plugins: [
//     new NxWebpackPlugin({
//       target: 'node',
//       // compiler: 'tsc',
//       // main: './src/main.ts',
//       // tsConfig: './tsconfig.app.json',
//       // assets: ["./src/assets"],
//       // optimization: false,
//       // outputHashing: 'none',
//     })
//   ],
// };

const { compilePlugins, withNx, composePlugins } = require('@nx/webpack');
const { join } = require('path');

module.exports = composePlugins(
  withNx({
    target: 'node',
    generatePackageJson: true,
  }),
  (config) => {
    console.log(config);
    return config;
  }
);
