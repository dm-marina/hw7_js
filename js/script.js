// Task 1
// const numOrStr=prompt("Input number or string")
// if(numOrStr === null || numOrStr.trim() ===' ' ||  isNaN(+numOrStr) ){
//     alert("You dont write any data")
// } else{
//     alert(numOrStr)
// }

// Task2
const numOrStr = prompt('input number or string');
console.log(numOrStr)

switch(numOrStr){
    case null:
        console.log('вы отменили')
        break
    case  "":
         console.log('Empty String');
         break
    case isNaN(+numOrStr):
        console.log(' number is Ba_NaN')
        break
    default:
        console.log('OK!')
        break  
}
    
