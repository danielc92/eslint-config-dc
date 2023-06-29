import { ESLint } from 'eslint';

describe('.eslintrc.js suite', () => {
   it.each<{
      testName: string,
      input: Array<string>,
      output: Array<{ruleId: string, severity: 0 | 1 | 2}>
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
               ruleId: 'react/jsx-handler-names',
               severity: 1
            },
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
            }
         ] 
      }, 
      {
         testName: 'jestdom-plugin',
         input: [ './src/testing-files/jestdom-plugin' ],
         output: [ 
      
            {
               ruleId: 'jest-dom/prefer-to-have-class',
               severity: 2
            },
            {
               ruleId: 'jest-dom/prefer-to-have-style',
               severity: 2 
            }
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
         testName: 'promise-plugin',
         input: [ './src/testing-files/promise-plugin' ],
         output: [
            {
               ruleId: 'promise/no-new-statics',
               severity: 2 
            },
            {
               ruleId: 'promise/catch-or-return',
               severity: 2 
            },
            {
               ruleId: 'promise/no-return-wrap',
               severity: 2 
            },
            {
               ruleId: 'promise/param-names',
               severity: 2 
            },
            {
               ruleId: 'promise/no-return-in-finally',
               severity: 1
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
      },
      {
         testName: 'unicorn',
         input: [ './src/testing-files/unicorn' ],
         output: [
            {
               ruleId: 'unicorn/consistent-function-scoping',
               severity: 2 
            },
            {
               ruleId: 'unicorn/prevent-abbreviations',
               severity: 2 
            },
            {
               ruleId: 'unicorn/error-message',
               severity: 2 
            },
            {
               ruleId: 'unicorn/prefer-set-size',
               severity: 2 
            }
         ]
      } 
   ])('$testName - linting against $input should contain output: $output', async ({ input, output, testName }) => {
      expect.assertions(1);
      const cli = new ESLint({ useEslintrc: true });
      const lintingResults = await cli.lintFiles(input);
   
      expect(lintingResults[0].messages).toEqual(
         expect.arrayContaining(
            output.map((object) => expect.objectContaining(object))
         )
      );
   });
});
