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

## Request

An HTTP request is a mechanism for a client to interact with the resources from the server. HTTP works based on the request-response model.

## Put Vs Patch

PATCH is for partial updates to a resource; PUT will replace the whole resource. Using PATCH, we just need to send the changed fields for updating, but when sending a PUT request, all fields are required.

The Content-Type header is used to tell the client what the response format is. The response format depends on the requested resource and the server’s implementation. Standard formats include JSON, XML, HTML, or plain text.

## Response Codes

HTTP Status Codes
Status Code

Description

# 1xx Informational

The request has been received and understood, and the server is still processing it. They are mainly used for protocol-level communication.

100—Continue
102—Processing


Example: A client sends a large file in multiple parts, and after receiving the first part, the server responds with “100 Continue” to indicate it’s ready for the next part.

# 2xx Successful

The request was successfully received, understood, and processed by the server.

200—OK
201—Created
204—No Content


Example: A successful GET request to an API returns “200 OK” along with the requested content.

# 3xx Redirection

The client must take additional actions to complete the request.

301—Moved Permanently
302—Found/Redirect


Example: A website changes its domain name, and all requests to the old domain are redirected to the new domain using “301 Moved Permanently.”

# 4xx Client Error

There was an error on the client’s side, and the server could not fulfill the request.

400—Bad Request
401—Unauthorized
403—Forbidden
404—Not Found


Example: When a client requests a nonexistent API, the server responds with “404 Not Found.”

# 5xx Server Error	

There was an error on the server’s side, and the request could not be fulfilled.

500—Internal Server Error
503—Service Unavailable


Example: An “500 Internal Server Error” error occurs when the server’s database connection fails during a database query.

### 1.
If a client sends a valid request without valid credentials, should we return 401 or 403?

## The correct status code to return is “401 Unauthorized.” This is used to indicate the missing credentials or access tokens. If the request comes with credentials but lacks permission, then we should return 403.

## Request - Response Lifecycle in Nest

Incoming Request -> Middleware -> Guards -> Interceptor -> Pipes -> Controller (Route Handlers) -> Response

Interceptor and Controller -> play roles in both the request and response phases of the life cycle.

## Middleware

Middleware: Middleware components can perform various tasks, such as transforming requests, redirecting routes, implementing caching mechanisms, applying rate limiting, and logging request-related data.

## Guards

Guards: Guards are often used for authentication and authorization purposes. We can apply guards globally or to a controller to control access to specific routes based on user roles or permissions.

## Interceptors

Interceptor: Interceptors are versatile components that can validate requests, transform responses, log data, handle validation, cache response, and manage exceptions. They are particularly useful for handling exceptions thrown by controllers and mapping them to appropriate error responses.

## Pipes

Pipes: Pipes are primarily used for data transformation and validation. They allow us to preprocess and validate data before it reaches the controller.

## Controller

Controller: A controller contains one or more route handlers. They are the endpoint method that receives the request data and generates the response. The response is sent back to the client after passing through the interceptor.

### If an error is thrown from the controller, we want to catch the exception and map it to another exception. Which component is most suitable?

We usually use an Interceptor to catch and transform the exception thrown from the controller, allowing us to control the error and status code sent back to the client.

Here is an example of an Interceptor called ErrorsInterceptor:

```typescript
@Injectable()
export class ErrorsInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      catchError(err => {
        // Transform the error based on its type
        if (err instanceof DatabaseError) {
          // Custom handling for database errors
          return throwError(() => new BadGatewayException('Database Error'));
        } else if (err instanceof AuthenticationError) {
          // Custom handling for authentication errors
          return throwError(() => new UnauthorizedException('Authentication Error'));
        } else {
          // For other errors, let them propagate
          return throwError(err);
        }
      }),
    );
  }
}
```

In this example, the ErrorsInterceptor class implements the NestInterceptor interface, which requires the implementation of the intercept() method. Inside the intercept() method, next.handle() is called to continue the request-response cycle, and the catchError operator is used to catch any errors that occur.

Within the catchError operator, we handle different types of errors differently. If the error is unhandled, it’s allowed to propagate without transformation.

In a nutshell, ErrorsInterceptor is designed to catch errors and transform specific error types into meaningful exceptions, allowing other types of errors to propagate.

## @Options()

@Options(): It defines an HTTP OPTIONS route. The HTTP OPTIONS method describes the communication options for the target resource. It typically returns information about the communication options available for a particular endpoint or resource.