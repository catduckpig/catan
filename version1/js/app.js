/******************************/
/********** Pseudocode **********/
/******************************/
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
class Player {
    constructor(name) {
        this.name = name;
        this.player = game.players.length - 1;
        this.victoryPoints = 0;
        this.victoryPointsHidden = 0;
        this.victoryPointsActual = this.victoryPoints + this.victoryPointsHidden;
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

    buildRoad () {

    }

    buildSettlement () {

    }

    buildCity () {

    }

    tradePlayer () {

    }

    tradeBank () {

    }

    playDevelopmentCard () {

    }
}

const catan = {
    areas: [
        {
            area: 'desert',
            quantity: 1,
            img: 'resources/imgs/hexes/vector/desert.png',
            resource: null
        },
        {
            area: 'forest',
            quantity: 4,
            img: 'resources/imgs/hexes/vector/forest.png',
            resource: 'lumber'
        },
        {
            area: 'hill',
            quantity: 3,
            img: 'resources/imgs/hexes/vector/hill.png',
            resource: 'brick'
        },
        {
            area: 'pasture',
            quantity: 4,
            img: 'resources/imgs/hexes/vector/pasture.png',
            resource: 'wool'
        },
        {
            area: 'field',
            quantity: 4,
            img: 'resources/imgs/hexes/vector/field.png',
            resource: 'grain'
        },
        {
            area: 'mountain',
            quantity: 3,
            img: 'resources/imgs/hexes/vector/mountain.png',
            resource: 'mountain'
        }
    ],
    numberTokens: [5, 2, 6, 3, 8, 10, 9, 12, 11, 4, 8, 10, 9, 4, 5, 6, 3, 11],
    resources: {
        back: {
            resource: 'back',
            quantity: 0,
            img: 'resources/imgs/resources/vector/resources--back.png'
        },
        lumber: {
            resource: 'lumber',
            quantity: 19,
            img: 'resources/imgs/resources/vector/resources--lumber.png'
        },
        brick: {
            resource: 'brick',
            quantity: 19,
            img: 'resources/imgs/resources/vector/resources--brick.png'
        },
        wool: {
            resource: 'wool',
            quantity: 19,
            img: 'resources/imgs/resources/vector/resources--wool.png'
        },
        grain: {
            resource: 'grain',
            quantity: 19,
            img: 'resources/imgs/resources/vector/resources--grain.png'
        },
        ore: {
            resource: 'ore',
            quantity: 19,
            img: 'resources/imgs/resources/vector/resources--ore.png'
        }
    },
    developmentCards: {
        knight: {
            quantity: 14,
            img: 'resources/imgs/dcs/vector/dcs__knight.png'
        },
        monopoly: {
            quantity: 2,
            img: 'resources/imgs/dcs/vector/dcs__monopoly.png'
        },
        yearOfPlenty: {
            quantity: 2,
            img: 'resources/imgs/dcs/vector/dcs__yearOfPlenty.png'
        },
        roadBuilding: {
            quantity: 2,
            img: 'resources/imgs/dcs/vector/dcs__roadBuilding.png'
        },
        market: {
            quantity: 1,
            img: 'resources/imgs/dcs/vector/dcs__market.png'
        },
        chapel: {
            quantity: 1,
            img: 'resources/imgs/dcs/vector/dcs__chapel.png'
        },
        library: {
            quantity: 1,
            img: 'resources/imgs/dcs/vector/dcs__library.png'
        },
        university: {
            quantity: 1,
            img: 'resources/imgs/dcs/vector/dcs__university.png'
        },
        palace: {
            quantity: 1,
            img: 'resources/imgs/dcs/vector/dcs__palace.png'
        }
    }
};





/******************************/
/********** App's State (Variables) **********/
/******************************/
let dice1, dice2, diceTotal;

diceTotal = dice1 + dice2;




/******************************/
/********** Cached Element References **********/
/******************************/





/******************************/
/********** Event Listeners **********/
/******************************/





/******************************/
/********** Functions **********/
/******************************/
const game = {
    players: [],
    hexes: [
        //numberTokens are initialized to 7 because those do not produce any resources
        {
            'data-type': 'hex',
            'data-id': 0,
            area: 'desert',
            resource: null,
            numberToken: 7
        },
        {
            'data-type': 'hex',
            'data-id': 1,
            area: 'desert',
            resource: null,
            numberToken: 7
        },
        {
            'data-type': 'hex',
            'data-id': 2,
            area: 'desert',
            resource: null,
            numberToken: 7
        },
        {
            'data-type': 'hex',
            'data-id': 3,
            area: 'desert',
            resource: null,
            numberToken: 7
        },
        {
            'data-type': 'hex',
            'data-id': 4,
            area: 'desert',
            resource: null,
            numberToken: 7
        },
        {
            'data-type': 'hex',
            'data-id': 5,
            area: 'desert',
            resource: null,
            numberToken: 7
        },
        {
            'data-type': 'hex',
            'data-id': 6,
            area: 'desert',
            resource: null,
            numberToken: 7
        },
        {
            'data-type': 'hex',
            'data-id': 7,
            area: 'desert',
            resource: null,
            numberToken: 7
        },
        {
            'data-type': 'hex',
            'data-id': 8,
            area: 'desert',
            resource: null,
            numberToken: 7
        },
        {
            'data-type': 'hex',
            'data-id': 9,
            area: 'desert',
            resource: null,
            numberToken: 7
        },
        {
            'data-type': 'hex',
            'data-id': 10,
            area: 'desert',
            resource: null,
            numberToken: 7
        },
        {
            'data-type': 'hex',
            'data-id': 11,
            area: 'desert',
            resource: null,
            numberToken: 7
        },
        {
            'data-type': 'hex',
            'data-id': 12,
            area: 'desert',
            resource: null,
            numberToken: 7
        },
        {
            'data-type': 'hex',
            'data-id': 13,
            area: 'desert',
            resource: null,
            numberToken: 7
        },
        {
            'data-type': 'hex',
            'data-id': 14,
            area: 'desert',
            resource: null,
            numberToken: 7
        },
        {
            'data-type': 'hex',
            'data-id': 15,
            area: 'desert',
            resource: null,
            numberToken: 7
        },
        {
            'data-type': 'hex',
            'data-id': 16,
            area: 'desert',
            resource: null,
            numberToken: 7
        },
        {
            'data-type': 'hex',
            'data-id': 17,
            area: 'desert',
            resource: null,
            numberToken: 7
        },
        {
            'data-type': 'hex',
            'data-id': 18,
            area: 'desert',
            resource: null,
            numberToken: 7
        },
    ],
    settlementAreas: [
        {
            'data-type': 'settlement',
            'data-id': 0,
            occupied: false,
            canOccupy: true,
            neighbors: [1, 14]
        },
        {
            'data-type': 'settlement',
            'data-id': 1,
            occupied: false,
            canOccupy: true,
            neighbors: [0,2]
        },
        {
            'data-type': 'settlement',
            'data-id': 2,
            occupied: false,
            canOccupy: true,
            neighbors: [1, 3, 12]
        },
        {
            'data-type': 'settlement',
            'data-id': 3,
            occupied: false,
            canOccupy: true,
            neighbors: [2, 4]
        },
        {
            'data-type': 'settlement',
            'data-id': 4,
            occupied: false,
            canOccupy: true,
            neighbors: [3, 10, 5]
        },
        {
            'data-type': 'settlement',
            'data-id': 5,
            occupied: false,
            canOccupy: true,
            neighbors: [4, 6]
        },
        {
            'data-type': 'settlement',
            'data-id': 6,
            occupied: false,
            canOccupy: true,
            neighbors: [5, 8]
        },
        {
            'data-type': 'settlement',
            'data-id': 7,
            occupied: false,
            canOccupy: true,
            neighbors: [8, 25]
        },
        {
            'data-type': 'settlement',
            'data-id': 8,
            occupied: false,
            canOccupy: true,
            neighbors: [6, 7, 9]
        },
        {
            'data-type': 'settlement',
            'data-id': 9,
            occupied: false,
            canOccupy: true,
            neighbors: [8, 23, 10]
        },
        {
            'data-type': 'settlement',
            'data-id': 10,
            occupied: false,
            canOccupy: true,
            neighbors: [4, 9, 11]
        },
        {
            'data-type': 'settlement',
            'data-id': 11,
            occupied: false,
            canOccupy: true,
            neighbors: [10, 12, 21]
        },
        {
            'data-type': 'settlement',
            'data-id': 12,
            occupied: false,
            canOccupy: true,
            neighbors: [2, 11, 13]
        },
        {
            'data-type': 'settlement',
            'data-id': 13,
            occupied: false,
            canOccupy: true,
            neighbors: [12, 14, 19]
        },
        {
            'data-type': 'settlement',
            'data-id': 14,
            occupied: false,
            canOccupy: true,
            neighbors: [0, 13, 15]
        },
        {
            'data-type': 'settlement',
            'data-id': 15,
            occupied: false,
            canOccupy: true,
            neighbors: [14, 17]
        },
        {
            'data-type': 'settlement',
            'data-id': 16,
            occupied: false,
            canOccupy: true,
            neighbors: [17, 37]
        },
        {
            'data-type': 'settlement',
            'data-id': 17,
            occupied: false,
            canOccupy: true,
            neighbors: [15, 16, 18]
        },
        {
            'data-type': 'settlement',
            'data-id': 18,
            occupied: false,
            canOccupy: true,
            neighbors: [17, 19, 35]
        },
        {
            'data-type': 'settlement',
            'data-id': 19,
            occupied: false,
            canOccupy: true,
            neighbors: [13, 18, 20]
        },
        {
            'data-type': 'settlement',
            'data-id': 20,
            occupied: false,
            canOccupy: true,
            neighbors: [19, 21, 33]
        },
        {
            'data-type': 'settlement',
            'data-id': 21,
            occupied: false,
            canOccupy: true,
            neighbors: [11, 20, 22]
        },
        {
            'data-type': 'settlement',
            'data-id': 22,
            occupied: false,
            canOccupy: true,
            neighbors: [21, 23, 31]
        },
        {
            'data-type': 'settlement',
            'data-id': 23,
            occupied: false,
            canOccupy: true,
            neighbors: [9, 22, 24]
        },
        {
            'data-type': 'settlement',
            'data-id': 24,
            occupied: false,
            canOccupy: true,
            neighbors: [23, 29, 25]
        },
        {
            'data-type': 'settlement',
            'data-id': 25,
            occupied: false,
            canOccupy: true,
            neighbors: [7, 24, 26]
        },
        {
            'data-type': 'settlement',
            'data-id': 26,
            occupied: false,
            canOccupy: true,
            neighbors: [25, 27]
        },
        {
            'data-type': 'settlement',
            'data-id': 27,
            occupied: false,
            canOccupy: true,
            neighbors: [26, 28]
        },
        {
            'data-type': 'settlement',
            'data-id': 28,
            occupied: false,
            canOccupy: true,
            neighbors: [27, 29, 46]
        },
        {
            'data-type': 'settlement',
            'data-id': 29,
            occupied: false,
            canOccupy: true,
            neighbors: [24, 28, 30]
        },
        {
            'data-type': 'settlement',
            'data-id': 30,
            occupied: false,
            canOccupy: true,
            neighbors: [29, 31, 44]
        },
        {
            'data-type': 'settlement',
            'data-id': 31,
            occupied: false,
            canOccupy: true,
            neighbors: [22, 30, 32]
        },
        {
            'data-type': 'settlement',
            'data-id': 32,
            occupied: false,
            canOccupy: true,
            neighbors: [31, 33, 42]
        },
        {
            'data-type': 'settlement',
            'data-id': 33,
            occupied: false,
            canOccupy: true,
            neighbors: [20, 32, 34]
        },
        {
            'data-type': 'settlement',
            'data-id': 34,
            occupied: false,
            canOccupy: true,
            neighbors: [33, 35, 40]
        },
        {
            'data-type': 'settlement',
            'data-id': 35,
            occupied: false,
            canOccupy: true,
            neighbors: [18, 34, 36]
        },
        {
            'data-type': 'settlement',
            'data-id': 36,
            occupied: false,
            canOccupy: true,
            neighbors: [35, 37, 38]
        },
        {
            'data-type': 'settlement',
            'data-id': 37,
            occupied: false,
            canOccupy: true,
            neighbors: [16, 36]
        },
        {
            'data-type': 'settlement',
            'data-id': 38,
            occupied: false,
            canOccupy: true,
            neighbors: [36, 39]
        },
        {
            'data-type': 'settlement',
            'data-id': 39,
            occupied: false,
            canOccupy: true,
            neighbors: [38, 40, 53]
        },
        {
            'data-type': 'settlement',
            'data-id': 40,
            occupied: false,
            canOccupy: true,
            neighbors: [34, 39, 41]
        },
        {
            'data-type': 'settlement',
            'data-id': 41,
            occupied: false,
            canOccupy: true,
            neighbors: [40, 42, 51]
        },
        {
            'data-type': 'settlement',
            'data-id': 42,
            occupied: false,
            canOccupy: true,
            neighbors: [32, 41, 43]
        },
        {
            'data-type': 'settlement',
            'data-id': 43,
            occupied: false,
            canOccupy: true,
            neighbors: [42, 44, 49]
        },
        {
            'data-type': 'settlement',
            'data-id': 44,
            occupied: false,
            canOccupy: true,
            neighbors: [30, 43, 45]
        },
        {
            'data-type': 'settlement',
            'data-id': 45,
            occupied: false,
            canOccupy: true,
            neighbors: [44, 46, 47]
        },
        {
            'data-type': 'settlement',
            'data-id': 46,
            occupied: false,
            canOccupy: true,
            neighbors: [28, 45]
        },
        {
            'data-type': 'settlement',
            'data-id': 47,
            occupied: false,
            canOccupy: true,
            neighbors: [45, 48]
        },
        {
            'data-type': 'settlement',
            'data-id': 48,
            occupied: false,
            canOccupy: true,
            neighbors: [47, 49]
        },
        {
            'data-type': 'settlement',
            'data-id': 49,
            occupied: false,
            canOccupy: true,
            neighbors: [43, 48, 50]
        },
        {
            'data-type': 'settlement',
            'data-id': 50,
            occupied: false,
            canOccupy: true,
            neighbors: [49, 51]
        },
        {
            'data-type': 'settlement',
            'data-id': 51,
            occupied: false,
            canOccupy: true,
            neighbors: [41, 50, 52]
        },
        {
            'data-type': 'settlement',
            'data-id': 52,
            occupied: false,
            canOccupy: true,
            neighbors: [51, 53]
        },
        {
            'data-type': 'settlement',
            'data-id': 53,
            occupied: false,
            canOccupy: true,
            neighbors: [39, 52]
        }
    ],
    roadAreas: [
        {
            'data-type': 'road',
            'data-id': 0,
            occupied: false,
            canOccupy: true,
            settlements: [0, 1]
        },
        {
            'data-type': 'road',
            'data-id': 1,
            occupied: false,
            canOccupy: true,
            settlements: [1, 2]
        },
        {
            'data-type': 'road',
            'data-id': 2,
            occupied: false,
            canOccupy: true,
            settlements: [2, 3]
        },
        {
            'data-type': 'road',
            'data-id': 3,
            occupied: false,
            canOccupy: true,
            settlements: [3, 4]
        },
        {
            'data-type': 'road',
            'data-id': 4,
            occupied: false,
            canOccupy: true,
            settlements: [4, 5]
        },
        {
            'data-type': 'road',
            'data-id': 5,
            occupied: false,
            canOccupy: true,
            settlements: [5, 6]
        },
        {
            'data-type': 'road',
            'data-id': 6,
            occupied: false,
            canOccupy: true,
            settlements: [6, 8]
        },
        {
            'data-type': 'road',
            'data-id': 7,
            occupied: false,
            canOccupy: true,
            settlements: [4, 10]
        },
        {
            'data-type': 'road',
            'data-id': 8,
            occupied: false,
            canOccupy: true,
            settlements: [2, 12]
        },
        {
            'data-type': 'road',
            'data-id': 9,
            occupied: false,
            canOccupy: true,
            settlements: [0, 14]
        },
        {
            'data-type': 'road',
            'data-id': 10,
            occupied: false,
            canOccupy: true,
            settlements: [14, 15]
        },
        {
            'data-type': 'road',
            'data-id': 11,
            occupied: false,
            canOccupy: true,
            settlements: [13, 14]
        },
        {
            'data-type': 'road',
            'data-id': 12,
            occupied: false,
            canOccupy: true,
            settlements: [12, 13]
        },
        {
            'data-type': 'road',
            'data-id': 13,
            occupied: false,
            canOccupy: true,
            settlements: [11, 12]
        },
        {
            'data-type': 'road',
            'data-id': 14,
            occupied: false,
            canOccupy: true,
            settlements: [10, 11]
        },
        {
            'data-type': 'road',
            'data-id': 15,
            occupied: false,
            canOccupy: true,
            settlements: [9, 10]
        },
        {
            'data-type': 'road',
            'data-id': 16,
            occupied: false,
            canOccupy: true,
            settlements: [8, 9]
        },
        {
            'data-type': 'road',
            'data-id': 17,
            occupied: false,
            canOccupy: true,
            settlements: [7, 8]
        },
        {
            'data-type': 'road',
            'data-id': 18,
            occupied: false,
            canOccupy: true,
            settlements: [7, 25]
        },
        {
            'data-type': 'road',
            'data-id': 19,
            occupied: false,
            canOccupy: true,
            settlements: [9, 23]
        },
        {
            'data-type': 'road',
            'data-id': 20,
            occupied: false,
            canOccupy: true,
            settlements: [11, 21]
        },
        {
            'data-type': 'road',
            'data-id': 21,
            occupied: false,
            canOccupy: true,
            settlements: [13, 19]
        },
        {
            'data-type': 'road',
            'data-id': 22,
            occupied: false,
            canOccupy: true,
            settlements: [15, 17]
        },
        {
            'data-type': 'road',
            'data-id': 23,
            occupied: false,
            canOccupy: true,
            settlements: [16, 17]
        },
        {
            'data-type': 'road',
            'data-id': 24,
            occupied: false,
            canOccupy: true,
            settlements: [17, 18]
        },
        {
            'data-type': 'road',
            'data-id': 25,
            occupied: false,
            canOccupy: true,
            settlements: [18, 19]
        },
        {
            'data-type': 'road',
            'data-id': 26,
            occupied: false,
            canOccupy: true,
            settlements: [19, 20]
        },
        {
            'data-type': 'road',
            'data-id': 27,
            occupied: false,
            canOccupy: true,
            settlements: [20, 21]
        },
        {
            'data-type': 'road',
            'data-id': 28,
            occupied: false,
            canOccupy: true,
            settlements: [21, 22]
        },
        {
            'data-type': 'road',
            'data-id': 29,
            occupied: false,
            canOccupy: true,
            settlements: [22, 23]
        },
        {
            'data-type': 'road',
            'data-id': 30,
            occupied: false,
            canOccupy: true,
            settlements: [23, 24]
        },
        {
            'data-type': 'road',
            'data-id': 31,
            occupied: false,
            canOccupy: true,
            settlements: []
        },
        {
            'data-type': 'road',
            'data-id': 32,
            occupied: false,
            canOccupy: true,
            settlements: []
        },
        {
            'data-type': 'road',
            'data-id': 33,
            occupied: false,
            canOccupy: true,
            settlements: []
        },
        {
            'data-type': 'road',
            'data-id': 34,
            occupied: false,
            canOccupy: true,
            settlements: []
        },
        {
            'data-type': 'road',
            'data-id': 35,
            occupied: false,
            canOccupy: true,
            settlements: []
        },
        {
            'data-type': 'road',
            'data-id': 36,
            occupied: false,
            canOccupy: true,
            settlements: []
        },
        {
            'data-type': 'road',
            'data-id': 37,
            occupied: false,
            canOccupy: true,
            settlements: []
        },
        {
            'data-type': 'road',
            'data-id': 38,
            occupied: false,
            canOccupy: true,
            settlements: []
        },
        {
            'data-type': 'road',
            'data-id': 39,
            occupied: false,
            canOccupy: true,
            settlements: []
        },
        {
            'data-type': 'road',
            'data-id': 40,
            occupied: false,
            canOccupy: true,
            settlements: []
        },
        {
            'data-type': 'road',
            'data-id': 41,
            occupied: false,
            canOccupy: true,
            settlements: []
        },
        {
            'data-type': 'road',
            'data-id': 42,
            occupied: false,
            canOccupy: true,
            settlements: []
        },
        {
            'data-type': 'road',
            'data-id': 43,
            occupied: false,
            canOccupy: true,
            settlements: []
        },
        {
            'data-type': 'road',
            'data-id': 44,
            occupied: false,
            canOccupy: true,
            settlements: []
        },
        {
            'data-type': 'road',
            'data-id': 45,
            occupied: false,
            canOccupy: true,
            settlements: []
        },
        {
            'data-type': 'road',
            'data-id': 46,
            occupied: false,
            canOccupy: true,
            settlements: []
        },
        {
            'data-type': 'road',
            'data-id': 47,
            occupied: false,
            canOccupy: true,
            settlements: []
        },
        {
            'data-type': 'road',
            'data-id': 48,
            occupied: false,
            canOccupy: true,
            settlements: []
        },
        {
            'data-type': 'road',
            'data-id': 49,
            occupied: false,
            canOccupy: true,
            settlements: []
        },
        {
            'data-type': 'road',
            'data-id': 50,
            occupied: false,
            canOccupy: true,
            settlements: []
        },
        {
            'data-type': 'road',
            'data-id': 0,
            occupied: false,
            canOccupy: true,
            settlements: []
        },
        {
            'data-type': 'road',
            'data-id': 0,
            occupied: false,
            canOccupy: true,
            settlements: []
        },
        {
            'data-type': 'road',
            'data-id': 0,
            occupied: false,
            canOccupy: true,
            settlements: []
        },
        {
            'data-type': 'road',
            'data-id': 0,
            occupied: false,
            canOccupy: true,
            settlements: []
        },
        {
            'data-type': 'road',
            'data-id': 0,
            occupied: false,
            canOccupy: true,
            settlements: []
        },
        {
            'data-type': 'road',
            'data-id': 0,
            occupied: false,
            canOccupy: true,
            settlements: []
        },
        {
            'data-type': 'road',
            'data-id': 0,
            occupied: false,
            canOccupy: true,
            settlements: []
        },
        {
            'data-type': 'road',
            'data-id': 0,
            occupied: false,
            canOccupy: true,
            settlements: []
        },
        {
            'data-type': 'road',
            'data-id': 0,
            occupied: false,
            canOccupy: true,
            settlements: []
        },
        {
            'data-type': 'road',
            'data-id': 0,
            occupied: false,
            canOccupy: true,
            settlements: []
        },
        {
            'data-type': 'road',
            'data-id': 0,
            occupied: false,
            canOccupy: true,
            settlements: []
        },
        {
            'data-type': 'road',
            'data-id': 0,
            occupied: false,
            canOccupy: true,
            settlements: []
        },
        {
            'data-type': 'road',
            'data-id': 0,
            occupied: false,
            canOccupy: true,
            settlements: []
        },
        {
            'data-type': 'road',
            'data-id': 0,
            occupied: false,
            canOccupy: true,
            settlements: []
        },
        {
            'data-type': 'road',
            'data-id': 0,
            occupied: false,
            canOccupy: true,
            settlements: []
        },
        {
            'data-type': 'road',
            'data-id': 0,
            occupied: false,
            canOccupy: true,
            settlements: []
        },
        {
            'data-type': 'road',
            'data-id': 0,
            occupied: false,
            canOccupy: true,
            settlements: []
        },
        {
            'data-type': 'road',
            'data-id': 0,
            occupied: false,
            canOccupy: true,
            settlements: []
        },
        {
            'data-type': 'road',
            'data-id': 0,
            occupied: false,
            canOccupy: true,
            settlements: []
        },
        {
            'data-type': 'road',
            'data-id': 0,
            occupied: false,
            canOccupy: true,
            settlements: []
        },
        {
            'data-type': 'road',
            'data-id': 0,
            occupied: false,
            canOccupy: true,
            settlements: []
        },
    ],
    init () {
        //randomly generates the areas for the hexes on the board
        for (let hex of game.hexes) {
            //gets random area from catan.areas
            let randomArea = Math.floor((Math.random() * catan.areas.length));

            let chosenArea;
            //assign that chosen area to chosenArea and reduce its quantity by 1
            chosenArea = catan.areas[randomArea];
            catan.areas[randomArea].quantity -= 1;
            //if that area's quantity is 0, remove it from array catan.areas
            if (catan.areas[randomArea].quantity === 0) {
                catan.areas.splice(randomArea, 1);
            } 

            $(`#hex${hex['data-id']}`).append(`<img src="${chosenArea.img}">`);
            hex.area = chosenArea.area;
            hex.resource = chosenArea.resource;

            //assigns number tokens to each hex, starting from hex1, and skipping over any desert
            if (hex.area !== 'desert') {
                hex.numberToken = catan.numberTokens[`${hex['data-id']}`]; 
                $(`#hex${hex["data-id"]}`).append(`<div><h3>${hex.numberToken}</h3></div>`);
            } else {
                hex.numberToken = '<img src="resources/imgs/robber/vector/robber.png">';
                $(`#hex${hex["data-id"]}`).append(`<div>${hex.numberToken}</div>`);
                //at the current index, splice in the string 'robber' so that we can continue assigning the appropriate tokens to the rest of the hexes
                catan.numberTokens.splice([`${hex["data-id"]}`], 0, 'robber');
            }   
        }
    },
    render () {

    },
    initialPlacement () {
        //this refers to the 2 initial settlements and roads players can place
    }
};

let turn = 2;

//Places current player's appropriate piece on the gameboard
$('.hexes').on('click', function (e) {
    console.log(e.target);
    if ($(e.target).hasClass('road') || $(e.target).hasClass('settlement')) {
        let id = $(e.target).attr('data-id')
        
        for (let i = 0; i < game.settlementAreas[id].neighbors.length; i++) {
            if (game.settlementAreas[game.settlementAreas[id].neighbors[i]].occupied === true) {
                game.settlementAreas[id].canOccupy = false;
            }
        }

        //changes clicked area to current player's color
        if (game.settlementAreas[id].canOccupy === true) {
            console.log(`Player ${turn + 1} just placed a road/settlement.`);

            game.settlementAreas[id].occupied = true;
            game.settlementAreas[id].canOccupy = false;

            $(e.target).css("background-color", `var(--player-${turn}-color1)`).css("opacity", "1").css("box-shadow", ".2rem .2rem .2rem rgba(0, 0, 0, .7)");

            //change turn
            turn === 3 ? turn = 0 : turn += 1;
            console.log(`It is now Player ${turn + 1}'s turn.`)
        } else {
            console.log('This settlement cannot be placed within 1 vertex of another already-placed settlement.')
        }
    } else {
        console.log('This is not a valid area to place a settlement or a road.')
    }
});

