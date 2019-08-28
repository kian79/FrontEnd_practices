let player1 = prompt("Enter first player's name : ");
let player2 = prompt("Enter second player's name : ");
let msg = $('#startMsg');
let defaultColor = "rgb(128, 128, 128)";
let firstTurn = true;
msg.text("it's your turn " + player1);
msg.css('color', 'red');
let circles = $('button');
console.log(circles.length);
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
                alert("you won!");
            }
            firstTurn = !firstTurn;
        }
    })

}
// $('td').fontSize='3em';
for (let i = 0; i < circles.length; i++) {
    circles[i].textContent = i;
}

function checkWin(i) {
    let num = i % 7;
    // console.log(circles.eq(num).css('background-color'));
    while (circles.eq(num).css('background-color') === defaultColor) {
        // console.log("inja");
        num += 7;
    }
    // console.log(defaultColor);
    // let diffButt = i % 7 + 35 - num;
    // console.log("nummmmm"+num);
    // console.log("diiiifbuuut"+diffButt);
    // if (diffButt / 7 + 1 > 3) {
    //     console.log("amoodi");
    //     for (let j = -3; j < 1; j++) {
    //         if (circlesMatch( num+ j*7, num + (j + 1)*7, num + (j + 2)*7, num + (j + 3)*7)) {
    //             console.log("jjjj"+j);
    // console.log("hahahahah");
    // return true;
    // }
    // }
    // }
    // else {
    // console.log("ofoghi");
    for (let k = 0; k < 4; k++) {
        let x = 1;
        if (k === 1) x = 6;
        if (k === 2) x = 7;
        if (k === 3) x = 8;
        for (let j = -3; j < 1; j++) {
            if (circlesMatch(num + j * x, num + (j + 1) * x, num + (j + 2) * x, num + (j + 3) * x)) {
                // console.log("jjjj"+j);
                // console.log("hahahahah");
                console.log("injooo truee dadam" + " x : " + x + " k : " + k + " j : " + j + " " + num);
                return true;
            }
        }
    }
    // console.log("ghotri");
    // for (let j = -3; j < 1; j++) {
    //     if (circlesMatch(num + j * 8, num + (j + 1) * 8, num + (j + 2) * 8, num + (j + 3) * 8)) {
    //         console.log("injooo");
    //         return true;
    //     }
    // }
    return false;
}

function circlesMatch(one, two, three, four) {
    // let nums= [one,two,three,four];
    // nums=nums.sort();
    // one=nums[0];
    // two=nums[1];
    // three=nums[2];
    // four=nums[3];
    cosnsole.log(one + " " + two + " " + three + " " + four);
    console.log("kalkf,af " + one / 7 - two / 7 === two / 7 - three / 7 && three / 7 - two / 7 === four / 7 - three / 7);
    console.log(one / 7 - two / 7);
// console.log(one/7-two/7);
// console.log(one/7-two/7);
// console.log(one/7-two/7);

    return circles.eq(one).css('background-color') === circles.eq(two).css('background-color') &&
        circles.eq(one).css('background-color') === circles.eq(three).css('background-color') &&
        circles.eq(one).css('background-color') === circles.eq(four).css('background-color') &&
        circles.eq(one) !== defaultColor && circles.eq(one).css('background-color') !== undefined &&
        Math.floor(one / 7) - Math.floor(two / 7) === Math.floor(two / 7) - Math.floor(three / 7) &&
        Math.floor(three / 7) - Math.floor(two / 7) === Math.floor(four / 7) - Math.floor(three / 7);
}

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
            // console.log("par" +
            //     "iyyyyyya")
            break;
        }
    }
}

function dropChip(i, color) {
    let colNum = i % 7;
    // alert(i);
    let plus = 35;
    // console.log(colNum);
    // console.log(plus);
    while (circles.eq(colNum + plus).css('background-color') !== defaultColor) {
        plus -= 7;
    }
    const circleNum = colNum + plus;
    circles.eq(circleNum).css('background-color', color)
    // setInterval(function () {
    // let done=true;
    // while (colNum < circleNum) {
    // if(done){
    //     done=false;
    // }
    // circles.eq(2).css('color', color);
    // console.log("colscSVv");
    // sleep(1000);
    //     console.log("i love papar")
    // circles.eq(0).css('background', 'green');
    // console.log("afteeeer");
    // setTimeout(function () {
    // done=true;
    // },600);
    // console.log(done)
    // colNum += 7

    // }
    // console.log("col , color"+colNum+" "+circleNum)
    // },100)

}