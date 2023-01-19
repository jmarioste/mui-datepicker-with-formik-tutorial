const withPreact = require("next-plugin-preact");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  rewrites() {
    return [
      {
        source: "/graphql",
        destination: `${process.env.API_URL_BASE}/graphql`,
      },
    ];
  },
};

module.exports = withPreact(nextConfig);
