Phil's Podium Cypress Assignment
================================
Welcome to Phil's Cypress assignment for Podium. This `README` file will go through the details regarding how this repository is set up.
## Core Dependencies
Included within `cypress/package.json`:
* node `v16.15.1`
* Cypress `v9.7.0`
* cypress-plugin-tab `v1.0.5`
* cypress-real-events `v1.7.1`
* cypress-iframe `v1.0.1`

## Dependency Explanation
For Cypress, I wanted to stay with the latest version prior to the jump to `v10`, as I'm not yet personally familiar with what `v10` has to offer, and wanted to make sure this assignment could be completed in a timely manner using a version I'm comfortable with.

The other plugins are, in my view, fantastically helpful in terms of expanding Cypress' testing capabilities for sites like the one associated with this assignment. `cypress-plugin-tab` helps with tabbing across fields, and `cypress-real-events` is a set of methods -- such as `realClick()` -- that similarly help in dealing with elements.

This assignment is the first time I've used the `cypress-iframe` plugin, and I'll never forget it. Previously, there was no way for Cypress to see iframe-based elements. With this plugin, anything can be seen in any iframe!
## Installation
Sit inside the `cypress` directory and execute the following command:
```bash
npm install
```
## Directory Structure
This repo is set up as a typical Cypress installation:
* `cypress`
    * `.gitignore`
    * `cypress.json`
    * `package.json`
    * `README.md`
    * `Dockerfile`
    * `integration`
        * `basic_field_test.spec.js`
        * `basic_modal_elements.spec.js`
        * `basic_page_elements.spec.js`
        * `initial_test.spec.js`
    * `support`
        * `commands.js`
## Directory Explanation
* `initial_test.spec.js`: Original Cypress sanity check test; can be used as a high-level smoke test
* `basic_page_elements.spec.js`: Validates most page elements; smoke test
* `basic_modal_elements.spec.js`: Validates most Podium modal elements; smoke test
* `basic_field_test.spec.js`: Validates and tests much Podium modal functionality; functional testing

There should be a total of six test cases, defined as `it()` functions. Running all files would constitute a regression suite.

I chose not to use an explicit page object model structure due to time and the fact that sometimes a POM structure gets in the way of testing, especially troubleshooting (failed tests are easier to find issues when dealing directly with functionality in the test spec).

However, I have included a new Cypress command in the `commands` file, `cy.clickPodiumBubble()`, briefly demonstrating how to create a function that uses repeated commands.
## Execution
Running tests is simple. Sitting in the root directory, if you want to load the Cypress Test Runner:
```bash
npx cypress open
```
Or, if you want to run Cypress headlessly and run all tests:
```bash
npx cypress run
```
Alternatively, you can specify which tests you want to run:
```bash
npx cypress run cypress/integration/*.spec.js
```
## Dockerizing Cypress!
You will have noticed the `Dockerfile` in the parent directory -- I made a best-effort attempt to get Cypress Dockerized.

However, I am currently running on an M1-based MacBook Air, and unless Cypress were to be upgraded to something like `v10.3` (I think that's where Apple Silicon support was added), attempting to build a Docker image and then running tests results in segmentation faults.

If you are executing this assignment on an Intel-based machine, consider the following commands:

Sitting in the root directory:
```bash
docker build -t cypress-test-image:1.0.0 .
```
The `cypress-test-image` and version tag can be anything you'd like to call it. In theory, the test specs should begin running headlessly.

To run with an already-built image:
```bash
docker run -t cypress-test-image:1.0.0 .
```
## Branching Strategy
You may also notice that I invoked a branching strategy with this assignment. In this case, I've pre-pended branch labels and commit messages with a `PC-n` label. This is to show that, in the case of working with third-party apps like Jira, I'm aware of the "automatic linking" that Jira can allow so that all changes can be tracked from a workflow perspective (plus it's kind of neat that my initials are "PC!").
## Bugs Found
I may have found two bugs in testing:
* The Intro message date/time is not current (appears static)
* Mobile Phone and Message error messages don't appear under their respective fields until a person attempts to click on the Send button (to me, normal UX is once a user takes focus off a particular field, let them know right then that there's an issue)
## Final Thoughts
Thank you for the opportunity to be considered as a candidate for Lead SDET at Podium. I greatly enjoyed this assignment as it taught me a lot about using iframes as well as current M1 limitations with Cypress.

I am hopeful that this limited assignment has shown a small portion of what I can bring to the table. And if we're in agreement on that, I'm looking forward in working with everyone involved in the interview process in hopefully moving forward from here!