import eslint from 'eslint';
import reactConfig from '../../react-addon';
import rxjsConfig from '../../rxjs-addon';

describe('main config', () => {
   it('should lint file successfully, and return some warnings', async () => {
      expect.assertions(1);
      
      const cli = new eslint.ESLint({ useEslintrc: true }); 
      const res = await cli.lintFiles('./src/examples/file2.ts');
      
      expect(res[0].warningCount).toBeGreaterThan(0);
   }); 
   it('should lint file successfully, and return some warnings #2', async () => {
      expect.assertions(1);
      
      const cli = new eslint.ESLint({ useEslintrc: true });
      const res = await cli.lintFiles('./src/examples/file1.js');
   
      expect(res[0].warningCount).toBeGreaterThan(0);
   });
});
describe('react-addon config', () => {
   it('is able to pick up linting issues specific to react plugin', async () => {
      expect.assertions(1);
      
      // weirdly typescript detects error here, yet eslint runs the config fine
      const cli = new eslint.ESLint({ overrideConfig: reactConfig }); 
      const res = await cli.lintFiles('./src/examples/react-example.tsx');

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
      
      const cli = new eslint.ESLint({ overrideConfig: rxjsConfig }); 
      const res = await cli.lintFiles('./src/examples/rxjs-example.tsx');

      expect(res[0].messages).toEqual(
         expect.arrayContaining([ expect.objectContaining({ ruleId: 'rxjs/no-create' }) ])
      );
   });
});
