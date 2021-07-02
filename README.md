# YConsult Interview Test

The test is to implement an existing feature in the Glide app that I believe is a great mix of working with API data and UI.

I will show you the designs and your task is to implement the different scenarios of the feature.

To outline, you will have to seperate the data coming from the API into active and inactive services. Then display them differently to the user according to the design.

## Running the app

```
yarn install
yarn start
```

## Before you begin

The project structure generally replicates the existing app.

When you boot the app you will see the starting UI declared in `src/screens/MyHouseScreen.tsx` which is where you will start coding. Please familiarise yourself with this file first.

#### Data

The mock API data can be changed by changing the `SCENARIO` number at the top of `MyHouseScreen.tsx`. (If you want to see the data in full it is located in `src/services/portal/test-scenarios.ts`)

#### Components

I have given a selection of basic components to use for text and layout under `src/components/atoms` which you can use. Examples exist in `MyHouseScreen.tsx`. However you will likely have to create your own components as part of the test.

## Your first task

will be to display only the active components according to the design. Then the inactive components in the same API response. I will add more as we go.

Hope that all makes sense - good luck!
