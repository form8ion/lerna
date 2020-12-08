export default function () {
  return {
    devDependencies: ['lerna'],
    scripts: {bootstrap: 'lerna bootstrap', 'test:packages': 'lerna run --parallel test'}
  };
}
