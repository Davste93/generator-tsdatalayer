"use strict";
function prompting(generator) {
    var done = generator.async();
    if (generator.update === true) {
        var lastCfg = JSON.parse(generator.fs.read(generator.destinationPath(generator.configFilename)));
        generator.props = {
            objectModelSource: lastCfg.objectModelSource,
            endpointUrl: lastCfg.endpointUrl,
            omJsonFile: lastCfg.omJsonFile,
            dest: lastCfg.dest
        };
        generator.log(("I'm updating your " + lastCfg.dest + " folder, with the following datasource:\n") +
            (lastCfg.objectModelSource + " [" + (lastCfg.endpointUrl || lastCfg.omJsonFile) + "]"));
        done();
        return;
    }
    generator.prompt([{
            type: 'list',
            name: 'objectModelSource',
            message: 'Hello! I can take care of the grunt work and boring data layer stuff in your application. Do you want me to ' +
                'connect to a HATEOAS endpoint, or would you like to load the object model directly from a JSON file?',
            choices: ['JSON', 'HATEOAS'],
            default: 'HATEOAS'
        }, {
            type: 'input',
            when: function (answers) {
                return answers['objectModelSource'] === 'HATEOAS';
            },
            name: 'endpointUrl',
            message: 'What\'s the name of your endpoint? Please use this format: https://api.yoursite.com/profile',
            default: 'https://api.fundsrouter.com/profile'
        }, {
            type: 'input',
            when: function (answers) {
                return answers['objectModelSource'] === 'JSON';
            },
            name: 'omJsonFile',
            message: 'Which JSON file has your object model?',
            default: 'last.objectModel.json'
        },
        { type: 'input',
            name: 'dest',
            message: 'Where should I place the generated files?',
            default: 'src/app/generated'
        }], function (answers) {
        generator.props = answers;
        generator.fs.write(generator.destinationPath(generator.configFilename), JSON.stringify(answers, null, '\t'));
        done();
    }.bind(this));
}
exports.prompting = prompting;
