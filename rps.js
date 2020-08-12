

 var userChoice = prompt ('please enter Rock, paper, or scissors.');
 userChoice = userChoice.toLowerCase();
 
 if (userChoice === "rock" || userChoice === "paper" || userChoice === "scissors") {
      document.write('you picked ' + userChoice + '<br />')
  } else { 
      document.write ("you did not choose anything dood :)")
  }

  var computerPick = Math.random();
  var computerChoice = 'scissors'
  if (computerPick < 0.34) {
     computerChoice = 'rock'
  } else if (computerPick<= 0.66) {
            computerChoice = 'paper'
  }

document.write ('the computer picked: '+ computerChoice)


var compare = function (choice1, choice2) {
  if (choice1 === choice2) {
    return ' no one, it is a tie :D';
}

if (choice1 === 'rock') {
  if (choice2 === 'paper') {
  return ' the computer yo!'
} else {
  return ' you yo'
}
}

if (choice1 === 'paper') {
 if (choice2 === 'rock'){
 return ' the computer yo!'
} else {
 return ' you yo'
}
}

if (choice1 === 'rock'){
 if (choice2 === 'scissors'){
 return ' the computer yo!'
} else {
 return ' you yo'
}
}

if (choice1 === 'scissors'){
 if (choice2 === 'rock') {
 return 'the computer!'
} else {
 return ' you yo'
}
}
}
        
var winner = compare(userChoice, computerChoice);

document.write(' The winner is' + winner);