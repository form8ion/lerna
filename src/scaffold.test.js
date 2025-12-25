import deepmerge from 'deepmerge';

import any from '@travi/any';
import {it, describe, vi, expect} from 'vitest';
// eslint-disable-next-line import/no-unresolved
import {when} from 'vitest-when';

import scaffoldLerna from './lerna.js';
import scaffoldRelease from './release.js';
import scaffold from './scaffold.js';

vi.mock('deepmerge');
vi.mock('./lerna.js');
vi.mock('./release.js');

describe('scaffolder', () => {
  it('should scaffold the lerna project', async () => {
    const projectRoot = any.string();
    const packageManager = any.word();
    const mergedResults = any.simpleObject();
    const lernaResults = any.simpleObject();
    const releaseResults = any.simpleObject();
    when(scaffoldLerna).calledWith({projectRoot, packageManager}).thenResolve(lernaResults);
    when(scaffoldRelease).calledWith().thenResolve(releaseResults);
    when(deepmerge.all).calledWith([lernaResults, releaseResults]).thenReturn(mergedResults);

    expect(await scaffold({projectRoot, packageManager})).toEqual(mergedResults);
  });
});
