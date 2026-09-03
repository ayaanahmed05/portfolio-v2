import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  output: "export",
  images: {
    unoptimized: true,
  },
  turbopack: {
    rules: {
      "**/*.mdx": {
        loaders: ["@mdx-js/loader"],
        as: "*.js",
      },
    },
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.mdx?$/,
      use: ["@mdx-js/loader"],
    });
    return config;
  },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
