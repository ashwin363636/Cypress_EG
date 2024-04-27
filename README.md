# Cypress_EG
Demonstrate Cypress features using Easy Generator app.

Steps to run Tests:
1) Clone the Repository from git hub.
2) Ensure you have Node JS installed
3) At the root of the project run: npm install
4) Three ways to run the tests:
    (a) To run the tests in headless mode run the following command: npm run cypress:run
    (b) To run the tests in UI/ Runner mode run the following command: npm run cypress:open
    (c) Use GitAction workflow to run the tests in CI/CD

Features of the framework:
* The Project has implemented prettier and eslint
* Used GitAction workflow to implement CI/CD. The Mochaawesome will be available as part of execution artifacts.
* It has implmented task to run node.js package utilities(to read a .txt file)
* Mochaawesome reports with screenshots on failure -> cypress/reports/html/index.html
* Retries on test failures
* Designed few complex scenaios like handling Alert, Childwindow, Cross origin and Iframes.




