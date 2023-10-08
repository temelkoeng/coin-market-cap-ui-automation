
# Coin Market Cap UI Automated Tests
This repository contains automated UI tests for the Coin Market Cap web application using TypeScript and Playwright. The tests adhere to the Atomic principle, ensuring they are independent and can be executed in parallel. The Page Object Model (POM) structure has been implemented to organize and manage the tests effectively.

## Prerequisites
Ensure you have the following dependencies installed on your system:

- Node.js - Node.js JavaScript runtime.
- Playwright extension.

## Setup
1. Clone the repository.
2. Run 'npm install' in the terminal to install the required packages.

## Running the Tests
You can run the tests one by one or run all the tests using the following command:
'npx playwright test'

## Reports
To open the generated report, use:
'npx playwright show-report'

## Test Structure
The tests follow the Atomic principle, ensuring they are independent of each other and can be executed in parallel. The Page Object Model (POM) structure is utilized to organize test code, enhancing maintainability and reusability.

The test structure is organized into:

- Atoms: Smallest components, representing individual UI elements.
- Molecules: Combining atoms to create more complex components.
- Organisms: Combining molecules to create larger sections of the page.
- Pages: Full pages or screens, orchestrating interactions between organisms and components.

## Browser Coverage
The tests are executed on Chromium and Firefox, covering the majority of web browsers. Safari is not covered in this test suite.
