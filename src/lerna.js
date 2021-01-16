import {promises as fs} from 'fs';

export default function ({projectRoot}) {
  fs.writeFile(`${projectRoot}/lerna.json`, JSON.stringify({version: 'independent', packages: ['packages/*']}));

  return {
    devDependencies: ['lerna'],
    scripts: {bootstrap: 'lerna bootstrap', 'test:packages': 'lerna run --parallel test'},
    badges: {
      contribution: {
        lerna: {
          text: 'lerna',
          link: 'https://lerna.js.org/',
          img: 'https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg'
        }
      }
    }
  };
}
