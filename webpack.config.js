const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const parsedArgs = require('yargs').argv;
// const getProxyConfig = require("./webpack.proxy-config");

// input dir
const SRC_DIR = path.resolve(__dirname, './src');
// output dir
const BUILD_DIR = path.resolve(__dirname, './dist');

const { mode = 'development', devserverPort = 9000 } = parsedArgs;
const isDevMode = mode !== 'production';

const output = {
  path: BUILD_DIR,
  publicPath: '/static/assets/', // necessary for lazy-loaded chunks
};
if (isDevMode) {
  output.filename = '[name].entry.js';
  output.chunkFilename = '[name].chunk.js';
} else {
  output.filename = '[name].[chunkhash].entry.js';
  output.chunkFilename = '[name].[chunkhash].chunk.js';
}

const config = {
  node: {
    fs: 'empty',
  },
  entry: {
    main: 'src/index.ts',
  },
  output: {
    path: BUILD_DIR,
    publicPath: '/dist/',
    libraryTarget: 'umd',
  },
  resolve: {
    alias: {
      src: SRC_DIR,
      'react-dom': '@hot-loader/react-dom',
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    symlinks: false,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          'thread-loader',
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              // disable gzip compression for cache files
              // faster when there are millions of small files
              cacheCompression: false,
              plugins: ['emotion'],
            },
          },
          {
            loader: 'ts-loader',
            options: {
              // transpile only in happyPack mode
              // type checking is done via fork-ts-checker-webpack-plugin
              happyPackMode: true,
              transpileOnly: true,
              // must override compiler options here, even though we have set
              // the same options in `tsconfig.json`, because they may still
              // be overriden by `tsconfig.json` in node_modules subdirectories.
              compilerOptions: {
                esModuleInterop: false,
                importHelpers: false,
                module: 'esnext',
                target: 'esnext',
              },
            },
          },
        ],
      },
      {
        test: /\.(jpg|gif|png)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({
      dry: false,
      // required because the build directory is outside the frontend directory:
      dangerouslyAllowCleanPatternsOutsideProject: true,
    }),
  ],
  externals: [
    {
      react: {
        commonjs: 'react',
        commonjs2: 'react',
        amd: 'react',
        root: 'react',
      },
      'react-dom': 'react-dom',
    },
    /^(@superset-ui\/.+)$/,
  ],
  devtool: false,
};

// let proxyConfig = getProxyConfig();

// if (isDevMode) {
//   config.devtool = "eval-cheap-module-source-map";
//   config.devServer = {
//     before(app, server, compiler) {
//       // load proxy config when manifest updates
//       const hook = compiler.hooks.webpackManifestPluginAfterEmit;
//       hook.tap("ManifestPlugin", (manifest) => {
//         proxyConfig = getProxyConfig(manifest);
//       });
//     },
//     historyApiFallback: true,
//     hot: true,
//     injectClient: false,
//     injectHot: true,
//     inline: true,
//     stats: "minimal",
//     overlay: true,
//     port: devserverPort,
//     // Only serves bundled files from webpack-dev-server
//     // and proxy everything else to Superset backend
//     proxy: [
//       // functions are called for every request
//       () => {
//         return proxyConfig;
//       },
//     ],
//     contentBase: path.join(process.cwd(), "../static/assets"),
//   };
// }

module.exports = config;
