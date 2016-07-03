"use strict";
function installingDependencies(generator) {
    if (generator.update) {
        return;
    }
    generator.npmInstall(['inversify@2.0.0-beta.8', 'underscore', 'urlsafe-base64', 'tsmvc']);
    generator.npmInstall(['inversify-dts', 'typedjson', 'typings'], { 'saveDev': true }, function () {
        generator.spawnCommand('typings', ['install', '--save', '--global', 'npm:inversify-dts/inversify/inversify.d.ts']);
        generator.spawnCommand('typings', ['install', '--save', '--global', 'dt~node']);
        generator.spawnCommand('typings', ['install', '--save', '--global', 'dt~underscore']);
        generator.spawnCommand('typings', ['install', '--save', '--global', 'dt~jasmine']);
        generator.spawnCommand('typings', ['install', '--save', '--global', 'dt~urlsafe-base64']);
        generator.spawnCommand('typings', ['install', '--save', 'npm:typedjson/js/index.d.ts']);
    });
}
exports.installingDependencies = installingDependencies;
