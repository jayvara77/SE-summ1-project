# Software Engineering Course Summative 1
Software Engineering December 2024 / January 2025 Summative 1 Repository.
This README file contains the documentation for the quiz app created for the British Airways Data Science Commercial team.
The app can be viewed using the following link:
[BA Commercial Quiz App](https://jayvara77.github.io/SE-summ1-project/)

## Contents
### [About the App](#about-the-app)
### [User Documentation](#user-documentation)
### [Technical Documentation](#technical-documentation)
### [Project Planning](#project-planning)
### [Project Proposal](#project-proposal)
### [Lo-fi Prototypes](#lo-fi-prototypes)

## About the App
This app is a short quiz that allows new Data Science Commercial team joiners to take in order to test their current knowledge and help them get a better understanding of data tables used in the commercial team. It consists of 5 multiple-choice questions, each of which will require the user to query certain tables to get the correct answer. Upon completing the quiz, the user will receive feedback on their submission. The user will be notified of their score as well as feedback on any questions they got wrong alongside the correct answer and hints on which tables to use to get the correct answer. The user will then be able to retake the quiz by clicking on the "retake quiz" button.

The app is currently deployed on GitHub pages. allowing it to be accessed from the repository using the link above.

## User Documentation
To run the quiz, simply click on the link above which will take you to the quiz! You can also clone this GitHub repository and run it locally as long as you have npm and node installed. Read the quiz introduction which will give you tell you which tables would be useful and then simply answer all the questions to the best of your ability. Once you have picked your answers, click submit and you will get your results. Upon getting your results, you can retake the quiz in case you didn't get full marks and can use the table hint to help you answer the question. If any bugs are found, please email jay.vara@ba.com along with the issues you are facing, or create an issue on the GitHub repository.

## Technical Documentation
### Code stack:
- HTML
- JS
- CSS
- Jest

### Code Commenting / Practise:
Each code file has inline comments describing what that section/code does. This allows the code to be easily understood, meaning a detailed code documentation document is not required. The code overview section gives an overview of each file. To understand the file in greater depth, please read the comments and code directly from the file. Some examples of good coding practise that I have included are camel case for functions within CSS, proper indentations to make code more structured and readable, inline commenting, and grouping styles together in CSS.
![image](https://github.com/user-attachments/assets/7c9598ec-4ce5-49f5-9332-db82a50985ee)


### Code overview:
HTML - The HTML code has a basic structure that includes a page title section, header section, question section, and the results section. The results section is initially hidden when the page is first loaded. It is then revealed once the quiz has been submitted. At this point, the questions section is then hidden. It then switches back to the original once the retake quiz button is clicked.
CSS - This file contains the styling code for the HTML file. It starts by importing the British Airways font. Each part of the HTML is then styled and has a relevant section within the CSS. Flex containers are used to arrange the sections within the page for each container.
JS - The JavaScript is split into functions that are applied when the submit event and retake quiz event occur. It retrieves the inputs submitted by the user, compares the answers to the answer bank and calculates the users' score. This is then fed back to the user, where they can see their results. They are then allowed to retake the quiz. If there are any wrong answers, the user will be shown the correct answer and the table to get the answer from.

### Testing
For this project, I incorporated unit testing using Jest. Unit testing allows for automatic testing of the quiz functionality quickly and efficiently. The unit testing in my code tests the calculate score, get answers, and the get answer table functions. Jest allows for automated testing of pull requests, meaning you do not need to manually test the changes made to the code. This, in combination with Continuous Integration and Development provides for a quick, efficient, and effective process for future versions of the quiz.
![image](https://github.com/user-attachments/assets/7565fb6b-98f4-4a75-8521-67e08cc1ebcb)


### Continuous Integration and Development
I have incorporated continuous integration and development. Continuous Integration ensures code changes are tested and integrated into the main branch smoothly. Continuous Development allows these code changes to be deployed to the user quickly and automatically. The combination of the two allows for quick and efficient testing and delivery of the updates once a pull request is made for the update, saving time and effort for the developers. When a new pull request is created, the code within is tested automatically using CI. CD follows this, allowing the updated files to be deployed to the GitHub pages. If all goes well, the pull request can be merged into the main branch. 

## Project Planning
### Overall Plan
To complete this project, I used Agile principles in conjunction with the Scrum framework. One of the main Agile principles I used was prioritising working software rather than focusing on a long documentation process. Part of this includes documenting code within the code, rather than creating a separate document as this takes up a lot of time and can be less effective than using comments within code. I used the Scrum framework to break down the project into several iterations, completing small milestones using sprints, rather than attempting to create the final product from the beginning. This comes with the advantage of being able to create MVPs to gain feedback which can be used to consistently improve the app. Furthermore, this allows a product to be pushed to live faster, with improvements being added post-deployment.

### Sprint Plans
As mentioned earlier, the project was broken down into a series of sprints - each with a particular goal to progress the application. Issues would be created for each task and added to the Kanban board (more information in the Ticketing section below). The sprint and sprint goals were as follows:
Sprint 1: Project Planning
Sprint goal: Create a project proposal and both prototypes of the app.
![Sprint 1](https://github.com/user-attachments/assets/a9a25de4-9b93-44ca-b0ee-a357c52b42e7)

Sprint 2: MVP
Sprint goal: Create the first MVP of the app with basic HTML and CSS, as well as basic functionality with a small subset of questions. Basic features included a retake button, results section and the ability to submit answers and get the results.
![Sprint 2](https://github.com/user-attachments/assets/b54f26a6-ab18-42ca-a04c-5987b4caf0d9)

Sprint 3: V1 App
Sprint goal: Add the first two questions to the app and add a quiz introduction and information. This created a basic app that was functional and relevant to BA Commercial team, although no styling was implemented and not all the questions were added.
![Sprint 3](https://github.com/user-attachments/assets/fca06374-8870-47ec-b50c-bd71100f6c3f)

Sprint 4: V1.2 App
Sprint goal: Fixed a bug that allowed for submission without picking options. Also, added all the questions and changed the font to match the BA style.
![Sprint 4](https://github.com/user-attachments/assets/7a84a600-a721-4055-bc68-e7ce3d1a14f2)

Sprint 5: V1.3 App
Sprint goal: Add the colour scheme and styling, as well as tweaking the code to get it into a series of functions. Also added additional feedback for the user to provide a hint as to which table to get the answers from. Finally, added a testing module using jest so that the functions can be tested.
![Sprint 5](https://github.com/user-attachments/assets/efc320b2-9613-4660-9d4e-e70234b9545d)

Sprint 6: V1.4 App
Sprint goal: Update quiz introduction to add more details on how to complete the quiz and how to reach out if issues are encountered.
![Sprint 6](https://github.com/user-attachments/assets/1d099f7f-f434-410a-a5dd-0dc3e3ca1f50)

### Ticketing
I used a Kanban board to track all tickets/issues, as it easily shows developers which ticket is at which stage clearly. All tickets initially start from the backlog section. Specific tickets are then identified to be worked on during a specific sprint and these tickets are then moved to the scoping phase. It is at this stage that each ticket is analysed and acceptance criteria are made. Following the scoping phase, the tickets would be moved to build and test. This is the stage when the tasks are being worked on. Once the code is completed, tested, and merged into the main branch, the ticket is then moved to done. I created multiple tickets for each sprint, with each ticket highlighting the tasks that need to be done. The sprint name would be tagged to the ticket, alongside the additional, most relevant tag e.g. feature, documentation or bug. These tickets would be moved to the scoping phase of the Kanban board and moved along the board as mentioned above. When creating the ticket, I create a new branch that has the sprint name and app version. Once all tickets are completed and tested, the code is pushed to the branch it was assigned to. A pull request is then actioned and approved once checked. It is then merged to the main branch, at which point the tickets are moved to done. The next sprint would then begin, with tasks being assigned to that sprint.
![Kanban board](https://github.com/user-attachments/assets/94072275-3692-4784-ad33-b364ec7293a4)


## Project Proposal
This project involves creating a quiz app that will be used by new joiners in the Commercial Data Science team. The quiz will require participants to use SQL to query Commercial data in order to retrieve the answers to the questions. This project aims to solve the issue of upskilling new joiners as soon as possible by getting them familiar with the most common tables used within the Commercial team. The proposed app should present a series of questions and provide multiple-choice answers for the user to pick. Once submitted, the app should present their score, as well as provide feedback on questions they got wrong. Javascript will be used due to its ability to run directly in the browser, without needing additional web server setup, which would be required in Python. Furthermore, Javascript can provide a dynamic and interactive interface, which would be useful in future iterations of the app. HTML will be used to create the structure for the app and CSS will be used to enhance the design element.

## Lo-fi Prototypes
2 basic prototypes were made, which can be seen below. The first prototype was the one that was approved as it allowed the user to see all the questions and answer them in any order they preferred. It would also be quicker to create as it is much simpler. 
[Figma File](https://www.figma.com/design/olgE7OLUvEObJ8tJKlZfDi/Quiz_App_Prototype?node-id=0-1&t=sRhBFr8xsGT2VL0I-1)

[Figma Prototype 1](https://www.figma.com/proto/olgE7OLUvEObJ8tJKlZfDi/Quiz_App_Prototype?node-id=1-2&t=HUWEvItwD0lRnqA4-1&starting-point-node-id=1%3A2)

[Figma Prototype 2](https://www.figma.com/proto/olgE7OLUvEObJ8tJKlZfDi/Quiz_App_Prototype?node-id=5-2&t=sRhBFr8xsGT2VL0I-1)
