
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
        next: function(){
            this.index++;
            this.load();
        },
        check: function(ele){
            var id=ele.id.split('');
            if(id[id.length-1]==this.questions[this.index].answer){
                this.score++;
                ele.className="correct";
                this.scoreCard();
            }
            else{
                ele.className="wrong";
            }
        },
        preventClick:function(){
            for(let i=0; i<ul.children.length; i++){
                ul.children[i].style.pointerEvents="none";
            }
        },
        allowClick:function(){
            for(let i=0; i<ul.children.length; i++){
                ul.children[i].style.pointerEvents="auto";
                ul.children[i].className=''
            }
        },
        score:0,
        scoreCard:function(){
            scoreCard.innerHTML=this.questions.length + "/" + this.score;
        }
}

window.load=app.load();

function button(ele){
    app.check(ele);
    app.preventClick();
}

function next(){
    app.next();
    app.allowClick();
}

document.getElementById('timer').innerHTML =
003 + ":" + 20;
startTimer();

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

function checkSecond(sec) {
    if (sec < 10 && sec >= 0) {sec = "0" + sec};

    if(sec < 0) {sec = "59"};
    return sec;
}
