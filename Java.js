
// Initiating the elements to perform there functions
var nextButton = document.getElementById('btnNext');
var quizbox = document.getElementById('questionBox')
var opt1 = document.getElementById('opt1')
var opt2 = document.getElementById('opt2')
var opt3 = document.getElementById('opt3')
var opt4 = document.getElementById('opt4')

// This creates an object to contain the questions
var app={
        questions:[
            {
                q:'What is html for in vscode',
                options: ['Removing a website', 'Building a website', 'Making photos', 'Sharing videos'],
                answer:2
            },
            {
                q:'What is style css for',
                options: ['Designing a website', 'Entering JavaScript', 'Pain medication', 'Shopping'],
                answer:1
            
            },
            {
                q:'What is Bootstrap',
                options: ['Pirate', 'Pre determined html', 'shoe brand', 'Java'],
                answer:2
            },
            {
                q:'What is a software engineers job',
                options: ['Work on helicopters', 'Work on planes', 'Work on Cars', 'Figure stuff out'],
                answer:4
            },
            {
                q:'What is JSON',
                options: ['JavaScript Object Notation', 'Junior Stay On Normal', 'Jack Sparrow On Nerves', 'Jake Snakes On Now'],
                answer:1
            }          
            ],
        
       // This section is targeting the start of the first question, and generating the count of the next one.
        index:0,
        // Here we want to input the options into the question by targeting options using innerHTML
        load:function(){
            if(this.index<=this.questions.length-1){
                quizbox.innerHTML=this.index+1 + ". " +this.questions[this.index].q;
                opt1.innerHTML=this.questions[this.index].options[0];
                opt2.innerHTML=this.questions[this.index].options[1];
                opt3.innerHTML=this.questions[this.index].options[2];
                opt4.innerHTML=this.questions[this.index].options[3];
            }
           
           // Were displaying the end of the quiz for the user. As in, when you complete the last question and press next "Quiz Completed" will display
            else {
                quizbox.innerHTML="Quiz Completed!";
                ul.style.display="none";
                nextButton.style.display="none";
            }
        },
        // Here we have to make sure were using the index to display the next button on the screen
        next: function(){
            this.index++;
            this.load();
        },
        //Were creating a function so that when the user selects the right answer it will display "correct"
        check: function(ele){
            var id=ele.id.split('');
            if(id[id.length-1]==this.questions[this.index].answer){
                this.score++;
                ele.className="correct";
                this.scoreCard();
            }
            // If the user doesn't select the correct answer it will display "wrong"
            else{
                ele.className="wrong";
            }
        },
        //This is a way for a user to make a singular choice and not have the other options selected
        preventClick:function(){
            for(let i=0; i<ul.children.length; i++){
                ul.children[i].style.pointerEvents="none";
            }
        },
        //This is going to make possible for the user to make a selection in general.
        allowClick:function(){
            for(let i=0; i<ul.children.length; i++){
                ul.children[i].style.pointerEvents="auto";
                ul.children[i].className=''
            }
        },
        //Allows the page to display the score for the user. Number of questions wrong and correct.
        score:0,
        scoreCard:function(){
            scoreCard.innerHTML=this.questions.length + "/" + this.score;
        }
}
//Loads the page
window.load=app.load();
//Were making the button function properly when clicked.
function button(ele){
    app.check(ele);
    app.preventClick();
}
//Were making the next button function properly when clicked.
function next(){
    app.next();
    app.allowClick();
}
//Setting up and displaying a timer for our page as the user does the quiz.
document.getElementById('timer').innerHTML =
003 + ":" + 20;
startTimer();
//This function allows the user to see a countdown timer, displaying that the user only has a certain amount to finish the quiz.
function startTimer() {
    var presentTime = document.getElementById('timer').innerHTML;
    var timeArray = presentTime.split(/[:]+/);
    var m = timeArray[0];
    var s = checkSecond((timeArray[1] - 1));
    if(s==59){m=m-1}

    document.getElementById('timer').innerHTML = 
    m + ":" + s;
    console.log(m)
    setTimeout(startTimer, 1000);
}
//Displaying the seconds, and minutes in the timer. This will actually display our counting down.
function checkSecond(sec) {
    if (sec < 10 && sec >= 0) {sec = "0" + sec};

    if(sec < 0) {sec = "59"};
    return sec;
}
