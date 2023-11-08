# City bike backend

Small application which queries the given city bike database and serves
the data through GraphQL API.

## Tech

- Node.js feat. Typescript
- Apollo server for listening the requests
- GraphQL API
- Postgre.js database driver

## Running in the local environment

1. Make sure you have the database up and running with the default settings given in the docker-compose by the assignment givers
2. With your chosen weap... terminal, traverse into this directory (dev-academy-spring-2024-exercise/city-bike-backend)
3. Run the following commands

```bash
npm ci
npm run dev
```

## What is missing?

- It would be neat to generate the typescript types from the database and from the GrapQL schema. There are packages for at least generating them from the database, probably one for generating them from the GraphQL schema too
- There are no tests because of the authors limited time. Tests would have been simple jest tests that would have invoked the API endpoints and checked that everything is in order.
- Serving typings to the frontend would have been nice
- Dockerfile and compose, so that one could easily start the whole program with one commands. Sorry!
- Next.js is able to work as a backend too, so this whole progaram could have been fitted inside that. However, I haven't used Next.js before so it felt safer to split the backend into its own application.
