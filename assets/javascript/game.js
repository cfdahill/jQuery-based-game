var oppAttack; //opponent's attack
var yourAttack; //your current attack value
var yourHealth; //your current health value
var oppHealth; //opponent's current health
var yourHUD; // show your health
var oppHUD; // show opponent's health
var yourAttack0; //initial attack value
var oppDiv; //the division your opponent is in
var you; //to call the object that you are
var opp; // to call the object that your opponent is

var char1 = {
    name: "King Arthur",
    div: "#arthur",
    attack0: 10,
    health0: 150,
    youComment: ['You take out the Holy Pin from the Holy Hand Grenade of Antioch, count out loud, "1, 2, 5" - 3 sir - "3," and lobbest thou thy Holy Hand Grenade of Antioch towards thy foe, dealing ', 'Your friends and you say "NI!" dealing ', 'You bravely run away, dealing '],
    oppComment: ['King Arthur takes out the Holy Pin from the Holy Hand Grenade of Antioch, counts out loud, "1, 2, 5" - 3 sir - "3," and lobbests thous thy Holy Hand Grenade of Antioch towards thee, dealing 10 damage.', 'King Arthur and his friends say "NI!" dealing 10 damage.', 'King Arthur bravely runs away, dealing 10 damage.'],
};

var char2 = {
    name: "The French",
    div: "#french",
    attack0: 15,
    health0: 125,
    youComment: ["You fart in your opponent's the general direction, dealing ", "You taunt your opponent a second time, dealing ", "You catapault cows onto your opponent, dealing ", 'You yell out to your enemy, "Your mother was a hamster and your father smells of elderberries."  With an insult like that they take '],
    oppComment: ["The French fart in your general direction, dealing 15 damage.", "The French taunt you a second time, dealing 15 damage.", "The French catapault cows onto you, dealing 15 damage.", 'The French yell at you, "your mother was a hamster and your father smells of elderberries."  With an insult like that you take 15 damage.']
};

var char3 = {
    name: "The Rabbit",
    div: "#rabbit",
    attack0: 30,
    health0: 80,
    youComment: ["You rip off the head of your opponent in a single lunge, dealing ", "With your huge sharp -- and the ability to leap -- ... Look at the bones!  The Rabbit deals ", "The Rabbit leaps effortlessly from knight to knight dealing "],
    oppComment: ["The Rabbit rips your head off in a single lunge, dealing 30 damage.", "With the Rabbit's huge sharp -- and the ability to leap --... Look at the bones!  The Rabbit deals 30 damage.", "The Rabbit leaps effortly from knight to knight dealing 30 damage."]
};

var char4 = {
    name: "Keeper of the Bridge of Death",
    div: "#keeper",
    attack0: 20,
    health0: 110,
    youComment: ['You ask "What is your name?"  A poignant question dealing ', 'You ask "What is your quest?"  A real stumper dealing ', 'You ask "What is your favorite color?"  Your opponent hems and haws for an answer taking ', 'You ask "What is the unladen air speed of a swallor?"  The crevase awaits your enemy now, dealt '],
    oppComment: ['The Keeper asks "What is your name?"  A poignant question dealing 20 damage.', 'The Keeper asks "What is your quest?"  A real stumper dealing 20 damage.', 'The Keeper asks "What is your favorite color?" You hem and haw for an answer taking 20 damage.', 'The Keeper asks "What is the unladen air speed of a swallow?"  The crevase awaits you now, damage 20.']
};

var randomNum = function (number) {
    return Math.floor(Math.random() * number);
}

var playerAttack = function () {
    yourAttack += yourAttack0;
}

var chooseEnemy = function (player) {
    $("#summary").html("You have chosen " + player + ".  Now choose an enemy.");
}

var youStats = function (player) {
    you = player;
    $(player.div).detach().appendTo("#player");
    $(player.div).css("background-color", "#e1e151d1")
    yourHealth = player.health0;
    yourHUD = $(player.div + "Health");
    yourAttack = player.attack0;
    yourAttack0 = player.attack0;
    chooseEnemy(player.name);
    $(player.div).off();
}

var enemyStats = function (player) {
    opp = player;
    $(player.div).detach().appendTo("#opponent");
    $(player.div).css("background-color", "#b54242");
    oppHUD = $(player.div + "Health");
    oppHealth = player.health0;
    oppAttack = player.attack0;
    pressAttack(player.name)
    $("#attack").show();
    oppDiv = player.div;
}

var pressAttack = function (player) {
    $("#summary").html("Your enemy is " + player + ".  Press attack to wage battle!");
}

var commentary = function (yourAttack) {
    $("#summary").html(you.youComment[randomNum(you.youComment.length)] + yourAttack + " damage.");
    $("#summary").append("  " + opp.oppComment[randomNum(opp.oppComment.length)]);
}

var endGame = function () {
    $("#attack").hide();
    $("#newGame").show();
}

$(document).ready(function () {
    $("#attack").hide();
    $("#newGame").hide();
    $("#grave").hide();
    $("#summary").html("Choose a charactor");
    $("#arthur").click(function () {
        if (yourHealth == undefined) {
            youStats(char1);
        } else if (oppHealth == undefined || oppHealth < 1) {
            enemyStats(char1);
        } else {
            alert("Bloody peasant!  I, King of the Brittons, am too honorable to fight two on one.")
        }
    });
    $("#french").click(function () {
        if (yourHealth == undefined) {
            youStats(char2);
        } else if (oppHealth == undefined || oppHealth < 1) {
            enemyStats(char2);
        } else {
            alert("You don't frighten us, English pig dogs.  We will fight you mono e mono.")
        }
    });
    $("#rabbit").click(function () {
        if (yourHealth == undefined) {
            youStats(char3);
        } else if (oppHealth == undefined || oppHealth < 1) {
            enemyStats(char3);
        } else {
            alert("That's no ordinary rabbit.  You'll want to take it on by itself.")
        }
    });
    $("#keeper").click(function () {
        if (yourHealth == undefined) {
            youStats(char4);
        } else if (oppHealth == undefined || oppHealth < 1) {
            enemyStats(char4);
        } else {
            alert("What is the capitol of Assyria?  Do you really think you are ready for my questions?")
        }
    });
    $("#attack").click(function () {
        oppHealth = oppHealth - yourAttack;
        yourHealth = yourHealth - oppAttack;
        yourHUD.text(yourHealth);
        oppHUD.text(oppHealth);
        commentary(yourAttack);
        playerAttack();
        if (oppHealth < 1 && yourHealth > 1) {
            $(oppDiv).detach().appendTo("#grave");
            $("#summary").html("You have fought well this day.  Choose a new challenger.")
            $("#attack").hide();
        } else if (yourHealth < 1) {
            $("#summary").html('You have fallen in battle, brave knight.  However, a meager "I\'m not dead yet" imminates from your soon to be dead corpse.')
            endGame();
        }
        if ($("#grave > section").length == 3 && yourHealth > 1) {
            endGame();
            $("#summary").html("You have defeated all of your enemies.  And there was much rejoicing ... yay")
        } else if ($("#grave > section").length == 3) {
            $("#summary").html("Alright, we'll call it a draw.");
            endGame();
        }
    });

    $("#newGame").click(function () {
        location.reload();
    });
});

/*Psuedocode:
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
    */
