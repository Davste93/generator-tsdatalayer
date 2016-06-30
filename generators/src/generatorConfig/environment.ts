import { TSDataLayer } from '../index';

/* Environment */
export function installingDependencies(generator: TSDataLayer): void {
  if (generator.update) {
    // We only install dependencies the first time.
    return;
  }

  generator.npmInstall(['inversify@2.0.0-beta.8', 'underscore', 'urlsafe-base64', 'tsmvc']);
  // The inversify library is constantly throwing out breaking changes.
  // We will wait until it's stable before ugprading again. For this reason, we're locking the version.

  // Install typed dependencies.
  generator.npmInstall(['inversify-dts', 'typedjson', 'typings'], { 'saveDev': true }, () => {
    generator.spawnCommand('typings', ['install', '--save', '--global', 'npm:inversify-dts/inversify/inversify.d.ts']);
    generator.spawnCommand('typings', ['install', '--save', '--global', 'dt~node']);
    generator.spawnCommand('typings', ['install', '--save', '--global', 'dt~underscore']);
    generator.spawnCommand('typings', ['install', '--save', '--global', 'dt~jasmine']);
    generator.spawnCommand('typings', ['install', '--save', '--global', 'dt~urlsafe-base64']);
    generator.spawnCommand('typings', ['install', '--save', 'npm:typedjson/js/index.d.ts']);
  });
}
