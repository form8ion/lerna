export default function () {
  return {
    devDependencies: ['semantic-release', 'semantic-release-monorepo'],
    scripts: {
      release: 'lerna exec --concurrency 1 -- npx semantic-release --no-ci --extends semantic-release-monorepo'
    }
  };
}
