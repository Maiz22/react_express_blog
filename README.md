# [React Express Blog](https://github.com/Maiz22/react_express_blog)
This is a full-stack web application that allows users to view and create blogs using Markdown, as well as sign up for a newsletter to stay updated on newly published content. The project was developed for educational purposes, aimed at gaining hands-on experience with Express.js and React.js. Please note that it is not intended for use as a fully functional blog, as authentication and authorization features have not yet been implemented.

## Project Structure and Setup
Below is a brief overview of the project structure and a guide on how to get started with creating a similar project.

### Preconditions
- Node.js needs to be installed
- MongoDB needs to be installed

### Structure
To set up the project, create two directories: a "react-client" directory to hold all the front-end logic, and a "server" directory for the server-side code. The build tool "Vite" is used to set up the React frontend with the following command: `npm create vite@latest`. Vite provides a basic project structure, making it easy to get started with development.

**Client-Side Structure**

On the client side, we have basic configuration files, the base HTML file (index.html), and two main directories: src and public.
The src directory contains the React entry point (main.jsx), all React components along with their corresponding .css files, and a static directory for static assets used within the React application.
The public directory stores static files that are served directly by the web server to the index.html file. These files do not go through the React build process and can include assets such as images, fonts, and icons.

**Server-Side Structure**

On the server side, we have the main application file (app.js), a configuration file (config.js), and three key directories:
- models: Contains all Mongoose schemas and models used to interact with the MongoDB database. Each model defines the structure of a specific collection in the database.
- routes: Handles server-side routing by defining API endpoints. Each route typically maps HTTP requests (GET, POST, PUT, DELETE) to specific controller functions.
- services: Contains additional server-side functionalities, such as sending newsletter emails, handling authentication (if implemented later), or other background tasks.

This structure helps maintain a clean separation of concerns, making the codebase more modular and easier to scale.
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

### Node Modules
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

## Functional Scope
1) "Index" or "Home" view displaying all blog articles, sorted from newest to oldest. ![Screenshot 2025-02-25 183458](https://github.com/user-attachments/assets/49bb53f1-fb67-4d67-8d49-da7c6d2e7516)

2) "New Article" view featuring a text field where users can write in Markdown and see a live preview of the formatted content as they type. ![Screenshot 2025-02-25 183637](https://github.com/user-attachments/assets/cf0482e8-74ef-4602-a2a0-fcfc424fc091)

3) "About" view providing a brief overview of the purpose and goals of the web application. ![image](https://github.com/user-attachments/assets/7c79d909-33bf-4376-b78a-c84e8ea06af8)

4) "Join" view where a user can sign up to a newsletter. ![image](https://github.com/user-attachments/assets/70aa9be2-ec35-4017-817f-1049aafec9e0)
