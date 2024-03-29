import {promises as fs} from 'fs';

import {assert} from 'chai';
import sinon from 'sinon';
import any from '@travi/any';

import scaffold from './lerna.js';

suite('lerna scaffolder', () => {
  let sandbox;

  setup(() => {
    sandbox = sinon.createSandbox();

    sandbox.stub(fs, 'writeFile');
  });

  teardown(() => sandbox.restore());

  test('that a lerna monorepo is created', async () => {
    const projectRoot = any.string();
    const packageManager = any.word();

    assert.deepEqual(
      await scaffold({projectRoot, packageManager}),
      {
        devDependencies: ['lerna'],
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
      }
    );
    assert.calledWith(
      fs.writeFile,
      `${projectRoot}/lerna.json`,
      `${JSON.stringify({version: 'independent', packages: ['packages/*'], npmClient: packageManager}, null, 2)}
`
    );
  });
});
