function convertAge() {
  const animal = document.getElementById("animal").value;
  const age = parseFloat(document.getElementById("age").value);
  const resultDiv = document.getElementById("result");

  if (isNaN(age) || age < 0) {
    resultDiv.textContent = "Будь ласка, введіть коректний вік.";
    return;
  }

  let humanAge;

  if (animal === "cat") {
    if (age === 1) humanAge = 15;
    else if (age === 2) humanAge = 24;
    else humanAge = 24 + (age - 2) * 4;
  } else if (animal === "dog") {
    if (age === 1) humanAge = 15;
    else if (age === 2) humanAge = 24;
    else humanAge = 24 + (age - 2) * 5;
  }

  resultDiv.textContent = `Приблизний вік у людських роках: ${Math.round(humanAge)}.`;
}