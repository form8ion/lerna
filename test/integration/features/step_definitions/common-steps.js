import {resolve} from 'path';
import {After, Given, When} from '@cucumber/cucumber';
import stubbedFs from 'mock-fs';

const stubbedNodeModules = stubbedFs.load(resolve(__dirname, '..', '..', '..', '..', 'node_modules'));

After(function () {
  stubbedFs.restore();
});

Given('the project will use the {string} package manager', async function (packageManager) {
  this.packageManager = packageManager;
});

When('the project is scaffolded', async function () {
  // eslint-disable-next-line import/no-extraneous-dependencies,import/no-unresolved
  const {scaffold} = require('@form8ion/lerna');

  stubbedFs({
    node_modules: stubbedNodeModules
  });

  this.results = await scaffold({projectRoot: process.cwd(), packageManager: this.packageManager});
});
