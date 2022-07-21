# New Weather Coding task

Project allows you to:

- look for location via [Geocoding API](https://openweathermap.org/api/geocoding-api) - this allows find exact place on a globe (e.g. where there are more cities with same name)
- display weather for given location (morning (6 a.m.), day (12 p.m.) and night (9 p.m.) temperatures as well as average daily humidity)
- there are also some basic stats (minimum, maximum and average (mean) temperature)
- todo - count mode value (temperature)

## Preview on-line

You can preview project online at [https://weather-coding-task.netlify.app](https://weather-coding-task.netlify.app)

## What is still missing

Due to still working full-time and given just couple of days to achieve this task I omitted styling the app. Just added some basic styling with **Tailwind CSS**

# Running project locally

## Before you start

To run (or build) project you have to edit `.env` file in root directory and provide OpenWeatherMap API Key. You can obtain one on https://openweathermap.org/price I've used [3-hour Forecast 5 days](https://openweathermap.org/forecast5) which is available in **Free** option.

## Available Scripts

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
