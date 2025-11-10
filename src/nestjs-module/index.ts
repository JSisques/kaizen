import {
  Rule,
  SchematicContext,
  Tree,
  apply,
  mergeWith,
  template,
  url,
  move,
  chain,
  SchematicsException,
} from '@angular-devkit/schematics';
import { strings } from '@angular-devkit/core';
import { Schema } from './schema';

export function nestjsModule(options: Schema): Rule {
  return (tree: Tree, context: SchematicContext) => {
    // Validate module name
    if (!options.name) {
      throw new SchematicsException('Module name is required');
    }

    // Normalize module name (kebab-case)
    const moduleName = strings.dasherize(options.name);
    const moduleNamePascal = strings.classify(moduleName);
    const moduleNameCamel = strings.camelize(moduleName);

    // Determine the path
    const path = options.path || '';

    context.logger.info(`Generating NestJS module: ${moduleName}`);
    context.logger.info(`Path: ${path || './'}`);

    // Template source files
    // The __name@dasherize__ folder will be transformed to the module name
    const templateSource = apply(url('./files'), [
      template({
        ...strings,
        name: options.name,
        moduleName,
        moduleNamePascal,
        moduleNameCamel,
        path: '',
      }),
      // Move the transformed folder (moduleName) to the target path
      move(path || './'),
    ]);

    return chain([mergeWith(templateSource)])(tree, context);
  };
}

