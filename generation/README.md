# Generation

This part of the repository aims to automate the adaption of the underlying testing frameworks.
For now, it only covers `EarlGrey`’s `GREYActions`.

We chose to check the generated files into version control to have them available as documentation.

To correlate changes to the generation with changes in the generated code, please make sure to run the build before every commit.

## Development

- `npm install`
- `npm run build` builds every file specified in the `index.js`
- `npm test`

- [babel-template](https://github.com/babel/babel/tree/master/packages/babel-template): A useful tool we do not use yet for generating bigger ASTs with less code by the usage of string interpolation.
- [regex101](https://regex101.com): You might need to extract parts of a string; This tool helps you to quickly build the right Regular Expression for the job.
