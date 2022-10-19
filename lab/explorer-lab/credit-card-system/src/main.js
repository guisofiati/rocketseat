import "./css/index.css"

const creditCardBackgroundColor1 = document.querySelector(
  ".cc-bg svg > g g:nth-child(1) path"
)
const creditCardBackgroundColor2 = document.querySelector(
  ".cc-bg svg > g g:nth-child(2) path"
)

// console.log(creditCardBackgroundColor1)
// console.log(creditCardBackgroundColor2)

const creditCardLogo = document.querySelector(".cc-logo span:nth-child(2) img")

// console.log(creditCardLogo)

function setCardType(type) {
  const creditCardColors = {
    visa: ["#436D99", "#2D57F2"],
    mastercard: ["#DF6F29", "#C69347"],
    default: ["black", "gray"],
  }

  creditCardBackgroundColor1.setAttribute("fill", creditCardColors[type][0])
  creditCardBackgroundColor2.setAttribute("fill", creditCardColors[type][1])
  creditCardLogo.setAttribute("src", `cc-${type}.svg`)
}

// setCardType("visa")

// deixar a função global, para poder ser executada no dev tools
globalThis.setCardType = setCardType
