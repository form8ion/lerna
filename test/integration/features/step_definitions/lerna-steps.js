import {promises as fs} from 'fs';
import {Then} from '@cucumber/cucumber';
import {assert} from 'chai';

Then('lerna will be configured', async function () {
  const {devDependencies, scripts} = this.results;
  const lernaConfig = JSON.parse(await fs.readFile(`${process.cwd()}/lerna.json`, 'utf-8'));

  assert.include(devDependencies, 'lerna');
  assert.equal(scripts.bootstrap, 'lerna bootstrap');
  assert.equal(scripts['test:packages'], 'lerna run --parallel test');
  assert.equal(scripts['test:packages:since'], 'lerna run --parallel test --since HEAD');
  assert.deepEqual(lernaConfig, {version: 'independent', packages: ['packages/*'], npmClient: this.packageManager});
});
