import { ESLint } from 'eslint';

describe('main config', () => {
   it('should lint file successfully, and return some warnings', async () => {
      expect.assertions(1);
      
      const cli = new ESLint({ useEslintrc: true }); 
      const res = await cli.lintFiles('./src/testing-files/file2.ts');
      
      expect(res[0].warningCount).toBeGreaterThan(0);
   }); 
   it('should lint file successfully, and return some warnings #2', async () => {
      expect.assertions(1);
      
      const cli = new ESLint({ useEslintrc: true });
      const res = await cli.lintFiles('./src/testing-files/file1.js');
   
      expect(res[0].warningCount).toBeGreaterThan(0);
   });   
   it('should be able to pick up linting problems specific to jest plugin', async () => {
      expect.assertions(1);
      
      const cli = new ESLint({ useEslintrc: true });
      const res = await cli.lintFiles([ './src/testing-files/index.spec.ts' ]);
   
      expect(res[0].messages).toEqual(
         expect.arrayContaining([ expect.objectContaining({ ruleId: 'jest/no-conditional-expect' }), expect.objectContaining({ ruleId: 'jest/no-conditional-in-test' }), expect.objectContaining({ ruleId: 'jest/prefer-expect-assertions' }) ])
      );
   });   
   it('should be able to pick up linting problems specific to import plugin', async () => {
      expect.assertions(1);
      
      const cli = new ESLint({ useEslintrc: true });
      const res = await cli.lintFiles([ './src/testing-files/imp1.ts', './src/testing-files/imp4.ts', './src/testing-files/imp3.ts' ]);
   
      expect(res[0].messages).toEqual(
         expect.arrayContaining([ expect.objectContaining({ ruleId: 'import/no-mutable-exports' }), expect.objectContaining({ ruleId: 'import/exports-last' }) ])
      );
   });
});
describe('react-addon config', () => {
   it('is able to pick up linting issues specific to react plugin', async () => {
      expect.assertions(1);
      
      // weirdly typescript detects error here, yet eslint runs the config fine
      const cli = new ESLint({ useEslintrc: true });
      const res = await cli.lintFiles('./src/testing-files/react-example.tsx');

      expect(res[0].messages).toEqual(
         expect.arrayContaining([
            expect.objectContaining({ ruleId: 'react/jsx-indent' }),
            expect.objectContaining({ ruleId: 'react/jsx-tag-spacing' }),
            expect.objectContaining({ ruleId: 'react/jsx-pascal-case' }),
            expect.objectContaining({ ruleId: 'react-hooks/rules-of-hooks' })
         ])
      );
   });
}); 
describe('rxjs-addon config', () => {
   it('is able to pick up linting issues specific to rxjs plugin', async () => {
      expect.assertions(1);
      
      const cli = new ESLint({ useEslintrc: true });
      const res = await cli.lintFiles('./src/testing-files/rxjs-example.tsx');

      expect(res[0].messages).toEqual(
         expect.arrayContaining([ expect.objectContaining({ ruleId: 'rxjs/no-create' }) ])
      );
   });
});

