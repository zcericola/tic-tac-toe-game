const box = document.querySelectorAll('box');
const boxes = document.querySelectorAll('.box');
const infoBar = document.querySelector('#infoBar');
let turnX = true;
let turnO = false; 
playerXArr = [];
playerOArr = [];

function turn(){
    //iterate over the array of boxes and do a click event
   for(var i = 0; i < boxes.length; i ++){
       const boxValue = boxes[i].getAttribute('data-attr');
       boxes[i].addEventListener('click',function(){
           //alternate between X and O turns 
           if(turnX){
            infoBar.textContent = 'Currently Player O\'s turn';   
            this.textContent = 'X';
            playerXArr.push(boxValue);
            //console.log('player X: ' + playerXArr);
            turnX = false;
            turnO = true;
            
                       
             
           }
           else if(turnO) {
            infoBar.textContent = 'Currently Player X\'s turn'; 
               this.textContent = 'O';
               playerOArr.push(boxValue);
               //console.log('player O: ' + playerOArr);              
               turnO = false;
               turnX = true;
                 
           }
           
           checkWin(playerXArr);
           checkWin(playerOArr);        
       })
             
   }
   
   
    
}

function checkWin(arr){
    //check contents of the boxes
    //if there are three of the same letters in a row, declare a winner
    const  winningNums = [
        [1,4,7],
        [2,5,8],
        [3,6,9],  
        [1,2,3],
        [4,5,6],
        [7,8,9], 
        [1,5,9],
        [3,5,7]
    ];

//loops over the player array
for(var i = 0; i <= arr.length; i ++){
    //loops over each winning number array
    for(var j = 0; j <= winningNums[i].length; j++){
    //checks that a player has made at least three turns
    if(arr.length < 3 || arr.includes(winningNums[i] <= -1)){
        return;
    }
    //if the player array is equal to an array inside winningNums, alert the game has been won and reset           
    if(arr[i] === winningNums[i][j]){
       alert('Player has won');
       resetGame();
        }
    } 

    }    

}

//reloads the page for another game
function resetGame(){    
    location.reload();

}





turn();
