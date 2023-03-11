function rollDice() {
    let goldCoins = 0;
    for (let i = 0; i < 10; i++) {
        const roll = Math.floor(Math.random() * 6) + 1;
        alert('You roll a ' + roll + '.');
        
        if (roll === 1) {
            alert('Game over, no more rolls!');
            break;
        }
        
        if (roll === 4) {
            alert('You have lost a gold coin, you now have ' + (goldCoins--) + ' gold coins');
        }
        if (roll < 5) {
        continue;
        }
        goldCoins += roll;
        alert('Congratulations, you win ' + roll + ' gold coins!' + '\n\nYou have a total of ' + roll + ' coins.' );
        
    }
    alert('You have won a total of ' + goldCoins + ' gold coins!');
}

//Update the code to give the player a running count of how many gold coins they have won each time they roll a winning toss, instead of only at the end.
//Add another rule: If the player rolls a 4, then 1 coin is subtracted from the total before the next roll, only if they have more than 0 coins