const str1 = 'Hello';
const str2 = 'world';
console.log (str1.concat (',',' ', str2, '!'));

const str3 = 'I learn front-end!'
console.log(str3.replaceAll(" ", '_'));
console.log(str3.length);

const min = 17;
if (min >1 && min <=14) {
    console.log('I')
  } else if (min >15 && min <=29) {
    console.log('II')
  } else if (min >30 && min <=44) {
    console.log('III') 
    } else if (min2 >45 && min2 <=60) {
    console.log('IV');
    } else {
    console.log('enter valid time format');
}

const min2 = 50;
if (min2 >1 && min2 <=14) {
    console.log('I')
  } else if (min2 >15 && min2 <=29) {
    console.log('II')
    } else if (min2 >30 && min2 <=44) {
    console.log('III') 
    } else if (min2 >45 && min2 <=60) {
        console.log('IV');
    } else {
        console.log('enter valid time format');
    }

    const weekDay = prompt("Enter your name","English");
    if (weekDay == 'English') {
    console.log(`Monday, Tuesday, Wednsday, Thursday, Friday, Saturday, Sunday`);
    } else if (weekDay == 'Spanish') {
    console.log(`Lunes, Martes, Miercoles, Jueves, Viernes, Sabado, Domingo`); 
    } else if (weekDay == 'Polish') {
    console.log(`Ponedzialek, Wtorek, Sroda, Czwartek, Piatek, Sobota, Niedziela`); 
    } else {
    alert ('ooops... try another language')
    }
    
  