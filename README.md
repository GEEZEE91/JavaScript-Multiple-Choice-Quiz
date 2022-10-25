# Multiple Choice Quiz - JavaScript 


## About The Project
  
  
 Timed Multiple Choice Quiz that enables user to test there JavaScript knowledge and keep track of there score over time so they can monitor their progress.
 
This app is built using basic HTML, JS and CSS.
 
The test consits of 7 multiple choice questions, the user is given 70 seconds to complete the test for every incorrect answer 10 seconds is deducted of the time.

Once the time runs out it is Game Over and no more questions can be answered and your score is based on what you answered correctly before the time ran out.

Upon completion a section displaying your final score is displayed, at this stage you can save your score by submitting your name or you can play again.

If you submit the score it is saved using local storage, the score is parsed to the highscore container div and the user can see a screen showing your highest saved scores. 

User is give option to play again or clear the scores saved.

The high score section can also be accessed from the home page.
 

## Usage

This project can be used by anyone who wishes to test out there Javascript knowledge by completing this simple multiple choice test. 

As the test allows the user to save their score they can also use it to keep track of there progress.

Especially useful for recruitment prep.
 
It can also be used as a template to create any custimised test required simply by changing the questions and answers in the js.

A lot better than using paper flashcards.

## Demo

 ### Quiz Start Page
![start](https://user-images.githubusercontent.com/3950562/195262026-159cc3e7-87a1-47ce-8137-dcc6a1db483c.png)

 ### Quiz (Answer Correct vs Incorrect)
 
 CORRECT: Next button appears once answer selected, CSS class added on selected button indicating is right, also text added stating answer status is "Right", 10 pointsa per correct answer added but can not be seen until the quiz is over and final score displayed.
  
![right](https://user-images.githubusercontent.com/3950562/195262157-9072b6fd-6f1e-4129-bd66-c217ac16c162.png)

  INCORRECT: Next button appears once answer selected, CSS class added on selected button indicating is wrong, also text stating answer "Wrong" , 10 secs deducted of timer.
  
![wrong](https://user-images.githubusercontent.com/3950562/195262169-0942ed9f-44e8-403b-beec-89b07d67e175.png)

###Final Score (allows user to submit and save there score locally)
![score](https://user-images.githubusercontent.com/3950562/195262078-d34bc636-65c6-4626-826b-38482c830e5d.png)


### Highscore Container
![image](https://user-images.githubusercontent.com/3950562/195261986-a3d9ea9f-25b2-4cb9-8578-2622c6fe01af.png)




## Deployed Link


App can be used and accessed via any browser. 

The app is responsive and will work on both desktop and mobile browsers.

https://geezee91.github.io/JavaScript-Multiple-Choice-Quiz/

