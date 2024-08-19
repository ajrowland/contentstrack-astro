module.exports = {
  plugins: [
    require("@csstools/postcss-global-data")({
      files: ["./src/assets/style/variables.css"],
    }),
    require("postcss-nested"),
    require("postcss-compact-mq"),
    require("cssnano"),
  ],
};
