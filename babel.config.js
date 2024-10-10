module.exports = {
  presets: [['@babel/preset-env', { targets: { node: 'current' } }]],
  plugins: [
    ['@babel/plugin-proposal-object-rest-spread'],
    ['@babel/plugin-transform-runtime', {
      regenerator: true,
      corejs: 3
    }],
    ['module-resolver', {
      alias: {
        'ol': '@sigtuple/ol/src/ol',
      },
    }],
  ],
};
