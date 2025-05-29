🛒 E-Commerce Web Testing with Cypress 🧪
This project is designed for automated testing of an e-commerce web application using Cypress. It covers essential scenarios: login, registration, cart management, product filters, and order placement. The project also integrates Allure for generating detailed and stylish reports.

🚀 Features
✅ E2E tests for:
🔑 Authentication (login/registration)
🛒 Shopping cart functionality
🔍 Product filters
📦 Order placement
🌐 API testing

✅ Organized using the Page Object Model
✅ Allure reporting for enhanced test analytics
✅ CI/CD integration with GitHub Actions


📂 Project Structure
ecommerce-web-testing-cypress/
├── cypress/
│   ├── e2e/
│   │   ├── auth/
│   │   │   ├── login.cy.js
│   │   │   ├── register.cy.js
│   │   ├── cart/
│   │   │   └── cart.cy.js
│   │   ├── filters/
│   │   │   └── filters.cy.js
│   │   ├── order/
│   │   │   └── checkout.cy.js
│   │   ├── api/
│   │   │   └── api.cy.js
│   ├── fixtures/
│   │   └── user.json
│   ├── pageObjects/
│   │   ├── LoginPage.js
│   │   ├── RegisterPage.js
│   │   ├── CartPage.js
│   │   ├── CategoryFilterPage.js
│   │   └── CheckoutPage.js
├── .github/workflows/
│   └── cypress.yml
├── cypress.config.js
├── package.json
└── README.md


🛠️ Setup & Run
1️⃣ Clone the repository:
git clone https://github.com/your-username/ecommerce-web-testing-cypress.git
cd ecommerce-web-testing-cypress
2️⃣ Install dependencies:
npm install
3️⃣ Run tests:
Interactive mode:
npx cypress open
Headless mode:
npx cypress run
4️⃣ Generate an Allure report:
npx allure generate allure-results --clean -o allure-report
npx allure open allure-report


⚙️ CI/CD
🔄 Tests are automatically executed in GitHub Actions on every pull request to main.
📈 Allure reports are uploaded as artifacts and available for download.


🧑‍💻 Technologies
Cypress 12+
JavaScript (ES6)
Page Object Model
Allure Reporting
GitHub Actions (CI/CD)


📚 Useful Commands
Command	Description
npm install --	Install dependencies
npx cypress open -- Open Cypress in interactive mode
npx cypress run	-- Run tests in headless mode
npx allure generate ... -- 	Generate Allure report
npx allure open allure-report	-- Open the generated Allure report
