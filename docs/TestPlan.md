# SauceDemo E-Commerce Automation – Test Plan

## 1. Introduction
The purpose of this test plan is to outline the testing strategy, scope, approach, resources, and schedule for validating the SauceDemo e-commerce application (https://www.saucedemo.com/).

This project aims to ensure the application delivers a secure, reliable, and seamless shopping experience, covering authentication, cart management, checkout, and order confirmation.

---

## 2. Objectives
- Validate the core functionalities of the SauceDemo web application.  
- Ensure end-to-end e-commerce workflows (**Login → Add to Cart → Checkout**) work as expected.  
- Identify and report defects in functionality, usability, and performance.  
- Automate regression scenarios to ensure continuous stability.  

---

## 3. Scope

### In-Scope Features
- 🔑 **Authentication**: Login, logout, invalid login attempts.  
- 🛒 **Product Inventory**: Product listing, details, sorting/filtering.  
- 🛍 **Cart Management**: Add, remove, update products in cart.  
- 💳 **Checkout Flow**: Enter customer info, payment flow simulation, order confirmation.  
- 📦 **Order Summary**: Validation of ordered items and total price.  
- 🌐 **Cross-Browser Testing**: Chrome, Firefox.  

### Out of Scope
- Backend payment gateway integration (not available in demo site).  
- Mobile app testing (only web supported).  
- Non-English localization testing.  

---

## 4. Test Approach

### Testing Types
- **Functional Testing**: Validate all workflows manually.  
- **Regression Testing**: Automate high-priority flows using Selenium/Pytest.  
- **Negative Testing**: Invalid inputs, empty fields, incorrect credentials.  
- **UI/UX Testing**: Layout, error messages, and responsiveness.  
- **Cross-Browser Testing**: Basic validation in Chrome and Firefox.  
- **(Optional) API Testing**: If API endpoints are available for data.  
- **(Optional) Performance Testing**: Simulate multiple users via JMeter.  

### Test Design Techniques
- **Equivalence Partitioning & Boundary Value Analysis** (for form fields).  
- **Decision Table Testing** (for login variations).  
- **Scenario-Based Testing** (for checkout flow).  

---

## 5. Test Deliverables
- Test Plan (this document).  
- Test Cases (Excel/TestRail + GitHub markdown).  
- Automation Scripts (Selenium/Pytest, structured with POM).  
- Bug Reports (Jira or GitHub Issues).  
- Test Summary Report (pass/fail status, defect metrics).  
- LinkedIn Portfolio Post (highlighting project + GitHub repo).  

---

## 6. Entry & Exit Criteria

### Entry Criteria
- Application deployed and accessible.  
- Test environment set up (browsers, Selenium, Pytest).  
- Test cases prepared and reviewed.  

### Exit Criteria
- All planned test cases executed.  
- High-priority defects resolved or accepted.  
- Test report completed.  

---

## 7. Test Environment
- **Application URL**: https://www.saucedemo.com/  
- **Browsers**: Chrome (latest), Firefox (latest).  
- **Automation Framework**: Selenium + Python (Pytest).  
- **OS**: Windows 10/11.  
- **Reporting Tool**: Pytest-HTML.  

---

## 8. Roles & Responsibilities

| Role | Responsibility |
|------|----------------|
| QA Engineer (Tosin A. Williams) | Test planning, execution, defect reporting, automation |
| Secondary Reviewer (Peer/Team) | Review test cases, validate defects |
| Project Owner (YouLearnT Portfolio Project) | Approve final deliverables |

---

## 9. Risks & Mitigation

| Risk | Mitigation |
|------|-------------|
| Demo site downtime | Use retries, report downtime, document gaps |
| Limited features (demo site only) | Focus scope on available features |
| Browser compatibility issues | Run smoke tests across Chrome & Firefox |
| Data reset on site | Use fresh sessions, avoid dependency between tests |

---

## 10. Execution Timeline (2 Weeks)

| Day  | Activity |
|------|----------|
| 1–2  | Draft test plan + setup tools |
| 3–5  | Write manual test cases |
| 6–8  | Execute manual tests + log bugs |
| 9–11 | Automate core flows (Login, Cart, Checkout) |
| 12   | Cross-browser testing |
| 13   | Optional API/Performance testing |
| 14   | Prepare final report + portfolio post |

---

## 11. Approval
- **Prepared by**: Tosin A. Williams (QA Engineer)  
- **Date**: 01-09-2025 
 

---
