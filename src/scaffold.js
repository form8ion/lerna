import deepmerge from 'deepmerge';

import scaffoldLerna from './lerna.js';
import scaffoldRelease from './release.js';

export default async function ({projectRoot, packageManager}) {
  return deepmerge.all(await Promise.all([scaffoldLerna({projectRoot, packageManager}), scaffoldRelease()]));
}
