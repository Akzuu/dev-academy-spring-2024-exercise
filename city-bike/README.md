# City bike backend

Frontend which shows a list of city bike stations and some extra information
about them when the station is clicked. I have not used Next.js before and thus
the project structure might not be setup as it should be. This project was started with `create next app`.

## Tech

- Next.js feat. Typescript
- Apollo client for querying the GraphQL API

Next.js was chosen as the framework because I have heard many things about it but haven't had the chance to try it out yet. This exercice was the perfect chance to try it out a little and see what all the fuzz was about. It seems like a pretty neat framework and is easy to learn for someone familiar with React.

## Running in the local environment

1. Make sure you have the database up and running with the default settings given in the docker-compose by the assignment givers
2. Make sure you have to backend up and running (`../city-bike-backend`)
3. With your chosen weap... terminal, traverse into this directory (dev-academy-spring-2024-exercise/city-bike)
4. Run the following commands

```bash
npm ci
npm run dev
```

## Instructions

Go to `http:/localhost:3000` and first marvel the amazing UI that this "full-stack" developer has managed to create with their totally not limited time!

Jokes aside the horror that you see works like this:

1. From the "Asemat" list find the station that you are interested about
2. Click it
3. You will see the station information. Notice that it is sticky so you can scroll the list and still see the information.

Now in my mind the UI would have been bit lighter and had some sort of "panel" design. The rightside info panel would have been something that user would have been able to close and when used in a mobile device, opening station info would have hidden the station listing giving more space for the station info.

## What is missing?

- Any sort of responsiveness. I think implementing that would be somewhat easy with the tailwind css framework, but since I haven't used it before I didn't have time to investigate
- Accessibility
- Tests
- It would have been nice to implement fuzzy search for the stations
- Dockerfile
- Handling errors
- Loading screen
