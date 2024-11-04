# Project 2: Setting Up and Working with Express.js for Server-Side Development
In this project, I explored how to leverage Express.js for creating a server, implementing middlewares, and efficiently managing routes. Express simplifies many tasks in Node.js, allowing for a more streamlined and organized approach to building web applications. I also got familiar with working with dynamic content using templating engines.

### Key Concepts Covered

#### 1. Setting Up Express.js and Adding Middlewares
- **Express Server Creation**: Set up an Express.js application as a basis for handling HTTP requests and responses.
- **Middleware Functions**: Learned the role of middleware in Express for processing requests at various stages in the request-response lifecycle. Implemented basic middlewares for logging and data parsing.

#### 2. How Middlewares Work in Express
- **Middleware Execution Flow**: Understood the execution order of middlewares, allowing efficient handling of requests with functions like `app.use()` and `app.post()`.
- **Body Parsing Middleware**: Used `body-parser` to parse incoming request bodies and retrieve data from form submissions in an easily accessible format.

#### 3. Handling Different Routes
- **Routing with Express**: Organized different routes using `app.get()`, `app.post()`, and `app.use()`. Leveraged `express.Router()` for modular routing, keeping the project structure clean and maintainable.
- **Routing with URL Segments**: Scoped routes to URL segments (e.g., `/admin`), setting up isolated paths for different functionalities.

#### 4. Parsing Incoming Requests
- **Handling Form Data**: Captured incoming request data using the body parser middleware to process and store form data.
- **POST Request Handling**: Limited specific middleware functionality to `POST` requests for handling data submission from users.

#### 5. Using Express Router for Modular Routes
- **Express Router**: Utilized `express.Router()` to manage and organize routes in separate files (`admin.js` and `shop.js`), improving the structure and readability of the codebase.

#### 6. Filtering Paths and Serving HTML Pages
- **HTML Pages as Responses**: Served static HTML pages (e.g., `shop.html`, `add-product.html`) as responses for different routes.
- **Dynamic Path Filtering**: Added routes with Express to filter paths dynamically, serving content based on the URL structure.

#### 7. Returning a 404 Page for Unknown Routes
- **404 Handling**: Added a fallback route to catch unknown paths, responding with a custom 404 HTML page for a better user experience.

#### 8. Using Helper Functions for Navigation
- **Path Helper**: Implemented a helper module (`path.js`) to determine the root directory path dynamically, ensuring correct file paths for static HTML files and assets.

#### 9. Styling with Static Files
- **Serving Static Files**: Configured Express to serve static files (e.g., CSS) using `express.static()`, allowing the application to include styling and images for the HTML pages.

#### 10. Working with Dynamic Content and Templating Engines
- **Templating Engines**: Integrated templating engines to render dynamic content, including:
  - **Pug**: Implemented views using [Pug](https://github.com/Solunska/udemy-course-nodejs-projects/tree/7e9525c04b63750419ac8cc9a240aa98ef1edb94/02.%20Working%20with%20Express.js) for concise syntax and conditional rendering.
  - **Handlebars**: Added [Handlebars](https://github.com/Solunska/udemy-course-nodejs-projects/tree/468e45ea0586d98667b75d2b4ceccc23d6ce3d73/02.%20Working%20with%20Express.js) templates for a logic-less, more HTML-like templating approach.
  - **EJS**: Worked with [EJS](https://github.com/Solunska/udemy-course-nodejs-projects/tree/797adca4503ef225b5fc38d06cae78c8bc86996e/02.%20Working%20with%20Express.js) templates to include JavaScript logic within HTML.