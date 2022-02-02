/**
 * @author yetty
 * @since 23.11.2021
 */

function createScoreBoard() {
    const scoreBoard = {
        'The Best Ever': 1000000,
    }
    return scoreBoard;
}

function addPlayer(scoreBoard, name, score) {
    scoreBoard[name] = score;
    return scoreBoard;
}

function removePlayer(scoreBoard, name) {
    if(scoreBoard.hasOwnProperty(name)) {
        delete scoreBoard[name];
    }
    return scoreBoard;
}

function updateScore(scoreBoard, name, score) {   
    if((scoreBoard).hasOwnProperty(name)) {
        scoreBoard[name] += score;
    }
    return scoreBoard;
}   

function applyMondayBonus(scoreBoard) {
    for(let key in scoreBoard) scoreBoard[key] += 100;

    return scoreBoard;
}

function normalizeScore(params) {
    return params.normalizeFunction(params.score);
}

 var hsb = createScoreBoard();
 hsb = addPlayer(hsb, 'Yener Karaca', 69420);
 //hsb = removePlayer(hsb, 'The Best Ever');
 hsb = updateScore(hsb, 'Yener Karaca', 1);
 hsb = applyMondayBonus(hsb);

 const params = {
    score: 45,
    normalizeFunction: function (score) {
      return score * 3 - 10;
    },
  };

var number = normalizeScore(params);
console.log(number);