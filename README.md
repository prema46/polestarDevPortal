# Playwright Automation Project

This Playwright Automation Project provides an automated testing framework for both UI and API testing. It utilizes the Page Object Model (POM) for a structured, maintainable test design.

## Description
This project automates UI tests for the Polestar Developer page("https://www.polestar.com/se/developer/get-started/") and API tests for the GoRest API("https://gorest.co.in/"), using Playwright as the test framework. The project is organized with separate modules for page elements, services, utilities, and test cases, providing a clean and modular codebase that supports responsive testing, REST API validations, and report generation. The UI tests validate page elements and responsiveness, while the API tests cover CRUD operations and both positive and negative scenarios.

## Getting Started
### Dependencies
Node.js (v14 or higher)
Playwright
Any compatible OS (Windows, Mac, Linux)
Installing

### Project structure

<picture>
 <img alt="YOUR-ALT-TEXT" src="">
</picture>

### Clone the repository:

** git clone <repository-url>
Navigate to the project directory: in cmd 


cd <project-folder>
Install the dependencies:

`npm install`

### Executing Program

To run the Playwright tests, use:


`npx playwright test`

To view test results in HTML format:

`npx playwright show-report`

Detailed configurations for brow'ser options, viewport settings, and environment variables are managed within 
playwright.config.ts.

Help
If any issues arise, check the Playwright documentation or run:

`npx playwright help`

## Common issues:

* Ensure all dependencies are installed with npm install.
* If tests fail due to timeouts, adjust the timeout settings in playwright.config.ts.
