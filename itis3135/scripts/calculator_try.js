let calcString = null;
let calcArr = [];
let index = 0
let inNum = false

document.getElementById("7").addEventListener("click",() => calculating('7'))
document.getElementById("8").addEventListener("click",() => calculating('8'))
document.getElementById("9").addEventListener("click",() => calculating('9'))
document.getElementById("+").addEventListener("click",() => calculating('+'))
document.getElementById("-").addEventListener("click",() => calculating('-'))
document.getElementById("4").addEventListener("click",() => calculating('4'))
document.getElementById("5").addEventListener("click",() => calculating('5'))
document.getElementById("6").addEventListener("click",() => calculating('6'))
document.getElementById("*").addEventListener("click",() => calculating('*'))
document.getElementById("/").addEventListener("click",() => calculating('/'))
document.getElementById("1").addEventListener("click",() => calculating('1'))
document.getElementById("2").addEventListener("click",() => calculating('2'))
document.getElementById("3").addEventListener("click",() => calculating('3'))
document.getElementById("equal").addEventListener("click",doMath)
document.getElementById("clear").addEventListener("click",removeAll)
document.getElementById("0").addEventListener("click",() => calculating('0'))
document.getElementById(".").addEventListener("click",() => calculating('.'))


// document.getElementById("").addEventListener("click",)
// document.getElementById("").addEventListener("click",)

function calculating(input)
{
    // alert(input)
    
    if(ifoperator(input) == true)
    {
        inNum = false
    }
    if(inNum === true)
    {
        if(calcArr[index-1].includes('.') && input == '.'){
        }
        else
        {
            calcArr[index-1] += input
            addtoString(input)
        }    
    }
    else
    {
        if(input === '.'){
            calcArr[index-1] +='.'
            inNum = true
            addtoString(input)

        }
        else if((ifoperator(calcArr[index-1]) == true) && (ifoperator(input) == true)){

        }
        else{
            calcArr.push(input)
            inNum = true;
            if(ifoperator(input) == true)
            {
                inNum = false
            }
            
            index++
            addtoString(input)
            
        }
    }
    
   
    document.getElementById('test').innerHTML = calcString
}
function ifoperator(inp)
{
    if(inp === '+' || inp === '-' || inp === '*' || inp === '/'){
        return true
    }

}
function addtoString(item){
    if(calcString !== null)
    {
        calcString += "" + String(item)
    }
    else
    {
        calcString = String(item)
    }
}
function doMath()
{
    // alert(calcArr)

    calcString = parseFloat(eval(calcArr.join(' ')).toFixed(5))
    calcString = String(calcString)
    calcArr = []
    calcArr.push(calcString)
    document.getElementById('test').innerHTML = calcString;
    inNum = true
    index = 1;
    


}
function removeAll(){
    calcString = null;
    calcArr = [];
    index = 0
    inNum = false
    document.getElementById('test').innerHTML = calcString;
    
}