Playwright Automation Project
This project is built using Playwright for end-to-end automation testing of UI and API. It follows the Page Object Model (POM) structure, ensuring maintainability and scalability of tests. It covers UI testing for the Polestar Developer page and API testing for GoRest API.

Project Structure

├── test-results
│   ├── data
│   │   └── index.html                  # Generated test result HTML report
├── tests
│   ├── pages                            # Page classes for UI components following POM pattern
│   │   └── polestarDeveloperPage.js    # Page Object for Polestar Developer Page
│   ├── services                         # Service classes for API interactions
│   │   └── not updated yet              # Placeholder for future API service classes
│   ├── utils                            # Utilities and helper functions for reusable code
│   │   └── not updated yet              # Placeholder for future utility functions
│   ├── tests                            # Test scripts for both UI and API
│   │   ├── polestarDeveloperTest.spec.js     # UI automation test script
│   │   ├── gorest-api-tests.spec.js         # API positive and negative validation test cases
│   │   └── gorest-api-NegativeTests.spec.js  # API negative test case file
├── reports                              # Folder for test reports (HTML, screenshots)
├── playwright.config.ts                 # Playwright configuration file


Test Case Overview
UI Automation (Polestar Developer Page)
Go to URL
Navigate to the Polestar Developer page.

Verify Logo
Ensure the logo appears on the page and is clickable.

Verify Banner
Verify that the banner loads correctly and displays the expected content.

Responsive Testing
Validate the page across different device ports by comparing snapshots.

Verify Links
Ensure all links on the page are valid and return a 200 status code.

API Automation (GoRest API)
Positive Test Cases:
POST User Details
Ensure that the user details can be posted successfully.

PUT User Details
Verify that user details can be updated using a PUT request.

GET Updated Data
Ensure that the updated user data can be retrieved using a GET request.

DELETE User Data
Validate that the user data can be deleted using a DELETE request with the correct user ID.

Negative Test Cases:
Unauthorized (Invalid Bearer Token)
Verify that an invalid bearer token results in an error response.

Missing Required Field (POST)
Ensure that missing required fields in the POST request result in an error.

Invalid User ID in PUT
Test that an invalid user ID in the PUT request returns an appropriate error response.

Installation
Clone the repository to your local machine:

bash
Copy code
git clone <repository-url>
Navigate to the project folder:

bash
Copy code
cd <project-folder>
Install the dependencies:

bash
Copy code
npm install
Run the tests:

bash
Copy code
npx playwright test
Configuration
The playwright.config.ts file contains the necessary configuration for the Playwright setup, including the base URL, test settings, browser configurations, and test environment details.

Reports
Test results are automatically generated and stored in the test-results and reports directories. These reports include detailed HTML reports, screenshots, and logs.