function add(a, b){
    return (a + b)
}
function subtract(a, b){
    return (a-b)
}
function multiply(a, b){
    return (a*b)
}
function divide(a, b){
    return (a/b)
}
let number=5
function increment(n){
    return(n+=1)
}
console.log(increment(5))
function decrement (n){
    return(n -=1)
}
function makeInt(n){
  let x= parseInt(n,10)
  return x
}
console.log(makeInt("5"))
function preserveDecimal(n){
return(parseFloat(n))
}
