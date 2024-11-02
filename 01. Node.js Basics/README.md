# Section 1: Building a Basic Node.js Server with Routing and Request Handling

## Concepts Covered

In this section, I covered a range of foundational Node.js concepts:

### 1. Creating a Node.js Server
- **Using the `http` Module** to create a basic server using the `http` module to handle incoming requests.

### 2. Node Lifecycle and Event Loop
- **Event-Driven, Non-Blocking Model**: Understanding how Node.js manages the lifecycle of requests with an event-driven, non-blocking I/O model. The event loop enables asynchronous code execution, allowing for efficient handling of multiple tasks.

### 3. Understanding Requests and Sending Responses
- **Accessing Request Information**: Learned how to access request data, such as the URL and method, to process and respond appropriately.

### 4. Request and Response Headers
- **Setting Headers**: Used response headers (e.g., `Content-Type`) to inform the client about the response content.

### 5. Routing Requests
- **Routing Based on URL and Method**: Implemented routing to handle different requests based on the URL path and HTTP method, allowing for varied responses based on the request.

### 6. Redirecting Requests
- **Redirection with Status Code 302**: Implemented redirection using status code `302` and set headers to reroute clients to a new URL.

### 7. Parsing Request Bodies
- **Handling Incoming Data**: Processed request bodies by collecting data chunks, then converting them to a readable format for further use.

### 8. Event-Driven Code Execution
- **Using `data` and `end` Events**: Managed incoming data streams with the `data` and `end` events to handle chunks of data from requests in an event-driven manner.

### 9. Blocking vs. Non-Blocking Code
- **Synchronous vs. Asynchronous Operations**: Understanding the difference between synchronous (blocking) and asynchronous (non-blocking) operations. Using non-blocking methods (e.g., `fs.writeFile`) allows the code to proceed without waiting for I/O operations.

### 10. Using the Node Modules System
- **Modular Code Structure**: Organized code by exporting and importing custom modules (e.g., `routes.js`) to keep logic separate and organized.