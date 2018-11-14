const logo = document.querySelector("#logo");
const btn = document.querySelector("#btn");
const mygif = document.querySelector(".mygif");

let sunglasses = [
  "../img/glasses1.gif",
  "../img/glasses2.gif",
  "../img/glasses3.gif",
  "../img/glasses4.gif",
  "../img/glasses5.gif",
  "../img/glasses6.gif"
];
console.log(sunglasses);
btn.addEventListener("click", () => {
  logo.src = "../img/glasses.gif";
  console.log("clicked");
});

let len = sunglasses.length;
let i = 0;
let mySunglasses = setInterval(() => {
  if (i === len) {
    i = 0;
  }
  mygif.src = sunglasses[i];

  i++;
}, 1000);

logo.addEventListener('click', () => {
  logo.src = "img/logoawesome.png";
})