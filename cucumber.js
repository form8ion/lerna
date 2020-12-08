module.exports = {
  base: '--require-module @babel/register --format-options \'{"snippetInterface": "async-await"}\' --publish-quiet',
  wip: '--tags "@wip"',
  noWip: '--tags "not @wip"',
  focus: '--tags @focus'
};
