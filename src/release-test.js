import {assert} from 'chai';
import scaffoldRelease from './release';

suite('release scaffolder', () => {
  test('that pacakges will be released with semantic-release', async () => {
    assert.deepEqual(
      await scaffoldRelease(),
      {
        devDependencies: ['semantic-release', 'semantic-release-monorepo'],
        scripts: {
          release: 'lerna exec --concurrency 1 -- npx semantic-release --no-ci --extends semantic-release-monorepo'
        }
      }
    );
  });
});
