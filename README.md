SauceDemo E-Commerce Automation
📌 Project Overview

This project automates the end-to-end testing of the SauceDemo e-commerce web application (https://www.saucedemo.com/
).

It covers the complete shopping flow:

Login

Add product(s) to cart

Checkout (customer information + order confirmation)

The project demonstrates manual and automated testing using best practices like Page Object Model (POM), Pytest reporting, and structured test cases.

🎯 Objectives

Validate core e-commerce functionalities.

Ensure regression stability with automation.

Showcase a professional QA workflow including Test Plan, Test Cases, Automation Scripts, and Reports.

🧪 Scope of Testing

🔑 Authentication – login, logout, invalid login.

🛍 Product Inventory – sorting, product details.

🛒 Cart Management – add/remove products, badge updates.

💳 Checkout Flow – customer info, errors, successful checkout.

📦 Order Confirmation – verify order details and messages.

🌐 Cross-Browser Testing – Chrome & Firefox.

⚙️ Tools & Frameworks

Python 3.x

Selenium 4.x

Pytest (test runner)

Pytest-HTML (reporting)

Excel for manual test cases

GitHub / Jira for defect tracking

📂 Project Structure
saucedemo-automation/
│
├── tests/                 # Test files
│   ├── test_login.py
│   ├── test_add_to_cart.py
│   ├── test_checkout.py
│
├── pages/                 # Page Object Model (POM) classes
│   ├── base_page.py
│   ├── login_page.py
│   ├── inventory_page.py
│   ├── cart_page.py
│   ├── checkout_page.py
│
├── utils/                 # Configuration files
│   └── config.py
│
├── SauceDemo_TestCases.xlsx   # Manual test case suite (20 cases)
├── conftest.py               # Pytest fixtures (driver setup)
├── requirements.txt          # Dependencies
└── README.md                 # Project documentation

🚀 Setup & Execution
1️⃣ Clone the repository
git clone https://github.com/<your-username>/saucedemo-automation.git
cd saucedemo-automation

2️⃣ Install dependencies
pip install -r requirements.txt

3️⃣ Run tests with Pytest
pytest -v

4️⃣ Generate HTML report
pytest --html=report.html --self-contained-html

📊 Deliverables

✅ Test Plan → Defines scope, approach, and timeline.

✅ Test Cases → 20 structured cases in Excel.

✅ Automation Scripts → Selenium + Pytest (Page Object Model).

✅ Bug Reports → Logged in GitHub/Jira.

✅ Test Report → Execution results with pass/fail.

✨ Portfolio Value

This project demonstrates:

Strong QA process skills (manual + automation).

Experience with e-commerce domain testing.

Ability to design test plans, test cases, automation scripts, and reports.

Professional GitHub project documentation.
