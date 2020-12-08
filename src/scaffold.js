import deepmerge from 'deepmerge';
import scaffoldLerna from './lerna';
import scaffoldRelease from './release';

export default async function () {
  return deepmerge.all(await Promise.all([scaffoldLerna(), scaffoldRelease()]));
}
