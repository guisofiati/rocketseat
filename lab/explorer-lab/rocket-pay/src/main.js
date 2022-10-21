import IMask from "imask"
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

const creditCardSecurityCodeElement = document.getElementById("security-code")
const creditCardSecurityCodePattern = {
  mask: "0000",
}

const creditCardSecurityCodeMask = IMask(
  creditCardSecurityCodeElement,
  creditCardSecurityCodePattern
)

const fullYear = new Date().getFullYear()
const yearSliced = String(fullYear).slice(2)
const creditCardExpirationYearRule = String(Number(yearSliced) + 10)

const creditCardExpirationDateElement =
  document.getElementById("expiration-date")
const creditCardExpirationDatePattern = {
  mask: "MM{/}YY",
  blocks: {
    MM: {
      mask: IMask.MaskedRange,
      from: 1,
      to: 12,
    },
    YY: {
      mask: IMask.MaskedRange,
      from: yearSliced,
      to: creditCardExpirationYearRule,
    },
  },
}

const creditCardExpirationDateMask = IMask(
  creditCardExpirationDateElement,
  creditCardExpirationDatePattern
)

const creditCardNumberElement = document.getElementById("card-number")
const creditCardNumberPattern = {
  mask: [
    {
      mask: "0000 0000 0000 0000",
      regex: /^4\d{0,15}/,
      cardType: "visa",
    },
    {
      mask: "0000 0000 0000 0000",
      regex: /(^5[1-5]\d{0,2}|^22[2-9]\d|^2[3-7]\d{0,2})\d{0,12}/,
      cardType: "mastercard",
    },
    {
      mask: "0000 0000 0000 0000",
      cardType: "default",
    },
  ],
  dispatch: function (appended, dynamicMasked) {
    const number = (dynamicMasked.value + appended).replace(/\D/g, "")
    const foundMask = dynamicMasked.compiledMasks.find(function (item) {
      return number.match(item.regex)
    })

    // const foundMask = dynamicMasked.compiledMasks.find(({ regex }) =>
    //   number.match(regex)
    // )

    // console.log(foundMask)

    return foundMask
  },
}

const creditCardNumberMask = IMask(
  creditCardNumberElement,
  creditCardNumberPattern
)

const addButton = document.querySelector("#add-card")
addButton.addEventListener("click", () => {
  alert("Cartão adicionado!")
})

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault()
})

const creditCardHolder = document.querySelector("#card-holder")
creditCardHolder.addEventListener("input", () => {
  const creditCardHolderFixedText = document.querySelector(".cc-holder .value")

  creditCardHolderFixedText.innerText =
    creditCardHolder.value.length === 0
      ? "FULANO DA SILVA"
      : creditCardHolder.value
})

creditCardSecurityCodeMask.on("accept", () => {
  updateCreditCardSecurityCode(creditCardSecurityCodeMask.value)
})

function updateCreditCardSecurityCode(code) {
  const ccSecurity = document.querySelector(".cc-security .value")
  ccSecurity.innerText = code.length === 0 ? "123" : code
}

creditCardNumberMask.on("accept", () => {
  const cardType = creditCardNumberMask.masked.currentMask.cardType
  setCardType(cardType)
  updateCreditCardNumber(creditCardNumberMask.value)
})

function updateCreditCardNumber(number) {
  const ccNumber = document.querySelector(".cc-number")
  ccNumber.innerText = number.length === 0 ? "1234 5678 9012 3456" : number
}

creditCardExpirationDateMask.on("accept", () => {
  updateCreditCardExpirationDate(creditCardExpirationDateMask.value)
})

function updateCreditCardExpirationDate(date) {
  const ccExpirationDate = document.querySelector(".cc-extra .value")
  ccExpirationDate.innerText = date.length === 0 ? "02/32" : date
}
