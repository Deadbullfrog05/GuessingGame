
    let x=Math.floor((Math.random()*100)+1);
   
    let opmsg=document.getElementById('message');
    let lowhi=document.getElementById('lowhigh');
    let guesses=document.getElementById('guesses');
    let sub=document.getElementById('any');
    let input=document.getElementById('quantity');
    let guesscnt=1;
    let resetButton;
    function checkGuess(){
        let uinput=Number(input.value);
        if(guesscnt===1)
        {
        guesses.textContent='Previous Guesses: ';
        }
    guesses.textContent += uinput+' ';
    if(uinput===x)
    {
       opmsg.textContent="Yay you did it!!";
       opmsg.style.backgroundColor='green';
       lowhi.textContent='';
       setGameOver();
    }
    else if(guesscnt===10)
    {
       opmsg.textContent="Oops you failed!!";
       opmsg.style.backgroundColor='red';
       lowhi.textContent='';
       setGameOver();
    }
    else{
        opmsg.textContent="Wrong!"
        if(uinput<x)
         {
             lowhi.textContent='your guess is too low';
         }
         else{
             lowhi.textContent='your guess is too high';
         }
    }
    guesscnt++;
    input.value='';
    input.focus();
}
    sub.addEventListener('click',checkGuess);
    
    function setGameOver(){
     input.disabled=true;
     sub.disabled=true;
     let formal=document.getElementById('formal');
     let btn=document.getElementById("btn");
    /*resetButton = document.createElement('button');
     txt=document.createTextNode('Start new game')
     resetButton.appendChild(txt);
     formal.appendChild(resetButton);*/
     btn.style.visibility="visible";
     btn.addEventListener('click', resetGame);
    }
    function resetGame() {
    guesscnt = 1;
    const resetParas = document.querySelectorAll('#box p');
    for(let i = 0 ; i < resetParas.length ; i++) {
      resetParas[i].textContent = '';
    }

   /* resetButton.parentNode.removeChild(resetButton);*/
    btn.style.visibility="hidden";
    input.disabled = false;
    sub.disabled = false;
    input.value = '';
    input.focus();
    opmsg.style.backgroundColor = 'white';
    randomNumber = Math.floor(Math.random() * 100) + 1;
  }
