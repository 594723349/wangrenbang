const px2rem = require("postcss-px2rem");
const postcss = px2rem({
  remUnit: 37.5
});

module.exports = {
  css: {
    loaderOptions: {
      postcss: {
        plugins: [postcss]
      }
    }
  }
  // ... 更多其他代码
};
