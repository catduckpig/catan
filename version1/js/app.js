//JavaScript
/*
1. add event listeners to all road areas, settlement & port areas, buttons, robber, hexes, and cards
2. initialize the state
    2a. define players (#, name, etc.) 
    2b. decide turn order
    2c. set player victory points to 0
    2d. refill deck
3. call render
4. initial turn
    4a. players click board to place initial settlements and roads
    4b. store settlement/port areas, road areas taken
    4c. distribute initial hand based on initial settlement placement
    4d. update remaining cards in deck
5. prompt dice roll
    5a. store dice roll value
    5b. check dice roll value
            5bi. if 7
                5bi.i. check player's hand amounts.
                    5bi.i.i. if >7, prompt to discard Math.floor(hand/2)
                5bi.ii. display areas where current player can move robber
                5bi.iii. prompt who current player can steal from
                5bi.iv. remove chosen card from opponent's hand and place it into player's hand.
                5bi.v. update class of settlements on robbed land to "robbed"
            5bii. if not 7 
                5bii.i. check value against stored settlement/port area values
                5bii.ii. distribute resource cards accordingly
    5d. update remaining cards in deck
    5e. prompt user for build, purchase, trade, or end turn
        5ei. if build
            5ei.i. check player's current resources
            5ei.ii. display build options
            5ei.iii. on click, display possible areas to build
            5ei.iv. store player's choice
            5ei.v. update player resources
        5eii. if purchase
            5eii.i. check player's current resources
            5eii.ii. display possible purchase options
            5eii.iii. update player's resources
        5eiii. if trade
            5eiii.i. display trade rates
            5eiii.ii. store player's choice
            5eiii.iii. update player's resources & remaining deck
        5eiv. if end turn, continue to step 5f.
    5f.check special condition fulfillment
        5fi. if yes allot victory points & distribute cards accordingly
        5fii. if no continue to 5g
    5g. allot victory points accordingly
    5h. calculate if there is winner
        5hi. if yes, find winner & end game
        5hii. if no continue
6. change player turn
    6a. repeat step 5

*/

/******************************/
/********** Constants **********/
/******************************/

/******************************/
/********** App's State (Variables) **********/
/******************************/

/******************************/
/********** Cached Element References **********/
/******************************/


/******************************/
/********** Event Listeners **********/
/******************************/


/******************************/
/********** Functions **********/
/******************************/



class Player {
    constructor(name) {
        this.name = name;
        this.player = game.players.length - 1;
        this.victoryPoints = 0;
        this.special = {
            roadSize: 0,
            longestRoad: false,
            armySize: 0,
            largestArmy: false
        }
        this.pieces = {
            roads: 15,
            settlements: 5,
            cities: 4,
        };
        this.resources = {
            lumber: 0,
            brick: 0,
            wool: 0,
            grain: 0,
            ore: 0
        };
        this.developmentCards = [];
    }
}

const catan = {
    hexes: {
        desert: {
            quantity: 1,
            img: '../resources/imgs/hexes/vector/desert.png'
        },
        forest: {
            quantity: 4,
            img: '../resources/imgs/hexes/vector/forest.png'
        },
        hill: {
            quantity: 3,
            img: '../resources/imgs/hexes/vector/hill.png'
        },
        pasture: {
            quantity: 4,
            img: '../resources/imgs/hexes/vector/pasture.png'
        },
        field: {
            quantity: 4,
            img: '../resources/imgs/hexes/vector/field.png'
        },
        mountain: {
            quantity: 3,
            img: '../resources/imgs/hexes/vector/mountain.png'
        }
    },
    numberTokens: [
        {a: 5},
        {b: 2},
        {c: 6},
        {d: 3},
        {e: 8},
        {f: 10},
        {g: 9},
        {h: 12},
        {i: 11},
        {j: 4},
        {k: 8},
        {l: 10},
        {m: 9},
        {n: 4},
        {o: 5},
        {p: 6},
        {q: 3},
        {r: 11}, 
    ],
    resources: [
        {
            resource: 'lumber',
            quantity: ,
            img: ''
        },
        {
            resource: 'brick',
            quantity: ,
            img: ''
        },
        {
            resource: 'wool',
            quantity: ,
            img: ''
        },
        {
            resource: 'grain',
            quantity: ,
            img: ''
        },
        {
            resource: 'ore',
            quantity: ,
            img: ''
        },
    ],
    developmentCards: {
        knight: {
            quantity: 14,
            img: ""
        }, 
        monopoly: {
            quantity: 2,
            img: ""
        },
        yearOfPlenty: {
            quantity: 2,
            img: ""
        },
        roadBuilding: {
            quantity: 2,
            img: ""
        },
        market: {
            quantity: 1,
            img: ""
        },
        chapel: {
            quantity: 1,
            img: ""
        },
        library: {
            quantity: 1,
            img: ""
        },
        university: {
            quantity: 1,
            img: ""
        },
        palace: {
            quantity: 1,
            img: ""
        },
    }
};

const game = {
    players: [],
    init () {

    },
    render () {

    }
};

let turn = 2;

//Places current player's appropriate piece on the gameboard
$('.hexes').on('click', function (e) {
    console.log(e.target);
    console.log($(e.target).attr('class'));
    if ($(e.target).attr('class') !== "row" && $(e.target).attr('class') !== "hex" && $(e.target).attr('class') !== "hexes") {
        console.log(`Player ${turn + 1} is taking his/her turn.`);

      $(e.target)
        .css("background-color", `var(--player-${turn}-color1)`)
        .css("opacity", "1")
        .css("border", "1px solid black");

        //change turn
        turn >= 3 ? turn = 0 : turn += 1;
        console.log(`It is now Player ${turn + 1}'s turn.`)
    }
    
    
});

