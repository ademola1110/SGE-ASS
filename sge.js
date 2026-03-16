function scoreeval(score1, score2, score3, score4, score5) {
  return (score1 + score2 + score3 + score4 + score5) / 5;
}

document.getElementById("myform").addEventListener("submit", function (e) {
  e.preventDefault();
  let score1 = Number(document.querySelector("#score1").value);
  let score2 = Number(document.querySelector("#score2").value);
  let score3 = Number(document.querySelector("#score3").value);
  let score4 = Number(document.querySelector("#score4").value);
  let score5 = Number(document.querySelector("#score5").value);

  if (!score1 || !score2 || !score3 || !score4 || !score5) {
    document.getElementById("result").innerHTML =
      "Please fill in all the score fields.";
    document.getElementById("result").style.color = "red";
    document.getElementById("grade").innerHTML = "";
  } else if (
    score1 < 0 ||
    score1 > 100 ||
    score2 < 0 ||
    score2 > 100 ||
    score3 < 0 ||
    score3 > 100 ||
    score4 < 0 ||
    score4 > 100 ||
    score5 < 0 ||
    score5 > 100
  ) {
    document.getElementById("result").innerHTML =
      "Invalid score(s). Please enter scores between 0 and 100.";
    document.getElementById("result").style.color = "red";
    document.getElementById("grade").innerHTML = "";
  } else {
    let result = scoreeval(score1, score2, score3, score4, score5);
    document.getElementById("result").innerHTML = `Average Score is ${result}`;
    document.getElementById("result").style.color = "green";
    let score = Number(result);
    let grade = "";

    document.getElementById("grade").style.color = "green";

    if (score >= 70 && score <= 100) {
      grade = "A";
    } else if (score >= 60 && score <= 69) {
      grade = "B";
    } else if (score >= 50 && score <= 59) {
      grade = "C";
    } else if (score >= 45 && score <= 49) {
      grade = "D";
    } else if (score >= 40 && score <= 44) {
      grade = "E";
    } else if (score >= 0 && score <= 39.9) {
      grade = "F";
      document.getElementById("result").style.color = "red";
      document.getElementById("grade").style.color = "red";
    } else {
      grade = "Invalid score";
      document.getElementById("grade").style.color = "red";

    }

    document.getElementById("grade").innerHTML = `Your grade is ${grade}`;
  }
});
