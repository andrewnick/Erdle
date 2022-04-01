const withPlugins = require("next-compose-plugins");

const withTM = require("next-transpile-modules")(["ui"]);
const withPWA = require("next-pwa");

const nextConfig = {
  reactStrictMode: true,
};

const tm = [withTM];

const pwa = [
  withPWA,
  {
    pwa: {
      dest: "public",
    },
  },
];

module.exports = withPlugins([tm, pwa], nextConfig);
