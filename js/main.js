// get the trans type
const transactionType = document.querySelector('#transaction-type')

// enable trans card by type
const paymentCard = document.querySelector('.payment-card')
const transferCard = document.querySelector('.transfer-card')
const depositCard = document.querySelector('.deposit-card')
const withdrawlCard = document.querySelector('.withdrawl-card')

transactionType.addEventListener('change', ()=>{
    // check for the trans type
    switch(transactionType.value){
        case 'payment':
            paymentCard.style.display = 'block'
            paymentCard.nextElementSibling.style.display = 'none' // makes the cards change when another type is selected
        break
        case 'transfer':
            transferCard.previousElementSibling.style.display = 'none' // turns off prev card
            transferCard.style.display = 'block'
            transferCard.nextElementSibling.style.display = 'none' // makes the cards change when another type is selected
        break
        case 'deposit':
            depositCard.previousElementSibling.style.display = 'none' // turns off prev card
            depositCard.style.display = 'block'
            depositCard.nextElementSibling.style.display = 'none' // makes the cards change when another type is selected
        break
        case 'withdrawl':
            withdrawlCard.previousElementSibling.style.display = 'none' // turns off prev card
            withdrawlCard.style.display = 'block'
            withdrawlCard.nextElementSibling.style.display = 'none' // makes the cards change when another type is selected
        break
    }
    // display the card
})