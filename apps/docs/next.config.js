const withTM = require("next-transpile-modules")(["@jake/brewda"]);

module.exports = withTM({
  reactStrictMode: true,
});
