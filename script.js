// let paga = +prompt('Sa eshte rroga juaj?')
// if(paga >=150 && paga<300){
//     let shma = paga* 0.5 +paga
//     alert('paga juaj pas rritjes eshte:' +shma)
// }
// else if(paga >=300 && paga<500){
//     let shma2 = paga*0.2 + paga
//     alert('paga juaj pas rritjes eshte:' +shma2)
// }
// else if(paga >=500 && paga<800){
//     let shma3 = paga*0.1 + paga
//     alert('paga juaj pas rritjes eshte:' +shma3)
// }
// else if(paga >=800 && paga<1000){
//     let shma4 = paga*0.05 + paga
//     alert('paga juaj pas rritjes eshte:' +shma4)
// }
// else if(paga >=1000){
//     alert('ski nevoj per rritje')
// }


// nr cift dhe tek

// let numri = +prompt('numri juaj: ')
// if(numri% 2 ==0){
//     alert('numri juaj eshte cift')
// }
// else if(numri%2 !==0){
//     alert('numri juaj eshte tek')
// }

// gjej vlerat e variables nese i takon NaN

// let val = 10
// let val2 = '10'
// if(typeof(val) == 'number'){
//     alert('eshte numer')
// }
// else{
//     alert('nuk eshte numer')
// } //    rez===eshte numer
// if(typeof(val2) == 'number'){
//     alert('eshte numer')
// }
// else{
//     alert('nuk eshte numer')
// } //   rez==nuk eshte numer

let value1= 'jeta'
switch(typeof(value1)){
    case "string":
        alert('tipi eshte string')
        break;
    case "number":
        alert('tipi eshte number')
        break;
    case "boolean":
        alert('tipi eshte boolean')
        break;
    default:
        alert('nuk e dime se cfare vlere ka')
}