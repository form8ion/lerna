import sinon from 'sinon';
import any from '@travi/any';
import {assert} from 'chai';

import * as lernaScaffolder from './lerna.js';
import * as releaseScaffolder from './release.js';
import scaffold from './scaffold.js';

suite('scaffolder', () => {
  let sandbox;

  setup(() => {
    sandbox = sinon.createSandbox();

    sandbox.stub(lernaScaffolder, 'default');
    sandbox.stub(releaseScaffolder, 'default');
  });

  teardown(() => sandbox.restore());

  test('that the project is scaffolded', async () => {
    const projectRoot = any.string();
    const lernaResults = any.simpleObject();
    const releaseResults = any.simpleObject();
    const packageManager = any.word();
    lernaScaffolder.default.withArgs({projectRoot, packageManager}).resolves(lernaResults);
    releaseScaffolder.default.resolves(releaseResults);

    assert.deepEqual(await scaffold({projectRoot, packageManager}), {...lernaResults, ...releaseResults});
  });
});
