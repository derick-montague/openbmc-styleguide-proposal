const CleanCSS = require("clean-css");

module.exports = function (eleventyConfig) {

  eleventyConfig.addFilter("cssmin", function(code) {
		return new CleanCSS({}).minify(code).styles;
  });
  
  return {
      dir: {
        input: "src",
        output: "docs"  
      },
      templateFormats: [
        "liquid",
        "njk",
        "md",
        "html",
        "png"
    ],
    pathPrefix: '/openbmc-styleguide-proposal'
  }
};