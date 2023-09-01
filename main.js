// const gradeLetterCalculate=()=> {
//   const subject1 = document.querySelector("#subject1");
//   const subject2 = document.querySelector("#subject2");
//   const subject3 = document.querySelector("#subject3");
//   const subject4 = document.querySelector("#subject4");
//   const subject5 = document.querySelector("#subject5");
//   const subject6 = document.querySelector("#subject6");
//   const subject7 = document.querySelector("#subject7");

//   const heading1 = document.querySelector('.heading1');

//   const sub1 = parseFloat(subject1.value);
//   const sub2 = parseFloat(subject2.value);
//   const sub3 = parseFloat(subject3.value);
//   const sub4 = parseFloat(subject4.value);
//   const sub5 = parseFloat(subject5.value);
//   const sub6 = parseFloat(subject6.value);
//   const sub7 = parseFloat(subject7.value);
  
//   const sum =( sub1 + sub2 + sub3 + sub4 + sub5 + sub6 + sub7)/7 ;
  
//   const result = Math.round(sum * 1000) / 1000;
  
//   const resultString = result.toFixed(2);
//   heading1.innerHTML = resultString;
// }

// const btn = document.querySelector('.btn');
// btn.addEventListener('click', gradeLetterCalculate);











const gradeLetterCalculate = () => {
  const subject1 = parseFloat(document.querySelector("#subject1").value);
  const subject2 = parseFloat(document.querySelector("#subject2").value);
  const subject3 = parseFloat(document.querySelector("#subject3").value);
  const subject4 = parseFloat(document.querySelector("#subject4").value);
  const subject5 = parseFloat(document.querySelector("#subject5").value);
  const subject6 = parseFloat(document.querySelector("#subject6").value);
  const subject7 = parseFloat(document.querySelector("#subject7").value);

  const heading1 = document.querySelector('.heading1');

  const sum = (subject1 + subject2 + subject3 + subject4 + subject5 + subject6 + subject7) / 7;

  const result = Math.round(sum * 1000) / 1000;

  const resultString = result.toFixed(2);
  heading1.innerHTML = resultString;
}

const btn = document.querySelector('.btn');
btn.addEventListener('click', gradeLetterCalculate);
