function bin2Dec(bin) {
    let result = 0
    for (let i = bin.length - 1, n=0; i >= 0; i--, n++) {
        //bin.charAt(i) first number from right to left
        console.log("+", bin.charAt(i), "*2^",n)
        result += (Number.parseInt(bin.charAt(i) * Math.pow(2,n)))
    }
    return result
}

const binaryNumber = document.getElementById('binaryNumber')
const decimalResult = document.getElementById('decimalResult')
const convertBtn = document.getElementById('convertBtn')

convertBtn.addEventListener('click', function(){
    decimalResult.innerText = bin2Dec(binaryNumber.value)
})