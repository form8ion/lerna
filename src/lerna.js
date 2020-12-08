import {promises as fs} from 'fs';

export default function ({projectRoot}) {
  fs.writeFile(`${projectRoot}/lerna.json`, JSON.stringify({version: 'independent', packages: ['packages/*']}));

  return {
    devDependencies: ['lerna'],
    scripts: {bootstrap: 'lerna bootstrap', 'test:packages': 'lerna run --parallel test'}
  };
}
