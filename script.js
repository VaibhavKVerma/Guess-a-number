'use strict';

let secretNumber = Math.trunc(Math.random()*30)+1;
//console.log(secretNumber);
let score = 15;
let flag = false;

let highScore = Number(document.querySelector('.highscore').textContent);

document.querySelector('.check').addEventListener('click',function(){
    const guessValue = Number(document.querySelector('.guess').value);
    //Wrong Input
    if(!flag){
        if(guessValue<1 || guessValue>30){
            alert(`Invalid Input : Please enter a number between 1 and 30`);
            document.querySelector('.guess').value = '';
        }
    //Correct Input
    else{
        //Win
        if(guessValue === secretNumber){
            document.querySelector('.message').textContent = "Correct Number";
            document.querySelector('.number').textContent = secretNumber;
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '30rem';
            flag = true;
            if(score>highScore){
                highScore = score;
                document.querySelector('.highscore').textContent = score;
            }
        }
        else{
            if(score>1){
                document.querySelector('.message').textContent = guessValue > secretNumber ? "High Number" : "Low Number";
                score--;
                document.querySelector('.score').textContent = score;
            }
            else{
                document.querySelector('.message').textContent = "U Lost😭😭Pls Try again";
                document.querySelector('.score').textContent = 0;
            }
        }
//         //High
//         else if(guessValue>secretNumber){
//             if(score>1){
//                 document.querySelector('.message').textContent = "High Number";
//                 score--;
//                 document.querySelector('.score').textContent = score;
//             }
//             else{
//                 document.querySelector('.message').textContent = "U Lost😭😭Pls Try again";
//                 document.querySelector('.score').textContent = 0;
//             }
//         }
//         //Low
//         else if(guessValue<secretNumber){
//             if(score>1){
//                 document.querySelector('.message').textContent = "Low Number";
//                 score--;
//                 document.querySelector('.score').textContent = score;
//             }
//             else{
//                 document.querySelector('.message').textContent = "U Lost😭😭Pls Try again";
//                 document.querySelector('.score').textContent = 0;
//             }
//         }
    }
    
    }
});
//Again
document.querySelector('.again').addEventListener('click',function(){
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    flag = false;
    secretNumber = Math.trunc(Math.random()*30)+1;
    document.querySelector('.message').textContent = "Start guessing...";
    score = 15;
    document.querySelector('.score').textContent = 15;
    document.querySelector('.guess').value = '';
    console.log(secretNumber);
});






