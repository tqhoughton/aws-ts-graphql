const path = require('path');
const TsConfigPathsPlugin = require('awesome-typescript-loader').TsConfigPathsPlugin;
const globSync = require('glob/sync');
const nodeExternals = require('webpack-node-externals');

const SRC_DIR = path.resolve(__dirname, '../src/lambdas');
const OUT_DIR = path.resolve(__dirname, '../deploy/cloudformation/build/lambdas');

const lambdas = globSync(SRC_DIR + '/**/*.ts');

const config = {
  mode: 'none',
  entry: lambdas.reduce((acc, lambda) => {
    const file = path.basename(lambda);
    const fileNoExtension = file.split('.')[0];
    acc[fileNoExtension] = lambda;
    return acc;
  }, {}),
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  // aws-sdk is already available in the Node.js Lambda environment
  //  so it should not be included in function bundles
  externals: [
    'aws-sdk',
    nodeExternals()
  ],
  output: {
    path: OUT_DIR,
    filename: '[name]/index.js',
    library: '[name]',
    libraryTarget: 'umd'
  },
  target: 'node',
  optimization: {
    minimize: false
  },
  resolve: {
    extensions: [ '.ts', '.js' ],
    plugins: [
      new TsConfigPathsPlugin(/* { tsconfig, compiler } */)
    ]
  }
};

module.exports = config;