const box = document.querySelectorAll('box');
const boxes = document.querySelectorAll('.box');
const infoBar = document.querySelector('#infoBar');
let turnX = true;
let turnO = false; 

function turn(){
    //iterate over the array of boxes and do a click event
   for(var i = 0; i < boxes.length; i ++){
       boxes[i].addEventListener('click',function(){
           //alternate between X and O turns 
           if(turnX){
            infoBar.textContent = 'Currently Player O\'s turn';   
            this.textContent = 'X';
            turnX = false;
            turnO = true;
           }
           else if(turnO) {
            infoBar.textContent = 'Currently Player X\'s turn'; 
               this.textContent = 'O';
               turnO = false;
               turnX = true;
           }

           
       })
   }
   checkWin();
}

function checkWin(){
    //check contents of the boxes
    //if there are three of the same letters in a row, declare a winner
    const  rowWin = [
        [1,4,7],
        [2,5,8],
        [3,6,9]
    ];

    const columnWin = [
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ];
    
    const diagWin = [
        [1,5,9],
        [3,5,7]
    ];

    for(var i = 0; i < boxes.length + 1; i ++){     
        const singleBox = document.querySelector(`div[data-attr ="${i}"]`);
        console.log(singleBox);
        console.log(rowWin);
    
        
        
    }

}


turn();