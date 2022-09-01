player1 = localStorage.getItem("player1");
player2 = localStorage.getItem("player2");

player1_score = 0;
player2_score = 0;
document.getElementById("player1_name").innerHTML = player1 + ":";
document.getElementById("player2_name").innerHTML = player2 + ":";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML =
  "question-turn:" + player1;
document.getElementById("player_answer").innerHTML = "answer-turn:" + player2;

function send() {
  getWord = document.getElementById("word").value;
  word = getWord.toLowerCase();

  charAt1 = word.charAt(1);
  console.log(charAt1);

  halfLong = Math.floor(word.length / 2);
  charAt2 = word.charAt(halfLong);
  console.log(charAt2);

  lengthMinus1 = word.length - 1;
  charAt3 = word.charAt(lengthMinus1);
  console.log(charAt3);

  remove_charAt1 = word.replace(charAt1, "_");
  remove_charAt2 = remove_charAt1.replace(charAt2, "_");
  remove_charAt3 = remove_charAt2.replace(charAt3, "_");

  question_word = "<h4 id='word_display'> Q. " + remove_charAt3 + "</h4>";
  input_box = "<br>Answer : <input type='text' id='input_check_box'>";
  check_button =
    "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
  row = question_word + input_box + check_button;
  document.getElementById("output").innerHTML = row;
  document.getElementById("word").value = "";
}

questionTurn = "player1"
answerTurn  = "player2"

function check(){
    get_answer = document.getElementById("input_check_box").value
    answer = get_answer.toLowerCase()
    if(answer == word){
        if(answerTurn == "player1"){
            player1_score += 1
            document.getElementById("player1_score").innerHTML = player1_score
        }
        else{
            player2_score += 1
            document.getElementById("player2_score").innerHTML = player2_score
        }
    }

    if(questionTurn == "player1"){
        questionTurn = "player2"
        document.getElementById("player_question").innerHTML = "Question turn: " + player2
    }
    else{
        questionTurn = "player1"
        document.getElementById("player_question").innerHTML = "Question turn: " + player1
    }
    if(answerTurn == "player1"){
        answerTurn = "player2"
        document.getElementById("player_answer").innerHTML = "Answer turn: "+player2
    }
    else{
        answerTurn = "player1"
        document.getElementById("player_answer").innerHTML = "Answer turn: "+player1
    }
    document.getElementById("output").innerHTML = " "
}