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
    const templateSource = apply(url('./files'), [
      template({
        ...strings,
        moduleName,
        moduleNamePascal,
        moduleNameCamel,
        path: '',
      }),
      move(path ? `${path}/${moduleName}` : moduleName),
    ]);

    return chain([mergeWith(templateSource)])(tree, context);
  };
}

