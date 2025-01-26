import {fileTypes, writeConfigFile} from '@form8ion/core';

import any from '@travi/any';
import {describe, it, expect, vi} from 'vitest';

import scaffold from './lerna.js';

vi.mock('@form8ion/core');

describe('lerna scaffolder', () => {
  it('should scaffold a lerna monorepo', async () => {
    const projectRoot = any.string();
    const packageManager = any.word();

    expect(await scaffold({projectRoot, packageManager})).toEqual({
      dependencies: {javascript: {development: ['lerna']}},
      scripts: {
        bootstrap: 'lerna bootstrap',
        'test:packages': 'lerna run --parallel test',
        'test:packages:since': 'lerna run --parallel test --since HEAD'
      },
      badges: {
        contribution: {
          lerna: {
            text: 'lerna',
            link: 'https://lerna.js.org/',
            img: 'https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg'
          }
        }
      }
    });
    expect(writeConfigFile).toHaveBeenCalledWith({
      format: fileTypes.JSON,
      name: 'lerna',
      path: projectRoot,
      config: {version: 'independent', packages: ['packages/*'], npmClient: packageManager}
    });
  });
});
