import sinon from 'sinon';
import any from '@travi/any';
import {assert} from 'chai';
import * as lernaScaffolder from './lerna';
import scaffold from './scaffold';

suite('scaffolder', () => {
  let sandbox;

  setup(() => {
    sandbox = sinon.createSandbox();

    sandbox.stub(lernaScaffolder, 'default');
  });

  teardown(() => sandbox.restore());

  test('that the project is scaffolded', async () => {
    const lernaResults = any.simpleObject();
    lernaScaffolder.default.resolves(lernaResults);

    assert.deepEqual(await scaffold(), lernaResults);
  });
});
