export default function () {
  return {
    dependencies: {javascript: {development: ['semantic-release', 'semantic-release-monorepo']}},
    scripts: {
      release: 'lerna exec --concurrency 1 -- npx semantic-release --extends semantic-release-monorepo'
    }
  };
}
