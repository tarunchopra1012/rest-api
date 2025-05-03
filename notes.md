Note: Jest is an open-source JavaScript testing framework. It’s popular for its simplicity and good performance. It provides rich features, including parallel execution, snapshot testing, built-in code coverage, and more.

The dist folder is where the transpiled JavaScript code is placed.

tsconfig.json (line 12): This file contains the TypeScript configuration for our NestJS project. It specifies various TypeScript compiler options.

nest-cli.json (line 13): This file provides the project-specific settings for the NestJS CLI, including paths to directories and the naming convention for generated files.

README.md (line 14): This file is the documentation file for the project. It typically contains the overview, installation instructions, and other details that users need to know.

# Representational state transfer (REST) is a popular architectural style for web services and APIs. First introduced by Roy Fielding in 2000, it provides a set of principles and guidelines for building APIs, such as client-server communication, statelessness, uniform interfaces, and resource-based URLs.

RESTful API provides rules for different systems to understand each other easily.

## A stateless request is independent and self-contained, so the server doesn’t need to maintain session data. It means we can add or remove servers easily when demand changes. Statelessness also simplifies caching because responses to requests can be cached without worrying about managing session data, further improving performance and scalability.

For example, a RESTful API for managing users can use the following resource-based URLs:

List of users: GET /users

Retrieve user details: GET /users/{userId} (for example, GET /users/123)

Add a new user: POST /user

Update user details: PUT /users/{userId} (for example, PUT /users/123)

Delete a user: DELETE /users/{userId} (for example, DELETE /users/123)

This principle suggests that a RESTful API should be organized into a hierarchy of layers, each with a specific responsibility. Communication between clients and servers should occur through these layers, and clients should be unaware of the inner workings of other layers.

This separation enhances flexibility and allows for introducing intermediaries, such as proxies and load balancers, without affecting the overall system.

## 3 Layers

Application layer: This layer is responsible for receiving and processing the HTTP requests from the client. When it receives a request, it calls the service layer to retrieve the data.

Service layer: The service layer is an intermediary layer, responsible for processing business logic and fetching and returning data.

Data layer: The data layer stores the data in a database or retrieves the data from external sources. This layer manages data storage, retrieval, and caching.

HTTPS operates at the transport layer. It handles the encryption and decryption of data as it moves between the client and the server.

HTTPS adds an essential layer of security by encrypting data in transit. It doesn’t change the other layers. The layered architecture remains, and it can coexist seamlessly with HTTPS to provide security and flexibility.

## Code on demand

This principle allows the server to extend the client’s functionality by sending executable code, such as JavaScript, that the client can execute. The client can execute the received code to incorporate dynamic features without the need for prior implementation.

This approach is commonly used for adding interactive and real-time components to web applications. However, it’s important to note that the use of code on demand is relatively limited and must be carefully managed to ensure security and compatibility.

While adhering to all the constraints—including cacheability, a uniform interface, a layered system, and code on demand—can help an API be more robust and flexible, the term “RESTful” can still apply if an API follows the fundamental principles of statelessness, resource-based URLs, and client-server architecture but doesn’t follow some of the other principles.

We can leverage NestJS to develop a wide range of applications, spanning from RESTful APIs and GraphQL services to WebSocket-based applications and beyond.