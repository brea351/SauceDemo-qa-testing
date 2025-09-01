# SauceDemo E-Commerce Automation  
## Test Execution Report (Manual Testing Phase)

**Project:** SauceDemo E-Commerce Automation  
**Test Engineer:** Tosin A. Williams  
**Date:** 01-09-2025  
**Environment:** Web (Chrome latest, Firefox latest)  
**Application URL:** https://www.saucedemo.com/  

---

## 1. Summary

| Metric                         | Value             |
|--------------------------------|-----------------|
| Total Test Cases                | 20               |
| Passed                          | 20               |
| Failed                          | 0                |
| Blocked/Not Executed            | 0                |
| Pass Percentage                 | 100%             |

---

## 2. Test Execution Details

| TC ID | Title                          | Preconditions             | Steps                                                                 | Expected Result                                           | Actual Result          | Status |
|-------|--------------------------------|---------------------------|----------------------------------------------------------------------|-----------------------------------------------------------|------------------------|--------|
| TC001 | Login with valid credentials   | User is on login page     | 1. Enter `standard_user / secret_sauce` <br> 2. Click Login           | User is redirected to Inventory page                     | As expected           | Pass   |
| TC002 | Login with invalid password    | User is on login page     | 1. Enter `standard_user / wrong password` <br> 2. Click Login         | Error: "Username and password do not match"             | As expected           | Pass   |
| TC003 | Login with locked-out user     | User is on login page     | 1. Enter `locked_out_user / secret_sauce` <br> 2. Click Login         | Error: "Sorry, this user has been locked out."          | As expected           | Pass   |
| TC004 | Logout from inventory page     | User logged in            | 1. Open menu <br> 2. Click Logout                                     | User is redirected to login page                         | As expected           | Pass   |
| TC005 | Add single product to cart     | User logged in            | 1. Click “Add to Cart” on Backpack <br> 2. Click Cart icon            | Cart shows Sauce Labs Backpack                            | As expected           | Pass   |
| TC006 | Add multiple products to cart  | User logged in            | 1. Add Backpack + Bike Light <br> 2. Go to Cart                        | Both products appear in cart                               | As expected           | Pass   |
| TC007 | Remove product from cart       | Product(s) already in cart| 1. Go to Cart <br> 2. Click Remove for Backpack                        | Backpack removed from cart                                  | As expected           | Pass   |
| TC008 | Continue shopping from cart    | Products in cart          | 1. Click “Continue Shopping”                                           | User navigates back to Inventory page                     | As expected           | Pass   |
| TC009 | Checkout with missing First Name | Cart has product(s)      | 1. Click Checkout <br> 2. Leave First Name blank <br> 3. Click Continue| Error: "Error: First Name is required"                  | As expected           | Pass   |
| TC010 | Checkout with valid info       | Cart has product(s)       | 1. Click Checkout <br> 2. Enter valid info <br> 3. Continue & Finish   | Order Confirmation: "Thank you for your order!"           | As expected           | Pass   |
| TC011 | Verify order summary total     | Cart has multiple products| 1. Add Backpack + Bike Light <br> 2. Checkout <br> 3. Continue        | Total matches sum of item prices + tax                    | As expected           | Pass   |
| TC012 | Cancel checkout process        | Cart has product(s)       | 1. Click Checkout <br> 2. On Customer Info page, click Cancel          | User returned to Inventory page                            | As expected           | Pass   |
| TC013 | Sort products by price (low-high)| User logged in           | 1. Select “Price (low to high)” from dropdown                           | Products reorder ascending by price                        | As expected           | Pass   |
| TC014 | Sort products by name (Z-A)    | User logged in            | 1. Select “Name (Z to A)” from dropdown                                 | Products reorder alphabetically descending                | As expected           | Pass   |
| TC015 | Verify cart badge updates      | User logged in            | 1. Add Backpack to cart                                                 | Cart badge shows “1”                                       | As expected           | Pass   |
| TC016 | Verify cart badge decreases    | Cart has 2 items          | 1. Remove 1 item from cart                                              | Badge updates to “1”                                       | As expected           | Pass   |
| TC017 | Verify product details page    | User logged in            | 1. Click on Backpack product title                                      | User redirected to product details page                    | As expected           | Pass   |
| TC018 | Checkout without items         | Cart is empty             | 1. Go to Cart <br> 2. Click Checkout                                     | Error: Cannot proceed, no items in cart                    | As expected           | Pass   |
| TC019 | Cross-browser validation       | N/A                       | Run TC010 in Chrome & Firefox                                           | Flow works correctly in both browsers                     | As expected           | Pass   |
| TC020 | Session persistence check      | User logged in            | Refresh page after login                                                | Session persists, user remains logged in                  | As expected           | Pass   |

---

## 3. Observations

- All test cases passed successfully (100% pass rate).  
- Application workflows (Login → Cart → Checkout) are stable and working as expected.  
- No major defects were encountered in manual testing.  

---

## 4. Recommendations

- Proceed to **Automation** of critical flows: Login, Add to Cart, Checkout.  
- Include cross-browser testing in automation scripts.  
- Keep manual execution report for reference during regression cycles.
