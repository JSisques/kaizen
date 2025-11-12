#!/usr/bin/env node

import { execSync } from 'child_process';
import { Command } from 'commander';
import * as packageJson from '../../package.json';

const program = new Command();

program
  .name('kaizen')
  .description('CLI for generating NestJS modules with DDD structure')
  .version(packageJson.version);

// Generate command (with alias 'g')
program
  .command('generate')
  .alias('g')
  .description('Generate a NestJS module with DDD structure')
  .argument('<schematic>', 'The schematic to run (e.g., nestjs-module)')
  .argument('[name]', 'The name of the module to generate')
  .option('-p, --path <path>', 'The path where the module will be created', '')
  .action(
    (
      schematic: string,
      name: string | undefined,
      options: { path?: string },
    ) => {
      if (!name) {
        console.error('Error: Module name is required');
        process.exit(1);
      }

      const schematicName = `@jsisques/kaizen:${schematic}`;
      const args = [name];

      if (options.path) {
        args.push(`--path=${options.path}`);
      }

      try {
        // Check if schematics CLI is available
        try {
          execSync('schematics --version', { stdio: 'ignore' });
        } catch {
          console.error(
            'Error: @angular-devkit/schematics-cli is not installed.',
          );
          console.error(
            'Please install it globally: npm install -g @angular-devkit/schematics-cli',
          );
          console.error('Or use: npx @angular-devkit/schematics-cli');
          process.exit(1);
        }

        // Execute the schematic
        const command = `schematics ${schematicName} ${args.join(' ')}`;
        console.log(`Running: ${command}`);
        execSync(command, { stdio: 'inherit' });
      } catch (error) {
        console.error('Error executing schematic:', error);
        process.exit(1);
      }
    },
  );

// Parse command line arguments
program.parse(process.argv);

// Show help if no command provided
if (!process.argv.slice(2).length) {
  program.outputHelp();
}
