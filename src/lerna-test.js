import {promises as fs} from 'fs';
import {assert} from 'chai';
import sinon from 'sinon';
import any from '@travi/any';
import scaffold from './lerna';

suite('lerna scaffolder', () => {
  let sandbox;

  setup(() => {
    sandbox = sinon.createSandbox();

    sandbox.stub(fs, 'writeFile');
  });

  teardown(() => sandbox.restore());

  test('that a lerna monorepo is created', async () => {
    const projectRoot = any.string();

    assert.deepEqual(
      await scaffold({projectRoot}),
      {
        devDependencies: ['lerna'],
        scripts: {bootstrap: 'lerna bootstrap', 'test:packages': 'lerna run --parallel test'},
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
      JSON.stringify({version: 'independent', packages: ['packages/*']})
    );
  });
});
