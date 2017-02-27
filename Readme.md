# Rocket Survey

## Description
Test assignment for RocketSurvey

## To run the app
`npm install` -> `npm start`

## Notes
* The interesting/challenging part of this assignment was dynamic creation of input fields depending on
the questions from the api. I first implemented it using `$compile`, but later found out it can be done
via template function (didn't know directive templates can be functions :-O ). Later I refactored out a 
big chunk of redundant code, but there's still directive using `$compile` that can be simplified even more
* In retrospect, not much detail was put into styling, so the page looks a bit ugly and layout may break