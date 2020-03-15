# Maintenance

## Tools

### Yarn

The project currently uses [Yarn v1][link-yarn-classic], and makes use of the
workspaces feature. Currently there are no plans to move to or support Yarn
v2, but pull requests are always welcome!

[link-yarn-classic]: https://classic.yarnpkg.com/lang/en/

### Lerna

Lerna is used in conjunction with Yarn Workspaces to make managing the monorepo
simpler.

[link-lerna]: https://lerna.js.org/

## Services

### GitHub Actions

Actions are used to run all CI tasks. See the `.github/workflows` folder for
more details.

#### Lint

Lint all source code, as well as commit messages.

#### Build


### Probot Settings

All GitHub repo settings for the project live within the repo. See
`.github/settings.yml` for more information.

### Dependabot

[Dependabot][link-dependabot] automatically creates PRs, which should trigger a
CI run. If all CI checks pass, then PRs can be approved, which will trigger a
merge. After sufficient test coverage, this can be changed so that PRs are
auto-merged on all CI checks passing.

[link-dependabot]: https://dependabot.com/

### CodeCov

CodeCov for code coverage reports

### CodeClimate

CodeClimate is used to point out larger issues in the codebase, for esample
repeated code blocks.
