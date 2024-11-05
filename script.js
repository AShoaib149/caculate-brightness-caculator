//  BRIGHTNESS IPO CALC BY MR. V

// Bottun Click Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Input
  let r = +document.getElementById("r-in").value;
  let g = +document.getElementById("g-in").value;
  let b = +document.getElementById("b-in").value;

  // Process
  let brightness = Math.sqrt(0.229 * r ** 2 + 0.587 * g ** 2 + 0.114 * b ** 2);
  let msg = `Luninance = ${brightness}`;

  // Output
  document.getElementById("output").innerHTML = Math.round(brightness);
}
