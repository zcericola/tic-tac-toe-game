const boxes = document.querySelectorAll('.box');
const infoBar = document.querySelector('#infoBar');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const reset = document.querySelector('.reset');
let turnX = true;
let turnO = false;

//Check if player X has won
function checkWinX(){
    if(one.innerHTML == 'X' && four.innerHTML == 'X' && seven.innerHTML == 'X' ||
    two.innerHTML == 'X' && five.innerHTML == 'X' && eight.innerHTML == 'X'||
    three.innerHTML == 'X' && six.innerHTML == 'X' && nine.innerHTML == 'X' ||
    one.innerHTML == 'X' && two.innerHTML == 'X' && three.innerHTML == 'X' ||
    four.innerHTML == 'X' && five.innerHTML == 'X' && six.innerHTML == 'X' ||
    seven.innerHTML == 'X' && eight.innerHTML == 'X' && nine.innerHTML == 'X' ||
    one.innerHTML == 'X' && five.innerHTML == 'X' && nine.innerHTML == 'X' ||
    seven.innerHTML == 'X' && five.innerHTML == 'X' && three.innerHTML == 'X'){
        infoBar.textContent = 'Congratulations! Player X wins!';
        infoBar.classList.add('winner');        
    }   
}

//Check if player O has won
function checkWinO(){
    if(one.innerHTML == 'O' && four.innerHTML == 'O' && seven.innerHTML == 'O' ||
       two.innerHTML == 'O' && five.innerHTML == 'O' && eight.innerHTML == 'O' ||
       three.innerHTML == 'O' && six.innerHTML == 'O' && nine.innerHTML == 'O' ||
       one.innerHTML == 'O' && two.innerHTML == 'O' && three.innerHTML == 'O' ||
       four.innerHTML == 'O' && five.innerHTML == 'O' && six.innerHTML == 'O' ||
       seven.innerHTML == 'O' && eight.innerHTML == 'O' && nine.innerHTML == 'O' ||
       one.innerHTML == 'O' && five.innerHTML == 'O' && nine.innerHTML == 'O' ||
       seven.innerHTML == 'O' && five.innerHTML == 'O' && three.innerHTML == 'O'){
        infoBar.textContent = 'Congratulations! Player O wins!'
        infoBar.classList.add('winner');
    }  

}

//runs everytime someone takes a turn
function turn(){
    for ( var i = 0; i < boxes.length; i ++){        
        boxes[i].addEventListener('click', function(){
            let boxValue = this.textContent;
            if(turnX === true){
                infoBar.textContent = 'Currently Player O\'s turn'; 
                this.textContent = 'X';                
                turnX = false;
                turnO = true;                          
                checkWinX();             
                
                
               
            }
            else if(turnO === true){
                infoBar.textContent = 'Currently Player X\'s turn'; 
                this.textContent = 'O';
                turnO = false;
                turnX = true;
                checkWinO();
            }            
        })       
        
    }
}

//Resets the game back to the start
function resetGame(){
    reset.addEventListener('click', function(){
        location.reload();
    })
}



turn();
resetGame();

