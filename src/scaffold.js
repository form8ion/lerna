import deepmerge from 'deepmerge';
import scaffoldLerna from './lerna';
import scaffoldRelease from './release';

export default async function ({projectRoot}) {
  return deepmerge.all(await Promise.all([scaffoldLerna({projectRoot}), scaffoldRelease()]));
}
