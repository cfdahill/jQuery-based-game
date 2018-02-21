# week-4-game
attempting the Star Wars game first.

Psuedocode:
1. create four charactor objects
2.  assign each charactor 3 variables: name, innitial  health & attack
3.  onclick choose a character to be yours, append to player
a) all other characters move to a different section, append to other section
4.  on click choose an opponent
a) this opponent moves to a "challenger" section
-set your initial health and attack to new variables so they can easily change
-set opponent's health to new variable as well
5. click attack button to attack and remove health from opponent
6.  opponent autoattacks and removes health from you
7.  your next attack will add the initial attack value so it is doubled
    each subsequent attack will add initial attack value
8. once opponents health is <1 they die and disappear from the screen
9. Choose new oponnent and continue (your health or attack do not reset)
10.  Repeat process until either all opponents are dead and you win
    or you lose all health and lose
11. restart game shows after game ends

Include text telling the player what is happening
    "You attack ... for ## damage.
    ... attacks you for ## damage."
    "You have defeated ... .  Chose a new opponent."
    so on so forth

Make for only 2 characters, once that is working add the other two
