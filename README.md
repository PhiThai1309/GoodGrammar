# GoodGrammar
![image](https://github.com/PhiThai1309/GoodGrammar/assets/71892904/09034383-d995-4ab0-b3a6-4005329834a8)

## Table of contents
- [Overview](#Overview)
- [Functionalities](#Functionalities)
- [How to run](#How-to-run)
- [Screenshot](#Screenshot)
- [Built with](#Built-with)
- [Author](#author)

## Overview
Introducing one of the most revolutionary grammar correction tools for authors and scholars called Good Grammar. This tool will make your writing experience much easier by allowing you to upload materials easily. Our system uses the fine-tuned Large Language Model API to correct the English for each paragraph. This ensures that the grammar and clarity are outstanding.

## Functionalities
### File upload
- .docx file types are supported for uploading.
### Automated Text Refinement
  - Automatically analyzing and improving each paragraph of the content. The system uses an AI application programming interface (API).
  - Grammar, typographical problems, word usage, and punctuation are all addressed by this API.
### Merge and Download
  -	After receiving responses from the application programming interface (API), the system integrates the modified paragraphs back into the original document.
  -	After the API has analyzed the document, users can download it for future usage.
### User Subscription Management
Users can subscribe to different plans and users with subscriptions are granted access according to the status of their subscriptions.
  - Free: 2000 words per file, Up to 30 files per week
  - Novice: 10000 word count, Up to 100 files per week
  - Expert: Unlimited word count, Unlimited file correction


### History management
  -	Users can browse back to view the uploaded file history as well as download the corrected version text file.
  -	Users can also delete files from history to clean up the history list for easier file management.
### Account management
- Users have full control over their account settings. They can easily change email addresses, connect to other services, set passwords, check active devices, and even delete their account if needed.
### Payment Integration
- The integration of third-party payment mechanisms, such as Stripe, makes it possible to have a subscription process that is both secure and seamless.

## How to run
### For Front-end:
1.	Clone project from Github repository: 
```
clone https://github.com/PhiThai1309/GoodGrammar.git
```
2.	Install required packages:
```
npm install
```
3.	Create a new .env file to root of the project to store authentication to Clerk:
```
REACT_APP_CLERK_PUBLISHABLE_KEY = pk_test_YWRhcHRlZC1zdGFyZmlzaC00MS5jbGVyay5hY2NvdW50cy5kZXYk
```
4.	Run the app:
```
npm start
```
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### For back-end
1.	Clone project from Github repository: 
```
clone https://github.com/RenuzitV/GoodGrammarBackend.git
```
2.	Install the required packages:
```
pip install -r requirements.txt
```
4.	Create a .env file based on `.env.example`
5.	Run the app:
```
python.exe -m flask run
```
## Screenshot

### Login/ Signup
<img src="https://github.com/PhiThai1309/GoodGrammar/assets/71892904/c8db0987-0954-4187-b62e-297d5cbfd67e">


### Grammar page
<img src="https://github.com/PhiThai1309/GoodGrammar/assets/71892904/05c8aa01-9417-4e1a-b692-b36e30a7cbda">

### History page
<img src="https://github.com/PhiThai1309/GoodGrammar/assets/71892904/3607b8e5-4ea7-47d8-9667-747d64586763">

### Subscription page
<img src="https://github.com/PhiThai1309/GoodGrammar/assets/71892904/c13d66f0-a1dc-498e-9f22-184d4da715c9">
<img src="https://github.com/PhiThai1309/GoodGrammar/assets/71892904/80799289-429b-4c55-bc92-74b901d3b66c">


## Built with
<p align="center">
  <img src="https://skillicons.dev/icons?i=js" />
  <img src="https://skillicons.dev/icons?i=css">
  <img src="https://skillicons.dev/icons?i=react">
  <img src="https://skillicons.dev/icons?i=vscode">
</p>

-	ReactJS, CSS
-	Github & Git
-	Figma <a href="https://www.figma.com/file/8sXaJ5RSHLgLzVv8ArmgIo/GoodGrammar?type=design&node-id=0%3A1&mode=design&t=K6cdLz3iLBR5Nd5s-1"> (Design link) </a>

## Author
- Frontend & Designer: Thai Manh Phi
- Frontend: Le Minh Quan
- Backend: Nguyen Vu Minh Duy
- Backend: Trieu Hoang Khang
- Backend: Trieu Tran Tri Thuc

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

