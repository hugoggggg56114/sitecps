const btn = document.querySelector("#btn");
const score = document.querySelector(".score")
const btn1 = document.querySelector("#btn1")
const btn5 = document.querySelector("#btn5")
const btn10 = document.querySelector("#btn10")
const btnbleu = document.querySelector("btnbleu")
const theme = document.querySelectorAll('.theme')

var timeoutID;
var clicks = 0
var temps = 1000



btn1.addEventListener("click", () => {
    temps = 1000
})
btn5.addEventListener("click", () => {
    temps = 5000
})
btn10.addEventListener("click", () => {
    temps = 10000
})

btn.addEventListener("click", () =>{
    timeoutID = window.setTimeout(arivée, temps);
    clicks += 1;
    score.innerHTML = clicks;
    
})

function arivée() {
    btn.classList.add("hid");
    if (temps==1000){
        score.innerHTML = clicks
    }
    else if (temps==5000){
        score.innerHTML = clicks/5
    }
    else {score.innerHTML = clicks/10}
    
}




theme.forEach((item) =>
  item.addEventListener("click", (e) => {
    console.log('yes');
    document.body.classList.remove('darkTheme', 'redTheme', 'whiteTheme', 'greenTheme', 'blueTheme')
    switch (e.target.id) {
      case "dark":
        document.body.classList.add("darkTheme");
        break;
      case "red":
        document.body.classList.add("redTheme");
        break;
      case "green":
        document.body.classList.add("greenTheme");
        break;
      case "blue":
        document.body.classList.add("blueTheme");
        break;
      case "white":
        document.body.classList.add("whiteTheme");
        break;
      default:
        null;
    }
  })
);
