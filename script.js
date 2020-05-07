var score, roundScore, dice, gamePlaying, nameFirst, nameSecond;

/***************************************

   GETTING NAME FROM INPUT

***************************************/



document.querySelector('#start-btn h2').addEventListener('click',function(){
    document.getElementById('instructions').style.display='none';
    document.querySelector('.gameboard').style.display='flex';
    
    
    
    
    
})
init();

function pointer(val) { 
    document.querySelector('.player h1').style.left = val;
}
/****************************************************
*                                                   *
*         IMPLEMENTING RANDOM VALUES FUCTION        *                                   
*                 TO DICE VAR                       *              
*                                                   * 
*****************************************************/



/*********************************************
*         eventListner function
**********************************************/

document.getElementById('btn-roll').addEventListener('click', function(){
    
    if(gamePlaying){
            
            document.querySelector('#dicepic').style.display = 'inline-block';
            dice = Math.floor(Math.random()*6)+1;
            //console.log(dice);
            document.querySelector('#dicepic').src = 'dice-' + dice + '.jpg';
            if(dice !== 1){
                roundScore += dice;
                document.getElementById('current-'+activePlayer).textContent = roundScore;

            }
            else{

                roundScore = 0;
                document.getElementById('current-'+activePlayer).textContent = roundScore;
                playerSwitching();
            }    
    }
    
    
} );


// hold btn configuration
document.getElementById('btn-hold').addEventListener('click', function(){
    if(gamePlaying){
    
        score[activePlayer] += roundScore;
        roundScore = 0;
        document.getElementById('current-'+activePlayer).textContent = roundScore;
        document.getElementById('score-'+activePlayer).textContent = score[activePlayer];
        if(score[activePlayer] >= 100){
            gamePlaying=false;
           
            
            document.querySelector('.gameboard').style.display='none';
            document.querySelector('.winner').style.display='inline-block';
        
            document.querySelector('.winner span').textContent='PLAYER '+ ++activePlayer;
            
           
            document.querySelector('#dicepic').style.display = 'none';
            document.querySelector('.player h1').style.display='none';
            
        }
        else{
            playerSwitching();        
        }
    
    }
    
    
    
})

// new game button

document.querySelector('.start-again').addEventListener('click', init);

//start-again

document.querySelector('.play-again h2').addEventListener('click', function(){
    
    init();
    
    document.querySelector('.gameboard').style.display='flex';
    
    document.querySelector('.winner').style.display='none';
})



//for switiching b/w players
function playerSwitching(){
    activePlayer === 0 ? pointer('72%') : pointer('22%');
    document.getElementById('player-'+activePlayer).style.backgroundColor='azure'; 
        activePlayer = activePlayer===0? 1 : 0;
    document.getElementById('player-'+activePlayer).style.backgroundColor='darkcyan';
}



function init(){

    score =[0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    
    
    document.querySelector('#player-0 h2').textContent ='Player 1';
    
    document.querySelector('#player-1 h2').textContent ='Player 2';
    document.querySelector('#score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('#dicepic').style.display = 'none';

    document.getElementById('player-'+activePlayer).style.backgroundColor='darkcyan';
    document.getElementById('player-1').style.backgroundColor='azure';
    document.querySelector('.player h1').style.display='block';
    pointer('22%');
    
    //active player changing for 
    // player-0 : 22%
    //player-1 : 72%
    //intially active player is player-0
    //document.querySelector('.player h1').style.left='72%';
}

// sound funtion



