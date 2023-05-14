import { ESLint } from 'eslint';

describe('.eslintrc.js suite', () => {
   it.each<{
      testName: string,
      input: string[],
      output: {ruleId: string, severity: 0 | 1 | 2}[]
   }>([
      {
         testName: 'eslint-core',
         input: [ './src/testing-files/eslint-core' ],
         output: [ 
            {
               ruleId: 'no-multi-spaces',
               severity: 1 
            },
            {
               ruleId: 'semi',
               severity: 1 
            },
            {
               ruleId: 'padding-line-between-statements',
               severity: 1 
            },
            {
               ruleId: 'quotes',
               severity: 1 
            },
            {
               ruleId: 'object-curly-spacing',
               severity: 1 
            },
            {
               ruleId: 'eol-last',
               severity: 1 
            },
            {
               ruleId: 'padded-blocks',
               severity: 1 
            },
            {
               ruleId: 'no-multiple-empty-lines',
               severity: 1 
            },
            {
               ruleId: 'key-spacing',
               severity: 1 
            }
         ] 
      }, 
      {
         testName: 'react-plugin',
         input: [ './src/testing-files/react-plugin' ],
         output: [ 
            {
               ruleId: 'react/jsx-indent',
               severity: 1 
            },
            {
               ruleId: 'react/jsx-tag-spacing',
               severity: 1 
            },
            {
               ruleId: 'react/jsx-pascal-case',
               severity: 1 
            },
         ] 
      }, 
      {
         testName: 'react-plugin-react-hooks',
         input: [ './src/testing-files/react-plugin' ],
         output: [ 
         
            {
               ruleId: 'react-hooks/rules-of-hooks',
               severity: 1
            },
            {
               ruleId: 'react-hooks/exhaustive-deps',
               severity: 1
            }
         ] 
      }, 
      {
         testName: 'import-plugin',
         input: [ './src/testing-files/import-plugin' ],
         output: [
            {
               ruleId: 'import/no-mutable-exports',
               severity: 2 
            },
            {
               ruleId: 'import/exports-last',
               severity: 1 
            } 
         ] 
      }, 
      {
         testName: 'rxjs-plugin',
         input: [ './src/testing-files/rxjs-plugin' ],
         output: [
            {
               ruleId: 'rxjs/no-create',
               severity: 2 
            } 
         ] 
      },
      {
         testName: 'sonarjs-plugin',
         input: [ './src/testing-files/sonarjs-plugin' ],
         output: [ 
            {
               ruleId: 'sonarjs/no-one-iteration-loop',
               severity: 2 
            },
            {
               ruleId: 'sonarjs/no-redundant-jump',
               severity: 2 
            },
            {
               ruleId: 'sonarjs/no-same-line-conditional',
               severity: 2 
            },
            {
               ruleId: 'sonarjs/no-inverted-boolean-check',
               severity: 2 
            } 
         ] 
      },
      {
         testName: 'typescript-plugin',
         input: [ './src/testing-files/typescript-plugin' ],
         output: [
            {
               ruleId: '@typescript-eslint/ban-types',
               severity: 2 
            },
            {
               ruleId: '@typescript-eslint/no-unused-vars',
               severity: 1 
            },
            {
               ruleId: '@typescript-eslint/no-empty-interface',
               severity: 2 
            }
         ] 
      },
      {
         testName: 'secret-plugin',
         input: [ './src/testing-files/secret-plugin' ],
         output: [
            {
               ruleId: 'no-secrets/no-secrets',
               severity: 2 
            } 
         ]
      },
      {
         testName: 'jest-plugin',
         input: [ './src/testing-files/jest-plugin' ],
         output: [
            {
               ruleId: 'jest/no-conditional-expect',
               severity: 2 
            },
            {
               ruleId: 'jest/no-conditional-in-test',
               severity: 2 
            },
            {
               ruleId: 'jest/prefer-expect-assertions',
               severity: 2 
            } 
         ]
      } 
   ])('$testName - linting against $input should contain output: $output', async ({ input, output, testName }) => {
      expect.assertions(1);
      const cli = new ESLint({ useEslintrc: true });
      const res = await cli.lintFiles(input);
   
      // console.log(res[0].messages.map((x) => x.ruleId));
      expect(res[0].messages).toEqual(
         expect.arrayContaining(
            output.map((obj) => expect.objectContaining(obj))
         )
      );
   });
});
