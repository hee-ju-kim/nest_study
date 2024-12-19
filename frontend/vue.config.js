const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  outputDir: '../s3',
  devServer: {
    proxy: {
      '/api': {
        target: 'https://nest.penguri96.com/api',  // 백엔드 API 서버 주소
        changeOrigin: true,  // CORS 이슈를 해결하기 위해 필요한 옵션
      },
    },
  },
})
