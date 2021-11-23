module.exports = {
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          loaders: ['style', 'css', 'sass'],
        },
      ],
    },
  };