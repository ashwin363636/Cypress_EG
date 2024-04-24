# Cypress_EG
Demonstrate Cypress features using Easy Generator app.

Steps to run Tests:
1) Clone the Repository from git hub.
2) Ensure you have Node JS installed
3) At the root of the project run: npm install
4) In terminal (1) run the following command to launch the Eg app: npm run start_app
5) (a) To run the tests in headless mode run the following command: npm run cypress:run
    (b) To run the tests in UI/ Runner mode run the following command: npm run cypress:open

Features of the framework:
* The Project has implemented prettier and eslint
* it has implmented task to run node.js package utilities(to read a .txt file)
* Mochaawesome reports -> cypress/reports/html/index.html
* Retries on test failures
* Few complex scenaios like, handling Alert, Childwindow, Cross origin and Iframes

Upcoming Changes:
* Convert the project to a type script project
* Use Docker to run the tests in CI/CD





