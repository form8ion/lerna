import {dirname, resolve} from 'node:path';
import {fileURLToPath} from 'node:url';

import {After, Given, When} from '@cucumber/cucumber';
import stubbedFs from 'mock-fs';

const __dirname = dirname(fileURLToPath(import.meta.url));          // eslint-disable-line no-underscore-dangle
const stubbedNodeModules = stubbedFs.load(resolve(__dirname, '..', '..', '..', '..', 'node_modules'));

After(function () {
  stubbedFs.restore();
});

Given('the project will use the {string} package manager', async function (packageManager) {
  this.packageManager = packageManager;
});

When('the project is scaffolded', async function () {
  // eslint-disable-next-line import/no-extraneous-dependencies,import/no-unresolved
  const {scaffold} = await import('@form8ion/lerna');

  stubbedFs({
    node_modules: stubbedNodeModules
  });

  this.results = await scaffold({projectRoot: process.cwd(), packageManager: this.packageManager});
});
