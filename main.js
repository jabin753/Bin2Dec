function bin2Dec(bin) {
    return bin == '' ? '' : parseInt(bin,2)
}

const binaryNumber = document.getElementById('binaryNumber')
const decimalResult = document.getElementById('decimalResult')
const convertBtn = document.getElementById('convertBtn')

// Validation constraint
binaryNumber.addEventListener('keydown', function(e) {
    if(e.key == 1 || e.key == 0 || e.key == 'Backspace');
    else e.preventDefault()
})

convertBtn.addEventListener('click', function(){
    decimalResult.innerText = bin2Dec(binaryNumber.value)
})