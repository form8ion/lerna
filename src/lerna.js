import {fileTypes, writeConfigFile} from '@form8ion/core';

export default async function ({projectRoot, packageManager}) {
  await writeConfigFile({
    format: fileTypes.JSON,
    name: 'lerna',
    path: projectRoot,
    config: {version: 'independent', packages: ['packages/*'], npmClient: packageManager}
  });

  return {
    dependencies: {javascript: {development: ['lerna']}},
    scripts: {
      bootstrap: 'lerna bootstrap',
      'test:packages': 'lerna run --parallel test',
      'test:packages:since': 'lerna run --parallel test --since HEAD'
    },
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
