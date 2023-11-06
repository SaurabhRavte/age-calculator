const btn1 = document.getElementById("btn");
const birthdayE1 = document.getElementById("birthday");
const resultElement = document.getElementById("result");

function calculateAge() {
  const birthdayValue = birthdayE1.value;
  if (birthdayValue == "") {
    alert("Please Enter your Birth Date");
  } else {
    const age = getAge(birthdayValue);
    resultElement.innerText = `Your age is ${age} ${
      age > 1 ? "years" : "year"
    } old`;
  }
}

function getAge(birthdayValue) {
  const currentDate = new Date();
  const birthdayDate = new Date(birthdayValue);
  let age = currentDate.getFullYear() - birthdayDate.getFullYear();
  const month = currentDate.getMonth() - birthdayDate.getMonth();

  if (
    month < 0 ||
    (month == 0 && currentDate.getDate() < birthdayDate.getDate())
  ) {
    age--;
  }
  return age;
}

btn1.addEventListener("click", calculateAge);
