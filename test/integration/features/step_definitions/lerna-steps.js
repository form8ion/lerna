import {Then} from '@cucumber/cucumber';
import {assert} from 'chai';

Then('lerna will be configured', async function () {
  const {devDependencies, scripts} = this.results;

  assert.include(devDependencies, 'lerna');
  assert.equal(scripts.bootstrap, 'lerna bootstrap');
  assert.equal(scripts['test:packages'], 'lerna run --parallel test');
});
