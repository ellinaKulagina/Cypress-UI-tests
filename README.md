Hi Orkestro team!

Please have a look at my Cypress project with several UI tests.
All test scenarios are stored in ../cypress/integration/orkestro_tests.js
And there are also two page files in ../cypress/integration/pages

Test scenarios cover all provided acceptance criterias, and scenario 'Login with invalid email' covers a found bug.
This scenario will pass after fixing the bug.

Title: Email validation is broken
Steps:
1. On the login page enter valid password and email
2. Delete last symbol (few symbols) from entered email
3. Click Login button

Actual result: User is logged in (redirected to the Welcome page
Expected result: Incorrect email is validated and error message appears

It is also not clear what is the correct format for email and password, so I desiged my tests with following assumptions:
Valid email - any email matches this format: abc@abc.com
Valid password - any 8 symbols (alphbetical/digits/special symbols)

I have a couple of comments about my tests arcitecure and will be happy to discuss during the interview. 
It was first time when I used Cypress, so I was not familiar with all functionality and didn't manage to
design everything as I used to do with C#

Cheers :)