const moduleExports = {
  env: {
    ENVIRONMNET: process.env.ENVIRONMNET,
  },
  images: {
    domains: ['i.imgur.com'],
  },
  compiler: {
    styledComponents: true,
  },
  experimental: { images: { layoutRaw: true } },
}

module.exports = moduleExports
