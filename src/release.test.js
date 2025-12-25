import {it, describe, expect} from 'vitest';

import scaffoldRelease from './release.js';

describe('release scaffolder', () => {
  it('should release the packages with semantic-release', async () => {
    expect(await scaffoldRelease()).toEqual({
      dependencies: {javascript: {development: ['semantic-release', 'semantic-release-monorepo']}},
      scripts: {
        release: 'lerna exec --concurrency 1 -- npx semantic-release --extends semantic-release-monorepo'
      }
    });
  });
});
