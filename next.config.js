const withNextIntl = require('next-intl/plugin')('./src/i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your existing Next.js config here
};

module.exports = withNextIntl(nextConfig);
