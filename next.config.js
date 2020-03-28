const withTM = require('next-transpile-modules');
const withPlugins = require('next-compose-plugins');


const nextConfig = {
  webpack: (config) => {
    config.node = {
      fs: 'empty'
    }
    return config
  }
};


module.exports = withPlugins(
  [
    [
      withTM,
      {
        transpileModules: [
          'whatwg-url',
          'tr46',
          'fetch-mock',
          'webidl-conversions'
        ]
      }
    ]
  ],
  nextConfig
);