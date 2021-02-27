# express typescript simple boilerplate
### Purpose
To create simple, just server ready-to-go boilerplate, without any extra modules.

Just:
- typescript
- webserver (koa)
- tests (unit and e2e endpoint tests)
- ready pipelines:
  - prod (build, prod run)
  - dev (ready to work typescript watching pipeline, free of ts-node)
- .env config pipeline with expanding and ready example
- module aliasing (`src/...` paths are available in prod, dev (watching) and jest environments)
- yarn (just because)

And nothing of:
- databases
- graphql
- view templating (maybe it worth to add, but it's easy to add manually)
- websockets

and other things that are difficult to cut out and that are independent of the webserver part

Summing up, it's simple boilerplate of webserver based on koa with tests and ready build and run pipeline

### Usage:

##### production
`yarn build` to build for prod, and then

`yarn prod` to serve it (just runs `dist/src/index.js`)

##### development
`yarn start` to start working in dev mode, automatic watch and restarting server

##### testing
`yarn test` runs unit tests (`test/unit/***.test.ts`)

`yarn test:e2e` runs e2e tests (`test/e2e/***.e2e.ts`)