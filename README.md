# Basic cucumber + cypress POC

### Some basic steps to run the project:

- `cd` into the project and `run`:

```
npm i
npm run cypress:open
```

### To handle env

Im using the https://docs.cypress.io/guides/guides/environment-variables#Option-2-cypressenvjson approach

- This strategy is useful because if you add cypress.env.json to your .gitignore file, the values in here can be different for each developer machine.

{
"host": "veronica.dev.local",
"api_server": "http://localhost:8888/api/v1/"
}

- From test file
  Cypress.env() // {host: 'veronica.dev.local', api_server: 'http://localhost:8888/api/v1'}
  Cypress.env('host') // 'veronica.dev.local'
  Cypress.env('api_server') // 'http://localhost:8888/api/v1/'
