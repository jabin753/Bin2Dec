function bin2Dec(bin) {
    return bin == '' ? '' : parseInt(bin,2)
}

const binaryNumber = document.getElementById('binaryNumber')
const decimalResult = document.getElementById('decimalResult')
const convertBtn = document.getElementById('convertBtn')

convertBtn.addEventListener('click', function(){
    decimalResult.innerText = bin2Dec(binaryNumber.value)
})