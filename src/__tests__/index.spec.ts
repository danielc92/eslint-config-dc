import eslint from 'eslint';

it('should lint file successfully, and return some warnings', async () => {

   expect.assertions(1);
   const cli = new eslint.ESLint({
      useEslintrc: true
   });

   // returns a list of linting results
   const res = await cli.lintFiles('./src/examples/file2.ts');
   expect(res[0].warningCount).toBeGreaterThan(0);
    
});

it('should lint file successfully, and return some warnings #2', async () => {

   expect.assertions(1);
   const cli = new eslint.ESLint({
      useEslintrc: true
   });

   // returns a list of linting results
   const res = await cli.lintFiles('./src/examples/file1.js');
   expect(res[0].warningCount).toBeGreaterThan(0);
    
});