# Advanced ToDo App

Welcome to Adv ToDo List App.
How is this app different from other ToDo lists?
This web app, built with React allows you to see in a nicer layout each task in a card, which will allow them to be marked as complete and be marked in a different color if the due date is approaching or is past due.

## Available Scripts

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


## Tech Stack

React Js - One of the most currently used framework. The main reason for developing this specific project in this framework, is because although I prefer React Native, this project can run locally in more devices when downloaded.

Redux - It has been installed, as the development moves forward, I will decide if I will manage states with it or if switch to React Context Hooks.

Typescript - This is a strongly typed programming language that builds on Javascript. It is part of this project, with the intention to catch any kind of incorrect data management, due to passing the wrong type of props into different components.

Styled Components - It allows, as the name says, to write CSS code to style components, utilising tagged template literals. It removes the mapping between components and styles, making styling faster and easier.

React app rewired styled components - This gives a nicer generated class names that include the components' name, minification of styles and many more goodies.

Jest and React Testing Library - This library is installed, though not yet implemented, if the time constrain allows, all components will be tested as well.
