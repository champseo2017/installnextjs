const withPlugins = require("next-compose-plugins");
const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");
const withImages = require("next-images");
const dev = process.env.NODE_ENV !== "production";

const nextConfig = {
  poweredByHeader: false,
  generateBuildId: async () => {
    return process.env.BUILD_ID ? process.env.BUILD_ID : "1.0.0";
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.node = {
        fs: "empty",
      };
    }
    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
      use: {
        loader: "url-loader",
        options: {
          limit: 100000,
          name: "[name].[ext]",
        },
      },
    });
    return config;
  },
};

module.exports = withPlugins([[withCSS], [withSass], [withImages]], nextConfig);