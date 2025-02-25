# React Express Blog
This is a full-stack web application that allows users to view and create blogs using Markdown, as well as sign up for a newsletter to stay updated on newly published content. The project was developed for educational purposes, aimed at gaining hands-on experience with Express.js and React.js. Please note that it is not intended for use as a fully functional blog, as authentication and authorization features have not yet been implemented.

Below is a brief overview of the project structure and a guide on how to get started with creating a similar project.

### Preconditions:
- Node.js needs to be installed
- MongoDB needs to be installed

### Structure
To set up the project, create two directories: a "react-client" directory to hold all the front-end logic, and a "server" directory for the server-side code. The build tool "Vite" is used to set up the React frontend with the following command: `npm create vite@latest`. Vite provides a basic project structure, making it easy to get started with development.
```
react_express_app/
├── react-client/
    ├── src/
        ├── components/
            ├── ...
            └── pages/
        ├── static/
            └── ...
        ├── App.css
        ├── App.jsx
        ├── index.css
        └── main.jsx
    ├── public/
    ├── ...
    ├── index.html
    └── package.json
└── server/
    ├── models/
    ├── routes/
    ├── services/
    ├── ...
    ├── app.js
    ├── config.js
    └── package.json

```

### Node Modules:
  1) **Front-End ("react-client"):**
      - react: A JavaScript library for building user interfaces with components.
      - react-dom: The package that enables React to render components in the DOM.
      - react-router-dom: A library for handling routing in React applications.
      - axios: A promise-based HTTP client for making API requests in JavaScript.
      - prop-types: A runtime type-checking library for React props.
      - showdown: A JavaScript library for converting Markdown to HTML.
      - dompurify: A library for sanitizing HTML and preventing XSS attacks.
  2) **Back-End ("server"):**
      - express: A fast, minimalist web framework for Node.js.
      - mongoose: An library for MongoDB and Node.js.
      - cors: A middleware for enabling Cross-Origin Resource Sharing in Node.js.
      - nodemailer: A module for sending emails from Node.js applications.
      - dotenv: A module for loading environment variables from a .env file into process.env. (development)
      - nodemon: A tool that automatically restarts a Node.js application when file changes are detected. (development)
  
To install the modules navigate to the coresponding directory (server/react-client) and use the node package manager with the following command `npm i <package-name>`. If you download this repository you can also just run `npm install` to install all modules from the package.json file.
