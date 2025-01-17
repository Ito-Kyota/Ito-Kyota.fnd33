'use strict'
// 1行目に記載している 'use strict' は削除しないでください

const button1 = document.getElementById("beginner");
const button2 = document.getElementById("intermediate");
const button3 = document.getElementById("Advanced");
const button4 = document.getElementById("demon");

let timeLimit; //制限時間
function timeCreation(button){
    hammer.style.display = "none";
    helmet.style.display = "none";
    result2.parentElement.style.display = "none";
    document.getElementById("com").innerHTML = "";
    document.getElementById("me").innerHTML = "";
    document.getElementById("result").innerHTML = "";
    if (button === "beginner") {
        timeLimit = 2000;
    } else if (button === "intermediate") {
        timeLimit = 1500;
    } else if (button === "Advanced") {
        timeLimit = 800;
    } else if (button === "demon") {
        timeLimit = 550;
    }
}

button1.addEventListener("click", timeCreation.bind(null, "beginner"));
button2.addEventListener("click", timeCreation.bind(null, "intermediate"));
button3.addEventListener("click", timeCreation.bind(null, "Advanced"));
button4.addEventListener("click", timeCreation.bind(null, "demon"));


let timer; // タイマーの変数を定義
// const TIME_LIMIT = timeLimit; // 制限時間（ミリ秒）

function startTimer() {
    // 制限時間後に処理を行う
    console.log(timeLimit);
    timer = setTimeout(handleTimeout, timeLimit);
}

function handleTimeout() {
    // タイムアウト時の処理
    result2.innerHTML = "時間切れ！コンピューターの勝ち！";
    hammer.style.display = "none";
    helmet.style.display = "none";
}


let hands = ['グー','チョキ','パー'];
let com_hands;
let result_text;
const hammer = document.getElementsByClassName("hammer")[0];
const helmet = document.getElementsByClassName("helmet")[0];
const result2 = document.getElementById("result2");



function judge(p_hands){
    

    com_hands = Math.floor( Math.random() * 3);

    if(p_hands === com_hands) {
        result_text = "-- Draw --";
        result2.innerHTML = "もう一度じゃんけんしてね!";
    } else if(p_hands === 0 && com_hands === 1 ) {
        result_text = "-- You win --";
        result2.innerHTML = "";// 以前の内容をクリア
        clearTimeout(timer); // タイマーをクリア
        // タイマーを開始
        startTimer();
    } else if(p_hands === 1 && com_hands === 2 ) {
        result_text = "-- You win --";
        result2.innerHTML = "";// 以前の内容をクリア
        clearTimeout(timer); // タイマーをクリア
        // タイマーを開始
        startTimer();
    } else if(p_hands === 2 && com_hands === 0 ) {
        result_text = "-- You win --";
        result2.innerHTML = "";// 以前の内容をクリア
        clearTimeout(timer); // タイマーをクリア
        // タイマーを開始
        startTimer();
    } else {
        result_text = "-- You lose --";
        result2.innerHTML = "";// 以前の内容をクリア
        clearTimeout(timer); // タイマーをクリア
        // タイマーを開始
        startTimer();
    }

    document.getElementById("com").innerHTML = hands[com_hands];//
    document.getElementById("me").innerHTML = hands[p_hands];//
    document.getElementById("result").innerHTML = result_text;//

    hammer.style.display = "inline-block";
    helmet.style.display = "inline-block";
    result2.parentElement.style.display = "block";

    
}

function hammerClick() {
    clearTimeout(timer); // タイマーをクリア
    if (result_text === "-- You win --") {
        result2.innerHTML = "あなたの勝ち！！"; // 勝った場合のメッセージ
     } else if (result_text === "-- You lose --") {
        result2.innerHTML = "反則負け！！";
     }
}
function helmetClick() {
    clearTimeout(timer); // タイマーをクリア
    if (result_text === "-- You lose --") {
        result2.innerHTML = "防御成功！！"; // 勝った場合のメッセージ
     } else if (result_text === "-- You win --") {
        result2.innerHTML = "反則負け！！";
     }
}
