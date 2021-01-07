# AWS Starter Template
Use this as a starter for AWS + Typescript + Graphql projects. Uses NPM as the package manager (although could easily be converted to Yarn)

## How to use
1. Run `npm install`
2. Change `project.name` to what you want the stack name to be and `bucket.name` to the name of an S3 bucket that already exists
4. Ensure your AWS credentials are valid (`aws s3 ls` is a good command to make sure of this)
5. Run `npm run deploy` to deploy your stack. This will compile the typescript and deploy your AWS resources all in one step.
6. New lambda functions you add should go in `src/lambdas`. Where you put them beyond that is up to you. Do not give 2 lambda functions the same name or they will overwrite each other when deployed.

## Known issues
I tried to get this working using Webpack to load all dependencies, however `apollo-server-lambda` did not want to play nice with Webpack, so instead I opted to turn it into a Lambda Layer.

## Possible improvements
1. Prettify support
2. Better CF template splitting
3. Easier configuration
