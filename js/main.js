// get the trans type
const transactionType = document.querySelector('#transaction-type')

// enable trans card by type
const paymentCard = document.querySelector('.payment-card')
const transferCard = document.querySelector('.transfer-card')
const depositCard = document.querySelector('.deposit-card')
const withdrawCard = document.querySelector('.withdraw-card')

transactionType.addEventListener('change', ()=>{
    // check for the trans type
    // display the card
    switch(transactionType.value){
        case '':
            paymentCard.style.display = 'none'
            transferCard.style.display = 'none'
            depositCard.style.display = 'none'
            withdrawCard.style.display = 'none'
        break

        case 'payment':
            // paymentCard.previousElementSibling.style.display = 'none' // turns off prev card
            paymentCard.style.display = 'block'
            paymentCard.nextElementSibling.style.display = 'none' // makes the cards change when another type is selected
            depositCard.style.display = 'none'
            withdrawCard.style.display = 'none'
        break

        case 'transfer':
            transferCard.previousElementSibling.style.display = 'none' // turns off prev card
            transferCard.style.display = 'block'
            transferCard.nextElementSibling.style.display = 'none' // makes the cards change when another type is selected
            withdrawCard.style.display = 'none'
        break

        case 'deposit':
            paymentCard.style.display = 'none'
            depositCard.previousElementSibling.style.display = 'none' // turns off prev card
            depositCard.style.display = 'block'
            depositCard.nextElementSibling.style.display = 'none' // makes the cards change when another type is selected
        break

        case 'withdraw':
            withdrawCard.previousElementSibling.style.display = 'none' // turns off prev card
            withdrawCard.style.display = 'block'
            transferCard.style.display = 'none'
            paymentCard.style.display = 'none'
        break
    }
    
})