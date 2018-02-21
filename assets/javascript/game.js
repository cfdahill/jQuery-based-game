var oppAttack; //opponent's attack
var yourAttack; //your current attack value
var yourHealth; //your current health value
var oppHealth; //opponent's current health
var oppName; //name of your opponent
var yourHUD; // show your health
var oppHUD; // show opponent's health
var yourAttack0; //initial attack value
var oppDiv; //the division your opponent is in
var you; //to call the object that you are
var opp; // to call the object that your opponent is
var youAt;
var oppNa;

var char1 = {
    name: "King Arthur",
    attack0: 2,
    health0: 20,
    youComment: ['You take out the Holy Pin from the Holy Hand Grenade of Antioch, count out loud, "1, 2, 5" - 3 sir - "3," and lobbest thou thy Holy Hand Grenade of Antioch towards thy foe, dealing ', 'Your friends and you say "NI!" dealing ', 'You bravely run away, dealing '],
    oppComment: ['King Arthur takes out the Holy Pin from the Holy Hand Grenade of Antioch, counts out loud, "1, 2, 5" - 3 sir - "3," and lobbests thous thy Holy Hand Grenade of Antioch towards thee, dealing 2 damage.', 'King Arthur and his friends say "NI!" dealing 2 damage.', 'King Arthur bravely runs away, dealing 2 damage.'],
};

var char2 = {
    name: "The French",
    attack0: 1,
    health0: 8,
    youComment: ["You fart in your opponent's the general direction, dealing ", "You taunt your opponent a second time, dealing ", "You catapault cows onto your opponent, dealing ", 'You yell out to your enemy, "Your mother was a hamster and your father smells of elderberries."  With an insult like that they take '],
    oppComment: ["The French fart in your general direction, dealing 3 damage.", "The French taunt you a second time, dealing 3 damage.", "The French catapault cows onto you, dealing 3 damage.", 'The French yell at you, "your mother was a hamster and your father smells of elderberries."  With an insult like that you take 3 damage.']
};

var char3 = {
    name: "The Rabbit",
    attack0: 1,
    health0: 20,
    youComment: ["You rip off the head of your opponent in a single lunge, dealing ", "With your huge sharp -- and the ability to leap -- ... Look at the bones!  The Rabbit deals ", "The Rabbit leaps effortlessly from knight to knight dealing "],
    oppComment: ["The Rabbit rips your head off in a single lunge, dealing x damage.", "With the Rabbit's huge sharp -- and the ability to leap --... Look at the bones!  The Rabbit deals x damage.", "The Rabbit leaps effortly from knight to knight dealing x damage."]
};

var char4 = {
    name: "Keeper of the Bridge of Death",
    attack0: 1,
    health0: 20,
    youComment: ['You ask "What is your name?"  A poignant question dealing ', 'You ask "What is your quest?"  A real stumper dealing ', 'You ask "What is your favorite color?"  Your opponent hems and haws for an answer taking ', 'You ask "What is the unladen air speed of a swallor?"  The crevase awaits your enemy now, dealt '],
    oppComment: ['The Keeper asks "What is your name?"  A poignant question dealing x damage.', 'The Keeper asks "What is your quest?"  A real stumper dealing x damage.', 'The Keeper asks "What is your favorite color?" You hem and haw for an answer taking x damage.', 'The Keeper asks "What is the unladen air speed of a swallow?"  The crevase awaits you now, damage x.']
};

var randomNum = function (number) {
    return Math.floor(Math.random() * number);
}

var playerAttack = function () {
    yourAttack += yourAttack0;
}

var playerHealth = function (health) {
    health -= oppAttack;
}

var enemyHealth = function (health) {
    health -= attack1;
}

var chooseEnemy = function (player) {
    $("#summary").html("You have chosen " + player + ".  Now choose an enemy.");
}

var pressAttack = function (player) {
    $("#summary").html("Your enemy is " + player + ".  Press attack to wage battle!");
}

var commentary = function (yourAttack) {
    $("#summary").html(you.youComment[randomNum(you.youComment.length)] + yourAttack + " damage.")
    $("#summary").append("  " + opp.oppComment[randomNum(opp.oppComment.length)]);
}

$(document).ready(function () {
    $("#attack").hide();
    $("#newGame").hide();
    $("#grave").hide();
    $("#summary").html("Choose a challenger");
    $("#arthur").click(function () {
        if (yourHealth == undefined) {
            $("#arthur").detach().appendTo("#player");
            you = char1;
            yourHealth = char1.health0;
            yourAttack = char1.attack0;
            yourAttack0 = char1.attack0;
            yourHUD = $("#healthArthur");
            chooseEnemy(char1.name);
        } else if (oppHealth == undefined || oppHealth < 1) {
            $("#arthur").detach().appendTo("#opponent");
            opp = char1;
            oppHealth = char1.health0;
            oppAttack = char1.attack0;
            oppHUD = $("#healthArthur");
            oppDiv = "#arthur";
            pressAttack(char1.name);
            $("#attack").show();
        } else {
            alert("Fool!  You can't possibly take on two of us.")
        }
    });
    $("#french").click(function () {
        if (yourHealth == undefined) {
            $("#french").detach().appendTo("#player");
            you = char2;
            yourHealth = char2.health0;
            yourAttack = char2.attack0;
            yourAttack0 = char2.attack0;
            yourHUD = $("#healthFrench");
            chooseEnemy(char2.name);
        } else if (oppHealth == undefined || oppHealth < 1) {
            $("#french").detach().appendTo("#opponent");
            opp = char2;
            oppHealth = char2.health0;
            oppAttack = char2.attack0;
            oppHUD = $("#healthFrench");
            oppDiv = "#french";
            pressAttack(char2.name);
            $("#attack").show();
        } else {
            alert("Fool!  You can't possibly take on two of us.")
        }
    });
    $("#rabbit").click(function () {
        if (yourHealth == undefined) {
            $("#rabbit").detach().appendTo("#player");
            you = char3;
            yourHealth = char3.health0;
            yourAttack = char3.attack0;
            yourAttack0 = char3.attack0;
            yourHUD = $("#healthRabbit");
            chooseEnemy(char3.name);
        } else if (oppHealth == undefined || oppHealth < 1) {
            $("#rabbit").detach().appendTo("#opponent");
            opp = char3;
            oppHealth = char3.health0;
            oppAttack = char3.attack0;
            oppHUD = $("#healthRabbit");
            oppDiv = "#rabbit";
            pressAttack(char3.name);
            $("#attack").show();
        } else {
            alert("Fool!  You can't possibly take on two of us.")
        }
    });
    $("#keeper").click(function () {
        if (yourHealth == undefined) {
            $("#keeper").detach().appendTo("#player");
            you = char4;
            yourHealth = char4.health0;
            yourAttack = char4.attack0;
            yourAttack0 = char4.attack0;
            yourHUD = $("#healthKeeper");
            chooseEnemy(char4.name);
        } else if (oppHealth == undefined || oppHealth < 1) {
            $("#keeper").detach().appendTo("#opponent");
            opp = char4;
            oppHealth = char4.health0;
            oppAttack = char4.attack0;
            oppHUD = $("#healthKeeper");
            oppDiv = "#keeper";
            pressAttack(char4.name);
            $("#attack").show();
        } else {
            alert("Fool!  You can't possibly take on two of us.")
        }
    });
    $("#attack").click(function () {
        oppHealth = oppHealth - yourAttack;
        yourHealth = yourHealth - oppAttack;
        yourHUD.text(yourHealth);
        oppHUD.text(oppHealth);
        console.log(oppHealth);
        console.log(yourAttack);
        commentary(yourAttack);
        playerAttack();
        if (oppHealth < 1) {
            $(oppDiv).detach().appendTo("#grave");
            $("#summary").html("You have fought well this day.  Choose a new challenger.")
            $("#attack").hide();
        } else if (yourHealth < 1) {
            $("#summary").html('You have fallen in battle, brave knight.  However, a meager "I\'m not dead yet" imminates from your soon to be dead corpse.')
            $("#attack").hide();
            $("#newGame").show();
        }
        if ($("#grave > section").length == 3) {
            $("#attack").hide();
            $("#newGame").show();
            $("#summary").html("You have defeated all of your enemies.  And there was much rejoicing ... yay")
        }

    });

    $("#newGame").click(function () {
        location.reload();
    });
});