# BankApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.4.

## To run this app locally

1. You can clone this repository with the link https://github.com/angelapriyadharshini/bank-app.git or download zip
2. Navigate to the project folder
3. Run "npm install"
4. To start the app on http://localhost:4200/, run "ng serve" command

## If the application must be deployed to a server in remote location, how would you do it?

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

Once the dist directory is generated, this app can be depoyed to the server 
To deploy in the firebase server, use the following commands
~ ng add @angular/fire
~ ng deploy

Note: ng-build is a mandatory step. It not only generates the 'dist' directory for deployment, but also aids in avoiding any build errors before deployment

## How to design your application so that it is testable?

To minimize the problems while testing the application, I always adhere to best practices like avoiding long nested if statements. 
Also, should test the happy path and error paths seperately (didn't do it here due to time limit)

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
I have written unit tests for few classes and these test cases can be found in the associated spec files  

## Error Handling

I have introduced HttpErrorInterceptor to intercept the error messages while doing http requests. 
This can be found under the path '/src/app/core/interceptors'

## JSON Date conversion

Another interceptor can be found under the path '/src/app/core/interceptors', which I wrote to parse the JSON string dates to Date format

## Responsiveness

This app works well with the 1097px and above resolutions. Due to the time limit I have not included any responsive code in the app. But I can able to handle the responsiveness either using pure CSS @Media queries or any framework like Bootstrap etc.

## Nice to haves

During the development of this task, I got some ideas to improve the application
1. Included a search with date range and keyword functionality to search and filter the transactions
Below ideas are not implemented:
1. Providing a login screen with an auth guard to avoid directly visiting sensitive content links
2. Using a JWT token to intercept HTTP requests by add the Bearer token to the headers
3. Designing a global header and footer with respect to the logged in user details
4. Showing a welcome message according to the time of the day. Example: Good morning etch.,
5. Providing various facilities like payment and transfer


