// const withTM = require('next-transpile-modules')(['three'])

// /** @type {import('next').NextConfig} */
const debug = process.env.NODE_ENV !== "production";


const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    providerImportSource: "@mdx-js/react",
  },
})
module.exports = withMDX({
  typescript:{
    ignoreBuildErrors: true,
  },
  basePath: !debug ? '/thesisweb' : '',
  assetPrefix: !debug ? '/thesisweb' : '',
  // Append the default value with md extensions
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
})