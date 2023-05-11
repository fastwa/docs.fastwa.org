const withMarkdoc = require('@markdoc/next.js');

/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = withMarkdoc(nextConfig)({
  pageExtensions: ['md', 'tsx']
});
