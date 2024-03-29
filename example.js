// #### Import
// remark-usage-ignore-next
import stubbedFs from 'mock-fs';
import {packageManagers} from '@form8ion/javascript-core';
import {scaffold} from './lib/index.cjs.js';

// remark-usage-ignore-next
stubbedFs();

// #### Execute

(async () => {
  await scaffold({projectRoot: process.cwd(), packageManager: packageManagers.NPM});
})();
