import {Then} from '@cucumber/cucumber';
import {assert} from 'chai';

Then('the packages will be published with semantic-release', async function () {
  const {dependencies, scripts} = this.results;

  assert.include(dependencies.javascript.development, 'semantic-release');
  assert.include(dependencies.javascript.development, 'semantic-release-monorepo');
  assert.equal(
    scripts.release,
    'lerna exec --concurrency 1 -- npx semantic-release --extends semantic-release-monorepo'
  );
});
