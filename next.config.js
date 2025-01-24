const nextConfig = {
  /* config options here */
  webpack: (config, { dev, defaultLoaders }) => {
    config.module.rules.push({
      test: /\.js|jsx$/,
      include: (modPath) => {
        return modPath.indexOf('node_modules') === -1
      },
      use: defaultLoaders.babel
    });
    return config
  },
};

module.exports = nextConfig;
