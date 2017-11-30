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

function checkWin(playerArr){
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

    

//loops over the win array
for(var i = 0; i < winningNums.length; i ++){  
    //console.log(winningNums[i]);  
    compareArrs(playerArr, winningNums[i]);
    

    }    

};


function compareArrs(playerArr, winningArr){
    let sortedArr = playerArr.sort(function(a,b){return a - b;});
    let counter = 0;
    
    
    for(var j = 0; j < sortedArr.length; j++){        
        console.log(sortedArr);
        console.log(winningArr[j]);
         
        //checks that a player has made at least three turns
        if (sortedArr.length < 3){
            return;
        }

        //if the player array value is equal to winning num value, increment counter
        
        if (sortedArr[j] == winningArr[j] && sortedArr[j].includes(winningArr[j], -1)) {                 
            counter ++;             
            console.log('Count is at ' + counter);
        }      
        
        if(counter >= 3){
            alert('You won.');
            resetGame();
        }       
        
        
    }

       
      

        
}



//reloads the page for another game
function resetGame(){    
    location.reload();

}





turn();
