import sinon from 'sinon';
import any from '@travi/any';
import {assert} from 'chai';
import * as lernaScaffolder from './lerna';
import * as releaseScaffolder from './release';
import scaffold from './scaffold';

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
    lernaScaffolder.default.withArgs({projectRoot}).resolves(lernaResults);
    releaseScaffolder.default.resolves(releaseResults);

    assert.deepEqual(await scaffold({projectRoot}), {...lernaResults, ...releaseResults});
  });
});
