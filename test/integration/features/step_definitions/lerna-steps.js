import {Then} from '@cucumber/cucumber';
import {assert} from 'chai';

Then('lerna will be configured', async function () {
  assert.include(this.results.devDependencies, 'lerna');
});
