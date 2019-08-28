let player1 = prompt("Enter first player's name : ");
let player2 = prompt("Enter second player's name : ");
let msg = $('#startMsg');
let defaultColor = "rgb(128, 128, 128)";
let firstTurn = true;
msg.text("it's your turn " + player1);
msg.css('color', 'red');
let circles = $('button');
for (let i = 0; i < circles.length; i++) {
    circles.eq(i).click(function () {
        if (circles.eq(i % 7).css('background-color') === defaultColor) {
            if (firstTurn) {
                msg.text("it's your turn " + player2);
                msg.css('color', 'blue');
                dropChip(i, 'red')
            } else {
                msg.text("it's your turn " + player1);
                msg.css('color', 'red');
                dropChip(i, 'blue');
            }
            if (checkWin(i)) {
                if (firstTurn) {
                    alert("you won " + player1 + " !");
                    alert(player1 + " won!");
                } else {
                    alert("you won " + player2 + " !");
                    msg.text(player2 + " won!");
                }
                alert("Refresh the page to play again!");
                return;
            }
            firstTurn = !firstTurn;
        }
    })

}

function checkWin(i) {
    let num = i % 7;
    while (circles.eq(num).css('background-color') === defaultColor) {
        num += 7;
    }
    for (let k = 0; k < 4; k++) {
        let x = 1;
        if (k === 1) x = 6;
        if (k === 2) x = 7;
        if (k === 3) x = 8;
        for (let j = -3; j < 1; j++) {
            if (circlesMatch(num + j * x, num + (j + 1) * x, num + (j + 2) * x, num + (j + 3) * x)) {
                return true;
            }
        }
    }
    return false;
}

function circlesMatch(one, two, three, four) {
    return circles.eq(one).css('background-color') === circles.eq(two).css('background-color') &&
        circles.eq(one).css('background-color') === circles.eq(three).css('background-color') &&
        circles.eq(one).css('background-color') === circles.eq(four).css('background-color') &&
        circles.eq(one) !== defaultColor && circles.eq(one).css('background-color') !== undefined &&
        Math.floor(one / 7) - Math.floor(two / 7) === Math.floor(two / 7) - Math.floor(three / 7) &&
        Math.floor(three / 7) - Math.floor(two / 7) === Math.floor(four / 7) - Math.floor(three / 7);
}

function dropChip(i, color) {
    let colNum = i % 7;
    let plus = 35;
    while (circles.eq(colNum + plus).css('background-color') !== defaultColor) {
        plus -= 7;
    }
    const circleNum = colNum + plus;
    circles.eq(circleNum).css('background-color', color)
}
