//code goes here
            var randomNumber = Math.floor(Math.random() * 99) +1;
            var guesses = document.querySelector('#guesses');
            var lastResult = document.querySelector('#lastResult');
            var lowOrHi = document.querySelector('#lowOrHi');
            
            var guessSubmit = document.querySelector('.guessSubmit');
            var guessField = document.querySelector('.guessField');
            
            var guessCount = 1;
            var resetButton = document.querySelector('#reset');
            var gamesWon = 0;
            resetButton.style.display = 'none';
            guessField.focus();
            //document.getElementById("numberToGuess").innerHTML = randomNumber;
            
            function checkGuess(){
                var userGuess = Number(guessField.value);
                if(guessCount === 1){
                    guesses.innerHTML = 'Previous guesses: ';
                }
                guesses.innerHTML += userGuess + ' ';
                
                if(userGuess === randomNumber){
                    lastResult.innerHTML = 'Congrats! you got it right!';
                    gamesWon++;
                    lastResult.style.backgroundColor = 'green';
                    lowOrHi.innerHTML = '';
                    setGameOver();
                }else if(guessCount === 7){
                    lastResult.innerHTML = 'Sorry, you lost!';
                    setGameOver();
                }else{
                    lastResult.innerHTML ='Wrong!';
                    lastResult.style.backgroundColor = 'red';
                    if(userGuess > 99){
                        lowOrHi.innerHTML = "Number needs to be in between 1 and 99 try again";
                        guessCount--;
                    } else if(userGuess < randomNumber){
                        lowOrHi.innerHTML = "Your last guess was too low!";
                        
                    } else if(userGuess > randomNumber){
                        lowOrHi.innerHTML = "Your last guess was too high!";
                    }
                }
                
                
                guessCount++;
                guessField.value = '';
                guessField.focus();
            }
            guessSubmit.addEventListener('click', checkGuess);
            function setGameOver(){
                guessField.disabled = true;
                guessSubmit.disabled = true;
                resetButton.style.display = 'inline';
                resetButton.addEventListener('click',resetGame);
            }
            function resetGame(){
                guessCount = 1;
                
                var resetParas = document.querySelectorAll('.resultParas p');
                for(var i = 0; i < resetParas.length; i++){
                    resetParas[i].textContent = '';
                }
                resetButton.style.display = 'none';
                
                guessField.disabled = false;
                guessSubmit.disabled = false;
                guessField.value = '';
                guessField.focus();
                
                lastResult.style.background = 'white';
                
                randomNumber = Math.floor(Math.random() *99) + 1;
            }