const lis1 = document.querySelectorAll('#first li');
const lis2 = document.querySelectorAll('#second li');
const lis3 = document.querySelectorAll('#third li');

const spinBtn = document.getElementById('btn1');

const theCredits = document.getElementById('credits');

const displayOfCredits = document.getElementById('displayCred');

const addCreditsBtn = document.getElementById('addCred');

const arrBets = document.querySelectorAll('.rows select');

const quantityOfBet = document.getElementById('quantityOfBet');

const h1 = document.querySelector('h1');

let isRed = false;

spinBtn.addEventListener('click', function () {
    const randomNumber3 = Math.random() * 6;
    let wholeNumber3 = Math.round(randomNumber3);
    let column3 = lis3[wholeNumber3];
    
    const randomNumber2 = Math.random() * 6;
    let wholeNumber2 = Math.round(randomNumber2);
    let column2 = lis2[wholeNumber2];
    
    const randomNumber1 = Math.random() * 6;
    let wholeNumber1 = Math.round(randomNumber1);
    let column1 = lis1[wholeNumber1];
    
    
    let arrValues = [];
    
    const checkIsNumberAdd = parseInt(theCredits.value);
    const checkIsNumberBet = parseInt(quantityOfBet.value);
    const checkIsNumberDisCred = parseInt(displayOfCredits.innerHTML);
    
    console.log(checkIsNumberDisCred);
    
    
    if(isNaN(checkIsNumberAdd) || isNaN(checkIsNumberBet)){
        h1.innerHTML = 'Enter Credits and Bet';
        h1.style.color = 'red';
        

    }
    else{

        if(isNaN(checkIsNumberDisCred) || checkIsNumberDisCred === 0 || checkIsNumberDisCred < 0 || checkIsNumberAdd< checkIsNumberBet || checkIsNumberBet> checkIsNumberDisCred){
            h1.innerHTML = 'Add Credits!';
            h1.style.color = 'red';
            
        }
        else{
            h1.innerHTML = 'Good Luck!!!';
            h1.style.color = 'green';
    
            for (let i = 0; i < 3; i++) {
                arrValues.push(arrBets[i].value);
            }
            const theNumbersOfBets = Array.from(arrBets).map(select => parseInt(select.value, 10));
        
            if (isRed) {
                lis1.forEach(li => {
                    li.style.backgroundColor = '';
                    li.style.animation = '';
                    li.style.fontSize = '';
                    
                });
        
                lis2.forEach(li => {
                    li.style.backgroundColor = '';
                    li.style.animation = '';
                    li.style.fontSize = '';
                    
                });
        
                lis3.forEach(li => {
                    li.style.backgroundColor = '';
                    li.style.animation = '';
                    li.style.fontSize = '';
                    
                });
        
                spinBtn.style.backgroundColor = 'rgb(0, 60, 255)';
                spinBtn.style.color = 'yellowgreen';
                
                
                
            } else {
                spinBtn.style.color = 'white';
                spinBtn.style.backgroundColor = 'red';
                column1.style.backgroundColor = 'red';
                column2.style.backgroundColor = 'red';
                column3.style.backgroundColor = 'red';

        
                let creditsToNumber = parseInt(displayOfCredits.innerHTML);
                console.log(creditsToNumber);
        
                let minus = creditsToNumber - quantityOfBet.value;
                displayOfCredits.innerHTML = minus;
        
                const multiplyFun = () => {
                   let smth = parseInt(displayOfCredits.innerHTML);
                   let theMulty = smth + (checkIsNumberBet*2);

                   displayOfCredits.innerHTML = theMulty;
                };
                console.log(minus);
                
        
                if (parseInt(column1.innerHTML) === theNumbersOfBets[0]) {
                    console.log(`win ${theNumbersOfBets[0]}`);
                    column1.style.backgroundColor = 'green';
                    column1.style.animation = 'glow 2s infinite alternate';
                    column1.style.transition = 'all 0.3s ease-in-out';
                    column1.style.fontSize = '3rem';
                    
                    multiplyFun();
                    
                    
        
                }
        
                if (parseInt(column2.innerHTML) === theNumbersOfBets[1]) {
                    console.log(`win ${theNumbersOfBets[1]}`);
                    column2.style.backgroundColor = 'green';
                    column2.style.animation = 'glow 2s infinite alternate';
                    column2.style.transition = 'all 0.3s ease-in-out';
                    column2.style.fontSize = '3rem';
                    multiplyFun();
                    
                }
        
                if (parseInt(column3.innerHTML) === theNumbersOfBets[2]) {
                    console.log(`win ${theNumbersOfBets[2]}`);
                    column3.style.backgroundColor = 'green';
                    column3.style.animation = 'glow 2s infinite alternate';
                    column3.style.transition = 'all 0.3s ease-in-out';
                    column3.style.fontSize = '3rem';
                    multiplyFun();
                    
                }
            }



        }
      
    }

    
    isRed = !isRed;
});



addCreditsBtn.addEventListener('click', () => displayOfCredits.innerHTML = theCredits.value);
