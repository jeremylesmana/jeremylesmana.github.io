var credit1, credit2, credit3, credit4, credit5, credit6, credit7, credit8;
var grade1, grade2, grade3, grade4, grade5, grade6, grade7, grade8;

function creditReturn(x) {
  if (x == "") {
    return 0;
  }
  else {
    return x;
  }
}

function creditCheck() {
  credit1 = creditReturn(document.getElementById('credit1').value);
  credit2 = creditReturn(document.getElementById('credit2').value);
  credit3 = creditReturn(document.getElementById('credit3').value);
  credit4 = creditReturn(document.getElementById('credit4').value);
  credit5 = creditReturn(document.getElementById('credit5').value);
  credit6 = creditReturn(document.getElementById('credit6').value);
  credit7 = creditReturn(document.getElementById('credit7').value);
  credit8 = creditReturn(document.getElementById('credit8').value);

}

function sumCredit() {
  return parseInt(credit1) + parseInt(credit2)
        + parseInt(credit3) + parseInt(credit4)
        + parseInt(credit5) + parseInt(credit6)
        + parseInt(credit7) + parseInt(credit8);
}

function numifyGrade(x) {
  switch(x) {
    case "A+":
      return 4.3;
      break;
    case "A":
      return 4;
      break;
    case "A-":
      return 3.7;
      break;
    case "B+":
      return 3.3;
      break;
    case "B":
      return 3.0;
      break;
    case "B-":
      return 2.7;
      break;
    case "C+":
      return 2.3;
      break;
    case "C":
      return 2;
      break;
    case "C-":
      return 1.7;
      break;
    case "D+":
      return 1.3;
      break;
    case "D":
      return 1.0;
      break;
    case "D-":
      return 0.7;
      break;
    case "F":
      return 0;
      break;
    default:
      return 0;
      break;
  }
}

function gradeChecker() {
  grade1 = numifyGrade(document.getElementById('grade1').value);
  grade2 = numifyGrade(document.getElementById('grade2').value);
  grade3 = numifyGrade(document.getElementById('grade3').value);
  grade4 = numifyGrade(document.getElementById('grade4').value);
  grade5 = numifyGrade(document.getElementById('grade5').value);
  grade6 = numifyGrade(document.getElementById('grade6').value);
  grade7 = numifyGrade(document.getElementById('grade7').value);
  grade8 = numifyGrade(document.getElementById('grade8').value);
}

function totalGrade() {
  total = 0;
  total = parseFloat(total) + (parseFloat(grade1) * parseFloat(credit1));
  total = parseFloat(total) + (parseFloat(grade2) * parseFloat(credit2));
  total = parseFloat(total) + (parseFloat(grade3) * parseFloat(credit3));
  total = parseFloat(total) + (parseFloat(grade4) * parseFloat(credit4));
  total = parseFloat(total) + (parseFloat(grade5) * parseFloat(credit5));
  total = parseFloat(total) + (parseFloat(grade6) * parseFloat(credit6));
  total = parseFloat(total) + (parseFloat(grade7) * parseFloat(credit7));
  total = parseFloat(total) + (parseFloat(grade8) * parseFloat(credit8));
  return total;
}

function finalGPA() {
  unrounded = parseFloat(totalGrade()) / parseFloat(sumCredit());
  return Number(unrounded.toFixed(2));
}

function calculate() {
  creditCheck();
  document.getElementById('totalCred').innerHTML = sumCredit();
  gradeChecker();
  document.getElementById('totalGrade').innerHTML = Number(totalGrade().toFixed(2));
  document.getElementById('result').innerHTML = finalGPA();
}
