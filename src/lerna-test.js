import {assert} from 'chai';
import scaffold from './lerna';

suite('lerna scaffolder', () => {
  test('that a lerna monorepo is created', async () => {
    assert.deepEqual(
      await scaffold(),
      {
        devDependencies: ['lerna'],
        scripts: {bootstrap: 'lerna bootstrap', 'test:packages': 'lerna run --parallel test'}
      }
    );
  });
});
