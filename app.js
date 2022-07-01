async function getAdvice() {
  const response = await fetch("https://api.adviceslip.com/advice");

  const data = await response.json();
  console.log(data.slip);

  displayData(data.slip);

  displayId(data.slip);

  function displayData(data) {
    document.getElementById("advice").innerHTML = `"${data.advice}"`;
  }

  function displayId(data) {
    document.getElementById("id").innerHTML = `Advice #${data.id}`;
  }
}
